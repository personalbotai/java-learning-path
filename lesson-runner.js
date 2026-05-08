// lesson-runner-final.js - Shows expected output for Java lessons
// Java cannot run in browser without JVM - this shows expected results
(function() {
    'use strict';
    
    console.log('[Runner] Initializing (expected output mode)...');
    
    let currentLesson = null;
    let bridgeReady = false;
    
    // Initialize
    function init() {
        // Wait for bridge to be ready
        if (window.lessonDataBridge) {
            setupBridge();
        } else {
            // Wait for bridge to load
            const checkInterval = setInterval(() => {
                if (window.lessonDataBridge) {
                    clearInterval(checkInterval);
                    setupBridge();
                }
            }, 100);
            setTimeout(() => clearInterval(checkInterval), 5000); // Timeout after 5s
        }
        
        // Fallback: try to get lesson from global scope
        setTimeout(() => {
            if (window.currentLesson) {
                currentLesson = window.currentLesson;
                console.log('[Runner] Got lesson from global scope');
            }
        }, 500);
        
        setupRunButton();
        console.log('[Runner] Ready - Java output simulation mode');
    }
    
    function setupBridge() {
        bridgeReady = true;
        window.lessonDataBridge.onLessonChange(function(lesson) {
            currentLesson = lesson;
            console.log('[Runner] Lesson updated via bridge:', lesson?.title);
        });
        
        // Get current lesson if already set
        if (window.lessonDataBridge.currentLesson) {
            currentLesson = window.lessonDataBridge.currentLesson;
        }
    }
    
    function setupRunButton() {
        // Find run button(s)
        const runSelectors = [
            '#runCode', 
            '#runBtn',
            'button[onclick*="run"]',
            'button:contains("Run")',
            'button:contains("Lihat Output")'
        ];
        
        let runBtn = null;
        for (const sel of runSelectors) {
            try {
                const el = document.querySelector(sel);
                if (el) {
                    runBtn = el;
                    break;
                }
            } catch(e) {} // Invalid selector
        }
        
        if (runBtn) {
            runBtn.addEventListener('click', handleRunClick);
            console.log('[Runner] Run button configured');
        } else {
            // Create run button if not exists
            console.log('[Runner] No run button found, will listen for custom events');
        }
        
        // Also listen for custom run events
        document.addEventListener('runJava', handleRunClick);
        document.addEventListener('showOutput', handleRunClick);
    }
    
    function handleRunClick(e) {
        if (e.preventDefault) e.preventDefault();
        const code = getCodeFromEditor();
        showExpectedOutput(code);
    }
    
    function getCodeFromEditor() {
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
    
    function showExpectedOutput(code) {
        console.log('[Runner] Showing expected output...');
        
        let output = '';
        
        // Header
        output += '=== Java Code Output (Simulasi) ===\n';
        output += 'NOTE: Java tidak dapat dijalankan di browser\n';
        output += 'Menampilkan hasil yang diharapkan\n';
        output += '========================================\n\n';
        
        // Try to get expected output from various sources
        let expected = null;
        
        // 1. From bridge
        if (bridgeReady && window.lessonDataBridge) {
            expected = window.lessonDataBridge.getExpectedOutput();
        }
        
        // 2. From current lesson
        if (!expected && currentLesson && currentLesson.expectedOutput) {
            expected = currentLesson.expectedOutput;
        }
        
        // 3. From window.currentLesson
        if (!expected && window.currentLesson && window.currentLesson.expectedOutput) {
            expected = window.currentLesson.expectedOutput;
        }
        
        // 4. From data attribute
        if (!expected) {
            const outputEl = document.querySelector('[data-expected-output]');
            if (outputEl) {
                expected = outputEl.dataset.expectedOutput;
            }
        }
        
        // 5. Try to parse from page content
        if (!expected) {
            const pageText = document.body.textContent || '';
            const match = pageText.match(/Expected Output[:\s]*([\n\r]+.*?)(?=\n\n|$)/i);
            if (match) {
                expected = match[1].trim();
            }
        }
        
        if (expected) {
            output += expected + '\n';
        } else {
            output += 'Expected output tidak ditemukan untuk lesson ini.\n';
            output += 'Silakan periksa materi pembelajaran.\n';
        }
        
        output += '\n========================================\n';
        output += 'Simulasi selesai.';
        
        displayOutput(output);
        
        // Show notice
        showNotice('Menampilkan hasil yang diharapkan (Java butuh JVM untuk menjalankan kode)');
    }
    
    function displayOutput(text) {
        // Find or create output container
        let outputEl = document.getElementById('codeOutput') || 
                     document.getElementById('output') ||
                     document.getElementById('result');
        
        if (!outputEl) {
            outputEl = document.createElement('div');
            outputEl.id = 'codeOutput';
            outputEl.style.cssText = 'margin-top: 16px; padding: 16px; background: #0f172a; color: #4ade80; font-family: monospace; font-size: 13px; border-radius: 8px; border: 1px solid #334155; white-space: pre-wrap; max-height: 300px; overflow-y: auto;';
            
            // Insert after code editor
            const editor = document.getElementById('codeEditor') || 
                         document.querySelector('textarea') ||
                         document.querySelector('.code-editor');
            if (editor && editor.parentNode) {
                editor.parentNode.insertBefore(outputEl, editor.nextSibling);
            } else {
                document.body.appendChild(outputEl);
            }
        }
        
        outputEl.textContent = text;
        outputEl.classList.remove('hidden');
        
        // Scroll to output
        outputEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    function showNotice(message) {
        let notice = document.getElementById('runnerNotice');
        if (!notice) {
            notice = document.createElement('div');
            notice.id = 'runnerNotice';
            notice.style.cssText = 'background: #1e3a5f; color: #93c5fd; padding: 12px 20px; border-radius: 6px; margin: 16px 0; font-size: 14px; border-left: 4px solid #3b82f6;';
            notice.innerHTML = '<i class="fas fa-info-circle mr-2"></i>' + message;
            
            const header = document.querySelector('header, .header, main, .main-content');
            if (header && header.parentNode) {
                header.parentNode.insertBefore(notice, header.nextSibling);
            }
        }
        notice.innerHTML = '<i class="fas fa-info-circle mr-2"></i>' + message;
        notice.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            notice.style.display = 'none';
        }, 5000);
    }
    
    // Also provide a global function for manual calls
    window.showJavaOutput = showExpectedOutput;
    window.JavaRunner = {
        run: showExpectedOutput,
        setLesson: function(lesson) { 
            currentLesson = lesson; 
            if (bridgeReady && window.lessonDataBridge) {
                window.lessonDataBridge.setLesson(lesson);
            }
        }
    };
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
