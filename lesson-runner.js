// lesson-runner.js - Java runtime dengan CheerpJ + Monaco (multiple fallbacks)
(function() {
    console.log('[Runner] Initializing...');

    const CHEERPJ_CDNS = [
        'https://cdn.jsdelivr.net/npm/cheerpj@2.2.5/dist/cheerpj.min.js',
        'https://unpkg.com/cheerpj@2.2.5/dist/cheerpj.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/cheerpj/2.2.5/cheerpj.min.js',
        'https://raw.githubusercontent.com/cheerpj/cheerpj/master/dist/cheerpj.min.js',
        'https://github.com/cheerpj/cheerpj/releases/download/v2.2.5/cheerpj.min.js'
    ];
    const REQUIRERJS_CDNS = [
        'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js',
        'https://unpkg.com/requirejs@2.3.6/require.js',
        'https://cdnjs.com/ajax/libs/require.js/2.3.6/require.min.js'
    ];

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                const isLoaded = src.includes('cheerpj') ? typeof CheerpJ !== 'undefined' : typeof require !== 'undefined';
                if (isLoaded) return resolve();
                return setTimeout(() => resolve(), 100);
            }
            const s = document.createElement('script');
            s.src = src;
            s.onload = () => resolve();
            s.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.head.appendChild(s);
        });
    }

    function loadCheerpJWithRetry(maxAttempts = 5) {
        return new Promise((resolve, reject) => {
            let attempt = 0;
            function tryLoad() {
                if (attempt >= maxAttempts) {
                    reject(new Error('CheerpJ tidak dapat dimuat dari semua CDN. Cek ad-blocker, firewall, atau gunakan VPN.'));
                    return;
                }
                attempt++;
                const src = CHEERPJ_CDNS[attempt - 1];
                console.log(`[Runner] Loading CheerpJ from ${src} (attempt ${attempt})`);
                loadScript(src)
                    .then(() => {
                        waitForCheerpJ(5000)
                            .then(() => resolve())
                            .catch(() => {
                                console.warn(`[Runner] CheerpJ dari ${src} belum siap, coba CDN berikutnya...`);
                                tryLoad();
                            });
                    })
                    .catch(() => {
                        console.warn(`[Runner] Gagal memuat CheerpJ dari ${src}, mencoba CDN berikutnya...`);
                        tryLoad();
                    });
            }
            tryLoad();
        });
    }

    function loadRequireJS() {
        return new Promise((resolve, reject) => {
            if (typeof require !== 'undefined') return resolve();
            loadScript(REQUIRERJS_CDNS[0])
                .then(() => resolve())
                .catch(() => {
                    loadScript(REQUIRERJS_CDNS[1])
                        .then(() => resolve())
                        .catch(() => {
                            loadScript(REQUIRERJS_CDNS[2])
                                .then(() => resolve())
                                .catch(reject);
                        });
                });
        });
    }

    function waitForCheerpJ(timeout = 5000) {
        return new Promise((resolve, reject) => {
            const start = Date.now();
            function check() {
                if (typeof CheerpJ !== 'undefined') {
                    console.log('[Runner] CheerpJ ready');
                    resolve();
                } else if (Date.now() - start > timeout) {
                    reject(new Error(`CheerpJ tidak dimuat setelah ${timeout}ms`));
                } else {
                    setTimeout(check, 100);
                }
            }
            check();
        });
    }

    window.runJavaLesson = async function(slug, initialCode) {
        console.log('[Runner] runJavaLesson', slug);
        const container = document.getElementById('lesson-content');
        if (!container) {
            console.error('[Runner] Container #lesson-content not found');
            return;
        }

        // Remove existing runner
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
                    <button id="run-${slug}" class="run-btn px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center gap-2 transition" disabled>
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
                        Run Java
                    </button>
                    <button id="reset-${slug}" class="px-3 py-2 border border-gray-600 hover:bg-gray-700 text-gray-200 rounded-lg text-sm transition">Reset</button>
                </div>
            </div>
            <div id="editor-${slug}" class="code-editor" style="height:400px;border:1px solid #475569;border-radius:0.5rem;overflow:hidden;margin-bottom:1rem;"></div>
            <div id="output-${slug}" class="output-box" style="background:#020617;color:#e2e8f0;padding:0.75rem;border-radius:0.5rem;font-family:JetBrains Mono, monospace;white-space:pre-wrap;max-height:200px;overflow:auto;display:none;border:1px solid #1e293b;"></div>
            <div id="status-${slug}" class="mt-2 text-sm" style="color: #94a3b8;">Memuat runtime...</div>
        `;
        container.appendChild(wrapper);

        const editorDiv = document.getElementById(`editor-${slug}`);
        const outputDiv = document.getElementById(`output-${slug}`);
        const statusDiv = document.getElementById(`status-${slug}`);
        const runBtn = document.getElementById(`run-${slug}`);
        const resetBtn = document.getElementById(`reset-${slug}`);

        if (!editorDiv || !outputDiv || !runBtn) {
            console.error('[Runner] Runner UI elements missing');
            return;
        }

        let editorInitialized = false;
        let editorInstance = null;

        // Load dependencies
        try {
            // RequireJS
            await loadRequireJS();
            console.log('[Runner] RequireJS ready');
            // CheerpJ with extensive retry
            await loadCheerpJWithRetry(5);
            console.log('[Runner] CheerpJ ready');
            statusDiv.textContent = 'Runtime siap.';
            runBtn.disabled = false;
        } catch (e) {
            console.error('[Runner] Failed to load dependencies:', e);
            statusDiv.textContent = 'Error: Tidak dapat memuat runtime Java. Cek ad-blocker, firewall, atau gunakan VPN.';
            runBtn.disabled = true;
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
            runBtn.disabled = false;
            console.log('[Runner] Editor ready');
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
                const result = await runCheerpJ(code);
                if (result.error) {
                    outputDiv.textContent = `Error:\n${result.error}`;
                    statusDiv.textContent = 'Gagal mengompilasi.';
                } else {
                    outputDiv.textContent = result.output || '(No output)';
                    statusDiv.textContent = `Selesai dalam ${result.duration}ms`;
                }
            } catch (e) {
                outputDiv.textContent = `Exception: ${e.message}`;
                statusDiv.textContent = 'Error runtime.';
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

    function runCheerpJ(code) {
        return new Promise((resolve, reject) => {
            if (typeof CheerpJ === 'undefined') {
                reject(new Error('CheerpJ belum tersedia'));
                return;
            }
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
                            resolve({ output: output.out, error: output.err, duration: Date.now() - start });
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
