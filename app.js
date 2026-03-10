// Simple Java Learning Path App
document.addEventListener('DOMContentLoaded', () => {
    const MODULES = window.MODULES;
    if (!MODULES) {
        console.error('MODULES not defined');
        document.getElementById('modules').innerHTML = '<p class="text-red-500">Error: MODULES tidak terdefinisi. Pastikan modules.js sudah termuat.</p>';
        return;
    }

    // Helper: parse duration "20 min" -> 20
    const parseDuration = (dur) => parseInt(dur, 10) || 0;

    // Compute stats
    const totalLessons = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
    const totalQuizzes = MODULES.filter(m => m.quiz).length;
    const totalTime = MODULES.reduce((sum, m) => sum + m.lessons.reduce((s, l) => s + parseDuration(l.duration), 0), 0);

    // Update stats (with null checks)
    const elLessons = document.getElementById('total-lessons');
    const elQuizzes = document.getElementById('total-quizzes');
    const elTime = document.getElementById('total-time');
    if (elLessons) elLessons.textContent = totalLessons;
    if (elQuizzes) elQuizzes.textContent = totalQuizzes;
    if (elTime) elTime.textContent = totalTime + ' menit';

    // Render module cards
    const container = document.getElementById('modules');
    if (!container) {
        console.error('Element #modules tidak ditemukan');
        return;
    }
    container.innerHTML = MODULES.map(m => `
        <div class="module-card" data-id="${m.id}">
            <h2>${m.id}. ${m.title}</h2>
            <p>${m.description}</p>
            <div class="meta">
                <span>${m.lessons.length} pelajaran</span>
                <span>${m.quiz ? 'Kuis' : 'Tanpa kuis'}</span>
            </div>
            <button onclick="window.location.href='lessons/${m.lessons[0].slug}.html'">Mulai Belajar</button>
        </div>
    `).join('');
});
