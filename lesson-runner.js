// lesson-runner.js - Java runtime using JDK.js + Monaco
(function() {
    console.log('[Runner] Initializing...');

    const REQUIRERJS_CDNS = [
        'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js',
        'https://unpkg.com/requirejs@2.3.6/require.js'
    ];

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                const isLoaded = src.includes('jdk') ? typeof Java !== 'undefined' : typeof require !== 'undefined';
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

    function loadRequireJS() {
        return new Promise((resolve, reject) => {
            if (typeof require !== 'undefined') return resolve();
            loadScript(REQUIRERJS_CDNS[0])
                .then(() => resolve())
                .catch(() => {
                    loadScript(REQUIRERJS_CDNS[1])
                        .then(() => resolve())
                        .catch(reject);
                });
        });
    }

    function waitForJDK(timeout = 5000) {
        return new Promise((resolve, reject) => {
            const start = Date.now();
            function check() {
                if (typeof Java !== 'undefined' && Java.runJava) {
                    console.log('[Runner] JDK.js ready');
                    resolve();
                } else if (Date.now() - start > timeout) {
                    reject(new Error(`JDK.js tidak dimuat setelah ${timeout}ms`));
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
        let runtimeReady = false;

        // Load dependencies
        try {
            // RequireJS for Monaco
            await loadRequireJS();
            console.log('[Runner] RequireJS ready');

            // Load JDK.js from various sources
            const JDK_SOURCES = [
                '/vendor/jdk.min.js', // local (preferred)
                'https://cdn.jsdelivr.net/npm/jdk.js@0.3.2/dist/jdk.min.js',
                'https://unpkg.com/jdk.js@0.3.2/dist/jdk.min.js',
                'https://raw.githubusercontent.com/marcfasel/jdk.js/v0.3.2/dist/jdk.min.js'
            ];
            let loaded = false;
            for (const src of JDK_SOURCES) {
                try {
                    console.log(`[Runner] Attempting to load JDK.js from: ${src}`);
                    await loadScript(src);
                    // Wait for Java object
                    await waitForJDK(5000);
                    loaded = true;
                    break;
                } catch (e) {
                    console.warn(`[Runner] Failed to load from ${src}:`, e.message);
                }
            }
            if (!loaded) {
                throw new Error('JDK.js tidak dapat dimuat dari semua sumber. Lihat instruksi di bawah.');
            }
            runtimeReady = true;
            statusDiv.textContent = 'Runtime siap.';
            runBtn.disabled = false;
        } catch (e) {
            console.error('[Runner] Failed to load dependencies:', e);
            runtimeReady = false;
            runBtn.disabled = true;
            statusDiv.textContent = 'Runtime tidak dapat dimuat.';
            // Show detailed help in output box
            outputDiv.style.display = 'block';
            outputDiv.innerHTML = `
<strong>Java Runtime tidak dapat dimuat.</strong><br><br>
Instruksi pemecahan masalah:<br>
1. Pastikan koneksi internet aktif.<br>
2. Matikan ad-blocker yang mungkin memblokir domain:<br>
   - cdn.jsdelivr.net<br>
   - unpkg.com<br>
   - raw.githubusercontent.com<br>
3. Coba gunakan VPN atau jaringan lain.<br>
4. Jika reboot tidak membantu, <strong>download JDK.js manual</strong> dan letakkan di folder <code>vendor/</code> repo:<br>
   <a href="https://github.com/marcfasel/jdk.js/releases/download/v0.3.2/jdk.min.js" target="_blank" style="color:#22c55e;text-decoration:underline;">Download jdk.min.js (v0.3.2)</a><br>
   Simpan sebagai <code>vendor/jdk.min.js</code> di repo Java Learning Path, lalu push dan build ulang.<br>
5. Setelah perubahan, <strong>hard refresh</strong> halaman (Ctrl+Shift+R).<br><br>
Error detail: ${e.message}
`;
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
            if (typeof Java === 'undefined' || !Java.runJava) {
                statusDiv.textContent = 'Error: JDK.js tidak tersedia.';
                outputDiv.style.display = 'block';
                outputDiv.innerHTML = `
<strong>Runtime tidak tersedia saat Run.</strong><br>
Mohon ikuti instruksi di atas untuk mengatasi masalah loading JDK.js.<br>
Setelah diperbaiki, reload halaman.
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
                const result = await runJava(code);
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

    function runJava(code) {
        return new Promise((resolve, reject) => {
            if (typeof Java === 'undefined' || !Java.runJava) {
                reject(new Error('JDK.js tidak tersedia'));
                return;
            }
            const start = Date.now();
            const timeout = setTimeout(() => {
                reject(new Error('Timeout setelah 10 detik'));
            }, 10000);
            const output = { out: '', err: '' };
            try {
                Java.runJava(code, {
                    onOutput: text => output.out += text,
                    onStderr: text => output.err += text,
                    onComplete: () => {
                        clearTimeout(timeout);
                        resolve({ output: output.out, error: output.err, duration: Date.now() - start });
                    }
                });
            } catch (e) {
                clearTimeout(timeout);
                reject(e);
            }
        });
    }

    console.log('[Runner] Ready');
})();
