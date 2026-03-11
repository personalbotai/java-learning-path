// Global state
let state = { progress: {}, theme: 'dark' };
let currentLesson = null; // { moduleId, slug }
let currentQuiz = null; // { moduleId, slug, questions: [] }

document.addEventListener('DOMContentLoaded', async () => {
    state.progress = JSON.parse(localStorage.getItem('java-progress') || '{}');
    state.theme = localStorage.getItem('theme') || 'dark';

    // Apply theme
    document.documentElement.setAttribute('data-theme', state.theme);
    if (state.theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    if (!window.MODULES) {
        showStatus('Modul belum dimuat. Cek koneksi.', 'error');
        return;
    }

    // Event listeners
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
    document.getElementById('sidebar-toggle')?.addEventListener('click', toggleSidebar);
    document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);
    document.getElementById('start-btn')?.addEventListener('click', () => {
        const first = window.MODULES[0].lessons[0];
        navigateToLesson(window.MODULES[0].id, first.slug);
    });
    document.getElementById('back-to-home')?.addEventListener('click', showHome);

    // Tabs
    document.getElementById('tab-lesson')?.addEventListener('click', () => switchTab('lesson'));
    document.getElementById('tab-quiz')?.addEventListener('click', () => {
        if (currentLesson) loadQuiz(currentLesson.moduleId, currentLesson.slug);
        switchTab('quiz');
    });

    // Quiz actions
    document.getElementById('quiz-submit')?.addEventListener('click', handleQuizSubmit);
    document.getElementById('quiz-reset')?.addEventListener('click', () => {
        if (currentLesson) loadQuiz(currentLesson.moduleId, currentLesson.slug);
    });

    renderSidebar();
    updateStats();
    updateProgressUI();

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
});

function toggleTheme() {
    const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    if (window.monacoEditor) {
        monacoEditor.updateOptions({ theme: newTheme === 'dark' ? 'vs-dark' : 'vs' });
    }
}

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sb?.classList.toggle('-translate-x-full');
    overlay?.classList.toggle('hidden');
}
function closeSidebar() {
    document.getElementById('sidebar')?.classList.add('-translate-x-full');
    document.getElementById('sidebar-overlay')?.classList.add('hidden');
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

    document.getElementById('home-lesson-count')!.textContent = totalLessons;
    document.getElementById('home-quiz-count')!.textContent = totalQuizzes;
    document.getElementById('home-time-count')!.textContent = totalTime;

    const statLessons = document.getElementById('stat-lessons');
    const statQuizzes = document.getElementById('stat-quizzes');
    const statTime = document.getElementById('stat-time');
    if (statLessons) statLessons.textContent = totalLessons;
    if (statQuizzes) statQuizzes.textContent = totalQuizzes;
    if (statTime) statTime.textContent = totalTime + ' menit';
}

function updateProgressUI() {
    const completed = Object.keys(state.progress).length;
    const total = window.MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    const pctEl = document.getElementById('progress-percent');
    const bar = document.getElementById('progress-bar');
    if (pctEl) pctEl.textContent = `${percent}%`;
    if (bar) bar.style.width = `${percent}%`;

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
    renderSidebar();
    updateStats();
}

async function navigateToLesson(moduleId, slug) {
    const module = window.MODULES.find(m => m.id === moduleId);
    if (!module) return showHome();

    const lesson = module.lessons.find(l => l.slug === slug);
    if (!lesson) return showHome();

    currentLesson = { moduleId, slug };

    const hero = document.getElementById('hero-view');
    const lessonView = document.getElementById('lesson-view');
    if (hero) hero.classList.add('hidden');
    if (lessonView) lessonView.classList.remove('hidden');
    switchTab('lesson');

    try {
        const resp = await fetch(`lessons/${slug}.html`);
        if (!resp.ok) throw new Error('Pelajaran tidak ditemukan');
        const html = await resp.text();
        document.getElementById('lesson-content').innerHTML = html;

        state.progress[`${moduleId}-${slug}`] = true;
        localStorage.setItem('java-progress', JSON.stringify(state.progress));
        updateProgressUI();
        renderSidebar();

        if (typeof runJavaLesson === 'function') {
            runJavaLesson(slug, getDefaultCode(slug));
        }
    } catch (e) {
        showStatus(`Error memuat pelajaran: ${e.message}`, 'error');
    }
}

