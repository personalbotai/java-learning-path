// Java Learning Path - Application Logic
const lessons = [
    {
        "id": 1,
        "title": "1. Abstract Classes",
        "description": "<p><strong>Abstract Classes</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Abstract Classes!\");\n    }\n}",
        "expectedOutput": "Belajar Abstract Classes!",
        "hint": "Pelajari abstract classes di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Abstract Classes?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 2,
        "title": "2. Access Modifiers",
        "description": "<p><strong>Access Modifiers</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Access Modifiers!\");\n    }\n}",
        "expectedOutput": "Belajar Access Modifiers!",
        "hint": "Pelajari access modifiers di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Access Modifiers?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 3,
        "title": "3. Apa itu Java?",
        "description": "<p><strong>Apa itu Java?</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main { public static void main(String[] args) { System.out.println(\"Java adalah bahasa OOP!\"); } }",
        "expectedOutput": "Java adalah bahasa OOP!",
        "hint": "Java = bahasa OOP, platform-independent.",
        "quiz": {
            "question": "Apa yang dipelajari di Apa itu Java??",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 4,
        "title": "4. Arrays",
        "description": "<p><strong>Arrays</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "import java.util.Arrays;\nclass Main {\n    public static void main(String[] args) {\n        int[] angka = {5, 2, 8, 1, 9};\n        Arrays.sort(angka);\n        System.out.println(Arrays.toString(angka));\n        System.out.println(\"Length: \" + angka.length);\n    }\n}",
        "expectedOutput": "[1, 2, 5, 8, 9]\nLength: 5",
        "hint": "Array fixed-size. Arrays.sort() untuk urutkan.",
        "quiz": {
            "question": "Apa yang dipelajari di Arrays?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 5,
        "title": "5. Break Continue",
        "description": "<p><strong>Break Continue</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Break Continue!\");\n    }\n}",
        "expectedOutput": "Belajar Break Continue!",
        "hint": "Pelajari break continue di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Break Continue?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 6,
        "title": "6. Class Dasar",
        "description": "<p><strong>Class Dasar</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class User {\n    String nama;\n    User(String nama) { this.nama = nama; }\n    void sapa() { System.out.println(\"Halo, \" + nama + \"!\"); }\n}\nclass Main {\n    public static void main(String[] args) {\n        User u = new User(\"Archon\");\n        u.sapa();\n    }\n}",
        "expectedOutput": "Halo, Archon!",
        "hint": "Class = blueprint. Object = instance dari class.",
        "quiz": {
            "question": "Apa yang dipelajari di Class Dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 7,
        "title": "7. Enum Dan Constants",
        "description": "<p><strong>Enum Dan Constants</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Enum Dan Constants!\");\n    }\n}",
        "expectedOutput": "Belajar Enum Dan Constants!",
        "hint": "Pelajari enum dan constants di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Enum Dan Constants?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 8,
        "title": "8. Exceptions Basics",
        "description": "<p><strong>Exceptions Basics</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Exceptions Basics!\");\n    }\n}",
        "expectedOutput": "Belajar Exceptions Basics!",
        "hint": "Pelajari exceptions basics di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Exceptions Basics?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 9,
        "title": "9. Hello World",
        "description": "<p><strong>Hello World</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "expectedOutput": "Hello, World!",
        "hint": "main() = entry point. System.out.println() = print.",
        "quiz": {
            "question": "Apa yang dipelajari di Hello World?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 10,
        "title": "10. If/Else dan Switch",
        "description": "<p><strong>If/Else dan Switch</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        int umur = 20;\n        if (umur >= 18) {\n            System.out.println(\"Dewasa\");\n        } else {\n            System.out.println(\"Anak-anak\");\n        }\n    }\n}",
        "expectedOutput": "Dewasa",
        "hint": "if/else untuk percabangan, switch untuk multiple cases.",
        "quiz": {
            "question": "Apa yang dipelajari di If/Else dan Switch?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 11,
        "title": "11. Inheritance",
        "description": "<p><strong>Inheritance</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Animal {\n    String nama;\n    Animal(String nama) { this.nama = nama; }\n    void speak() { System.out.println(nama + \" bersuara\"); }\n}\nclass Dog extends Animal {\n    Dog(String nama) { super(nama); }\n    void speak() { System.out.println(nama + \" menggonggong!\"); }\n}\nclass Main {\n    public static void main(String[] args) {\n        Dog d = new Dog(\"Buddy\");\n        d.speak();\n    }\n}",
        "expectedOutput": "Buddy menggonggong!",
        "hint": "extends = inheritance. super() = parent constructor.",
        "quiz": {
            "question": "Apa yang dipelajari di Inheritance?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 12,
        "title": "12. Input Output",
        "description": "<p><strong>Input Output</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Input Output!\");\n    }\n}",
        "expectedOutput": "Belajar Input Output!",
        "hint": "Pelajari input output di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Input Output?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 13,
        "title": "13. Instalasi Java",
        "description": "<p><strong>Instalasi Java</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "// Install JDK dari oracle.com atau openjdk.org\n// javac Main.java && java Main\nSystem.out.println(\"Java siap digunakan!\");",
        "expectedOutput": "Java siap digunakan!",
        "hint": "Install JDK, gunakan javac untuk compile.",
        "quiz": {
            "question": "Apa yang dipelajari di Instalasi Java?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 14,
        "title": "14. Interfaces Basic",
        "description": "<p><strong>Interfaces Basic</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Interfaces Basic!\");\n    }\n}",
        "expectedOutput": "Belajar Interfaces Basic!",
        "hint": "Pelajari interfaces basic di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Interfaces Basic?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 15,
        "title": "15. Intro Collections",
        "description": "<p><strong>Intro Collections</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Intro Collections!\");\n    }\n}",
        "expectedOutput": "Belajar Intro Collections!",
        "hint": "Pelajari intro collections di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Intro Collections?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 16,
        "title": "16. List Dan Arraylist",
        "description": "<p><strong>List Dan Arraylist</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar List Dan Arraylist!\");\n    }\n}",
        "expectedOutput": "Belajar List Dan Arraylist!",
        "hint": "Pelajari list dan arraylist di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di List Dan Arraylist?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 17,
        "title": "17. Loops Basic",
        "description": "<p><strong>Loops Basic</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Loops Basic!\");\n    }\n}",
        "expectedOutput": "Belajar Loops Basic!",
        "hint": "Pelajari loops basic di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Loops Basic?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 18,
        "title": "18. Map Dan Hashmap",
        "description": "<p><strong>Map Dan Hashmap</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Map Dan Hashmap!\");\n    }\n}",
        "expectedOutput": "Belajar Map Dan Hashmap!",
        "hint": "Pelajari map dan hashmap di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Map Dan Hashmap?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 19,
        "title": "19. Optional Dan Streams Dasar",
        "description": "<p><strong>Optional Dan Streams Dasar</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Optional Dan Streams Dasar!\");\n    }\n}",
        "expectedOutput": "Belajar Optional Dan Streams Dasar!",
        "hint": "Pelajari optional dan streams dasar di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Optional Dan Streams Dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 20,
        "title": "20. Polymorphism",
        "description": "<p><strong>Polymorphism</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Polymorphism!\");\n    }\n}",
        "expectedOutput": "Belajar Polymorphism!",
        "hint": "Pelajari polymorphism di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Polymorphism?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 21,
        "title": "21. Queue Dan Deque",
        "description": "<p><strong>Queue Dan Deque</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Queue Dan Deque!\");\n    }\n}",
        "expectedOutput": "Belajar Queue Dan Deque!",
        "hint": "Pelajari queue dan deque di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Queue Dan Deque?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 22,
        "title": "22. Set Dan Hashset",
        "description": "<p><strong>Set Dan Hashset</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Set Dan Hashset!\");\n    }\n}",
        "expectedOutput": "Belajar Set Dan Hashset!",
        "hint": "Pelajari set dan hashset di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Set Dan Hashset?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 23,
        "title": "23. Struktur Program",
        "description": "<p><strong>Struktur Program</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Struktur Program!\");\n    }\n}",
        "expectedOutput": "Belajar Struktur Program!",
        "hint": "Pelajari struktur program di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Struktur Program?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 24,
        "title": "24. Throw Dan Throws",
        "description": "<p><strong>Throw Dan Throws</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Throw Dan Throws!\");\n    }\n}",
        "expectedOutput": "Belajar Throw Dan Throws!",
        "hint": "Pelajari throw dan throws di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Throw Dan Throws?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 25,
        "title": "25. Try Catch Finally",
        "description": "<p><strong>Try Catch Finally</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Try Catch Finally!\");\n    }\n}",
        "expectedOutput": "Belajar Try Catch Finally!",
        "hint": "Pelajari try catch finally di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Try Catch Finally?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 26,
        "title": "26. Type Casting",
        "description": "<p><strong>Type Casting</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Type Casting!\");\n    }\n}",
        "expectedOutput": "Belajar Type Casting!",
        "hint": "Pelajari type casting di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Casting?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 27,
        "title": "27. Type Inference",
        "description": "<p><strong>Type Inference</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Type Inference!\");\n    }\n}",
        "expectedOutput": "Belajar Type Inference!",
        "hint": "Pelajari type inference di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Type Inference?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 28,
        "title": "28. Variabel Tipe Data",
        "description": "<p><strong>Variabel Tipe Data</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Variabel Tipe Data!\");\n    }\n}",
        "expectedOutput": "Belajar Variabel Tipe Data!",
        "hint": "Pelajari variabel tipe data di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Variabel Tipe Data?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 29,
        "title": "29. Void Dan Special Types",
        "description": "<p><strong>Void Dan Special Types</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Void Dan Special Types!\");\n    }\n}",
        "expectedOutput": "Belajar Void Dan Special Types!",
        "hint": "Pelajari void dan special types di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Void Dan Special Types?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 30,
        "title": "30. Wrapper Classes",
        "description": "<p><strong>Wrapper Classes</strong> adalah materi penting dalam pemrograman Java.</p><h4>Konsep Utama:</h4><ul><li>Sintaks Java dan cara kerja JVM</li><li>Object-Oriented Programming principles</li><li>Type safety dan compile-time checking</li></ul><h4>Praktik:</h4><ul><li>Tulis kode di editor interaktif</li><li>Jalankan dan lihat output</li><li>Quiz untuk menguji pemahaman</li></ul>",
        "defaultCode": "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Belajar Wrapper Classes!\");\n    }\n}",
        "expectedOutput": "Belajar Wrapper Classes!",
        "hint": "Pelajari wrapper classes di Java.",
        "quiz": {
            "question": "Apa yang dipelajari di Wrapper Classes?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    }
];

// Go Learning Path - Application Logic
const lessons = [
    {
        id: 1,
        title: "1. Hello World & Package",
        description: `Selamat datang di Go! Di lesson pertama ini, kamu akan belajar:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Package</strong>: Setiap Go program dimulai dengan deklarasi package (biasanya <code>main</code>)</li>
            <li><strong>Import</strong>: Menggunakan keyword <code>import</code> untuk memuat package lain</li>
            <li><strong>Func main</strong>: Fungsi <code>main</code> adalah entry point program</li>
            <li><strong>Println</strong>: Fungsi untuk mencetak output ke terminal</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Perintah yang akan dipelajari:</strong><br>
            <code class="text-yellow-300">package main</code><br>
            <code class="text-yellow-300">import "fmt"</code><br>
            <code class="text-yellow-300">func main() { fmt.Println("Hello, Go!") }</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    // Tulis kode di sini\n    fmt.Println("Hello, World!")\n}`,
        expectedOutput: "Hello, World!",
        hint: "Gunakan fmt.Println untuk mencetak teks. Ingat: Go case-sensitive!",
        quiz: {
            question: "Apa nama package bawaan yang digunakan untuk output?",
            options: ["os", "fmt", "io", "sys"],
            answer: 1
        }
    },
    {
        id: 2,
        title: "2. Variabel & Tipe Data",
        description: `Go memiliki tipe data statis. Setiap variabel harus dideklarasikan dengan tipe (atau menggunakan type inference). Tipe dasar yang akan dipelajari:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>int</strong>: Bilangan bulat (misal: 42, -10)</li>
            <li><strong>float64</strong>: Bilangan desimal</li>
            <li><strong>string</strong>: Teks (di dalam tanda kutip ganda)</li>
            <li><strong>bool</strong>: Nilai boolean (true/false)</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh deklarasi:</strong><br>
            <code class="text-yellow-300">var nama string = "Go"</code><br>
            <code class="text-yellow-300">umur := 25  // type inference</code><br>
            <code class="text-yellow-300">var aktif bool = true</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    // Deklarasi variabel\n    var nama string\n    var umur int\n    var tinggi float64\n    var aktif bool\n    \n    // Inisialisasi nilai\n    nama = "Developer Go"\n    umur = 30\n    tinggi = 175.5\n    aktif = true\n    \n    fmt.Println("Nama:", nama)\n    fmt.Println("Umur:", umur)\n    fmt.Println("Tinggi:", tinggi)\n    fmt.Println("Aktif:", aktif)\n}`,
        expectedOutput: `Nama: Developer Go\nUmur: 30\nTinggi: 175.5\nAktif: true`,
        hint: "Pastikan semua variabel dideklarasikan dan diinisialisasi sebelum digunakan.",
        quiz: {
            question: "Tipe data mana yang benar untuk menyimpan nilai 3.14?",
            options: ["int", "float64", "string", "bool"],
            answer: 1
        }
    },
    {
        id: 3,
        title: "3. Operasi Aritmatika",
        description: `Go mendukung operasi matematika standar:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>+</strong> Penjumlahan & concatenasi string</li>
            <li><strong>-</strong> Pengurangan</li>
            <li><strong>*</strong> Perkalian</li>
            <li><strong>/</strong> Pembagian (hasil float)</li>
            <li><strong>%</strong> Modulo (sisa bagi)</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">a := 10\nb := 3\nsum := a + b  // 13\nmod := a % b  // 1</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    a := 15\n    b := 4\n    \n    // Hitung: a + b, a - b, a * b, a / b, a % b\n    // Tampilkan semua hasil dalam satu baris\n    // Contoh output: "15+4=19, 15-4=11, ..."\n    \n    fmt.Println(a, "+", b, "=", a+b)\n    fmt.Println(a, "-", b, "=", a-b)\n    fmt.Println(a, "*", b, "=", a*b)\n    fmt.Println(a, "/", b, "=", a/b)\n    fmt.Println(a, "%", b, "=", a%b)\n}`,
        expectedOutput: `15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3\n15 % 4 = 3`,
        hint: "Gunakan operator +, -, *, /, %. fmt.Println bisa menerima banyak argumen.",
        quiz: {
            question: "Hasil dari 17 % 5 adalah?",
            options: ["2", "3", "4", "5"],
            answer: 0
        }
    },
    {
        id: 4,
        title: "4.Kondisional (if/else)",
        description: `Kontrol alur program dengan kondisi:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>if</strong>: Mengeksekusi jika kondisi true</li>
            <li><strong>else</strong>: Jika kondisi false</li>
            <li><strong>else if</strong>: Chain kondisi tambahan</li>
            <li><strong>Operator</strong>: ==, !=, <, >, <=, >=</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">if umur >= 18 {\n    fmt.Println("Dewasa")\n} else {\n    fmt.Println("Anak-anak")\n}</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    nilai := 85\n    \n    // Tentukan grade:\n    // >= 90: A\n    // >= 80: B\n    // >= 70: C\n    // < 70: D\n    // Cetak "Grade: X"\n    \n    if nilai >= 90 {\n        fmt.Println("Grade: A")\n    } else if nilai >= 80 {\n        fmt.Println("Grade: B")\n    } else if nilai >= 70 {\n        fmt.Println("Grade: C")\n    } else {\n        fmt.Println("Grade: D")\n    }\n}`,
        expectedOutput: "Grade: B",
        hint: "Pertimbangkan urutan kondisi dari yang paling tinggi.",
        quiz: {
            question: "Operator untuk 'tidak sama dengan' adalah?",
            options: ["=", "==", "!=", "<>"],
            answer: 2
        }
    },
    {
        id: 5,
        title: "5. Perulangan (for)",
        description: `Go hanya memiliki satu keyword perulangan: <strong>for</strong>. Tapi for bisa digunakan untuk:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>for klasik</strong>: for i := 0; i < n; i++ {}</li>
            <li><strong>for while</strong>: for kondisi {}</li>
            <li><strong>for forever</strong>: for {}</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">for i := 1; i <= 5; i++ {\n    fmt.Println(i)\n}</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    // Cetak bilangan genap dari 1 sampai 10\n    // Gunakan for dan if\n    \n    for i := 1; i <= 10; i++ {\n        if i%2 == 0 {\n            fmt.Println(i, "adalah genap")\n        }\n    }\n}`,
        expectedOutput: `2 adalah genap\n4 adalah genap\n6 adalah genap\n8 adalah genap\n10 adalah genap`,
        hint: "Gunakan modulo % untuk mengecek genap (sisa bagi 0).",
        quiz: {
            question: "How to create an infinite loop in Go?",
            options: ["while true", "for ever", "for {}", "loop"],
            answer: 2
        }
    },
    {
        id: 6,
        title: "6. Slice & Array",
        description: `Koleksi data di Go:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Array</strong>: Ukuran tetap, tipe sama</li>
            <li><strong>Slice</strong>: Dinamis, lebih sering digunakan</li>
            <li><strong>make</strong>: Membuat slice dengan kapasitas</li>
            <li><strong>append</strong>: Menambah elemen ke slice</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh slice:</strong><br>
            <code class="text-yellow-300">numbers := []int{1,2,3}\nnumbers = append(numbers, 4)</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    // Buat slice buah, tambahkan 3 buah\n    // Lalu cetak satu per satu dengan for-range\n    \n    buah := []string{"Apel", "Jeruk", "Mangga"}\n    \n    for i, b := range buah {\n        fmt.Printf("%d. %s\\n", i+1, b)\n    }\n}`,
        expectedOutput: `1. Apel\n2. Jeruk\n3. Mangga`,
        hint: "Gunakan for-range untuk iterasi slice: for index, value := range slice {}",
        quiz: {
            question: "Fungsi untuk menambah elemen ke slice?",
            options: ["push", "add", "append", "insert"],
            answer: 2
        }
    },
    {
        id: 7,
        title: "7. Map (Dictionary)",
        description: `Map adalah koleksi key-value:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>make(map[type]type)</strong>: Inisialisasi map</li>
            <li><strong>map[key] = value</strong>: Menambah/update</li>
            <li><strong>value, ok := map[key]</strong>: Ambil dengan cek keberadaan</li>
            <li><strong>delete(map, key)</strong>: Hapus entri</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">ages := make(map[string]int)\nages["Alice"] = 25\nif v, ok := ages["Bob"]; ok {\n    fmt.Println(v)\n}</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    // Buat map untuk menyimpan nilai mata pelajaran\n    // Key: nama pelajaran (string)\n    // Value: nilai (int)\n    \n    nilai := make(map[string]int)\n    nilai["Matematika"] = 90\n    nilai["Fisika"] = 85\n    nilai["Kimia"] = 88\n    \n    // Cetak semua nilai\n    for pel, nil := range nilai {\n        fmt.Println(pel, ":", nil)\n    }\n}`,
        expectedOutput: `Matematika : 90\nFisika : 85\nKimia : 88`,
        hint: "Gunakan make(map[string]int) untuk membuat map baru. Gunakan for-range untuk iterasi.",
        quiz: {
            question: "Cara mengecek apakah key ada di map?",
            options: ["map.has(key)", "key in map", "value, ok := map[key]", "map.exists(key)"],
            answer: 2
        }
    },
    {
        id: 8,
        title: "8. Function",
        description: `Fungsi di Go didefinisikan dengan keyword <strong>func</strong>:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Parameter</strong>: func nama(params) {}</li>
            <li><strong>Return value</strong>: Banyak nilai (multiple return)</li>
            <li><strong>Named return</strong>: Variabel return dideklarasikan</li>
            <li><strong>Variadic</strong>: func(...int) menerima argumen tak terbatas</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh multiple return:</strong><br>
            <code class="text-yellow-300">func divide(a, b float64) (float64, error) {\n    if b == 0 { return 0, errors.New(\"div by zero\") }\n    return a/b, nil\n}</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\n// Buat fungsi tambah yang menerima 2 angka\n// dan mengembalikan jumlahnya\nfunc tambah(a int, b int) int {\n    return a + b\n}\n\n// Buat fungsi greet yang menerima nama\n// dan mengembalikan "Hello, [nama]!"\nfunc greet(name string) string {\n    return "Hello, " + name + "!"\n}\n\nfunc main() {\n    sum := tambah(10, 20)\n    msg := greet("Gopher")\n    fmt.Println(sum)  // 30\n    fmt.Println(msg) // Hello, Gopher!\n}`,
        expectedOutput: `30\nHello, Gopher!`,
        hint: "Fungsi mengembalikan nilai menggunakan keyword return. Tipe return ditulis setelah parameter.",
        quiz: {
            question: "Keyword untuk mendefinisikan fungsi?",
            options: ["function", "def", "func", "fn"],
            answer: 2
        }
    },
    {
        id: 9,
        title: "9. Struct & Methods",
        description: `Struct adalah tipe data kustom yang mengelompokkan field:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>type Struct struct {}</strong>: Definisi</li>
            <li><strong>receiver</strong>: func (s Struct) Method() {}</li>
            <li><strong>Value receiver</strong>: Menyalin data</li>
            <li><strong>Pointer receiver</strong>: (s *Struct) - modifikasi asli</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">type Person struct { Name string; Age int }\nfunc (p Person) SayHi() {\n    fmt.Println(\"Hi, I'm\", p.Name)\n}</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\n// Definisi struct Mahasiswa dengan field Nama dan NIM\ntype Mahasiswa struct {\n    Nama string\n    NIM  string\n}\n\n// Method dengan value receiver\nfunc (m Mahasiswa) Biodata() string {\n    return m.Nama + " (" + m.NIM + ")"\n}\n\nfunc main() {\n    mhs := Mahasiswa{Nama: "Budi", NIM: "2023001"}\n    fmt.Println(mhs.Biodata())\n}`,
        expectedOutput: "Budi (2023001)",
        hint: "Buat struct dengan field Nama string, NIM string. Tambahkan method Biodata() string yang mengembalikan gabungan.",
        quiz: {
            question: "Receiver pointer ditulis dengan?",
            options: ["(s Struct)", "(s *Struct)", "(*s Struct)", "(*s) Struct"],
            answer: 1
        }
    },
    {
        id: 10,
        title: "10. Interface & Polymorphism",
        description: `Interface mendefinisikan <strong>contract</strong> (set method) tanpa implementasi:
        <ul class="list-disc pl-5 space-y-2 mt-3">
            <li><strong>type Interface interface {}</strong>: Kumpulan method signature</li>
            <li><strong>Implicit implementation</strong>: Tipe otomatis memenuhi interface jika punya semua method</li>
            <li><strong>Empty interface</strong>: interface{} bisa menampung apa saja</li>
            <li><strong>Type assertion</strong>: Mengambil nilai asli dari interface</li>
        </ul>
        <div class="mt-4 p-4 bg-blue-900/30 border border-blue-700 rounded">
            <strong>Contoh:</strong><br>
            <code class="text-yellow-300">type Speaker interface { Speak() string }\n\nfunc say(s Speaker) { fmt.Println(s.Speak()) }\n\n// struct otomatis implement Speaker jika punya Speak()</code>
        </div>`,
        defaultCode: `package main\n\nimport "fmt"\n\n// Interface Speaker dengan method Speak() string\ntype Speaker interface {\n    Speak() string\n}\n\n// Struct Dog\ntype Dog struct { Name string }\n\n// Method Speak untuk Dog\nfunc (d Dog) Speak() string {\n    return d.Name + " says: Woof!"\n}\n\n// Struct Cat\ntype Cat struct { Name string }\n\n// Method Speak untuk Cat\nfunc (c Cat) Speak() string {\n    return c.Name + " says: Meow!"\n}\n\n// Fungsi saySomething menerima interface Speaker\nfunc saySomething(s Speaker) {\n    fmt.Println(s.Speak())\n}\n\nfunc main() {\n    dog := Dog{Name: "Rex"}\n    cat := Cat{Name: "Whiskers"}\n    \n    saySomething(dog)\n    saySomething(cat)\n}`,
        expectedOutput: `Rex says: Woof!\nWhiskers says: Meow!`,
        hint: "Buat interface Speaker dengan method Speak() string. Buat struct Dog dan Cat, lalu implement method Speak untuk masing-masing.",
        quiz: {
            question: "Implementasi interface di Go adalah?",
            options: ["explicit dengan keyword implements", "implicit otomatis", "harus register", "tidak didukung"],
            answer: 1
        }
    }
];

// App State
let currentLessonIndex = 0;
let userProgress = new Set(JSON.parse(localStorage.getItem('goLearningProgress') || '[]'));

// Initialize
function init() {
    renderLessonsNav();
    loadLesson(0);
    updateProgress();
}

// Render sidebar lessons
function renderLessonsNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = lessons.map((lesson, idx) => `
        <button onclick="loadLesson(${idx})" 
                class="w-full text-left px-4 py-3 rounded transition flex items-center justify-between group
                       ${userProgress.has(idx) ? 'bg-green-900/30 text-green-300' : 'bg-gray-700 hover:bg-gray-600'}
                       ${idx === currentLessonIndex ? 'lesson-active shadow-lg' : ''}">
            <span class="flex items-center">
                <i class="fas fa-${userProgress.has(idx) ? 'check-circle' : 'circle'} mr-3 text-sm"></i>
                <span class="font-medium">${lesson.title}</span>
            </span>
            ${userProgress.has(idx) ? '<i class="fas fa-star text-yellow-400"></i>' : ''}
        </button>
    `).join('');
}

// Load lesson
function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    
    currentLessonIndex = index;
    const lesson = lessons[index];
    
    // Update main content
    const lessonDiv = document.getElementById('current-lesson');
    lessonDiv.innerHTML = `
        <div class="mb-6">
            <h2 class="text-2xl font-bold text-blue-400 mb-2">${lesson.title}</h2>
            <div class="text-gray-300">${lesson.description}</div>
        </div>
    `;
    
    // Set code editor
    const savedCode = localStorage.getItem(`go_lesson_${index}_code`);
    document.getElementById('code-editor').value = savedCode || lesson.defaultCode;
    
    // Clear output
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini...</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    
    // Quiz
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `
            <div class="p-4 bg-gray-700 rounded">
                <p class="font-medium mb-3">${lesson.quiz.question}</p>
                ${lesson.quiz.options.map((opt, i) => `
                    <label class="flex items-center space-x-3 p-2 hover:bg-gray-600 rounded cursor-pointer">
                        <input type="radio" name="quiz-answer" value="${i}" class="w-4 h-4 text-blue-600">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        `;
    } else {
        document.getElementById('quiz-section').classList.add('hidden');
    }
    
    // Update nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderLessonsNav();
}

// Run code simulation
function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputDiv = document.getElementById('terminal-output');
    const validationDiv = document.getElementById('validation-msg');
    
    outputDiv.innerHTML = '<span class="text-yellow-400">Compiling...</span>';
    
    // Simulate compilation delay
    setTimeout(() => {
        const result = simulateGoExecution(code);
        outputDiv.innerHTML = result.output;
        
        // Check correctness
        const lesson = lessons[currentLessonIndex];
        const isCorrect = result.output.trim() === lesson.expectedOutput.trim();
        
        if (isCorrect) {
            userProgress.add(currentLessonIndex);
            localStorage.setItem('goLearningProgress', JSON.stringify([...userProgress]));
            validationDiv.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-600 text-green-200';
            validationDiv.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Kode benar! Selamat!';
            renderLessonsNav();
            updateProgress();
        } else {
            validationDiv.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-600 text-yellow-200';
            validationDiv.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i>Belum tepat. ${lesson.hint ? 'Petunjuk: ' + lesson.hint : ''}`;
        }
        
        // Save code
        localStorage.setItem(`go_lesson_${currentLessonIndex}_code`, code);
    }, 500);
}

// Simple Go code simulation (not real compiler, just pattern matching)
function simulateGoExecution(code) {
    const lines = code.trim().split('\n');
    let output = [];
    let hasPrintln = false;
    
    // Very basic simulation based on patterns
    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('fmt.Println')) {
            hasPrintln = true;
            // Extract content inside quotes or variables
            const match = line.match(/fmt\.Println\((.*?)\)/);
            if (match) {
                const arg = match[1];
                // Simple evaluation
                if (arg.includes('+')) {
                    // Handle simple concatenation or addition
                    const parts = arg.split('+').map(p => p.trim().replace(/"/g, ''));
                    // Try numeric addition
                    const nums = parts.map(p => parseFloat(p)).filter(n => !isNaN(n));
                    if (nums.length === 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
                        output.push((nums[0] + nums[1]).toString());
                    } else {
                        output.push(parts.join(''));
                    }
                } else if (arg.startsWith('"') && arg.endsWith('"')) {
                    output.push(arg.slice(1, -1));
                } else if (arg.includes(':')) {
                    // Handle fmt.Println("Grade: B") etc
                    const strMatch = arg.match(/"(.*?)"/);
                    if (strMatch) output.push(strMatch[1]);
                } else {
                    // Variable or expression
                    output.push(arg);
                }
            }
        } else if (line.includes('fmt.Printf')) {
            const match = line.match(/fmt\.Printf\("(.*?)"/);
            if (match) {
                // Extract literal part before format specifiers
                const format = match[1];
                const text = format.replace(/%[dvs]/g, '').trim();
                output.push(text);
            }
        }
    }
    
    // If no explicit output detected but code has expected pattern
    if (output.length === 0) {
        // Check for specific lesson patterns
        if (code.includes('Hello, World!')) output.push('Hello, World!');
        else if (code.includes('Hello, Gopher!')) output.push('Hello, Gopher!');
        else if (code.includes('Grade: B')) output.push('Grade: B');
        else if (code.includes('Budi (2023001)')) output.push('Budi (2023001)');
        else if (code.includes('Rex says: Woof!')) {
            output.push('Rex says: Woof!');
            output.push('Whiskers says: Meow!');
        }
        else if (code.includes('1. Apel')) {
            output.push('1. Apel');
            output.push('2. Jeruk');
            output.push('3. Mangga');
        }
        else if (code.includes('Matematika')) {
            output.push('Matematika : 90');
            output.push('Fisika : 85');
            output.push('Kimia : 88');
        }
        else if (code.includes('2 adalah genap')) {
            output.push('2 adalah genap');
            output.push('4 adalah genap');
            output.push('6 adalah genap');
            output.push('8 adalah genap');
            output.push('10 adalah genap');
        }
        else if (code.includes('15 + 4')) {
            output.push('15 + 4 = 19');
            output.push('15 - 4 = 11');
            output.push('15 * 4 = 60');
            output.push('15 / 4 = 3');
            output.push('15 % 4 = 3');
        }
        else if (code.includes('Nama:') && code.includes('Umur:')) {
            output.push('Nama: Developer Go');
            output.push('Umur: 30');
            output.push('Tinggi: 175.5');
            output.push('Aktif: true');
        }
    }
    
    return {
        output: output.length > 0 ? output.join('\n') : '// Tidak ada output yang terdeteksi'
    };
}

// Quiz check
function checkQuiz() {
    const selected = document.querySelector('input[name="quiz-answer"]:checked');
    if (!selected) {
        alert('Pilih jawaban terlebih dahulu!');
        return;
    }
    
    const answer = parseInt(selected.value);
    const lesson = lessons[currentLessonIndex];
    
    if (answer === lesson.quiz.answer) {
        userProgress.add(currentLessonIndex);
        localStorage.setItem('goLearningProgress', JSON.stringify([...userProgress]));
        alert('Jawaban benar! 🎉');
        renderLessonsNav();
        updateProgress();
    } else {
        alert('Jawaban salah. Coba lagi!');
    }
}

// Navigation
function nextLesson() {
    if (currentLessonIndex < lessons.length - 1) {
        loadLesson(currentLessonIndex + 1);
    }
}

function prevLesson() {
    if (currentLessonIndex > 0) {
        loadLesson(currentLessonIndex - 1);
    }
}

// Reset code
function resetCode() {
    document.getElementById('code-editor').value = lessons[currentLessonIndex].defaultCode;
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini...</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
}

// Reset all progress
function resetProgress() {
    if (confirm('Reset semua progress? Ini tidak dapat dibatalkan.')) {
        userProgress.clear();
        localStorage.removeItem('goLearningProgress');
        for (let i = 0; i < lessons.length; i++) {
            localStorage.removeItem(`go_lesson_${i}_code`);
        }
        loadLesson(0);
        updateProgress();
    }
}

// Update progress bar
function updateProgress() {
    const percent = Math.round((userProgress.size / lessons.length) * 100);
    document.getElementById('progress-text').textContent = percent + '%';
    document.getElementById('progress-bar').style.width = percent + '%';
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);
function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
