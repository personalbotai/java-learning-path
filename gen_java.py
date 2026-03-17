import json, os

with open('lesson_names.txt') as f:
    files = [l.strip() for l in f if l.strip()]

# Java-specific content
CONTENT = {
    'apa-itu-java': ('Apa itu Java?', 'class Main { public static void main(String[] args) { System.out.println("Java adalah bahasa OOP!"); } }', 'Java adalah bahasa OOP!', 'Java = bahasa OOP, platform-independent.'),
    'instalasi-java': ('Instalasi Java', '// Install JDK dari oracle.com atau openjdk.org\n// javac Main.java && java Main\nSystem.out.println("Java siap digunakan!");', 'Java siap digunakan!', 'Install JDK, gunakan javac untuk compile.'),
    'hello-world': ('Hello World', 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}', 'Hello, World!', 'main() = entry point. System.out.println() = print.'),
    'variabel-dan-tipe-data': ('Variabel dan Tipe Data', 'class Main {\n    public static void main(String[] args) {\n        String nama = "Archon";\n        int umur = 25;\n        double tinggi = 175.5;\n        boolean aktif = true;\n        System.out.println(nama + " " + umur);\n    }\n}', 'Archon 25', 'Tipe primitif: int, double, boolean, char. String = class.'),
    'operator': ('Operator', 'class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        System.out.println("a+b=" + (a+b));\n        System.out.println("a%b=" + (a%b));\n        System.out.println("a==b: " + (a==b));\n    }\n}', 'a+b=13\na%b=1\na==b: false', 'Operator: +, -, *, /, %, ==, !=, &&, ||.'),
    'if-else-dan-switch': ('If/Else dan Switch', 'class Main {\n    public static void main(String[] args) {\n        int umur = 20;\n        if (umur >= 18) {\n            System.out.println("Dewasa");\n        } else {\n            System.out.println("Anak-anak");\n        }\n    }\n}', 'Dewasa', 'if/else untuk percabangan, switch untuk multiple cases.'),
    'loops': ('Loops', 'class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            System.out.println("i=" + i);\n        }\n        int j = 0;\n        while (j < 2) {\n            System.out.println("j=" + j);\n            j++;\n        }\n    }\n}', 'i=0\ni=1\ni=2\nj=0\nj=1', 'for, while, do-while = jenis loop di Java.'),
    'arrays': ('Arrays', 'import java.util.Arrays;\nclass Main {\n    public static void main(String[] args) {\n        int[] angka = {5, 2, 8, 1, 9};\n        Arrays.sort(angka);\n        System.out.println(Arrays.toString(angka));\n        System.out.println("Length: " + angka.length);\n    }\n}', '[1, 2, 5, 8, 9]\nLength: 5', 'Array fixed-size. Arrays.sort() untuk urutkan.'),
    'class-dasar': ('Class Dasar', 'class User {\n    String nama;\n    User(String nama) { this.nama = nama; }\n    void sapa() { System.out.println("Halo, " + nama + "!"); }\n}\nclass Main {\n    public static void main(String[] args) {\n        User u = new User("Archon");\n        u.sapa();\n    }\n}', 'Halo, Archon!', 'Class = blueprint. Object = instance dari class.'),
    'inheritance-extends-super': ('Inheritance', 'class Animal {\n    String nama;\n    Animal(String nama) { this.nama = nama; }\n    void speak() { System.out.println(nama + " bersuara"); }\n}\nclass Dog extends Animal {\n    Dog(String nama) { super(nama); }\n    void speak() { System.out.println(nama + " menggonggong!"); }\n}\nclass Main {\n    public static void main(String[] args) {\n        Dog d = new Dog("Buddy");\n        d.speak();\n    }\n}', 'Buddy menggonggong!', 'extends = inheritance. super() = parent constructor.'),
}

lessons = []
for i, f in enumerate(files, 1):
    if f in CONTENT:
        title, code, output, hint = CONTENT[f]
    else:
        title = f.replace('-', ' ').title()
        code = f'class Main {{\n    public static void main(String[] args) {{\n        System.out.println("Belajar {title}!");\n    }}\n}}'
        output = f'Belajar {title}!'
        hint = f'Pelajari {title.lower()} di Java.'
    
    lessons.append({
        "id": i,
        "title": f"{i}. {title}",
        "description": f"<p><strong>{title}</strong> adalah konsep penting dalam Java.</p>",
        "defaultCode": code,
        "expectedOutput": output,
        "hint": hint,
        "quiz": {
            "question": f"Apa yang dipelajari di {title}?",
            "options": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
            "answer": 0
        }
    })

with open('app.js', 'w', encoding='utf-8') as out:
    out.write('// Java Learning Path - Application Logic\n')
    out.write('const lessons = ')
    out.write(json.dumps(lessons, indent=4, ensure_ascii=False))
    out.write(';\n\n')
    # Add Go-style runtime
    out.write(open('/data/data/com.termux/files/home/.openclaw/workspace/ui-template/base-app.js').read().split('function escapeHtml')[0])
    out.write('function escapeHtml(str) {\n    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");\n}\n')

print(f"Generated {len(lessons)} Java lessons!")
