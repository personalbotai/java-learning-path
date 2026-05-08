// lesson-runner-simple.js - Simple runner that shows expected output
// Java cannot run directly in browser without JVM/CheerpJ
// This runner displays the expected output for learning purposes

(function() {
    'use strict';
    
    console.log('[Runner] Initializing simple runner (expected output mode)...');
    
    // Store current lesson data
    let currentLesson = null;
    
    // Initialize when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('[Runner] Setting up...');
        
        // Override any existing run function
        window.runJavaCode = runJavaCode;
        window.compileJava = compileJava;
        
        // Setup Run button if exists
        const runBtn = document.getElementById('runCode') || document.querySelector('[id*="run"]') || document.querySelector('[id*="Run"]');
        if (runBtn) {
            runBtn.addEventListener('click', handleRunClick);
            console.log('[Runner] Run button found and configured');
        }
        
        // Listen for lesson changes
        document.addEventListener('lessonLoaded', function(e) {
            if (e.detail && e.detail.lesson) {
                currentLesson = e.detail.lesson;
                console.log('[Runner] Lesson loaded:', currentLesson.title);
            }
        });
        
        // Try to get current lesson from global scope
        if (window.currentLesson) {
            currentLesson = window.currentLesson;
        }
        
        console.log('[Runner] Ready - will show expected output');
    }
    
    function handleRunClick(e) {
        e.preventDefault();
        const code = getCodeFromEditor();
        runJavaCode(code);
    }
    
    function getCodeFromEditor() {
        // Try various editor IDs
        const editorIds = ['codeEditor', 'editor', 'javaEditor', 'code'];
        for (const id of editorIds) {
            const el = document.getElementById(id);
            if (el) {
                return el.value || el.textContent || el.innerText || '';
            }
        }
        
        // Try textarea or pre elements
        const editors = document.querySelectorAll('textarea, pre, .editor, .code-editor');
        if (editors.length > 0) {
            const el = editors[0];
            return el.value || el.textContent || '';
        }
        
        return '';
    }
    
    function runJavaCode(code) {
        console.log('[Runner] Showing expected output for code:', code.substring(0, 50) + '...');
        
        // Get expected output from current lesson
        let expectedOutput = 'Java code execution simulation\n';
        expectedOutput += '========================================\n';
        expectedOutput += 'NOTE: Java cannot run directly in browser.\n';
        expectedOutput += 'Showing expected output for learning.\n';
        expectedOutput += '========================================\n\n';
        
        if (currentLesson && currentLesson.expectedOutput) {
            expectedOutput += currentLesson.expectedOutput;
        } else if (window.LESSON_CONFIG && window.LESSON_CONFIG.expectedOutput) {
            expectedOutput += window.LESSON_CONFIG.expectedOutput;
        } else {
            // Try to find expected output from page data
            const outputEl = document.querySelector('[data-expected-output]');
            if (outputEl) {
                expectedOutput += outputEl.dataset.expectedOutput || 'No expected output defined';
            } else {
                expectedOutput += 'Expected output not defined for this lesson.\n';
                expectedOutput += 'Please check the lesson material for expected results.';
            }
        }
        
        // Display the output
        displayOutput(expectedOutput);
        
        // Also show a notice
        showNotice('Menampilkan hasil yang diharapkan (Java tidak dapat dijalankan di browser)');
    }
    
    function compileJava(code) {
        // Simulate compilation
        displayOutput('Compiling Java code...\n');
        
        setTimeout(() => {
            // Simple syntax check
            if (code.includes('class') && code.includes('main')) {
                displayOutput('✅ Compilation successful!\n');
                displayOutput('Note: Showing expected output (Java requires JVM)\n');
                runJavaCode(code);
            } else {
                displayOutput('❌ Compilation failed!\n');
                displayOutput('Error: Missing class or main method\n');
            }
        }, 500);
    }
    
    function displayOutput(text) {
        // Try to find output container
        const outputIds = ['codeOutput', 'output', 'result', 'console', 'outputArea'];
        let outputEl = null;
        
        for (const id of outputIds) {
            outputEl = document.getElementById(id);
            if (outputEl) break;
        }
        
        if (!outputEl) {
            // Create output container if not exists
            outputEl = document.createElement('div');
            outputEl.id = 'codeOutput';
            outputEl.className = 'mt-4 p-4 bg-gray-900 rounded text-green-400 font-mono text-sm whitespace-pre-wrap';
            outputEl.style.maxHeight = '300px';
            outputEl.style.overflowY = 'auto';
            
            // Insert after code editor
            const editor = document.getElementById('codeEditor') || document.querySelector('textarea');
            if (editor && editor.parentNode) {
                editor.parentNode.insertBefore(outputEl, editor.nextSibling);
            } else {
                document.body.appendChild(outputEl);
            }
        }
        
        // Show output
        outputEl.textContent = text;
        outputEl.classList.remove('hidden');
        
        // Scroll to output
        outputEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    function showNotice(message) {
        // Create or update notice banner
        let notice = document.getElementById('runnerNotice');
        if (!notice) {
            notice = document.createElement('div');
            notice.id = 'runnerNotice';
            notice.className = 'bg-blue-900 text-blue-200 px-4 py-2 rounded mb-4 text-sm';
            notice.style.cssText = 'background: #1e3a5f; color: #93c5fd; padding: 8px 16px; border-radius: 4px; margin-bottom: 16px; font-size: 14px;';
            
            const header = document.querySelector('header, .header, main, .main-content');
            if (header) {
                header.parentNode.insertBefore(notice, header.nextSibling);
            }
        }
        notice.textContent = 'ℹ️ ' + message;
        notice.style.display = 'block';
    }
    
    // Export for global use
    window.JavaRunner = {
        run: runJavaCode,
        compile: compileJava,
        setLesson: function(lesson) { currentLesson = lesson; }
    };
    
})();