function getDefaultCode(slug) {
    return 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}';
}

// --- Quiz ---

async function loadQuiz(moduleId, slug) {
    try {
        const resp = await fetch(`quizzes/${slug}.json`);
        if (!resp.ok) throw new Error('Quiz tidak ditemukan');
        const data = await resp.json();
        currentQuiz = { moduleId, slug, questions: data.quiz || [] };
        renderQuiz(currentQuiz.questions);
        switchTab('quiz');
    } catch (e) {
        showStatus(`Error memuat kuis: ${e.message}`, 'error');
    }
}

function renderQuiz(questions) {
    const container = document.getElementById('quiz-questions');
    if (!container) return;
    container.innerHTML = questions.map((q, idx) => `
        <div class="quiz-question" data-index="${idx}">
            <h4 class="font-semibold mb-2">${idx + 1}. ${q.question}</h4>
            <div class="space-y-2">
                ${q.options.map((opt, i) => `
                    <label class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                        <input type="radio" name="q-${idx}" value="${i}" class="text-red-600 focus:ring-red-500">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
    const resultEl = document.getElementById('quiz-result');
    if (resultEl) resultEl.classList.add('hidden');
}

function handleQuizSubmit() {
    if (!currentQuiz) return;
    const questions = currentQuiz.questions;
    let correct = 0;
    questions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) correct++;
    });
    const total = questions.length;
    const percent = Math.round((correct / total) * 100);
    const passingScore = questions[0]?.explanation ? 70 : 0;
    const status = percent >= passingScore ? 'lulus' : 'tidak lulus';

    const key = `${currentQuiz.moduleId}-quiz-${currentQuiz.slug}`;
    state.progress[key] = { correct, total, percent, status, timestamp: Date.now() };
    localStorage.setItem('java-progress', JSON.stringify(state.progress));
    updateProgressUI();

    const resultEl = document.getElementById('quiz-result');
    if (resultEl) {
        const colorClass = status === 'lulus' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300';
        resultEl.className = `mt-6 p-4 rounded-lg ${colorClass}`;
        resultEl.innerHTML = `
            <h4 class="font-semibold mb-1">Hasil: ${status === 'lulus' ? 'Lulus' : 'Tidak Lulus'}</h4>
            <p class="text-sm">Nilai Anda: <strong>${correct}/${total}</strong> (${percent}%)</p>
            <p class="text-sm mt-1">Kriteria kelulusan: ${passingScore}%</p>
        `;
        resultEl.classList.remove('hidden');
    }
}

function switchTab(tab) {
    const lessonTab = document.getElementById('tab-lesson');
    const quizTab = document.getElementById('tab-quiz');
    const lessonContent = document.getElementById('lesson-content');
    const quizContent = document.getElementById('quiz-content');

    if (tab === 'lesson') {
        lessonTab?.classList.add('border-red-600', 'text-red-600');
        lessonTab?.classList.remove('border-transparent', 'text-gray-500');
        quizTab?.classList.remove('border-red-600', 'text-red-600');
        quizTab?.classList.add('border-transparent', 'text-gray-500');
        lessonContent?.classList.remove('hidden');
        quizContent?.classList.add('hidden');
    } else {
        quizTab?.classList.add('border-red-600', 'text-red-600');
        quizTab?.classList.remove('border-transparent', 'text-gray-500');
        lessonTab?.classList.remove('border-red-600', 'text-red-600');
        lessonTab?.classList.add('border-transparent', 'text-gray-500');
        quizContent?.classList.remove('hidden');
        lessonContent?.classList.add('hidden');
    }
}

function showStatus(msg, type = 'info') {
    const el = document.getElementById('status-message');
    if (!el) return;
    const icon = type === 'error' ? 'exclamation-triangle' : 'info-circle';
    el.innerHTML = `<i class="fas fa-${icon} mr-2"></i> ${msg}`;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 5000);
}
