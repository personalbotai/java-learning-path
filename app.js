// Java Learning Path
const MODULES = [
    {
        "id": 1,
        "title": "Pengenalan",
        "icon": "fas fa-play-circle"
    },
    {
        "id": 2,
        "title": "Dasar",
        "icon": "fas fa-cube"
    },
    {
        "id": 3,
        "title": "OOP",
        "icon": "fas fa-object-group"
    },
    {
        "id": 4,
        "title": "Lanjutan",
        "icon": "fas fa-rocket"
    }
];
const lessons = [
    {
        "id": 1,
        "title": "1. Abstract Classes",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/abstract-classes.md",
        "description": "<p><strong>Abstract Classes</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Abstract Classes?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 2,
        "title": "2. Access Modifiers",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/access-modifiers.md",
        "description": "<p><strong>Access Modifiers</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Access Modifiers?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 3,
        "title": "3. Apa Itu Java",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/apa-itu-java.md",
        "description": "<p><strong>Apa Itu Java</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Apa Itu Java?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 4,
        "title": "4. Arrays",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/arrays.md",
        "description": "<p><strong>Arrays</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Arrays?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 5,
        "title": "5. Break Continue",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/break-continue.md",
        "description": "<p><strong>Break Continue</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Break Continue?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 6,
        "title": "6. Class Dasar",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/class-dasar.md",
        "description": "<p><strong>Class Dasar</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Class Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 7,
        "title": "7. Enum Dan Constants",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/enum-dan-constants.md",
        "description": "<p><strong>Enum Dan Constants</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Enum Dan Constants?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 8,
        "title": "8. Exceptions Basics",
        "module": "Pengenalan",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/exceptions-basics.md",
        "description": "<p><strong>Exceptions Basics</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Exceptions Basics?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 9,
        "title": "9. Hello World",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/hello-world.md",
        "description": "<p><strong>Hello World</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Hello World?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 10,
        "title": "10. If Else Dan Switch",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/if-else-dan-switch.md",
        "description": "<p><strong>If Else Dan Switch</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di If Else Dan Switch?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 11,
        "title": "11. Inheritance Extends Super",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/inheritance-extends-super.md",
        "description": "<p><strong>Inheritance Extends Super</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Inheritance Extends Super?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 12,
        "title": "12. Input Output",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/input-output.md",
        "description": "<p><strong>Input Output</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Input Output?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 13,
        "title": "13. Instalasi Java",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/instalasi-java.md",
        "description": "<p><strong>Instalasi Java</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Instalasi Java?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 14,
        "title": "14. Interfaces Basic",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/interfaces-basic.md",
        "description": "<p><strong>Interfaces Basic</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Interfaces Basic?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 15,
        "title": "15. Intro Collections",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/intro-collections.md",
        "description": "<p><strong>Intro Collections</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Intro Collections?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 16,
        "title": "16. List Dan Arraylist",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/list-dan-arraylist.md",
        "description": "<p><strong>List Dan Arraylist</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di List Dan Arraylist?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 17,
        "title": "17. Loops Basic",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/loops-basic.md",
        "description": "<p><strong>Loops Basic</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Loops Basic?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 18,
        "title": "18. Map Dan Hashmap",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/map-dan-hashmap.md",
        "description": "<p><strong>Map Dan Hashmap</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Map Dan Hashmap?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 19,
        "title": "19. Optional Dan Streams Dasar",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/optional-dan-streams-dasar.md",
        "description": "<p><strong>Optional Dan Streams Dasar</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Optional Dan Streams Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 20,
        "title": "20. Polymorphism",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/polymorphism.md",
        "description": "<p><strong>Polymorphism</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Polymorphism?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 21,
        "title": "21. Queue Dan Deque",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/queue-dan-deque.md",
        "description": "<p><strong>Queue Dan Deque</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Queue Dan Deque?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 22,
        "title": "22. Set Dan Hashset",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/set-dan-hashset.md",
        "description": "<p><strong>Set Dan Hashset</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Set Dan Hashset?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 23,
        "title": "23. Struktur Program",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/struktur-program.md",
        "description": "<p><strong>Struktur Program</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Struktur Program?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 24,
        "title": "24. Throw Dan Throws",
        "module": "OOP",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/throw-dan-throws.md",
        "description": "<p><strong>Throw Dan Throws</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Throw Dan Throws?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 25,
        "title": "25. Try Catch Finally",
        "module": "Lanjutan",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/try-catch-finally.md",
        "description": "<p><strong>Try Catch Finally</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Try Catch Finally?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 26,
        "title": "26. Type Casting",
        "module": "Lanjutan",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/type-casting.md",
        "description": "<p><strong>Type Casting</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Casting?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 27,
        "title": "27. Type Inference",
        "module": "Lanjutan",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/type-inference.md",
        "description": "<p><strong>Type Inference</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Inference?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 28,
        "title": "28. Variabel Tipe Data",
        "module": "Lanjutan",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/variabel-tipe-data.md",
        "description": "<p><strong>Variabel Tipe Data</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Variabel Tipe Data?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 29,
        "title": "29. Void Dan Special Types",
        "module": "Lanjutan",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/void-dan-special-types.md",
        "description": "<p><strong>Void Dan Special Types</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Void Dan Special Types?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 30,
        "title": "30. Wrapper Classes",
        "module": "Lanjutan",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/java-learning-path/main/lessons/wrapper-classes.md",
        "description": "<p><strong>Wrapper Classes</strong></p>",
        "defaultCode": "// Write Java here\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
        "expectedOutput": "Hello, Java!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Wrapper Classes?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    }
];
let currentLesson=0;
let progress=JSON.parse(localStorage.getItem("java_progress")||"{}");
function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const completed = modLessons.filter(l => progress[l.id]).length;
        const isExpanded = mod.id === (Math.floor(currentLesson / 10) + 1);
        return `
            <div class="mb-3">
                <div class="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-gray-300 cursor-pointer hover:text-white rounded hover:bg-gray-700/50" onclick="toggleModule(${mod.id})">
                    <span><i class="${mod.icon} mr-2 text-blue-400"></i>${mod.title}</span>
                    <span class="text-xs text-gray-500">${completed}/${modLessons.length}</span>
                </div>
                <div id="module-${mod.id}" class="space-y-0.5 mt-1 ${isExpanded ? '' : 'hidden'}">
                    ${modLessons.map(l => {
                        const idx = lessons.indexOf(l);
                        return `<button onclick="loadLesson(${idx})" 
                            class="w-full text-left px-3 py-1.5 rounded text-xs hover:bg-gray-700 transition 
                            ${idx === currentLesson ? 'lesson-active' : ''} 
                            ${progress[l.id] ? 'text-green-400' : 'text-gray-400'}">
                            <span class="mr-1">${progress[l.id] ? '✅' : '○'}</span>${l.title}
                        </button>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleModule(modId) {
    const el = document.getElementById('module-' + modId);
    if (el) el.classList.toggle('hidden');
}

async function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    
    // Show loading
    document.getElementById('lesson-content').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</div>`;
    
    // Fetch and render markdown from lessons folder
    let contentHtml = lesson.description || '';
    if (lesson.mdFile && typeof marked !== 'undefined') {
        try {
            const response = await fetch(lesson.mdFile);
            if (response.ok) {
                const mdText = await response.text();
                contentHtml = marked.parse(mdText);
            }
        } catch (e) {
            console.error('Error loading:', lesson.mdFile, e);
        }
    }
    
    document.getElementById('lesson-content').innerHTML = `
        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
        <h2 class="text-xl font-bold mb-4 text-white">${lesson.title}</h2>
        <div class="prose prose-invert prose-sm max-w-none leading-relaxed
            prose-headings:text-blue-300 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
            prose-p:text-gray-300 prose-p:mb-3
            prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
            prose-ul:text-gray-300 prose-li:mb-1
            prose-strong:text-white prose-a:text-blue-400">
            ${contentHtml}
        </div>`;
    document.getElementById('code-editor').value = (lesson.defaultCode || '').replace(/\\n/g, '\n');
    document.getElementById('output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `<p class="font-medium">${lesson.quiz.question}</p><div class="space-y-2">${lesson.quiz.options.map((opt, i) => `<label class="flex items-center space-x-2 cursor-pointer"><input type="radio" name="quiz" value="${i}" class="text-blue-500"><span>${opt}</span></label>`).join('')}</div>`;
    } else { document.getElementById('quiz-section').classList.add('hidden'); }
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    // Update complete button
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    if (progress[lesson.id]) {
        completeBtn.style.display = 'none';
        completedBtn.style.display = 'block';
    } else {
        completeBtn.style.display = 'block';
        completedBtn.style.display = 'none';
    }
    
    // Update breadcrumb
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    document.getElementById('breadcrumb').textContent = mod ? mod.title : '';
    
    // Update nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderNav();
    window.scrollTo(0, 0);
}

// Overridden by Pyodide in index.html
// // runCode is overridden by Pyodide in index.html
async function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    const validation = document.getElementById('validation-msg');
    const lesson = lessons[currentLesson];
    
    // Show user's code
    output.innerHTML = '<div class="mb-3"><span class="text-gray-400 text-xs">// Your code:</span></div>' +
        '<pre class="text-gray-300 mb-3">' + escapeHtml(code) + '</pre>' +
        '<div class="border-t border-gray-700 pt-3 mt-3"><span class="text-gray-400 text-xs">// Expected output:</span></div>' +
        '<pre class="text-green-400">' + escapeHtml(lesson.expectedOutput) + '</pre>';
    
    validation.className = 'mt-4 p-3 rounded bg-blue-900/50 border border-blue-500 text-blue-300';
    validation.innerHTML = '<i class="fas fa-info-circle mr-2"></i>Java tidak bisa dijalankan di browser (tidak ada JVM). Menampilkan output yang diharapkan.';
}

function resetCode() { document.getElementById('code-editor').value = lessons[currentLesson].defaultCode; }
function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban dulu!');
    const msg = document.createElement('div');
    msg.className = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300' : 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
    msg.innerHTML = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? '<i class="fas fa-check-circle mr-2"></i>Benar!' : '<i class="fas fa-times-circle mr-2"></i>Salah!';
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}
function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }

function markComplete() {
    const lesson = lessons[currentLesson];
    progress[lesson.id] = true;
    localStorage.setItem('java_progress', JSON.stringify(progress));
    
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    completeBtn.style.display = 'none';
    completedBtn.style.display = 'block';
    
    renderNav();
    
    // Auto-advance to next lesson
    if (currentLesson < lessons.length - 1) {
        setTimeout(() => loadLesson(currentLesson + 1), 500);
    }
}

function updateProgress() { const done = Object.keys(progress).length; const pct = Math.round((done / lessons.length) * 100); document.getElementById('course-progress').textContent = pct + '%'; document.getElementById('progress-fill').style.width = pct + '%'; }
function resetProgress() { if (!confirm('Reset semua progress?')) return; progress = {}; localStorage.removeItem('java_progress'); renderNav(); updateProgress(); }
function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load progress from localStorage
    progress = JSON.parse(localStorage.getItem('java_progress') || '{}');
    
    // Render sidebar
    renderNav();
    
    // Load first lesson
    if (lessons.length > 0) {
        loadLesson(0);
    }
});
