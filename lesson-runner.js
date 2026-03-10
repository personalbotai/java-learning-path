// lesson-runner.js - Shared Java runtime integration using CheerpJ
(function() {
    // Ensure CheerpJ loaded
    if (typeof CheerpJ === 'undefined') {
        console.error('CheerpJ belum dimuat');
        return;
    }

    window.runJavaLesson = function(slug, initialCode) {
        const editorId = `editor-${slug}`;
        const outputId = `output-${slug}`;
        const btnId = `run-btn-${slug}`;
        const editorDiv = document.getElementById(editorId);
        const outputDiv = document.getElementById(outputId);
        const runBtn = document.getElementById(btnId);

        if (!editorDiv || !outputDiv || !runBtn) {
            console.error('Elemen runner tidak lengkap');
            return;
        }

        // Inisialisasi Monaco jika belum
        if (!window[`editor_${slug}`]) {
            require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' }});
            require(['vs/editor/editor.main'], function() {
                window[`editor_${slug}`] = monaco.editor.create(editorDiv, {
                    value: initialCode || 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
                    language: 'java',
                    theme: 'vs-dark',
                    automaticLayout: true
                });
            });
        }

        // Run handler
        runBtn.addEventListener('click', () => {
            const editorInst = window[`editor_${slug}`];
            if (!editorInst) return;
            const code = editorInst.getValue();

            outputDiv.style.display = 'block';
            outputDiv.textContent = 'Running...';

            CheerpJ.compileString(code, 'Main', function(classBytes) {
                let output = '';
                let error = '';
                CheerpJ.runMain('Main', [], {
                    output: function(text) { output += text; },
                    error: function(text) { error += text; },
                    done: function() {
                        outputDiv.textContent = error ? `Error: ${error}` : output || '(No output)';
                    }
                });
            });
        });
    };
})();
