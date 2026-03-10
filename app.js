// Main Application Controller
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const quizManager = window.quizManager;
    const progressManager = window.progressManager;

    // DOM Elemenjava
    const contentArea = document.getElementById('content-area');
    const moduleNav = document.getElementById('module-nav');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const menuToggle = document.getElementById('menu-toggle');
    const resetProgressBtn = document.getElementById('reset-progress');
    const quizModal = document.getElementById('quiz-modal');
    const quizContent = document.getElementById('quiz-content');
    const quizPrevBtn = document.getElementById('quiz-prev');
    const quizNextBtn = document.getElementById('quiz-next');
    const quizSubmitBtn = document.getElementById('quiz-submit');
    const quizCurrentSpan = document.getElementById('quiz-current');
    const quizTotalSpan = document.getElementById('quiz-total');
    const quizResultDiv = document.getElementById('quiz-result');
    const achievementPopup = document.getElementById('achievement-popup');

    // State
    let currentModuleId = null;
    let currentLessonId = null;

    // Initialize
    initApp();

    function initApp() {
        renderSidebar();
        loadHomePage();
        progressManager.renderProgressBar();

        // Event Listeners
        menuToggle.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);
        resetProgressBtn.addEventListener('click', () => progressManager.resetProgress());
        quizPrevBtn.addEventListener('click', showPreviousQuestion);
        quizNextBtn.addEventListener('click', showNextQuestion);
        quizSubmitBtn.addEventListener('click', submitQuiz);
        document.getElementById('close-quiz').addEventListener('click', closeQuizModal);

        // Check for stored achievemenjava and show popup if any new
        checkPendingAchievemenjava();
    }

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        sidebarOverlay.classList.toggle('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    }

    function renderSidebar() {
        moduleNav.innerHTML = MODULES.map(module => {
            const progress = progressManager.getModuleProgress(module.id);
            return `
                <div class="module-item mb-2" data-module-id="${module.id}">
                    <button class="module-btn w-full text-left p-3 rounded hover:bg-gray-700 transition-colors flex items-center justify-between group" data-module="${module.id}">
                        <div class="flex items-center">
                            <span class="text-sm font-medium text-gray-300 group-hover:text-white">${module.id}. ${module.title}</span>
                        </div>
                        <span class="text-xs text-gray-500">${progress}%</span>
                    </button>
                    <div class="progress-bar h-1 bg-blue-500 rounded mt-1 transition-all" style="width: ${progress}%"></div>
                    <div class="lessons-list ml-4 mt-2 space-y-1 hidden">
                        ${module.lessons.map(lesson => `
                            <a href="#" class="lesson-link block text-sm text-gray-400 hover:text-white py-1 px-2 rounded hover:bg-gray-700" 
                               data-module="${module.id}" data-lesson="${lesson.id}" data-slug="${lesson.slug}">
                                ${lesson.id}. ${lesson.title}
                                ${lesson.project ? '<i class="fas fa-project-diagram text-xs ml-1"></i>' : ''}
                                ${lesson.final ? '<i class="fas fa-flag-checkered text-xs ml-1"></i>' : ''}
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // Event delegation for module buttons
        document.querySelectorAll('.module-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const moduleId = parseInt(btn.dataset.module);
                toggleModuleLessons(moduleId);
            });
        });

        // Event delegation for lesson links
        moduleNav.addEventListener('click', (e) => {
            const link = e.target.closest('.lesson-link');
            if (link) {
                e.preventDefault();
                const moduleId = parseInt(link.dataset.module);
                const lessonId = parseInt(link.dataset.lesson);
                const slug = link.dataset.slug;
                loadLesson(moduleId, lessonId, slug);
                closeSidebar();
            }
        });
    }

    function toggleModuleLessons(moduleId) {
        const moduleItem = document.querySelector(`.module-item[data-module-id="${moduleId}"]`);
        const lessonsList = moduleItem.querySelector('.lessons-list');
        lessonsList.classList.toggle('hidden');
    }

    function loadHomePage() {
        contentArea.innerHTML = `
            <div class="home-content">
                <div class="text-center py-12">
                    <h1 class="text-4xl font-bold text-blue-400 mb-4">
                        <i class="fab fa-js-square mr-3"></i>JavaScript Learning Path
                    </h1>
                    <p class="text-xl text-gray-400 mb-8">Belajar JavaScript dari nol hingga menjadi full-stack developer</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <i class="fas fa-code text-3xl text-blue-500 mb-4"></i>
                            <h3 class="text-lg font-semibold mb-2">10 Modul</h3>
                            <p class="text-gray-400">Dari dasar hingga topik lanjutan</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <i class="fas fa-book-open text-3xl text-green-500 mb-4"></i>
                            <h3 class="text-lg font-semibold mb-2">50+ Pelajaran</h3>
                            <p class="text-gray-400">Konten interaktif dan praktik langsung</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <i class="fas fa-trophy text-3xl text-yellow-500 mb-4"></i>
                            <h3 class="text-lg font-semibold mb-2">10 Proyek</h3>
                            <p class="text-gray-400">Portofolio nyata untuk karir Anda</p>
                        </div>
                    </div>

                    <div class="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                        <h2 class="text-2xl font-bold mb-4 text-blue-300">Cara Penggunaan</h2>
                        <ol class="text-left text-gray-300 space-y-3">
                            <li>Pilih modul dari sidebar kiri</li>
                            <li>Pelajari materi dan ikuti contoh kode</li>
                            <li>Jalankan kode di editor untuk mempraktikkan</li>
                            <li>Selesaikan quiz untuk menguji pemahaman</li>
                            <li>Lakukan proyek di akhir setiap modul</li>
                            <li>Lacak progress Anda di bagian atas</li>
                        </ol>
                    </div>

                    <button onclick="document.querySelector('[data-module=\"1\"]').click()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                        <i class="fas fa-play mr-2"></i>Mulai Belajar
                    </button>
                </div>
            </div>
        `;
    }

    async function loadLesson(moduleId, lessonId, slug) {
        currentModuleId = moduleId;
        currentLessonId = lessonId;

        // Mark lesson as complete if first time
        if (!progressManager.isLessonComplete(moduleId, lessonId)) {
            progressManager.markLessonComplete(moduleId, lessonId);
        }

        // Update sidebar active state
        document.querySelectorAll('.lesson-link').forEach(link => {
            link.classList.remove('bg-gray-700', 'text-white');
        });
        const activeLink = document.querySelector(`.lesson-link[data-module="${moduleId}"][data-lesson="${lessonId}"]`);
        if (activeLink) {
            activeLink.classList.add('bg-gray-700', 'text-white');
        }

        // Load lesson content
        try {
            const response = await fetch(`lessons/${slug}.html`);
            if (!response.ok) {
                throw new Error('Lesson not found');
            }
            let content = await response.text();
            
            // Inject Monaco Editor placeholder
            content = content.replace(
                /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
                (match, lang, code) => {
                    const editorId = `editor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                    return `
                        <div class="monaco-container" data-editor-id="${editorId}" data-lang="${lang}">
                            <div class="monaco-placeholder bg-gray-900 p-4 text-gray-400 font-mono text-sm overflow-x-auto">
                                <button class="run-code-btn float-right bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs ml-2">
                                    <i class="fas fa-play mr-1"></i>Run
                                </button>
                                <pre><code>${code}</code></pre>
                            </div>
                        </div>
                    `;
                }
            );

            contentArea.innerHTML = `
                <div class="lesson-content bg-gray-800 p-6 lg:p-8 rounded-lg border border-gray-700">
                    ${content}
                </div>
                <div class="mt-6 flex justify-between">
                    <button id="prev-lesson" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                        <i class="fas fa-arrow-left mr-2"></i>Previous Lesson
                    </button>
                    <button id="next-lesson" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                        Next Lesson<i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                <div class="mt-4">
                    <button id="take-quiz" class="px-4 py-2 bg-green-600 hover:bg-green-700 rounded" data-module="${moduleId}">
                        <i class="fas fa-question-circle mr-2"></i>Take Quiz
                    </button>
                </div>
            `;

            // Initialize Monaco Editors
            initializeMonacoEditors();

            // Event listeners for navigation
            document.getElementById('prev-lesson')?.addEventListener('click', navigateToPreviousLesson);
            document.getElementById('next-lesson')?.addEventListener('click', navigateToNextLesson);
            document.getElementById('take-quiz')?.addEventListener('click', () => startQuiz(moduleId));

            // Run code buttons
            document.querySelectorAll('.run-code-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const container = e.target.closest('.monaco-container');
                    const editorId = container.dataset.editorId;
                    const lang = container.dataset.lang;
                    runCode(editorId, lang);
                });
            });

            // Update progress bar
            progressManager.renderProgressBar();

        } catch (error) {
            contentArea.innerHTML = `
                <div class="bg-red-900 border border-red-700 text-red-200 p-6 rounded-lg">
                    <h2 class="text-xl font-bold mb-2">Error Loading Lesson</h2>
                    <p>${error.message}</p>
                    <button onclick="loadHomePage()" class="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded">Go Home</button>
                </div>
            `;
        }
    }

    function initializeMonacoEditors() {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' }});
        require(['vs/editor/editor.main'], function() {
            document.querySelectorAll('.monaco-container').forEach(container => {
                const editorId = container.dataset.editorId;
                const lang = container.dataset.lang;
                const placeholder = container.querySelector('.monaco-placeholder');
                const code = placeholder.querySelector('code').textContent;

                const editor = monaco.editor.create(placeholder, {
                    value: code,
                    language: mapLanguageToMonaco(lang),
                    theme: 'vs-dark',
                    automaticLayout: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    lineNumbers: 'on',
                    renderWhitespace: 'selection',
                    folding: true
                });

                // Store editor reference
                container.dataset.monacoInstance = 'true';
                container.editor = editor;

                // Replace placeholder with editor
                placeholder.style.display = 'none';
                container.appendChild(editor.getDomNode());
            });
        });
    }

    function mapLanguageToMonaco(lang) {
        const map = {
            'javascript': 'javascript',
            'js': 'javascript',
            'html': 'html',
            'css': 'css',
            'json': 'json',
            'md': 'markdown'
        };
        return map[lang] || 'javascript';
    }

    async function runCode(editorId, lang) {
        const container = document.querySelector(`[data-editor-id="${editorId}"]`);
        const editor = container.editor;
        const code = editor.getValue();
        const btn = container.querySelector('.run-code-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i>Running...';
        btn.disabled = true;

        try {
            let result;
            if (lang === 'javascript' || lang === 'js') {
                // Run JavaScript in browser context (sandboxed)
                const consoleOutput = [];
                const mockConsole = {
                    log: (...args) => consoleOutput.push(args.join(' ')),
                    error: (...args) => consoleOutput.push('ERROR: ' + args.join(' ')),
                    warn: (...args) => consoleOutput.push('WARN: ' + args.join(' '))
                };
                
                // Create a function with access to console mock
                const runFn = new Function('console', code);
                runFn(mockConsole);
                
                result = consoleOutput.join('\n') || 'Code executed successfully (no output)';
            } else if (lang === 'java' || lang === 'java') {
                // Transpile Java to JavaScript using Babel Standalone
                if (typeof Babel === 'undefined') {
                    throw new Error('Babel Standalone tidak tersedia. Mohon muat ulang halaman.');
                }
                
                try {
                    // Transpile Java to JavaScript
                    const transpiledCode = Babel.transform(code, {
                        presejava: ['java'],
                        filename: 'script.java'
                    }).code;
                    
                    // Execute transpiled JavaScript
                    const consoleOutput = [];
                    const mockConsole = {
                        log: (...args) => consoleOutput.push(args.join(' ')),
                        error: (...args) => consoleOutput.push('ERROR: ' + args.join(' ')),
                        warn: (...args) => consoleOutput.push('WARN: ' + args.join(' '))
                    };
                    
                    const runFn = new Function('console', transpiledCode);
                    runFn(mockConsole);
                    
                    result = `Transpiled JavaScript:\n${transpiledCode.substring(0, 200)}${transpiledCode.length > 200 ? '...' : ''}\n\nOutput:\n${consoleOutput.join('\n') || 'Code executed successfully (no output)'}`;
                } catch (transpileError) {
                    result = `Java Compilation Error:\n${transpileError.message}`;
                }
            } else {
                result = `Execution for language "${lang}" not supported in browser mode.`;
            }

            // Show output in a simple alert or could create output div
            alert(`Output:\n${result}`);
            
            // Increment code execution count
            progressManager.incrementCodeExecutions();
            progressManager.renderProgressBar();
            
        } catch (error) {
            alert(`Error:\n${error.message}`);
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }

    function navigateToPreviousLesson() {
        // Find previous lesson logic
        const allLessons = [];
        MODULES.forEach(mod => {
            mod.lessons.forEach(lesson => {
                allLessons.push({ moduleId: mod.id, lessonId: lesson.id, slug: lesson.slug });
            });
        });
        
        const currentIndex = allLessons.findIndex(l => l.moduleId === currentModuleId && l.lessonId === currentLessonId);
        if (currentIndex > 0) {
            const prev = allLessons[currentIndex - 1];
            loadLesson(prev.moduleId, prev.lessonId, prev.slug);
        }
    }

    function navigateToNextLesson() {
        const allLessons = [];
        MODULES.forEach(mod => {
            mod.lessons.forEach(lesson => {
                allLessons.push({ moduleId: mod.id, lessonId: lesson.id, slug: lesson.slug });
            });
        });
        
        const currentIndex = allLessons.findIndex(l => l.moduleId === currentModuleId && l.lessonId === currentLessonId);
        if (currentIndex < allLessons.length - 1) {
            const next = allLessons[currentIndex + 1];
            loadLesson(next.moduleId, next.lessonId, next.slug);
        }
    }

    async function startQuiz(moduleId) {
        const quizData = await quizManager.loadQuiz(moduleId);
        if (!quizData) {
            alert('Quiz belum tersedia untuk modul ini.');
            return;
        }
        showQuizModal();
    }

    function showQuizModal() {
        quizModal.classList.remove('hidden');
        renderCurrentQuestion();
    }

    function closeQuizModal() {
        quizModal.classList.add('hidden');
        quizManager.currentModule = null;
    }

    function renderCurrentQuestion() {
        const question = quizManager.getCurrentQuestion();
        if (!question) return;

        const total = quizManager.quizData.questions.length;
        quizCurrentSpan.textContent = quizManager.currentQuestionIndex + 1;
        quizTotalSpan.textContent = total;
        
        quizPrevBtn.disabled = quizManager.currentQuestionIndex === 0;
        quizNextBtn.disabled = quizManager.currentQuestionIndex === total - 1;
        quizSubmitBtn.classList.toggle('hidden', quizManager.currentQuestionIndex !== total - 1);

        // Render options
        const optionsHtml = question.options.map((option, idx) => {
            const isSelected = quizManager.userAnswers[quizManager.currentQuestionIndex] === idx;
            return `
                <label class="quiz-option block ${isSelected ? 'selected' : ''}" data-index="${idx}">
                    <input type="radio" name="quiz-option" value="${idx}" ${isSelected ? 'checked' : ''} class="mr-3">
                    <span class="font-medium">${String.fromCharCode(65 + idx)}.</span> ${option}
                </label>
            `;
        }).join('');

        quizContent.innerHTML = `
            <div class="quiz-question">
                <h4 class="text-lg font-semibold mb-4">${question.question}</h4>
                <div class="options-container">
                    ${optionsHtml}
                </div>
            </div>
        `;

        // Add click handlers for options
        quizContent.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => {
                const idx = parseInt(option.dataset.index);
                quizManager.selectAnswer(idx);
                // Update visual selection
                quizContent.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                    opt.querySelector('input').checked = false;
                });
                option.classList.add('selected');
                option.querySelector('input').checked = true;
            });
        });
    }

    function showNextQuestion() {
        if (quizManager.nextQuestion()) {
            renderCurrentQuestion();
        }
    }

    function showPreviousQuestion() {
        quizManager.previousQuestion();
        renderCurrentQuestion();
    }

    function submitQuiz() {
        const resuljava = quizManager.getResuljava();
        const moduleId = quizManager.currentModule;
        
        quizManager.markModulePassed(moduleId, resuljava.percentage);
        
        quizResultDiv.classList.remove('hidden');
        quizResultDiv.className = `mt-4 p-4 rounded ${resuljava.passed ? 'bg-green-900 border border-green-700 text-green-200' : 'bg-red-900 border border-red-700 text-red-200'}`;
        quizResultDiv.innerHTML = `
            <h4 class="font-bold text-lg mb-2">${resuljava.passed ? '🎉 Lulus!' : '❌ Tidak Lulus'}</h4>
            <p>Skor Anda: <strong>${resuljava.score}/${resuljava.total}</strong> (${resuljava.percentage}%)</p>
            <p class="text-sm mt-2">${resuljava.passed ? 'Selamat! Anda telah menyelesaikan modul ini.' : 'Score minimal adalah ' + resuljava.passingScore + '%. Coba lagi.'}</p>
        `;
        
        // Show achievemenjava if any
        const newAchievemenjava = progressManager.checkAchievemenjava(progressManager.getProgress());
        newAchievemenjava.forEach(ach => showAchievementPopup(ach));
        
        // Hide submit button after submission
        quizSubmitBtn.classList.add('hidden');
    }

    function checkPendingAchievemenjava() {
        // Could check for any achievemenjava earned in previous sessions
        const progress = progressManager.getProgress();
        const pending = progress.achievemenjava.filter(key => !progress.shownAchievemenjava?.includes(key));
        if (pending.length > 0) {
            pending.forEach(key => {
                const ach = progressManager.achievemenjava[key];
                if (ach) {
                    setTimeout(() => showAchievementPopup(ach), 1000);
                }
            });
        }
    }

    function showAchievementPopup(achievement) {
        document.getElementById('achievement-title').textContent = achievement.title;
        document.getElementById('achievement-desc').textContent = achievement.description;
        achievementPopup.classList.remove('hidden');
        achievementPopup.classList.add('achievement-show');
        
        setTimeout(() => {
            achievementPopup.classList.add('hidden');
            achievementPopup.classList.remove('achievement-show');
        }, 4000);
    }
});
