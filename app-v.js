// Global state
let state = {
    progress: {},
    theme: 'dark'
};
let currentLesson = null; // { moduleId, slug }

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

    // Tab switching
    const tabLesson = document.getElementById('tab-lesson');
    const tabQuiz = document.getElementById('tab-quiz');
    if (tabLesson) tabLesson.addEventListener('click', () => switchTab('lesson'));
    if (tabQuiz) tabQuiz.addEventListener('click', () => {
        if (currentLesson) loadQuiz(currentLesson.moduleId, currentLesson.slug);
        switchTab('quiz');
    });

    // Quiz actions
    const submitBtn = document.getElementById('quiz-submit');
    const resetBtn = document.getElementById('quiz-reset');
    if (submitBtn) submitBtn.addEventListener('click', handleQuizSubmit);
    if (resetBtn) resetBtn.addEventListener('click', () => {
        if (currentLesson) loadQuiz(currentLesson.moduleId, currentLesson.slug);
    });

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



function getDefaultCode(slug) {
    return `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;
}

// Quiz state
let currentQuiz = null; // { moduleId, slug, questions: [] }

async function loadQuiz(moduleId, slug) {
    try {
        const resp = await fetch(`quizzes/${slug}.json`);
        if (!resp.ok) throw new Error('Quiz tidak ditemukan');
        const data = await resp.json();
        currentQuiz = { moduleId, slug, questions: data.quiz || [] };
        renderQuiz(currentQuiz.questions);
        // Switch to quiz tab
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
    // Hide result, show questions
    const resultEl = document.getElementById('quiz-result');
    if (resultEl) resultEl.classList.add('hidden');
}

function handleQuizSubmit() {
    if (!currentQuiz) return;
    const questions = currentQuiz.questions;
    let correct = 0;
    questions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            correct++;
        }
    });
    const total = questions.length;
    const percent = Math.round((correct / total) * 100);
    const passingScore = questions[0]?.explanation ? 70 : 0; // fallback if missing
    const status = percent >= passingScore ? 'lulus' : 'tidak lulus';

    // Save progress: mark quiz completed
    const key = `${currentQuiz.moduleId}-quiz-${currentQuiz.slug}`;
    state.progress[key] = { correct, total, percent, status, timestamp: Date.now() };
    localStorage.setItem('java-progress', JSON.stringify(state.progress));
    updateProgressUI();

    // Show result
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
        if (lessonTab) lessonTab.classList.add('border-red-600', 'text-red-600');
        if (lessonTab) lessonTab.classList.remove('border-transparent', 'text-gray-500');
        if (quizTab) quizTab.classList.remove('border-red-600', 'text-red-600');
        if (quizTab) quizTab.classList.add('border-transparent', 'text-gray-500');
        if (lessonContent) lessonContent.classList.remove('hidden');
        if (quizContent) quizContent.classList.add('hidden');
    } else {
        if (quizTab) quizTab.classList.add('border-red-600', 'text-red-600');
        if (quizTab) quizTab.classList.remove('border-transparent', 'text-gray-500');
        if (lessonTab) lessonTab.classList.remove('border-red-600', 'text-red-600');
        if (lessonTab) lessonTab.classList.add('border-transparent', 'text-gray-500');
        if (quizContent) quizContent.classList.remove('hidden');
        if (lessonContent) lessonContent.classList.add('hidden');
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
