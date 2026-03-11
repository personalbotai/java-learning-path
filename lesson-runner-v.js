// lesson-runner.js - Shared Java runtime integration using CheerpJ
(function() {
    // Ensure CheerpJ loaded
    if (typeof CheerpJ === 'undefined') {
        console.error('CheerpJ belum dimuat');
        return;
    }

    window.runJavaLesson = function(slug, initialCode) {
        const container = document.getElementById('lesson-content');
        if (!container) {
            console.error('lesson-content container tidak ditemukan');
            return;
        }

        // Create runner UI if not already present
        if (!document.getElementById(`editor-${slug}`)) {
            const runnerHtml = `
<div class="code-runner" style="margin-top:2rem;padding:1rem;background:#1f2937;border-radius:0.5rem;">
  <h3 style="color:#60a5fa;margin-bottom:0.5rem">Latihan: Cobalah kode Java berikut</h3>
  <div id="editor-${slug}" class="code-editor" style="height:400px;border:1px solid #374151;border-radius:0.5rem;overflow:hidden;margin-bottom:1rem;"></div>
  <button id="run-btn-${slug}" class="run-button" style="background:#2563eb;color:white;border:none;padding:0.5rem 1rem;border-radius:0.375rem;cursor:pointer;font-weight:bold;">▶ Run Java</button>
  <div id="output-${slug}" class="output-box" style="background:#111827;color:#e5e7eb;padding:0.75rem;border-radius:0.375rem;margin-top:0.5rem;font-family:monospace;white-space:pre-wrap;max-height:200px;overflow:auto;display:none;"></div>
</div>`;
            container.insertAdjacentHTML('beforeend', runnerHtml);
        }

        const editorDiv = document.getElementById(`editor-${slug}`);
        const outputDiv = document.getElementById(`output-${slug}`);
        const runBtn = document.getElementById(`run-btn-${slug}`);

        // Initialize Monaco if not yet
        if (!window[`editor_${slug}`]) {
            require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' }});
            require(['vs/editor/editor.main'], function() {
                window[`editor_${slug}`] = monaco.editor.create(editorDiv, {
                    value: initialCode || 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
                    language: 'java',
                    theme: 'vs-dark',
                    automaticLayout: true
                });
                runBtn.onclick = () => executeJava(slug);
            });
        } else {
            runBtn.onclick = () => executeJava(slug);
        }
    };

    function executeJava(slug) {
        const editor = window[`editor_${slug}`];
        const output = document.getElementById(`output-${slug}`);
        if (!editor || !output) return;
        const code = editor.getValue();
        output.style.display = 'block';
        output.textContent = 'Running...';

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
    }
})();
