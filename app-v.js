// Global state
let state = {
    progress: {},
    theme: 'dark'
};

document.addEventListener('DOMContentLoaded', async () => {
    // Load persisted state
    state.progress = JSON.parse(localStorage.getItem('java-progress') || '{}');
    state.theme = localStorage.getItem('theme') || 'dark';

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

    // Sidebar toggle (mobile)
    document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
    document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

    // Start button
    document.getElementById('start-btn').addEventListener('click', () => {
        const first = window.MODULES[0].lessons[0];
        navigateToLesson(window.MODULES[0].id, first.slug);
    });

    // Back to home
    const backBtn = document.getElementById('back-to-home');
    if (backBtn) backBtn.addEventListener('click', showHome);

    // Render sidebar & stats
    renderSidebar();
    updateStats();
    updateProgressUI();

    // Route handling
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // initial route
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

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sb.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('sidebar-overlay').classList.add('hidden');
}

function renderSidebar() {
    const nav = document.getElementById('module-nav');
    if (!nav) return;
    nav.innerHTML = window.MODULES.map(m => `
        <div class="mb-5">
            <h3 class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-2">
                Modul ${m.id}: ${m.title}
            </h3>
            <ul class="space-y-1">
                ${m.lessons.map(l => {
                    const completed = state.progress[`${m.id}-${l.slug}`] ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' : 'text-gray-700 dark:text-gray-300';
                    return `
                        <li>
                            <a href="#module/${m.id}/lesson/${l.slug}" class="block px-3 py-1.5 rounded-lg text-sm ${completed} hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                ${l.title}
                            </a>
                        </li>
                    `;
                }).join('')}
            </ul>
        </div>
    `).join('');
}

function updateStats() {
    if (!window.MODULES.length) return;
    const totalLessons = window.MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
    const totalQuizzes = window.MODULES.filter(m => m.quiz).length;
    const totalTime = window.MODULES.reduce((sum, m) => sum + m.lessons.reduce((s, l) => s + parseInt(l.duration, 10) || 0, 0), 0);

    // Hero cards
    const elLesson = document.getElementById('home-lesson-count');
    if (elLesson) elLesson.textContent = totalLessons;
    const elQuiz = document.getElementById('home-quiz-count');
    if (elQuiz) elQuiz.textContent = totalQuizzes;
    const elTime = document.getElementById('home-time-count');
    if (elTime) elTime.textContent = totalTime;

    // Sidebar totals
    const statLessons = document.getElementById('stat-lessons');
    if (statLessons) statLessons.textContent = totalLessons;
    const statQuizzes = document.getElementById('stat-quizzes');
    if (statQuizzes) statQuizzes.textContent = totalQuizzes;
    const statTime = document.getElementById('stat-time');
    if (statTime) statTime.textContent = totalTime + ' menit';
}

function updateProgressUI() {
    const completed = Object.keys(state.progress).length;
    const total = window.MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    const pctEl = document.getElementById('progress-percent');
    if (pctEl) pctEl.textContent = `${percent}%`;

    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = `${percent}%`;

    // Also update stat-lessons to show completed/total
    const statLessons = document.getElementById('stat-lessons');
    if (statLessons) statLessons.textContent = `${completed}/${total}`;
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
    const hero = document.getElementById('hero-view');
    const lesson = document.getElementById('lesson-view');
    if (hero) hero.classList.remove('hidden');
    if (lesson) lesson.classList.add('hidden');
    // Re-render to update progress styling
    renderSidebar();
    updateStats();
}

async function navigateToLesson(moduleId, slug) {
    const module = window.MODULES.find(m => m.id === moduleId);
    if (!module) return showHome();

    const lesson = module.lessons.find(l => l.slug === slug);
    if (!lesson) return showHome();

    // Show lesson view
    const hero = document.getElementById('hero-view');
    const lessonView = document.getElementById('lesson-view');
    if (hero) hero.classList.add('hidden');
    if (lessonView) lessonView.classList.remove('hidden');

    // Load lesson HTML fragment
    try {
        const resp = await fetch(`lessons/${slug}.html`);
        if (!resp.ok) throw new Error('Pelajaran tidak ditemukan');
        const html = await resp.text();
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
    return `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;
}

function showStatus(msg, type = 'info') {
    const el = document.getElementById('status-message');
    if (!el) return;
    const icon = type === 'error' ? 'exclamation-triangle' : 'info-circle';
    el.innerHTML = `<i class="fas fa-${icon} mr-2"></i> ${msg}`;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 5000);
}
