// lesson-runner.js - Shared Java runtime integration using CheerpJ + Monaco
(function() {
    console.log('[Runner] Initializing...');

    // Load Monaco loader if not present
    function loadMonaco(callback) {
        if (typeof require !== 'undefined') {
            return callback();
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js';
        script.onload = callback;
        script.onerror = () => console.error('[Runner] Failed to load require.js');
        document.head.appendChild(script);
    }

    // Load CheerpJ if not present
    function loadCheerpJ(callback) {
        if (typeof CheerpJ !== 'undefined') {
            return callback();
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cheerpj/2.2.5/cheerpj.min.js';
        script.onload = callback;
        script.onerror = () => console.error('[Runner] Failed to load CheerpJ');
        document.head.appendChild(script);
    }

    window.runJavaLesson = function(slug, initialCode) {
        console.log('[Runner] runJavaLesson for', slug);
        const container = document.getElementById('lesson-content');
        if (!container) {
            console.error('[Runner] lesson-content container not found');
            return;
        }

        // Avoid duplicate runner
        if (document.getElementById(`editor-${slug}`)) {
            console.log('[Runner] Editor already exists for', slug);
            return;
        }

        // Create runner UI
        const runnerHtml = `
<div class="code-runner" style="margin-top:2rem;padding:1rem;background:#0f172a;border-radius:0.75rem;border:1px solid #334155;">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
    <h3 class="m-0 text-lg font-semibold text-sky-400">Latihan: Cobalah kode Java berikut</h3>
    <div class="flex items-center gap-2">
      <button id="run-btn-${slug}" class="run-btn px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center gap-2 transition">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
        Run Java
      </button>
      <button id="reset-btn-${slug}" class="px-3 py-2 border border-gray-600 hover:bg-gray-700 text-gray-200 rounded-lg text-sm transition">Reset</button>
    </div>
  </div>
  <div id="editor-${slug}" class="code-editor mb-3" style="height:400px;border:1px solid #475569;border-radius:0.5rem;overflow:hidden;"></div>
  <div id="output-${slug}" class="output-box" style="background:#020617;color:#e2e8f0;padding:0.75rem;border-radius:0.5rem;font-family:JetBrains Mono, monospace;white-space:pre-wrap;max-height:200px;overflow:auto;display:none;border:1px solid #1e293b;"></div>
</div>`;
        container.insertAdjacentHTML('beforeend', runnerHtml);

        const editorDiv = document.getElementById(`editor-${slug}`);
        const outputDiv = document.getElementById(`output-${slug}`);
        const runBtn = document.getElementById(`run-btn-${slug}`);
        const resetBtn = document.getElementById(`reset-btn-${slug}`);

        if (!editorDiv || !outputDiv || !runBtn) {
            console.error('[Runner] Runner UI elements missing');
            return;
        }

        // Set initial code
        if (initialCode) {
            // We'll set it after editor creation
        }

        // Load dependencies
        loadMonaco(() => {
            loadCheerpJ(() => {
                // Configure Monaco path
                require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' }});
                require(['vs/editor/editor.main'], function() {
                    // Determine theme
                    const isDark = document.documentElement.classList.contains('dark');
                    window[`editor_${slug}`] = monaco.editor.create(editorDiv, {
                        value: initialCode || 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
                        language: 'java',
                        theme: isDark ? 'vs-dark' : 'vs',
                        automaticLayout: true,
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        lineHeight: 1.6,
                        minimap: { enabled: false }
                    });

                    // Wire up buttons
                    runBtn.onclick = () => executeJava(slug);
                    if (resetBtn) {
                        resetBtn.onclick = () => {
                            const editor = window[`editor_${slug}`];
                            if (editor) {
                                editor.setValue(initialCode || 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}');
                            }
                        };
                    }

                    console.log('[Runner] Editor ready for', slug);
                });
            });
        });
    };

    window.executeJava = function(slug) {
        const editor = window[`editor_${slug}`];
        const output = document.getElementById(`output-${slug}`);
        if (!editor || !output) {
            console.error('[Runner] executeJava: missing editor or output');
            return;
        }
        const code = editor.getValue();
        output.style.display = 'block';
        output.textContent = 'Compiling and running...';

        CheerpJ.compileString(code, 'Main', function(classBytes) {
            let out = '';
            let err = '';
            CheerpJ.runMain('Main', [], {
                output: text => out += text,
                error: text => err += text,
                done: () => {
                    output.textContent = err ? `Error: ${err}` : out || '(No output)';
                }
            });
        });
    };

    console.log('[Runner] Ready');
})();
