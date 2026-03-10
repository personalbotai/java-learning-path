// Java Learning Path SPA
document.addEventListener('DOMContentLoaded', async () => {
    // State
    const state = {
        progress: JSON.parse(localStorage.getItem('java-progress') || '{}'),
        theme: localStorage.getItem('theme') || 'dark'
    };

    // Apply theme early
    document.documentElement.setAttribute('data-theme', state.theme);
    if (state.theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    // Wait for modules global
    if (!window.MODULES) {
        showStatus('Modul belum dimuat. Cek koneksi.', 'error');
        return;
    }

    // Initialize theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('reset-progress').addEventListener('click', resetProgress);
    document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
    document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);
    document.getElementById('start-btn').addEventListener('click', () => {
        const first = window.MODULES[0].lessons[0];
        navigateToLesson(0, first.slug);
    });
    document.getElementById('back-to-home').addEventListener('click', showHome);

    // Render sidebar
    renderSidebar();
    updateStats();
    updateProgressUI();

    // Route handling
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // initial
});

function toggleTheme() {
    const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    // Update Monaco theme if editor exists
    if (window.monacoEditor) {
        monacoEditor.updateOptions({ theme: newTheme === 'dark' ? 'vs-dark' : 'vs' });
    }
}

function resetProgress() {
    if (confirm('Reset progres belajar?')) {
        localStorage.removeItem('java-progress');
        state.progress = {};
        updateProgressUI();
        showHome();
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
    document.getElementById('sidebar-overlay').classList.toggle('hidden');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('sidebar-overlay').classList.add('hidden');
}

function renderSidebar() {
    const nav = document.getElementById('module-nav');
    nav.innerHTML = window.MODULES.map(m => `
        <div class="mb-4">
            <h3 class="text-gray-400 text-xs uppercase font-bold mb-2">Modul ${m.id}: ${m.title}</h3>
            <ul class="space-y-1">
                ${m.lessons.map(l => `
                    <li>
                        <a href="#module/${m.id}/lesson/${l.slug}" class="block px-2 py-1 rounded hover:bg-gray-700 ${isLessonCompleted(m.id, l.slug) ? 'bg-green-900 text-green-200' : 'text-gray-300'}">
                            ${l.title}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function isLessonCompleted(moduleId, slug) {
    return state.progress[`${moduleId}-${slug}`] === true;
}

function updateStats() {
    const totalLessons = window.MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
    const totalQuizzes = window.MODULES.filter(m => m.quiz).length;
    const totalTime = window.MODULES.reduce((sum, m) => sum + m.lessons.reduce((s, l) => s + parseInt(l.duration, 10) || 0, 0), 0);

    document.getElementById('total-lessons').textContent = totalLessons;
    document.getElementById('total-quizzes').textContent = totalQuizzes;
    document.getElementById('total-time').textContent = totalTime + ' menit';

    document.getElementById('home-lesson-count').textContent = totalLessons;
    document.getElementById('home-quiz-count').textContent = totalQuizzes;
    document.getElementById('home-time-count').textContent = totalTime;
    document.getElementById('stat-lessons').textContent = `0/${totalLessons}`;
    document.getElementById('stat-quizzes').textContent = `0/${totalQuizzes}`;
    document.getElementById('stat-time').textContent = totalTime + ' menit';
}

function updateProgressUI() {
    const completed = Object.keys(state.progress).length;
    const total = window.MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
    const percent = Math.round((completed / total) * 100);
    document.getElementById('progress-percent').textContent = `${percent}%`;
    document.getElementById('stat-lessons').textContent = `${completed}/${total}`;
}

function handleRoute() {
    const hash = window.location.hash;
    if (!hash || hash === '#home') {
        showHome();
        return;
    }
    const match = hash.match(/^#module\/(\d+)\/lesson\/(.+)$/);
    if (match) {
        const moduleId = parseInt(match[1], 10);
        const slug = match[2];
        navigateToLesson(moduleId, slug);
    } else {
        showHome();
    }
}

function showHome() {
    document.getElementById('hero-view').classList.remove('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    renderSidebar();
    updateStats();
}

async function navigateToLesson(moduleId, slug) {
    const module = window.MODULES.find(m => m.id === moduleId);
    if (!module) return showHome();

    const lesson = module.lessons.find(l => l.slug === slug);
    if (!lesson) return showHome();

    // Show lesson view
    document.getElementById('hero-view').classList.add('hidden');
    const lessonView = document.getElementById('lesson-view');
    lessonView.classList.remove('hidden');

    // Load lesson HTML fragment
    try {
        const resp = await fetch(`lessons/${slug}.html`);
        if (!resp.ok) throw new Error('Lesson not found');
        const html = await resp.text();
        // Set content (the runner will be created by runJavaLesson)
        document.getElementById('lesson-content').innerHTML = html;

        // Mark as completed
        state.progress[`${moduleId}-${slug}`] = true;
        localStorage.setItem('java-progress', JSON.stringify(state.progress));
        updateProgressUI();
        renderSidebar();

        // Initialize Java runtime (create editor + button)
        if (typeof runJavaLesson === 'function') {
            runJavaLesson(slug, getDefaultCode(slug));
        }
    } catch (e) {
        showStatus(`Error memuat pelajaran: ${e.message}`, 'error');
    }
}

function getDefaultCode(slug) {
    // Provide a sensible default based on topic
    return `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;
}

function showStatus(msg, type = 'info') {
    const el = document.getElementById('status-message');
    el.innerHTML = `<i class="fas fa-${type === 'error' ? 'exclamation-triangle' : 'info-circle'} mr-2"></i> ${msg}`;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 5000);
}
