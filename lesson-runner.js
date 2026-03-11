// lesson-runner.js - Java runtime using CheerpJ (official loader + direct fallback) + Monaco
(function() {
    console.log('[Runner] Initializing...');

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                if (src.includes('cheerpj') && typeof CheerpJ !== 'undefined') return resolve();
                if (src.includes('require') && typeof require !== 'undefined') return resolve();
                return setTimeout(() => resolve(), 100);
            }
            const s = document.createElement('script');
            s.src = src;
            s.onload = () => resolve();
            s.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.head.appendChild(s);
        });
    }

    function waitForCheerpJ(timeout = 15000) {
        return new Promise((resolve, reject) => {
            const start = Date.now();
            function check() {
                if (typeof CheerpJ !== 'undefined' && CheerpJ.compileString && CheerpJ.runMain) {
                    console.log('[Runner] CheerpJ ready');
                    resolve();
                } else if (Date.now() - start > timeout) {
                    reject(new Error(`CheerpJ tidak dimuat setelah ${timeout}ms`));
                } else {
                    setTimeout(check, 200);
                }
            }
            check();
        });
    }

    function loadRequireJSWithFallback() {
        return new Promise((resolve, reject) => {
            if (typeof require !== 'undefined') return resolve();
            const CDNS = [
                'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js',
                'https://unpkg.com/requirejs@2.3.6/require.js',
                'https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js'
            ];
            let idx = 0;
            function tryLoad() {
                if (idx >= CDNS.length) return reject(new Error('RequireJS tidak dapat dimuat dari semua CDN'));
                const src = CDNS[idx++];
                console.log(`[Runner] Loading RequireJS from ${src}`);
                loadScript(src).then(resolve).catch(() => {
                    console.warn(`[Runner] Failed to load RequireJS from ${src}, trying next...`);
                    tryLoad();
                });
            }
            tryLoad();
        });
    }

    function loadMonacoWithFallback() {
        return new Promise((resolve, reject) => {
            const CDNS = [
                'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs',
                'https://unpkg.com/monaco-editor@0.44.0/min/vs',
                'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs'
            ];
            let idx = 0;
            function tryLoad() {
                if (idx >= CDNS.length) return reject(new Error('Monaco tidak dapat dimuat dari semua CDN'));
                const base = CDNS[idx++];
                console.log(`[Runner] Configuring Monaco path: ${base}`);
                require.config({ paths: { 'vs': base }});
                require(['vs/editor/editor.main'], function() {
                    console.log('[Runner] Monaco loaded');
                    resolve();
                }, function(err) {
                    console.warn(`[Runner] Monaco load failed from ${base}:`, err);
                    tryLoad();
                });
            }
            tryLoad();
        });
    }

    function loadCheerpJDirectWithFallback() {
        return new Promise((resolve, reject) => {
            const CDNS = [
                'https://cdn.jsdelivr.net/npm/cheerpj@2.2.5/dist/cheerpj.min.js',
                'https://unpkg.com/cheerpj@2.2.5/dist/cheerpj.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/cheerpj/2.2.5/cheerpj.min.js'
            ];
            let idx = 0;
            function tryLoad() {
                if (idx >= CDNS.length) reject(new Error('CheerpJ direct tidak dapat dimuat dari semua CDN'));
                else {
                    const src = CDNS[idx++];
                    console.log(`[Runner] Fallback: loading CheerpJ directly from ${src}`);
                    loadScript(src).then(() => {
                        // Wait a bit for CheerpJ to initialize
                        setTimeout(() => {
                            if (typeof CheerpJ !== 'undefined' && CheerpJ.compileString) {
                                resolve();
                            } else {
                                console.warn('[Runner] CheerpJ loaded but not ready, retrying...');
                                setTimeout(tryLoad, 500);
                            }
                        }, 1000);
                    }).catch(() => {
                        console.warn(`[Runner] Failed to load CheerpJ directly from ${src}, trying next...`);
                        tryLoad();
                    });
                }
            }
            tryLoad();
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
        let runtimeReady = false;

        // Load dependencies
        try {
            // RequireJS with fallback
            await loadRequireJSWithFallback();
            console.log('[Runner] RequireJS ready');

            // First, wait for CheerpJ loader from official CDN (already in page)
            try {
                await waitForCheerpJ(15000);
                console.log('[Runner] CheerpJ loader ready');
            } catch (e) {
                console.warn('[Runner] CheerpJ loader failed, trying direct load...', e);
                // Fallback: load CheerpJ directly from CDNs
                await loadCheerpJDirectWithFallback();
                console.log('[Runner] CheerpJ direct loaded');
            }

            runtimeReady = true;
            statusDiv.textContent = 'Runtime siap.';
            runBtn.disabled = false;
        } catch (e) {
            console.error('[Runner] Failed to load dependencies:', e);
            runtimeReady = false;
            runBtn.disabled = true;
            statusDiv.textContent = 'Runtime tidak dapat dimuat.';
            outputDiv.style.display = 'block';
            outputDiv.innerHTML = `
<strong>CheerpJ runtime tidak dapat dimuat.</strong><br><br>
Instruksi pemecahan masalah:<br>
1. Periksa koneksi internet.<br>
2. Matikan ad‑blocker yang memblokir domain:<br>
   - cjrtnc.leaningtech.com<br>
   - cdn.jsdelivr.net<br>
   - unpkg.com<br>
   - cdnjs.cloudflare.com<br>
3. Coba gunakan VPN atau jaringan lain.<br>
4. Refresh halaman (Ctrl+Shift+R).<br><br>
Error detail: ${e.message}
`;
            return;
        }

        // Load Monaco with fallback
        try {
            await loadMonacoWithFallback();
        } catch (e) {
            console.error('[Runner] Monaco failed:', e);
            statusDiv.textContent = 'Editor gagal dimuat.';
            outputDiv.style.display = 'block';
            outputDiv.innerHTML = `Editor Monaco tidak dapat dimuat.<br>${e.message}<br>Coba refresh atau gunakan jaringan lain.`;
            runBtn.disabled = true;
            return;
        }

        // Create editor instance
        try {
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
        } catch (e) {
            console.error('[Runner] Editor create failed:', e);
            statusDiv.textContent = 'Gagal membuat editor.';
            runBtn.disabled = true;
        }

        // Button handlers
        runBtn.onclick = async () => {
            if (typeof CheerpJ === 'undefined' || !CheerpJ.compileString || !CheerpJ.runMain) {
                statusDiv.textContent = 'Error: CheerpJ tidak tersedia.';
                outputDiv.style.display = 'block';
                outputDiv.innerHTML = `
<strong>Runtime tidak tersedia saat Run.</strong><br>
Pastikan CheerpJ loader berhasil dimuat. Coba refresh halaman.<br>
Jika masalah berlanjut, periksa koneksi atau matikan ad‑blocker.
`;
                return;
            }
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
                    statusDiv.status = `Selesai dalam ${result.duration}ms`;
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
            if (typeof CheerpJ === 'undefined' || !CheerpJ.compileString) {
                reject(new Error('CheerpJ tidak tersedia'));
                return;
            }
            const start = Date.now();
            const timeout = setTimeout(() => {
                reject(new Error('Timeout setelah 10 detik'));
            }, 10000);
            const output = { out: '', err: '' };
            try {
                CheerpJ.compileString(code, 'Main', function(classBytes) {
                    clearTimeout(timeout);
                    const startRun = Date.now();
                    CheerpJ.runMain('Main', [], {
                        output: text => output.out += text,
                        error: text => output.err += text,
                        done: () => {
                            resolve({ output: output.out, error: output.err, duration: Date.now() - startRun });
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
