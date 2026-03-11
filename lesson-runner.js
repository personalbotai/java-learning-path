// lesson-runner.js - Java runtime dengan CheerpJ + Monaco
(function() {
    console.log('[Runner] Initializing...');

    function loadScript(src, callback) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                return callback();
            }
            const s = document.createElement('script');
            s.src = src;
            s.onload = () => { callback(); resolve(); };
            s.onerror = (e) => { reject(e); };
            document.head.appendChild(s);
        });
    }

    window.runJavaLesson = async function(slug, initialCode) {
        console.log('[Runner] runJavaLesson', slug);
        const container = document.getElementById('lesson-content');
        if (!container) {
            console.error('[Runner] Container #lesson-content not found');
            return;
        }

        // Remove existing runner for this slug
        const existing = document.getElementById(`runner-${slug}`);
        if (existing) existing.remove();

        // Build runner UI
        const wrapper = document.createElement('div');
        wrapper.id = `runner-${slug}`;
        wrapper.className = 'code-runner';
        wrapper.style.cssText = 'margin-top:1.5rem;padding:1.25rem;background:#0f172a;border-radius:0.75rem;border:1px solid #334155;';
        wrapper.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 class="m-0 text-lg font-semibold text-sky-400">Latihan: Cobalah kode Java berikut</h3>
                <div class="flex items-center gap-2">
                    <button id="run-${slug}" class="run-btn px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center gap-2 transition">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
                        Run Java
                    </button>
                    <button id="reset-${slug}" class="px-3 py-2 border border-gray-600 hover:bg-gray-700 text-gray-200 rounded-lg text-sm transition">Reset</button>
                </div>
            </div>
            <div id="editor-${slug}" class="code-editor" style="height:400px;border:1px solid #475569;border-radius:0.5rem;overflow:hidden;margin-bottom:1rem;"></div>
            <div id="output-${slug}" class="output-box" style="background:#020617;color:#e2e8f0;padding:0.75rem;border-radius:0.5rem;font-family:JetBrains Mono, monospace;white-space:pre-wrap;max-height:200px;overflow:auto;display:none;border:1px solid #1e293b;"></div>
            <div id="status-${slug}" class="mt-2 text-sm" style="color: #94a3b8;"></div>
        `;
        container.appendChild(wrapper);

        const editorDiv = document.getElementById(`editor-${slug}`);
        const outputDiv = document.getElementById(`output-${slug}`);
        const statusDiv = document.getElementById(`status-${slug}`);
        const runBtn = document.getElementById(`run-${slug}`);
        const resetBtn = document.getElementById(`reset-${slug}`);

        // Set initial code after editor is ready
        let editorInitialized = false;
        let editorInstance = null;

        // Load dependencies
        try {
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js');
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/cheerpj/2.2.5/cheerpj.min.js');
            console.log('[Runner] Dependencies loaded');
        } catch (e) {
            console.error('[Runner] Failed to load dependencies:', e);
            statusDiv.textContent = 'Error memuat runtime Java. Cek koneksi internet.';
            return;
        }

        // Configure Monaco
        require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' }});
        require(['vs/editor/editor.main'], function() {
            const isDark = document.documentElement.classList.contains('dark');
            editorInstance = monaco.editor.create(editorDiv, {
                value: initialCode || defaultCode(),
                language: 'java',
                theme: isDark ? 'vs-dark' : 'vs',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                fontSize: 14,
                lineHeight: 1.6,
                minimap: { enabled: false }
            });
            editorInitialized = true;
            statusDiv.textContent = 'Editor siap. Klik Run untuk menjalankan.';
        });

        // Button handlers
        runBtn.onclick = async () => {
            if (!editorInitialized) {
                statusDiv.textContent = 'Editor belum siap...';
                return;
            }
            const code = editorInstance.getValue();
            outputDiv.style.display = 'block';
            outputDiv.textContent = 'Compiling...';
            statusDiv.textContent = 'Mengompilasi...';

            try {
                // Wrap compile+run in Promise for timeout
                const result = await runCheerpJ(code, slug);
                if (result.error) {
                    outputDiv.textContent = `Error:\n${result.error}`;
                    statusDiv.textContent = 'Gagal mengompilasi.';
                } else {
                    outputDiv.textContent = result.output || '(No output)';
                    statusDiv.textContent = `Selesai dalam ${result.duration}ms`;
                }
            } catch (e) {
                outputDiv.textContent = `Exception: ${e.message}`;
                statusDiv.textContent = 'ErrorRuntime.';
            }
        };

        resetBtn.onclick = () => {
            if (editorInstance) {
                editorInstance.setValue(initialCode || defaultCode());
                outputDiv.style.display = 'none';
                statusDiv.textContent = 'Kode di-reset.';
            }
        };
    };

    function defaultCode() {
        return `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;
    }

    function runCheerpJ(code, slug) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Timeout setelah 10 detik'));
            }, 10000);

            const output = { out: '', err: '' };
            try {
                CheerpJ.compileString(code, 'Main', function(classBytes) {
                    clearTimeout(timeout);
                    const start = Date.now();
                    CheerpJ.runMain('Main', [], {
                        output: text => output.out += text,
                        error: text => output.err += text,
                        done: () => {
                            resolve({
                                output: output.out,
                                error: output.err,
                                duration: Date.now() - start
                            });
                        }
                    });
                });
            } catch (e) {
                clearTimeout(timeout);
                reject(e);
            }
        });
    }

    console.log('[Runner] Ready');
})();
