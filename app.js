// ============================================
// Java Learning Path — Interactive Learning Engine
// ============================================

const MODULES = [
  {
    "id": 1,
    "title": "Dasar-Dasar Java",
    "icon": "fas fa-play-circle",
    "lessons": [
      {
        "slug": "apa-itu-java",
        "title": "Apa itu Java?",
        "duration": "15 min"
      },
      {
        "slug": "instalasi-java",
        "title": "Instalasi Java & IDE",
        "duration": "20 min"
      },
      {
        "slug": "struktur-program",
        "title": "Struktur Program Java",
        "duration": "15 min"
      },
      {
        "slug": "variabel-tipe-data",
        "title": "Variabel & Tipe Data",
        "duration": "20 min"
      },
      {
        "slug": "input-output",
        "title": "Input & Output",
        "duration": "15 min"
      },
      {
        "slug": "hello-world",
        "title": "Hello World",
        "duration": "10 min"
      }
    ]
  },
  {
    "id": 2,
    "title": "Tipe Data & Operators",
    "icon": "fas fa-cube",
    "lessons": [
      {
        "slug": "wrapper-classes",
        "title": "Wrapper Classes",
        "duration": "15 min"
      },
      {
        "slug": "arrays",
        "title": "Array",
        "duration": "20 min"
      },
      {
        "slug": "enum-dan-constants",
        "title": "Enum & Constants",
        "duration": "15 min"
      },
      {
        "slug": "void-dan-special-types",
        "title": "Void & Special Types",
        "duration": "15 min"
      },
      {
        "slug": "type-casting",
        "title": "Type Casting",
        "duration": "20 min"
      },
      {
        "slug": "type-inference",
        "title": "Type Inference (var)",
        "duration": "15 min"
      }
    ]
  },
  {
    "id": 3,
    "title": "Kontrol Alur & Exceptions",
    "icon": "fas fa-code-branch",
    "lessons": [
      {
        "slug": "if-else-dan-switch",
        "title": "If-Else & Switch",
        "duration": "20 min"
      },
      {
        "slug": "loops-basic",
        "title": "Loop Dasar (for, while)",
        "duration": "20 min"
      },
      {
        "slug": "break-continue",
        "title": "Break & Continue",
        "duration": "15 min"
      },
      {
        "slug": "exceptions-basics",
        "title": "Exceptions Basics",
        "duration": "20 min"
      },
      {
        "slug": "try-catch-finally",
        "title": "Try-Catch-Finally",
        "duration": "20 min"
      },
      {
        "slug": "throw-dan-throws",
        "title": "Throw & Throws",
        "duration": "15 min"
      }
    ]
  },
  {
    "id": 4,
    "title": "Object-Oriented Programming",
    "icon": "fas fa-layer-group",
    "lessons": [
      {
        "slug": "class-dasar",
        "title": "Class & Object Dasar",
        "duration": "20 min"
      },
      {
        "slug": "access-modifiers",
        "title": "Access Modifiers",
        "duration": "15 min"
      },
      {
        "slug": "inheritance-extends-super",
        "title": "Inheritance & Super",
        "duration": "20 min"
      },
      {
        "slug": "abstract-classes",
        "title": "Abstract Classes",
        "duration": "15 min"
      },
      {
        "slug": "interfaces-basic",
        "title": "Interfaces Dasar",
        "duration": "20 min"
      },
      {
        "slug": "polymorphism",
        "title": "Polymorphism",
        "duration": "15 min"
      }
    ]
  },
  {
    "id": 5,
    "title": "Collections Framework",
    "icon": "fas fa-boxes",
    "lessons": [
      {
        "slug": "intro-collections",
        "title": "Intro to Collections",
        "duration": "20 min"
      },
      {
        "slug": "list-dan-arraylist",
        "title": "List & ArrayList",
        "duration": "20 min"
      },
      {
        "slug": "set-dan-hashset",
        "title": "Set & HashSet",
        "duration": "15 min"
      },
      {
        "slug": "map-dan-hashmap",
        "title": "Map & HashMap",
        "duration": "20 min"
      },
      {
        "slug": "queue-dan-deque",
        "title": "Queue & Deque",
        "duration": "15 min"
      },
      {
        "slug": "optional-dan-streams-dasar",
        "title": "Optional & Streams",
        "duration": "25 min"
      }
    ]
  }
];
const LESSONS = [
  {
    "id": 1,
    "slug": "apa-itu-java",
    "title": "1. Apa itu Java?",
    "module": "Dasar-Dasar Java",
    "moduleId": 1,
    "duration": "15 min",
    "mdFile": "lessons/apa-itu-java.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Java: Write Once, Run Anywhere!\");\n        System.out.println(\"Versi Java aktif: \" + System.getProperty(\"java.version\"));\n    }\n}",
    "expectedOutput": "Java: Write Once, Run Anywhere!\nVersi Java aktif: 21.0.2",
    "hint": "Gunakan System.out.println untuk mencetak teks ke layar.",
    "quiz": [
      {
        "question": "Apa singkatan JVM?",
        "options": [
          "Java Virtual Machine",
          "Java Version Manager",
          "Joint Virtual Memory",
          "Java Visual Manager"
        ],
        "answer": 0,
        "explanation": "JVM (Java Virtual Machine) adalah mesin virtual yang menjalankan bytecode Java."
      },
      {
        "question": "Tahun rilis pertama Java adalah?",
        "options": [
          "1991",
          "1995",
          "2000",
          "1998"
        ],
        "answer": 1,
        "explanation": "Java pertama kali dirilis oleh Sun Microsystems pada tahun 1995."
      },
      {
        "question": "Siapa pencipta Java?",
        "options": [
          "Bjarne Stroustrup",
          "James Gosling",
          "Guido van Rossum",
          "Yukihiro Matsumoto"
        ],
        "answer": 1,
        "explanation": "Java dikembangkan oleh James Gosling dan tim di Sun Microsystems."
      },
      {
        "question": "Prinsip Write Once Run Anywhere dimungkinkan oleh?",
        "options": [
          "Compiler",
          "Interpreter",
          "JVM",
          "OS"
        ],
        "answer": 2,
        "explanation": "JVM (Java Virtual Machine) memungkinkan program Java berjalan di berbagai platform."
      },
      {
        "question": "Java termasuk paradigma bahasa?",
        "options": [
          "Procedural",
          "Functional only",
          "Object-oriented",
          "Markup"
        ],
        "answer": 2,
        "explanation": "Java adalah bahasa yang berorientasi objek (object-oriented)."
      }
    ]
  },
  {
    "id": 2,
    "slug": "instalasi-java",
    "title": "2. Instalasi Java & IDE",
    "module": "Dasar-Dasar Java",
    "moduleId": 1,
    "duration": "20 min",
    "mdFile": "lessons/instalasi-java.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Cek status JDK:\");\n        System.out.println(\"- Kompiler : javac\");\n        System.out.println(\"- Runtime  : java\");\n        System.out.println(\"Setup Java selesai dan siap digunakan!\");\n    }\n}",
    "expectedOutput": "Cek status JDK:\n- Kompiler : javac\n- Runtime  : java\nSetup Java selesai dan siap digunakan!",
    "hint": "Pastikan perintah javac -version dan java -version berhasil dijalankan di terminal.",
    "quiz": [
      {
        "question": "Apa yang dikandung dalam JDK?",
        "options": [
          "Hanya Java Runtime Environment (JRE)",
          "Compiler, JRE, dan library tambahan",
          "Hanya compiler (javac)",
          "IDE resmi Oracle"
        ],
        "answer": 1,
        "explanation": "JDK berisi JRE, compiler (javac), serta library dan tools tambahan seperti javadoc."
      },
      {
        "question": "Perintah untuk mengkompilasi file Java adalah?",
        "options": [
          "java",
          "javac",
          "javaw",
          "jvm"
        ],
        "answer": 1,
        "explanation": "javac (Java compiler) digunakan untuk mengubah .java menjadi .class."
      },
      {
        "question": "Apa tujuan variabel JAVA_HOME?",
        "options": [
          "Menentukan lokasi IDE",
          "Menentukan lokasi JDK untuk tooling lain",
          "Mengatur ukuran heap",
          "Menentukan port JVM"
        ],
        "answer": 1,
        "explanation": "JAVA_HOME menunjuk ke direktori instalasi JDK, digunakan oleh banyak tool (Maven, Gradle, Tomcat)."
      },
      {
        "question": "IDE berikut yang POPULER untuk Java, kecuali:",
        "options": [
          "IntelliJ IDEA",
          "Eclipse",
          "NetBeans",
          "Visual Studio Code",
          "Vim"
        ],
        "answer": 4,
        "explanation": "Vim adalah text editor, bukan IDE khusus Java (meski dapat digunakan)."
      },
      {
        "question": "Setelah instalasi, perintah apa untuk memeriksa versi JDK?",
        "options": [
          "java -v",
          "javac -version",
          "java -version",
          "Both b and c"
        ],
        "answer": 3,
        "explanation": "java -version menunjukkan versi runtime, javac -version menunjukkan versi compiler. Keduanya berguna."
      }
    ]
  },
  {
    "id": 3,
    "slug": "struktur-program",
    "title": "3. Struktur Program Java",
    "module": "Dasar-Dasar Java",
    "moduleId": 1,
    "duration": "15 min",
    "mdFile": "lessons/struktur-program.md",
    "defaultCode": "// File: Main.java\npublic class Main {\n    // Entry point aplikasi Java\n    public static void main(String[] args) {\n        System.out.println(\"Struktur Program Java:\");\n        System.out.println(\"1. Nama class sama dengan nama file\");\n        System.out.println(\"2. Method main dieksekusi pertama kali oleh JVM\");\n    }\n}",
    "expectedOutput": "Struktur Program Java:\n1. Nama class sama dengan nama file\n2. Method main dieksekusi pertama kali oleh JVM",
    "hint": "Setiap program Java harus memiliki minimal satu class dengan method public static void main(String[] args).",
    "quiz": [
      {
        "question": "Apa nama default package jika tidak dinyatakan?",
        "options": [
          "java.lang",
          "default package",
          "global",
          "null"
        ],
        "answer": 1,
        "explanation": "Jika tidak ada statement package, class berada di default package (tanpa nama)."
      },
      {
        "question": "Signature method main yang benar adalah?",
        "options": [
          "public void main(String args)",
          "public static void main(String[] args)",
          "static void main(String[] args)",
          "public static main(String[] args)"
        ],
        "answer": 1,
        "explanation": "Signature yang diterima JVM adalah public static void main(String[] args)."
      },
      {
        "question": "Jika class dideklarasikan public, nama file harus?",
        "options": [
          "Sama dengan class name",
          "Main.java",
          "Tidak pengaruh",
          "Bebas"
        ],
        "answer": 0,
        "explanation": "File harus memiliki nama yang persis sama dengan public class (case-sensitive)."
      },
      {
        "question": "Apa yang terjadi jika tidak ada method main?",
        "options": [
          "Program tetap berjalan dari atas ke bawah",
          "JVM akan mencari metode lain",
          "Program gagal dijalankan dengan error 'Main method not found'",
          "Tidak ada efek"
        ],
        "answer": 2,
        "explanation": "JVM mencari entry point main; jika tidak ditemukan, error MAIN CLASS NOT FOUND."
      },
      {
        "question": "Modifier yang membuat method dapat diakses oleh JVM tanpa instance adalah?",
        "options": [
          "public",
          "static",
          "final",
          "protected"
        ],
        "answer": 1,
        "explanation": "static memungkinkan method dipanggil tanpa membuat instance class."
      }
    ]
  },
  {
    "id": 4,
    "slug": "variabel-tipe-data",
    "title": "4. Variabel & Tipe Data",
    "module": "Dasar-Dasar Java",
    "moduleId": 1,
    "duration": "20 min",
    "mdFile": "lessons/variabel-tipe-data.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        String nama = \"Alex\";\n        int usia = 21;\n        double ipk = 3.85;\n        boolean aktif = true;\n\n        System.out.println(\"Nama  : \" + nama);\n        System.out.println(\"Usia  : \" + usia + \" tahun\");\n        System.out.println(\"IPK   : \" + ipk);\n        System.out.println(\"Aktif : \" + aktif);\n    }\n}",
    "expectedOutput": "Nama  : Alex\nUsia  : 21 tahun\nIPK   : 3.85\nAktif : true",
    "hint": "Tipe primitif mencakup int, double, boolean, char, byte, short, long, float.",
    "quiz": [
      {
        "question": "Tipe data primitif untuk bilangan pecahan desimal biasanya?",
        "options": [
          "float",
          "double",
          "decimal",
          "real"
        ],
        "answer": 1,
        "explanation": "double digunakan untuk bilangan pecahan dengan presisi 2× lebih tinggi daripada float."
      },
      {
        "question": "Range tipe byte adalah?",
        "options": [
          "-128 sampai 127",
          "-256 sampai 255",
          "0-255",
          "-32768 sampai 32767"
        ],
        "answer": 0,
        "explanation": "byte adalah 8-bit signed integer, range -128..127."
      },
      {
        "question": "Apa hasil dari (int) 3.14?",
        "options": [
          "3",
          "3.0",
          "4",
          "Error kompilasi"
        ],
        "answer": 0,
        "explanation": "Cast double ke int akan memotong bagian desimal, hasil 3."
      },
      {
        "question": "Kata kunci untuk membuat variabel tidak dapat diubah adalah?",
        "options": [
          "static",
          "final",
          "const",
          "immutable"
        ],
        "answer": 1,
        "explanation": "final digunakan untuk membuat variabel (atau field) konstan."
      },
      {
        "question": "Manakah yang merupakan tipe reference?",
        "options": [
          "int",
          "boolean",
          "String",
          "char"
        ],
        "answer": 2,
        "explanation": "String adalah class, termasuk tipe reference."
      }
    ]
  },
  {
    "id": 5,
    "slug": "input-output",
    "title": "5. Input & Output",
    "module": "Dasar-Dasar Java",
    "moduleId": 1,
    "duration": "15 min",
    "mdFile": "lessons/input-output.md",
    "defaultCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Simulasi input menggunakan scanner string\n        String data = \"Budi 25\";\n        Scanner sc = new Scanner(data);\n\n        String nama = sc.next();\n        int umur = sc.nextInt();\n\n        System.out.printf(\"Halo %s, umur Anda %d tahun!%n\", nama, umur);\n        sc.close();\n    }\n}",
    "expectedOutput": "Halo Budi, umur Anda 25 tahun!",
    "hint": "Gunakan Scanner(System.in) untuk input real-time dari console terminal.",
    "quiz": [
      {
        "question": "Method mana yang menambahkan newline otomatis?",
        "options": [
          "System.out.print",
          "System.out.println",
          "System.out.printf",
          "System.out.write"
        ],
        "answer": 1,
        "explanation": "println menambahkan newline; print tidak."
      },
      {
        "question": "Kelas apa yang umum digunakan untuk membaca input keyboard?",
        "options": [
          "BufferedReader",
          "Scanner",
          "InputStreamReader",
          "Console"
        ],
        "answer": 1,
        "explanation": "Scanner (java.util.Scanner) menyediakan cara mudah membaca token dari System.in."
      },
      {
        "question": "Setelah menggunakan Scanner, etika yang benar adalah?",
        "options": [
          "Tutup scanner dengan close()",
          "Biarkan saja",
          "Hancurkan dengan System.gc()",
          "Assign ke null"
        ],
        "answer": 0,
        "explanation": "Scanner meng-wrap resource; sebaiknya ditutup dengan close() untuk melepaskan resource."
      },
      {
        "question": "Kesalahan umum setelah nextInt() sebelum nextLine()?",
        "options": [
          "nextLine() membaca newline sisa",
          "nextInt() lebih lambat",
          "nextLine() tidak ada",
          "Tidak ada masalah"
        ],
        "answer": 0,
        "explanation": "nextInt() tidak mengonsumsi newline; panggilan nextLine() berikutnya akan membaca newline kosong. Gunakan scanner.nextLine() tambahan untuk consume newline."
      },
      {
        "question": "Method mana untuk parsing String ke integer?",
        "options": [
          "Integer.parseInt()",
          "Integer.valueOf()",
          "Integer.decode()",
          "Semua di atas"
        ],
        "answer": 0,
        "explanation": "Integer.parseInt()是最常见的. valueOf返回Integer对象."
      }
    ]
  },
  {
    "id": 6,
    "slug": "hello-world",
    "title": "6. Hello World",
    "module": "Dasar-Dasar Java",
    "moduleId": 1,
    "duration": "10 min",
    "mdFile": "lessons/hello-world.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
    "expectedOutput": "Hello, World!",
    "hint": "Ketik System.out.println(\"Hello, World!\");",
    "quiz": [
      {
        "question": "Perintah untuk mengkompilasi HelloWorld.java adalah?",
        "options": [
          "java HelloWorld",
          "javac HelloWorld.java",
          "javaw HelloWorld",
          "compile HelloWorld"
        ],
        "answer": 1,
        "explanation": "javac (Java compiler) digunakan untuk mengompile .java menjadi .class."
      },
      {
        "question": "Setelah kompilasi, file apa yang dihasilkan?",
        "options": [
          ".java",
          ".exe",
          ".class",
          ".jar"
        ],
        "answer": 2,
        "explanation": "Kompilasi menghasilkan bytecode dalam file .class."
      },
      {
        "question": "Perintah untuk menjalankan program HelloWorld adalah?",
        "options": [
          "java HelloWorld.class",
          "java HelloWorld",
          "javaw HelloWorld",
          "run HelloWorld"
        ],
        "answer": 1,
        "explanation": "Gunakan 'java' diikuti nama class (tanpa .class)."
      },
      {
        "question": "Apa yang terjadi jika nama file tidak sama dengan public class?",
        "options": [
          "Tidak masalah",
          "Error kompilasi",
          "Error saat menjalankan",
          "Java otomatis mengganti"
        ],
        "answer": 1,
        "explanation": "Compiler menolak jika public class name tidak sesuai nama file."
      },
      {
        "question": "Apa fungsi method main?",
        "options": [
          "Menyimpan data",
          "Entry point program",
          "Komplier helper",
          "None"
        ],
        "answer": 1,
        "explanation": "Method main adalah entry point yang dipanggil JVM ketika program dijalankan."
      }
    ]
  },
  {
    "id": 7,
    "slug": "wrapper-classes",
    "title": "7. Wrapper Classes",
    "module": "Tipe Data & Operators",
    "moduleId": 2,
    "duration": "15 min",
    "mdFile": "lessons/wrapper-classes.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        // Autoboxing: primitif -> wrapper\n        Integer angkaObj = 100;\n        \n        // Unboxing: wrapper -> primitif\n        int angkaPrim = angkaObj;\n\n        // Utility method\n        int parsed = Integer.parseInt(\"250\");\n        String biner = Integer.toBinaryString(10);\n\n        System.out.println(\"Unboxed      : \" + angkaPrim);\n        System.out.println(\"Parsed int   : \" + parsed);\n        System.out.println(\"Biner dari 10: \" + biner);\n    }\n}",
    "expectedOutput": "Unboxed      : 100\nParsed int   : 250\nBiner dari 10: 1010",
    "hint": "Wrapper classes mengubah primitif menjadi objek dan menyediakan utility parsing.",
    "quiz": [
      {
        "question": "Wrapper class untuk tipe primitif int adalah?",
        "options": [
          "Integer",
          "Int",
          "Number",
          "IntWrapper"
        ],
        "answer": 0,
        "explanation": "Integer adalah wrapper class untuk int."
      },
      {
        "question": "Apa yang terjadi saat meng-unbox sebuah Integer yang bernull?",
        "options": [
          "Mengembalikan 0",
          "Melempar NullPointerException",
          "Mengembalikan null",
          "Tidak terjadi apa-apa"
        ],
        "answer": 1,
        "explanation": "Unboxing null (Integer → int) akan menyebabkan NullPointerException."
      },
      {
        "question": "Method statis untuk mengubah String ke int?",
        "options": [
          "Integer.parseInt()",
          "Integer.toInt()",
          "Int.parse()",
          "String.toInt()"
        ],
        "answer": 0,
        "explanation": "Integer.parseInt(String) digunakan untuk parsing string ke int."
      },
      {
        "question": "Manakah yang termasuk wrapper class?",
        "options": [
          "Double",
          "Float",
          "Boolean",
          "Semua di atas"
        ],
        "answer": 3,
        "explanation": "Double, Float, Boolean adalahwrapper class untuk respective primitives."
      },
      {
        "question": "Kapan sebaiknya menggunakan wrapper dibanding primitif?",
        "options": [
          "Saat bekerja dengan collections",
          "Saat butuh performance tinggi",
          "Sekarang sudah selalu pakai wrapper",
          "Tidak pernah"
        ],
        "answer": 0,
        "explanation": "Wrapper diperlukan ketika bekerja dengan generics/collections yang hanya menerima reference types."
      }
    ]
  },
  {
    "id": 8,
    "slug": "arrays",
    "title": "8. Array",
    "module": "Tipe Data & Operators",
    "moduleId": 2,
    "duration": "20 min",
    "mdFile": "lessons/arrays.md",
    "defaultCode": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] numbers = {12, 5, 89, 1, 45};\n\n        System.out.println(\"Original: \" + Arrays.toString(numbers));\n        Arrays.sort(numbers);\n        System.out.println(\"Sorted  : \" + Arrays.toString(numbers));\n        System.out.println(\"Panjang : \" + numbers.length);\n    }\n}",
    "expectedOutput": "Original: [12, 5, 89, 1, 45]\nSorted  : [1, 5, 12, 45, 89]\nPanjang : 5",
    "hint": "Array berukuran tetap (fixed size). Gunakan Arrays.toString() untuk cetak isi array.",
    "quiz": [
      {
        "question": "Cara membuat array of int dengan panjang 5?",
        "options": [
          "int[5] arr;",
          "int[] arr = new int[5];",
          "new int[5];",
          "int arr = new int[5];"
        ],
        "answer": 1,
        "explanation": "Syntax yang benar adalah int[] arr = new int[5];"
      },
      {
        "question": "Bagaimana mendapatkan panjang sebuah array?",
        "options": [
          "arr.length()",
          "arr.size()",
          "arr.length",
          "arr.getSize()"
        ],
        "answer": 2,
        "explanation": "Array memiliki field length (bukan method)."
      },
      {
        "question": "Apa yang terjadi jika mengakses arr[10] pada array dengan length 5?",
        "options": [
          "Mengembalikan null",
          "ArrayIndexOutOfBoundsException",
          "IndexOutOfBoundsException",
          "Tidak ada error"
        ],
        "answer": 1,
        "explanation": "ArrayIndexOutOfBoundsException dilempar saat index di luar batas."
      },
      {
        "question": "Cara iterasi array dengan enhanced for loop?",
        "options": [
          "for i in arr",
          "for (int i : arr)",
          "for each arr as x",
          "for (int x : arr)"
        ],
        "answer": 3,
        "explanation": "Enhanced for loop: for (type var : array) { ... }"
      },
      {
        "question": "Method untuk mengurutkan array primitive int?",
        "options": [
          "Arrays.sort(arr)",
          "arr.sort()",
          "Collections.sort(arr)",
          "Array.sort(arr)"
        ],
        "answer": 0,
        "explanation": "java.util.Arrays.sort() digunakan untuk sorting array primitif atau objek."
      }
    ]
  },
  {
    "id": 9,
    "slug": "enum-dan-constants",
    "title": "9. Enum & Constants",
    "module": "Tipe Data & Operators",
    "moduleId": 2,
    "duration": "15 min",
    "mdFile": "lessons/enum-dan-constants.md",
    "defaultCode": "public class Main {\n    enum Level {\n        LOW, MEDIUM, HIGH\n    }\n\n    public static final double PI = 3.14159;\n\n    public static void main(String[] args) {\n        Level status = Level.HIGH;\n        System.out.println(\"Status level : \" + status);\n        System.out.println(\"Nilai PI     : \" + PI);\n    }\n}",
    "expectedOutput": "Status level : HIGH\nNilai PI     : 3.14159",
    "hint": "Gunakan enum untuk mendefinisikan kumpulan konstanta bernama yang terstruktur.",
    "quiz": [
      {
        "question": "Apa nama keyword untuk membuat enumerated type?",
        "options": [
          "enum",
          "enumerate",
          "enumeration",
          "constant"
        ],
        "answer": 0,
        "explanation": "Keyword 'enum' digunakan untuk mendefinisikan enumeration."
      },
      {
        "question": "Bagaimana cara mendapatkan array semua constants dari enum?",
        "options": [
          "getValues()",
          "values()",
          "getEnums()",
          "list()"
        ],
        "answer": 1,
        "explanation": "Method values() mengembalikan array semua enum constants."
      },
      {
        "question": "Dapatkah enum memiliki fields dan methods?",
        "options": [
          "Tidak",
          "Ya, seperti class biasa",
          "Hanya fields",
          "Hanya methods"
        ],
        "answer": 1,
        "explanation": "Enum dapat memiliki fields, constructor, dan methods (seperti class)."
      },
      {
        "question": "Apa yang dikembalikan oleh ordinal()?",
        "options": [
          "Nama constant",
          "Posisi ordinal (0-based)",
          "Jumlah constants",
          "Class object"
        ],
        "answer": 1,
        "explanation": "ordinal() mengembalikan posisi ordinal (dimulai dari 0)."
      },
      {
        "question": "Bisakah enum implements interface?",
        "options": [
          "Tidak",
          "Ya, seperti class lain",
          "Hanya extends enum",
          "Tidak perlu"
        ],
        "answer": 1,
        "explanation": "Enum dapat implements interface."
      }
    ]
  },
  {
    "id": 10,
    "slug": "void-dan-special-types",
    "title": "10. Void & Special Types",
    "module": "Tipe Data & Operators",
    "moduleId": 2,
    "duration": "15 min",
    "mdFile": "lessons/void-dan-special-types.md",
    "defaultCode": "public class Main {\n    // method void tidak mengembalikan nilai\n    static void sapaPengguna(String user) {\n        System.out.println(\"Halo, \" + user + \"!\");\n    }\n\n    public static void main(String[] args) {\n        sapaPengguna(\"Developer Java\");\n        System.out.println(\"Void method selesai dieksekusi.\");\n    }\n}",
    "expectedOutput": "Halo, Developer Java!\nVoid method selesai dieksekusi.",
    "hint": "Gunakan void ketika sebuah method hanya melakukan tugas tanpa return statement bernilai.",
    "quiz": [
      {
        "question": "Apa fungsi tipe void?",
        "options": [
          "Menyimpan bilangan bulat",
          "Mengembalikan nilai kosong",
          "Return type untuk method yang tidak mengembalikan nilai",
          "Merepresentasikan null"
        ],
        "answer": 2,
        "explanation": "void adalah return type yang menandakan method tidak mengembalikan nilai."
      },
      {
        "question": "Apa yang terjadi jika Anda mencoba mengakses field/method dari variabel null?",
        "options": [
          "Mengembalikan null",
          "NullPointerException",
          "Compile error",
          "Tidak terjadi apa-apa"
        ],
        "answer": 1,
        "explanation": "NullPointerException dilempar saat dereferencing null."
      },
      {
        "question": "Bagaimana cara memeriksa apakah sebuah variabel bertipe double adalah NaN?",
        "options": [
          "if (d == NaN)",
          "if (Double.isNaN(d))",
          "if (d.isNaN())",
          "if (Float.isNaN(d))"
        ],
        "answer": 1,
        "explanation": "Gunakan Double.isNaN() untuk memeriksa NaN."
      },
      {
        "question": "Apa nilai default untuk tipe boolean?",
        "options": [
          "null",
          "false",
          "0",
          "Tidak ada default"
        ],
        "answer": 1,
        "explanation": "Primitif boolean memiliki default false selama tidak diinisialisasi."
      },
      {
        "question": "Kelas apa yang merepresentasikan tipe void ketika digunakan sebagai parameter generik?",
        "options": [
          "Void",
          "Void.class",
          "java.lang.Void",
          "void.class"
        ],
        "answer": 2,
        "explanation": "java.lang.Void adalah kelas wrapper untuk tipe void, sering dipakai dalam generik."
      }
    ]
  },
  {
    "id": 11,
    "slug": "type-casting",
    "title": "11. Type Casting",
    "module": "Tipe Data & Operators",
    "moduleId": 2,
    "duration": "20 min",
    "mdFile": "lessons/type-casting.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        // Widening casting (otomatis): int -> double\n        int angkaInt = 9;\n        double angkaDouble = angkaInt;\n\n        // Narrowing casting (manual): double -> int\n        double pecahan = 9.78;\n        int bulat = (int) pecahan;\n\n        System.out.println(\"Widening : \" + angkaDouble);\n        System.out.println(\"Narrowing: \" + bulat);\n    }\n}",
    "expectedOutput": "Widening : 9.0\nNarrowing: 9",
    "hint": "Narrowing casting membutuhkan penulisan tipe tujuan dalam tanda kurung: (tipe) nilai.",
    "quiz": [
      {
        "question": "Apa yang terjadi saat casting double ke int secara eksplisit?",
        "options": [
          "Bulatkan ke integer terdekat",
          "Memotong bagian desimal (truncation)",
          "Mengembalikan nilai pecahan",
          "Error compile"
        ],
        "answer": 1,
        "explanation": "Casting double ke int memotong (truncate) bagian pecahan tanpa pembulatan."
      },
      {
        "question": "Kapan cast eksplisit diperlukan?",
        "options": [
          "Saat widening conversion",
          "Saat narrowing conversion",
          "Selalu",
          "Tidak pernah"
        ],
        "answer": 1,
        "explanation": "Narrowing conversion memerlukan cast eksplisit karena berisiko kehilangan data."
      },
      {
        "question": "Apa hasil dari (int) 'A'?",
        "options": [
          "65 (ASCII value)",
          "A",
          "Error",
          "97"
        ],
        "answer": 0,
        "explanation": "char 'A' dapat di-cast ke int menghasilkan nilai ASCII/Unicode 65."
      },
      {
        "question": "Cara aman melakukan downcast pada objek?",
        "options": [
          "Langsung cast tanpa cek",
          "Gunakan instanceof terlebih dahulu",
          "Pastikan class sama",
          "Tidak perlu"
        ],
        "answer": 1,
        "explanation": "Untuk menghindari ClassCastException, cek dengan instanceof sebelum downcast."
      },
      {
        "question": "Apakah autoboxing memerlukan cast eksplisit?",
        "options": [
          "Ya, selalu",
          "Tidak, otomatis",
          "Hanya untuk narrowing",
          "Hanya untuk widening"
        ],
        "answer": 1,
        "explanation": "Autoboxing dan unboxing berjalan otomatis tanpa cast eksplisit."
      }
    ]
  },
  {
    "id": 12,
    "slug": "type-inference",
    "title": "12. Type Inference (var)",
    "module": "Tipe Data & Operators",
    "moduleId": 2,
    "duration": "15 min",
    "mdFile": "lessons/type-inference.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        // Local variable type inference (Java 10+)\n        var nama = \"Java 21\";\n        var versi = 21;\n        var rilis = true;\n\n        System.out.println(\"Nama  : \" + nama);\n        System.out.println(\"Versi : \" + versi);\n        System.out.println(\"Rilis : \" + rilis);\n    }\n}",
    "expectedOutput": "Nama  : Java 21\nVersi : 21\nRilis : true",
    "hint": "Kata kunci 'var' hanya dapat digunakan pada local variable yang langsung diinisialisasi.",
    "quiz": [
      {
        "question": "Kapan var bisa digunakan?",
        "options": [
          "Untuk field class",
          "Untuk parameter method",
          "Untuk local variable dengan initializer",
          "Untuk return type method"
        ],
        "answer": 2,
        "explanation": "var hanya berlaku untuk local variable, harus ada initializer, dan dideklarasikan di dalam method/block."
      },
      {
        "question": "Apa yang terjadi jika menulis: var x = null;?",
        "options": [
          "x bertipe Object",
          "Compile error: cannot infer type",
          "x bertype Void",
          "x bertipe null"
        ],
        "answer": 1,
        "explanation": "Compile error karena tipe tidak bisa diinfer dari null."
      },
      {
        "question": "Manakah yang benar tentang diamond operator?",
        "options": [
          "Digunakan untuk array creation",
          "Digunakan untuk instance creation generic untuk mengurangi boilerplate",
          "Digunakan untuk method return",
          "Digunakan untuk var"
        ],
        "answer": 1,
        "explanation": "Diamond operator <> memungkinkan compiler mendeduc tipe parameter generic dari context."
      },
      {
        "question": "Contoh yang valid menggunakan var?",
        "options": [
          "var list = new ArrayList<String>();",
          "var i; i = 10;",
          "var s = null;",
          "var m = Map.of();"
        ],
        "answer": 0,
        "explanation": "var list = new ArrayList<String>(); legal; initializer memberikan tipe."
      },
      {
        "question": "Type inference juga berlaku untuk lambda parameters?",
        "options": [
          "Tidak",
          "Ya, tipe diinfer dari target functional interface",
          "Hanya jika menggunakan var",
          "Tidak perlu inference"
        ],
        "answer": 1,
        "explanation": "Lambda expression parameters types dapat diinfer dari context (functional interface target type)."
      }
    ]
  },
  {
    "id": 13,
    "slug": "if-else-dan-switch",
    "title": "13. If-Else & Switch",
    "module": "Kontrol Alur & Exceptions",
    "moduleId": 3,
    "duration": "20 min",
    "mdFile": "lessons/if-else-dan-switch.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        int skor = 85;\n\n        // If-Else\n        if (skor >= 90) {\n            System.out.println(\"Grade: A\");\n        } else if (skor >= 80) {\n            System.out.println(\"Grade: B\");\n        } else {\n            System.out.println(\"Grade: C\");\n        }\n\n        // Switch expression\n        String predikat = switch (skor / 10) {\n            case 10, 9 -> \"Sangat Baik\";\n            case 8 -> \"Baik\";\n            default -> \"Cukup\";\n        };\n        System.out.println(\"Predikat: \" + predikat);\n    }\n}",
    "expectedOutput": "Grade: B\nPredikat: Baik",
    "hint": "Java modern mendukung Switch Expression dengan operator panah (->) yang ringkas.",
    "quiz": [
      {
        "question": "Manakah yang benar tentang if-else?",
        "options": [
          "Kondisi harus boolean",
          "Bisa tanpa braces",
          "Kondisi bisa integer",
          "Tidak ada else opsional"
        ],
        "answer": 0,
        "explanation": "If memerlukan kondisi bertipe boolean."
      },
      {
        "question": " Pada switch, apa yang terjadi jika tidak ada break?",
        "options": [
          "Error compile",
          "Lewati ke case berikutnya (fall-through)",
          "Keluar dari switch",
          "Tidak apa-apa"
        ],
        "answer": 1,
        "explanation": "Tanpa break, eksekusi akan jatuh ke case berikutnya."
      },
      {
        "question": "Tipe data yang bisa digunakan pada switch (Java 7+)?",
        "options": [
          "int, char, String",
          "int, char, boolean",
          "int, char, long",
          "Semua tipe primitif"
        ],
        "answer": 0,
        "explanation": "Switch mendukung int, char, short, byte, enum, String (sejak Java 7), serta wrapper types."
      },
      {
        "question": "Switch expression (arrow) muncul dari Java version?",
        "options": [
          "Java 8",
          "Java 10",
          "Java 12/14",
          "Java 16"
        ],
        "answer": 2,
        "explanation": "Arrow syntax diperkenalkan sebagai preview di Java 12 dan final di Java 14."
      },
      {
        "question": "Apa manfaat switch expression dibanding statement?",
        "options": [
          "Menghasilkan nilai (value)",
          "Hanya untuk String",
          "Tidak perlu break",
          "Lebih cepat"
        ],
        "answer": 0,
        "explanation": "Switch expression mengembalikan nilai, bisa ditugaskan ke variabel."
      }
    ]
  },
  {
    "id": 14,
    "slug": "loops-basic",
    "title": "14. Loop Dasar (for, while)",
    "module": "Kontrol Alur & Exceptions",
    "moduleId": 3,
    "duration": "20 min",
    "mdFile": "lessons/loops-basic.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        // For loop\n        System.out.print(\"For loop  : \");\n        for (int i = 1; i <= 3; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println();\n\n        // While loop\n        System.out.print(\"While loop: \");\n        int w = 3;\n        while (w > 0) {\n            System.out.print(w + \" \");\n            w--;\n        }\n        System.out.println();\n    }\n}",
    "expectedOutput": "For loop  : 1 2 3 \nWhile loop: 3 2 1 ",
    "hint": "For loop cocok ketika jumlah iterasi diketahui; while loop cocok saat berbasis kondisi boolean.",
    "quiz": [
      {
        "question": "Apa yang happens jika kondisi while selalu true",
        "options": [
          "Loop berhenti otomatis",
          "Infinite loop",
          "Error compile",
          "Tidak masalah"
        ],
        "answer": 1,
        "explanation": "Kondisi selalu true menyebabkan infinite loop; program harus dihentikanmanual."
      },
      {
        "question": "Perbedaan for dan for-each?",
        "options": [
          "For-each butuh index",
          "For-each digunakan untuk array/collection tanpa index",
          "For lebih cepat",
          "Tidak ada perbedaan"
        ],
        "answer": 1,
        "explanation": "For-each (enhanced for) mempermudah iterasi tanpa mengakses index."
      },
      {
        "question": "Do-while Pastikan minimal berjalan berapa kali?",
        "options": [
          "0",
          "1",
          "2",
          "Tergantung kondisi"
        ],
        "answer": 1,
        "explanation": "Do-while mengeksekusi minimal sekali sebelum cek kondisi."
      },
      {
        "question": "Apa sintaks for-loop lengkap?",
        "options": [
          "for (init; condition; update)",
          "for condition { }",
          "for each in",
          "loop (condition)"
        ],
        "answer": 0,
        "explanation": "for (inisialisasi; kondisi; update) { ... }"
      },
      {
        "question": "Manakah yang tidak valid?",
        "options": [
          "for (int i=0; i<10; i++)",
          "for (int i : arr)",
          "for (;;)",
          "for i = 0; i < 10; i++"
        ],
        "answer": 3,
        "explanation": "Java tidak memiliki for style C dengan tiga ekspresi tanpa kurung; harus pakai kurung."
      }
    ]
  },
  {
    "id": 15,
    "slug": "break-continue",
    "title": "15. Break & Continue",
    "module": "Kontrol Alur & Exceptions",
    "moduleId": 3,
    "duration": "15 min",
    "mdFile": "lessons/break-continue.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.print(\"Continue lewati angka genap: \");\n        for (int i = 1; i <= 6; i++) {\n            if (i % 2 == 0) continue;\n            System.out.print(i + \" \");\n        }\n        System.out.println();\n\n        System.out.print(\"Break berhenti di 4: \");\n        for (int i = 1; i <= 10; i++) {\n            if (i == 4) break;\n            System.out.print(i + \" \");\n        }\n        System.out.println();\n    }\n}",
    "expectedOutput": "Continue lewati angka genap: 1 3 5 \nBreak berhenti di 4: 1 2 3 ",
    "hint": "Continue melanjutkan ke iterasi berikutnya, break menghentikan seluruh perulangan seketika.",
    "quiz": [
      {
        "question": "Apa yang dilakukan statement break dalam loop?",
        "options": [
          "Melompat ke iterasi berikutnya",
          "Menghentikan loop",
          "Melanjutkan ke case berikutnya",
          "Tidak ada efek"
        ],
        "answer": 1,
        "explanation": "Break segera mengakhiri loop (atau switch)."
      },
      {
        "question": "Continue digunakan untuk?",
        "options": [
          " Keluar dari loop",
          "Melompat ke iterasi berikutnya",
          "Menghentikan switch",
          "Melepas resource"
        ],
        "answer": 1,
        "explanation": "Continue melompat ke iterasi berikutnya dari loop."
      },
      {
        "question": "Break atau continue dapat diberi label untuk?",
        "options": [
          "Switch saja",
          "Loop terluar (nested)",
          "Method",
          "Tidak berlaku"
        ],
        "answer": 1,
        "explanation": "Labeled break/continue mengontrol loop luar dalam nested loops."
      },
      {
        "question": "Apa yang terjadi jika break digunakan dalam switch?",
        "options": [
          "Keluar dari blok switch",
          "Melompat ke case berikutnya",
          "Error",
          "Tidak efek"
        ],
        "answer": 0,
        "explanation": "Break dalam switch keluar dari switch statement."
      },
      {
        "question": "Perintah untuk keluar dari loop yang beriungkus (nested) tanpa countless break?",
        "options": [
          "break outer;",
          "continue outer;",
          "break label;",
          "break alla loops;"
        ],
        "answer": 2,
        "explanation": "Gunakan labeled break (misal break outerLoop;) untuk keluar dari outer loop."
      }
    ]
  },
  {
    "id": 16,
    "slug": "exceptions-basics",
    "title": "16. Exceptions Basics",
    "module": "Kontrol Alur & Exceptions",
    "moduleId": 3,
    "duration": "20 min",
    "mdFile": "lessons/exceptions-basics.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int hasil = 10 / 0;\n            System.out.println(\"Hasil: \" + hasil);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Terjadi error: \" + e.getMessage());\n        }\n        System.out.println(\"Program tetap berjalan lancar setelah error ditangani.\");\n    }\n}",
    "expectedOutput": "Terjadi error: / by zero\nProgram tetap berjalan lancar setelah error ditangani.",
    "hint": "Gunakan block try-catch untuk menangkap exception runtime agar aplikasi tidak berhenti mendadak.",
    "quiz": [
      {
        "question": "Apa nama class induk semua exception?",
        "options": [
          "Error",
          "Throwable",
          "Exception",
          "RuntimeException"
        ],
        "answer": 1,
        "explanation": "Throwable adalah base class untuk Error dan Exception."
      },
      {
        "question": "Exception apa yang tidak perlu dicanangkan catches?",
        "options": [
          "Checked",
          "Unchecked (RuntimeException)",
          "IOException",
          "SQLException"
        ],
        "answer": 1,
        "explanation": "Unchecked exceptions (subclass RuntimeException) tidak perlu ditangkap atau dinyatakan."
      },
      {
        "question": "Contoh checked exception adalah?",
        "options": [
          "NullPointerException",
          "IllegalArgumentException",
          "IOException",
          "ArrayIndexOutOfBoundsException"
        ],
        "answer": 2,
        "explanation": "IOException adalah checked exception; NullPointerException dan IllegalArgumentException adalah unchecked."
      },
      {
        "question": "Untuk membuat custom exception yang harus ditangkap, extends mana?",
        "options": [
          "RuntimeException",
          "Exception",
          "Error",
          "Throwable"
        ],
        "answer": 1,
        "explanation": "Extends Exception (bukan RuntimeException) akan menghasilkan checked exception."
      },
      {
        "question": "Kata kunci untuk melempar exception adalah?",
        "options": [
          "catch",
          "throw",
          "throws",
          "new"
        ],
        "answer": 1,
        "explanation": "Gunakan throw untuk melempar exception."
      }
    ]
  },
  {
    "id": 17,
    "slug": "try-catch-finally",
    "title": "17. Try-Catch-Finally",
    "module": "Kontrol Alur & Exceptions",
    "moduleId": 3,
    "duration": "20 min",
    "mdFile": "lessons/try-catch-finally.md",
    "defaultCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] arr = {1, 2, 3};\n            System.out.println(\"Elemen: \" + arr[5]);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Catch: Index di luar batas array!\");\n        } finally {\n            System.out.println(\"Finally: Blok ini selalu dieksekusi.\");\n        }\n    }\n}",
    "expectedOutput": "Catch: Index di luar batas array!\nFinally: Blok ini selalu dieksekusi.",
    "hint": "Blok finally selalu dijalankan terlepas dari apakah terjadi exception atau tidak.",
    "quiz": [
      {
        "question": "Apa yang selalu dieksekusi setelah try-catch?",
        "options": [
          "catch",
          "finally",
          "throw",
          "return"
        ],
        "answer": 1,
        "explanation": "Blok finally selalu dijalankan setelah try atau catch."
      },
      {
        "question": "Manfaat utama try-with-resources?",
        "options": [
          "Menangkap lebih banyak exception",
          " resources Auto-closeable tanpa finally",
          "Menghindari所有 exception",
          "Mengganti catch"
        ],
        "answer": 1,
        "explanation": "try-with-resources menutup resources otomatis, mengkode lebih bersih."
      },
      {
        "question": "Bisa ada lebih dari satu resource dalam try-with-resources?",
        "options": [
          "Tidak",
          "Ya, dengan ;",
          "Hanya satu",
          "Tergantung Java version"
        ],
        "answer": 1,
        "explanation": "Multiple resources dapat dideklarasikan dengan ; di antara (seperti try (A a = ...; B b = ...) { ... } )."
      },
      {
        "question": "Jika exception terjadi di dalam try dan juga di finally, apa outcome?",
        "options": [
          "Exception dari try diseberkan",
          "Exception dari finally menimpa",
          "Keduanya disimpan (suppressed)",
          "Program crash"
        ],
        "answer": 2,
        "explanation": "Exception dari finally akan disimpan sebagai suppressed ke exception asli (jika ada)."
      },
      {
        "question": "Kapan finally tidak dieksekusi?",
        "options": [
          "Jika ada return di try",
          "Jika System.exit() Called",
          "Jika exception di throw",
          "Telah selalu dieksekusi"
        ],
        "answer": 1,
        "explanation": "Jika JVM terminates (System.exit) atau kill -9, finally tidak dieksekusi; namun return dalam try tidak menghalangi finally."
      }
    ]
  },
  {
    "id": 18,
    "slug": "throw-dan-throws",
    "title": "18. Throw & Throws",
    "module": "Kontrol Alur & Exceptions",
    "moduleId": 3,
    "duration": "15 min",
    "mdFile": "lessons/throw-dan-throws.md",
    "defaultCode": "public class Main {\n    static void validasiUmur(int umur) throws IllegalArgumentException {\n        if (umur < 18) {\n            throw new IllegalArgumentException(\"Umur belum mencukupi (minimal 18)\");\n        }\n        System.out.println(\"Akses diterima!\");\n    }\n\n    public static void main(String[] args) {\n        try {\n            validasiUmur(15);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Exception ditangkap: \" + e.getMessage());\n        }\n    }\n}",
    "expectedOutput": "Exception ditangkap: Umur belum mencukupi (minimal 18)",
    "hint": "'throw' melempar instance exception, 'throws' mendeklarasikan exception pada method signature.",
    "quiz": [
      {
        "question": "Kata kunci untuk deklarasikan exception pada method signature?",
        "options": [
          "throw",
          "throws",
          "catch",
          "finally"
        ],
        "answer": 1,
        "explanation": "throws digunakan pada method untuk menyatakan exception yang mungkin dilempar."
      },
      {
        "question": "Checked exception harus dinyatakan dengan?",
        "options": [
          "try-catch",
          "throws atau try-catch",
          "hanya throws",
          "hanya try"
        ],
        "answer": 1,
        "explanation": "Checked exception harus ditangkap (try-catch) atau dinyatakan (throws)."
      },
      {
        "question": "Apa yang terjadi jika unchecked exception dilempar?",
        "options": [
          "Compile error",
          "Tidak perlu catch/throws",
          "Harus dicanangkan throws",
          "Tidak bisa"
        ],
        "answer": 1,
        "explanation": "Unchecked exception tidak diperiksa pada compile time, tidak perlu deklarasi throws."
      },
      {
        "question": "Bisakah kita throw class Error?",
        "options": [
          "Ya",
          "Tidak disarankan",
          "Tidak, compile error",
          "Hanya di system"
        ],
        "answer": 0,
        "explanation": "Secara teknis bisa, tapi Error mewakili condition fatal, tidak untuk dilempar aplikasi."
      },
      {
        "question": "Contoh kode yang tepat untuk melempar IllegalArgumentException?",
        "options": [
          "throw IllegalArgumentException()",
          "throw new IllegalArgumentException()",
          "new throw IllegalArgumentException",
          "throw IllegalArgumentException"
        ],
        "answer": 1,
        "explanation": "Harus membuat instance dengan new, karena exception adalah object."
      }
    ]
  },
  {
    "id": 19,
    "slug": "class-dasar",
    "title": "19. Class & Object Dasar",
    "module": "Object-Oriented Programming",
    "moduleId": 4,
    "duration": "20 min",
    "mdFile": "lessons/class-dasar.md",
    "defaultCode": "class Mobil {\n    String merk;\n    int tahun;\n\n    Mobil(String merk, int tahun) {\n        this.merk = merk;\n        this.tahun = tahun;\n    }\n\n    void klakson() {\n        System.out.println(merk + \" (\" + tahun + \"): Tiiin tiiin!\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Mobil avanza = new Mobil(\"Toyota\", 2022);\n        avanza.klakson();\n    }\n}",
    "expectedOutput": "Toyota (2022): Tiiin tiiin!",
    "hint": "Class adalah cetak biru (blueprint), sedangkan Object adalah bentuk nyata (instance).",
    "quiz": [
      {
        "question": " Apa perbedaan class dan object?",
        "options": [
          "Class adalah blueprint, object adalah instance",
          "Object adalah blueprint, class adalah instance",
          "Sama saja",
          "Tidak ada perbedaan"
        ],
        "answer": 0,
        "explanation": "Class为中template, object即instance yang dibuat dari class."
      },
      {
        "question": "Keyword untuk membuat class?",
        "options": [
          "class",
          "struct",
          "object",
          "define"
        ],
        "answer": 0,
        "explanation": "Java menggunakan keyword class."
      },
      {
        "question": "Bagaimana membuat instance Object?",
        "options": [
          "object Person = new Person()",
          "Person p = new Person()",
          "new Person p",
          "create Person()"
        ],
        "answer": 1,
        "explanation": "Person p = new Person();"
      },
      {
        "question": "Apa yang terjadi jika class tidak memiliki constructor eksplisit?",
        "options": [
          "Error",
          "Java menyediakan default constructor",
          "Tidak bisa diinstansiasi",
          "Harus dibuat sendiri"
        ],
        "answer": 1,
        "explanation": "Java menyediakan default no-arg constructor jika tidak ada constructor lain."
      },
      {
        "question": "Kata kunci this digunakan untuk?",
        "options": [
          "Mengakses class",
          "Mengakses instance fields",
          "Mengakses static fields",
          "Membuat object"
        ],
        "answer": 1,
        "explanation": "this merujuk ke instance saat ini (untuk membedakan field dengan parameter)."
      }
    ]
  },
  {
    "id": 20,
    "slug": "access-modifiers",
    "title": "20. Access Modifiers",
    "module": "Object-Oriented Programming",
    "moduleId": 4,
    "duration": "15 min",
    "mdFile": "lessons/access-modifiers.md",
    "defaultCode": "class AkunBank {\n    private double saldo = 500000;\n\n    public double getSaldo() {\n        return saldo;\n    }\n\n    public void setor(double jumlah) {\n        if (jumlah > 0) saldo += jumlah;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        AkunBank akun = new AkunBank();\n        akun.setor(150000);\n        System.out.println(\"Saldo saat ini: Rp \" + akun.getSaldo());\n    }\n}",
    "expectedOutput": "Saldo saat ini: Rp 650000.0",
    "hint": "Prinsip enkapsulasi: deklarasikan field private dan sediakan getter/setter public.",
    "quiz": [
      {
        "question": "Level access paling ketat?",
        "options": [
          "private",
          "protected",
          "default",
          "public"
        ],
        "answer": 0,
        "explanation": "private hanya bisa diakses dalam class yang sama."
      },
      {
        "question": "Apa akses default (tanpa modifier)?",
        "options": [
          "public",
          "package-private",
          "protected",
          "none"
        ],
        "answer": 1,
        "explanation": "Default (no modifier) adalah package-private."
      },
      {
        "question": "Protected dapat diakses oleh?",
        "options": [
          "Hanya class yang sama",
          "Package yang sama dan subclass",
          "Semua class",
          "Hanya interface"
        ],
        "answer": 1,
        "explanation": "Protected bisa diakses di package yang sama dan oleh subclass di package lain."
      },
      {
        "question": "Bisakah top-level class dideklarasikan protected?",
        "options": [
          "Ya",
          "Tidak",
          "Hanya dalam interface",
          "Hanya abstract"
        ],
        "answer": 1,
        "explanation": "Top-level class hanya bisa public atau package-private."
      },
      {
        "question": "Field interface secara default?",
        "options": [
          "private",
          "protected",
          "public static final",
          "public abstract"
        ],
        "answer": 2,
        "explanation": "Fields dalam interface adalah public static final."
      }
    ]
  },
  {
    "id": 21,
    "slug": "inheritance-extends-super",
    "title": "21. Inheritance & Super",
    "module": "Object-Oriented Programming",
    "moduleId": 4,
    "duration": "20 min",
    "mdFile": "lessons/inheritance-extends-super.md",
    "defaultCode": "class Hewan {\n    String nama;\n    Hewan(String nama) { this.nama = nama; }\n    void bersuara() { System.out.println(nama + \" bersuara\"); }\n}\n\nclass Kucing extends Hewan {\n    Kucing(String nama) { super(nama); }\n\n    @Override\n    void bersuara() {\n        System.out.println(nama + \": Meoow!\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Kucing k = new Kucing(\"Mimi\");\n        k.bersuara();\n    }\n}",
    "expectedOutput": "Mimi: Meoow!",
    "hint": "Kata kunci 'extends' mewarisi sifat class induk, 'super()' memanggil konstruktor induk.",
    "quiz": [
      {
        "question": "Keyword untuk pewarisan class?",
        "options": [
          "implements",
          "extends",
          "inherits",
          "super"
        ],
        "answer": 1,
        "explanation": "extend digunakan untuk mewarisi dari superclass."
      },
      {
        "question": "Apa yang diwariskan ke subclass?",
        "options": [
          "Hanya methods",
          "Hanya fields",
          "Methods dan fields (kecuali private)",
          "Semua termasuk private"
        ],
        "answer": 2,
        "explanation": "Subclass mewarisi semua fields dan methods, kecuali private fields tidak bisa diakses langsung."
      },
      {
        "question": "Object apakah yang dapat melakukan upcast otomatis?",
        "options": [
          "Subclass to superclass",
          "Superclass to subclass",
          "Tidak ada",
          "Hanya interface"
        ],
        "answer": 0,
        "explanation": "Upcast (subclass → superclass) implisit."
      },
      {
        "question": "Annotation untuk override method?",
        "options": [
          "@Override",
          "@Replace",
          "@Inherit",
          "@Subclass"
        ],
        "answer": 0,
        "explanation": "@Override annotation menandakan method override."
      },
      {
        "question": "Java support multiple class inheritance?",
        "options": [
          "Ya",
          "Tidak",
          "Hanya via interfaces",
          "Hanya abstract classes"
        ],
        "answer": 1,
        "explanation": "Java hanya satu class inheritance; multiple inheritance melalui interface."
      }
    ]
  },
  {
    "id": 22,
    "slug": "abstract-classes",
    "title": "22. Abstract Classes",
    "module": "Object-Oriented Programming",
    "moduleId": 4,
    "duration": "15 min",
    "mdFile": "lessons/abstract-classes.md",
    "defaultCode": "abstract class Bentuk {\n    abstract double hitungLuas();\n    void info() { System.out.println(\"Menghitung luas bentuk geometris:\"); }\n}\n\nclass Persegi extends Bentuk {\n    double sisi;\n    Persegi(double sisi) { this.sisi = sisi; }\n\n    @Override\n    double hitungLuas() { return sisi * sisi; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Persegi p = new Persegi(6);\n        p.info();\n        System.out.println(\"Luas Persegi (sisi 6) = \" + p.hitungLuas());\n    }\n}",
    "expectedOutput": "Menghitung luas bentuk geometris:\nLuas Persegi (sisi 6) = 36.0",
    "hint": "Abstract class tidak bisa diinstansiasi langsung, dan subclass wajib mengimplementasikan method abstract.",
    "quiz": [
      {
        "question": "Apa yang tidak boleh untuk abstract class?",
        "options": [
          "Digunakan sebagai superclass",
          "Mengandung abstract method",
          "Diinstansiasi",
          "Memiliki concrete methods"
        ],
        "answer": 2,
        "explanation": "Abstract class tidak dapat diinstansiasi (new AbstractClass() error)."
      },
      {
        "question": "Abstract method dinyatakan dengan?",
        "options": [
          "abstract void method();",
          "void abstract method();",
          "abstract void method() {};",
          "void method() abstract;"
        ],
        "answer": 0,
        "explanation": "Sintaks: abstract void methodName(); tanpa body."
      },
      {
        "question": "Apakah abstract class bisa memiliki fields dan concrete methods?",
        "options": [
          "Tidak",
          "Ya",
          "Hanya fields",
          "Hanya methods"
        ],
        "answer": 1,
        "explanation": "Abstract class dapat memiliki fields dan methods konkret."
      },
      {
        "question": "Subclass dari abstract class harus?",
        "options": [
          "Menjadi abstract juga",
          "Mengimplementasikan semua abstract method",
          "Memiliki constructor",
          "Tidak diperlukan"
        ],
        "answer": 1,
        "explanation": "Subclass konkret harus mengimplementasikan semua abstract methods milik superclass (atau menjadi abstract)."
      },
      {
        "question": "Bisakah abstract class extends class konkret lain?",
        "options": [
          "Tidak",
          "Ya",
          "Hanya abstract",
          "Hanya interface"
        ],
        "answer": 1,
        "explanation": "Abstract class dapat extends class lain (concrete/abstract)."
      }
    ]
  },
  {
    "id": 23,
    "slug": "interfaces-basic",
    "title": "23. Interfaces Dasar",
    "module": "Object-Oriented Programming",
    "moduleId": 4,
    "duration": "20 min",
    "mdFile": "lessons/interfaces-basic.md",
    "defaultCode": "interface Pembayaran {\n    void bayar(double jumlah);\n}\n\nclass QrisPayment implements Pembayaran {\n    @Override\n    public void bayar(double jumlah) {\n        System.out.println(\"Pembayaran QRIS berhasil sejumlah: Rp \" + jumlah);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Pembayaran p = new QrisPayment();\n        p.bayar(75000);\n    }\n}",
    "expectedOutput": "Pembayaran QRIS berhasil sejumlah: Rp 75000.0",
    "hint": "Class dapat mengimplementasikan beberapa interface sekaligus menggunakan kata kunci 'implements'.",
    "quiz": [
      {
        "question": "Method dalam interface secara default modifier-nya?",
        "options": [
          "private",
          "protected",
          "public abstract",
          "public"
        ],
        "answer": 2,
        "explanation": "Methods dalam interface adalah public abstract (sebelum Java 8)."
      },
      {
        "question": "Sejak Java 8, interface bisa memiliki?",
        "options": [
          "Hanya abstract methods",
          "Default dan static methods",
          "Hanya static methods",
          "Bidang instance"
        ],
        "answer": 1,
        "explanation": "Java 8 menambahkan default dan static methods ke interface."
      },
      {
        "question": "Class dapat implements berapa banyak interface?",
        "options": [
          "Satu",
          "Dua",
          "Beberapa (multiple)",
          "Tidak terbatas"
        ],
        "answer": 2,
        "explanation": "Class dapat implements banyak interface."
      },
      {
        "question": "Fields dalam interface secara otomatis?",
        "options": [
          "private",
          "protected",
          "public static final",
          "public"
        ],
        "answer": 2,
        "explanation": "Fields adalah public static final (constant)."
      },
      {
        "question": "Functional interface memiliki?",
        "options": [
          "Banyak abstract methods",
          "Precisely satu abstract method",
          "Hanya default methods",
          "Tidak ada method"
        ],
        "answer": 1,
        "explanation": "Functional interface memiliki tepat satu abstract method (SAM)."
      }
    ]
  },
  {
    "id": 24,
    "slug": "polymorphism",
    "title": "24. Polymorphism",
    "module": "Object-Oriented Programming",
    "moduleId": 4,
    "duration": "15 min",
    "mdFile": "lessons/polymorphism.md",
    "defaultCode": "class Kalkulator {\n    // Method overloading (Polimorfisme Compile-time)\n    int tambah(int a, int b) { return a + b; }\n    double tambah(double a, double b) { return a + b; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Kalkulator calc = new Kalkulator();\n        System.out.println(\"Tambah int   : \" + calc.tambah(10, 20));\n        System.out.println(\"Tambah double: \" + calc.tambah(4.5, 2.5));\n    }\n}",
    "expectedOutput": "Tambah int   : 30\nTambah double: 7.0",
    "hint": "Polimorfisme terbagi dua: Overloading (compile-time) dan Overriding (runtime).",
    "quiz": [
      {
        "question": "Polymorphism runtime disebut juga?",
        "options": [
          "Overloading",
          "Overriding",
          "Dynamic binding",
          "Static binding"
        ],
        "answer": 2,
        "explanation": "Dynamic binding (atau late binding) adalah polymorphism runtime melalui method overriding."
      },
      {
        "question": "Polymorphism compile-time adalah?",
        "options": [
          "Overloading",
          "Overriding",
          "Dynamic dispatch",
          "Method hiding"
        ],
        "answer": 0,
        "explanation": "Method overloading dipilih pada compile-time."
      },
      {
        "question": "Reference Animal a = new Dog(); memungkinkan panggilan ke?",
        "options": [
          "Hanya Animal methods",
          "Hanya Dog methods",
          "Method yang didefinisikan di Animal, runtime akan pilih Dog jika override",
          "Semua methods"
        ],
        "answer": 2,
        "explanation": "Compile-time type Animal membatasi method yang bisa dipanggil; runtime memanggil implementasi Dog jika method overridden."
      },
      {
        "question": "Apakah fields subject to polymorphism?",
        "options": [
          "Ya",
          "Tidak",
          "Hanya static",
          "Hanya final"
        ],
        "answer": 1,
        "explanation": "Fields tidak polymorphic; field access determined by reference type, not object type."
      },
      {
        "question": "Kapan method overloading terjadi?",
        "options": [
          "Dalam satu class",
          "Antara superclass-subclass",
          "Hanya interface",
          "Hanya abstract"
        ],
        "answer": 0,
        "explanation": "Overloading occurs within the same class (or subclass) with different parameter lists."
      }
    ]
  },
  {
    "id": 25,
    "slug": "intro-collections",
    "title": "25. Intro to Collections",
    "module": "Collections Framework",
    "moduleId": 5,
    "duration": "20 min",
    "mdFile": "lessons/intro-collections.md",
    "defaultCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Java Collections Framework:\");\n        List<String> list = List.of(\"List (Terurut)\", \"Set (Unik)\", \"Map (Key-Value)\");\n        list.forEach(item -> System.out.println(\"- \" + item));\n    }\n}",
    "expectedOutput": "Java Collections Framework:\n- List (Terurut)\n- Set (Unik)\n- Map (Key-Value)",
    "hint": "Collections framework menyediakan struktur data dinamis yang fleksibel dibandingkan array standar.",
    "quiz": [
      {
        "question": "Apa itu Java Collections Framework (JCF)?",
        "options": [
          "Kompiler alternatif untuk bahasa Java",
          "Arsitektur terpadu untuk merepresentasikan dan memanipulasi koleksi objek",
          "Library untuk membuat GUI di Java",
          "Database bawaan Java"
        ],
        "answer": 1,
        "explanation": "JCF menyediakan antarmuka (interfaces), implementasi konkret, dan algoritma untuk mengelola kelompok objek."
      },
      {
        "question": "Root interface dari sebagian besar koleksi di Java (kecuali Map) adalah?",
        "options": [
          "Iterable",
          "Collection",
          "List",
          "Object"
        ],
        "answer": 1,
        "explanation": "java.util.Collection adalah root interface untuk List, Set, dan Queue. Sedangkan Map tidak extends Collection."
      },
      {
        "question": "Mengapa Map tidak mewarisi (extends) dari Collection interface?",
        "options": [
          "Karena Map berisi pasangan key-value, sedangkan Collection menampung elemen individual",
          "Karena bug arsitektur lama Java",
          "Karena Map hanya bisa menampung String",
          "Map sebenarnya mewarisi Collection"
        ],
        "answer": 0,
        "explanation": "Map menyimpan pemetaan key ke value (key-value pairs), strukturnya tidak cocok dengan kontrak Collection tunggal."
      },
      {
        "question": "Keuntungan utama menggunakan generic dalam Collections (misal: List<String>) adalah?",
        "options": [
          "Program berjalan 100x lebih cepat",
          "Compile-time type safety dan menghindari type casting manual",
          "Mengurangi ukuran memori JVM hingga 50%",
          "Memungkinkan koleksi menyimpan primitive types tanpa auto-boxing"
        ],
        "answer": 1,
        "explanation": "Generics memberikan pemeriksaan tipe pada waktu kompilasi dan menghilangkan kebutuhan type cast eksplisit."
      }
    ]
  },
  {
    "id": 26,
    "slug": "list-dan-arraylist",
    "title": "26. List & ArrayList",
    "module": "Collections Framework",
    "moduleId": 5,
    "duration": "20 min",
    "mdFile": "lessons/list-dan-arraylist.md",
    "defaultCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> bahasa = new ArrayList<>();\n        bahasa.add(\"Java\");\n        bahasa.add(\"Kotlin\");\n        bahasa.add(\"Python\");\n\n        System.out.println(\"Jumlah bahasa: \" + bahasa.size());\n        System.out.println(\"Elemen pertama: \" + bahasa.get(0));\n        System.out.println(\"Semua elemen : \" + String.join(\", \", bahasa));\n    }\n}",
    "expectedOutput": "Jumlah bahasa: 3\nElemen pertama: Java\nSemua elemen : Java, Kotlin, Python",
    "hint": "ArrayList memiliki ukuran dinamis yang bertambah otomatis saat elemen baru dimasukkan.",
    "quiz": [
      {
        "question": "Apa fungsi primary method di Java?",
        "options": [
          "Metode yang dijalankan saat objek baru di-instanciasikan",
          "Metode yang dijalankan saat object di-objektifikasi",
          "Metode yang dijalankan saat object di-klonkan",
          "Metode yang mengatur state object"
        ],
        "answer": 0,
        "explanation": "Primary method adalah method yang dijalankan saat object baru dibuat (constructors). Ia tidak bisa di-override oleh subclass."
      },
      {
        "question": "Kapan method `equals()` harus diimplementasikan di class custom?",
        "options": [
          "Selalu, untuk semua object",
          "Hanya jika class harus di-equals",
          "Hanya jika class harus di-hash",
          "Hanya jika class harus di-sort"
        ],
        "answer": 1,
        "explanation": "Method equals() harus diimplementasikan jika class ingin mendukung operator == (equality comparison). Tanpa implementasinya, == akan melakukan reference equality."
      },
      {
        "question": "Apa perbedaan antara `ArrayList` dan `LinkedList`?",
        "options": [
          "ArrayList lebih cepat untuk insertion di tengah",
          "LinkedList lebih cepat untuk insertion di tengah",
          "Tidak ada perbedaan signifikan",
          "ArrayList selalu lebih cepat"
        ],
        "answer": 1,
        "explanation": "ArrayList lebih efisien untuk insertion/removal di tengah karena array di baliknya tetap terurut. LinkedList lebih efisien untuk traversal dan deletion di tengah karena linked list."
      },
      {
        "question": "Apa yang terjadi jika kita menggunakan `HashMap` tanpa `equals()` dan `hashCode()`?",
        "options": [
          "Program akan crash",
          "Hash map akan berfungsi normal",
          "Program akan berjalan tapi data tidak akurat",
          "Error runtime yang sulit diprediksi"
        ],
        "answer": 2,
        "explanation": "Without proper equals/hashCode, objects dengan content berbeda bisa dianggap sama (due to identity-based hashing), causing collisions and incorrect lookup behavior."
      }
    ]
  },
  {
    "id": 27,
    "slug": "set-dan-hashset",
    "title": "27. Set & HashSet",
    "module": "Collections Framework",
    "moduleId": 5,
    "duration": "15 min",
    "mdFile": "lessons/set-dan-hashset.md",
    "defaultCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Set<String> roles = new HashSet<>();\n        roles.add(\"Admin\");\n        roles.add(\"User\");\n        roles.add(\"Admin\"); // duplikat otomatis diabaikan\n\n        System.out.println(\"Isi Set (tanpa duplikat): \" + roles);\n        System.out.println(\"Jumlah role unik: \" + roles.size());\n    }\n}",
    "expectedOutput": "Isi Set (tanpa duplikat): [User, Admin]\nJumlah role unik: 2",
    "hint": "HashSet tidak mengizinkan elemen duplikat dan tidak menjamin urutan elemen.",
    "quiz": [
      {
        "question": "Apa yang terjadi jika Anda menambahkan elemen duplikat ke dalam HashSet?",
        "options": [
          "Entry akan ditolak dan tidak ditambahkan",
          "Entry akan ditambahkan dan HashSet akan berisi duplikat",
          "HashSet akan mengubahnya menjadi ArrayList",
          "Program akan crash karena duplikat"
        ],
        "answer": 0,
        "explanation": "HashSet hanya menyimpan elemen unik. Jika elemen duplikat ditambahkan, HashSet akan menolaknya tanpa menandakan kesalahan."
      },
      {
        "question": "Apa yang terjadi jika Anda memanggil remove() pada HashSet dengan elemen yang tidak ada?",
        "options": [
          "HashSet akan mengembalikan true",
          "HashSet akan melempar NullPointerException",
          "HashSet akan mengembalikan false",
          "HashSet akan menambahkan elemen tersebut secara otomatis"
        ],
        "answer": 2,
        "explanation": "HashSet.remove() mengembalikan boolean. Jika elemen tidak ditemukan, akan mengembalikan false tanpa mengubah struktur data."
      },
      {
        "question": "Apa yang terjadi jika Anda memanggil clear() pada HashSet?",
        "options": [
          "Elemen terakhir akan dihapus",
          "Semua elemen akan dihapus",
          "Hanya elemen terdepan yang akan dihapus",
          "HashSet akan di-reset dengan elemen baru"
        ],
        "answer": 1,
        "explanation": "clear() menghapus semua elemen dari HashSet, membuatnya kosong kembali."
      },
      {
        "question": "Apa yang terjadi jika Anda memanggil `contains()` pada HashSet setelah `add()` elemen?",
        "options": [
          "Mungkin mengembalikan false",
          "Mungkin mengembalikan true",
          "Mungkin mengembalikan true atau false tergantung pada hash code",
          "Salah total"
        ],
        "answer": 0,
        "explanation": "HashSet garansi bahwa `contains()` akan mengembalikan true setelah `add()` elemen yang sama, karena HashSet dirancang untuk itu."
      }
    ]
  },
  {
    "id": 28,
    "slug": "map-dan-hashmap",
    "title": "28. Map & HashMap",
    "module": "Collections Framework",
    "moduleId": 5,
    "duration": "20 min",
    "mdFile": "lessons/map-dan-hashmap.md",
    "defaultCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, String> kamus = new HashMap<>();\n        kamus.put(\"id\", \"Bahasa Indonesia\");\n        kamus.put(\"en\", \"English\");\n        kamus.put(\"jp\", \"Japanese\");\n\n        System.out.println(\"Kode 'id' => \" + kamus.get(\"id\"));\n        System.out.println(\"Apakah punya key 'en'? \" + kamus.containsKey(\"en\"));\n        System.out.println(\"Total pasangan: \" + kamus.size());\n    }\n}",
    "expectedOutput": "Kode 'id' => Bahasa Indonesia\nApakah punya key 'en'? true\nTotal pasangan: 3",
    "hint": "Map menyimpan data dalam format pasangan Key-Value, dengan Key yang harus unik.",
    "quiz": [
      {
        "question": "Apa karakteristik utama dari Map di Java?",
        "options": [
          "Menyimpan elemen tunggal secara berurutan",
          "Menyimpan pasangan key-value di mana key harus unik",
          "Mengizinkan key duplikat tapi value harus unik",
          "Hanya bisa menyimpan tipe data primitif"
        ],
        "answer": 1,
        "explanation": "Map menyimpan pasangan key-value. Setiap key bersifat unik dan memetakan ke paling banyak satu value."
      },
      {
        "question": "Berapa kompleksitas waktu rata-rata operasi get() dan put() pada HashMap?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n^2)"
        ],
        "answer": 2,
        "explanation": "HashMap menggunakan hashing untuk mencapai waktu operasi konstan O(1) dalam kondisi rata-rata."
      },
      {
        "question": "Apa yang terjadi jika Anda memanggil put(key, newValue) dengan key yang sudah ada di HashMap?",
        "options": [
          "Melempar DuplicateKeyException",
          "Mengabaikan input baru",
          "Mengganti nilai lama dengan nilai baru dan mengembalikan nilai lama",
          "Membuat entry baru dengan key yang sama"
        ],
        "answer": 2,
        "explanation": "put() akan menimpa value lama yang diasosiasikan dengan key tersebut dan mengembalikan nilai lama."
      },
      {
        "question": "Implementasi Map apa yang menjamin urutan elemen terurut berdasarkan natural ordering dari key-nya?",
        "options": [
          "HashMap",
          "LinkedHashMap",
          "TreeMap",
          "Hashtable"
        ],
        "answer": 2,
        "explanation": "TreeMap mengurutkan key berdasarkan natural order (Comparable) atau Comparator khusus."
      }
    ]
  },
  {
    "id": 29,
    "slug": "queue-dan-deque",
    "title": "29. Queue & Deque",
    "module": "Collections Framework",
    "moduleId": 5,
    "duration": "15 min",
    "mdFile": "lessons/queue-dan-deque.md",
    "defaultCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Queue: FIFO (First-In First-Out)\n        Queue<String> antrian = new LinkedList<>();\n        antrian.offer(\"Nasabah 1\");\n        antrian.offer(\"Nasabah 2\");\n        antrian.offer(\"Nasabah 3\");\n\n        System.out.println(\"Dilayani: \" + antrian.poll());\n        System.out.println(\"Sisa antrian: \" + antrian);\n    }\n}",
    "expectedOutput": "Dilayani: Nasabah 1\nSisa antrian: [Nasabah 2, Nasabah 3]",
    "hint": "Metode offer() menambahkan elemen di belakang, poll() mengambil dan menghapus elemen dari depan.",
    "quiz": [
      {
        "question": "Queue biasanya menggunakan urutan?",
        "options": [
          "LIFO",
          "FIFO",
          "Acak",
          "Priority"
        ],
        "answer": 1,
        "explanation": "Queue umumnya FIFO (first-in-first-out)."
      },
      {
        "question": "Metode untuk lihat kepala queue tanpahapus?",
        "options": [
          "poll()",
          "remove()",
          "peek()",
          "element()"
        ],
        "answer": 2,
        "explanation": "peek() mengembalikan elemen pertama tanpa menghapus; null jika kosong."
      },
      {
        "question": "Deque beroperasi di?",
        "options": [
          "Hanya kepala",
          "Hanya ekor",
          "Kedua ujung",
          "Tidak ada"
        ],
        "answer": 2,
        "explanation": "Deque (double-ended queue) mendukung penambahan dan penghapusan di kedua ujung."
      },
      {
        "question": "Implementasi Queue default yang disarankan?",
        "options": [
          "LinkedList",
          "ArrayDeque",
          "Vector",
          "Stack"
        ],
        "answer": 1,
        "explanation": "ArrayDeque lebih cepat dan generally better daripada LinkedList untuk Queue/Deque."
      },
      {
        "question": "PriorityQueue tidak guarantee?",
        "options": [
          "FIFO order",
          "Order by natural/comparator",
          "Thread safety",
          "Null elements"
        ],
        "answer": 0,
        "explanation": "PriorityQueue mengutamakan berdasarkan prioritas, bukan urutan masuk (FIFO)."
      }
    ]
  },
  {
    "id": 30,
    "slug": "optional-dan-streams-dasar",
    "title": "30. Optional & Streams",
    "module": "Collections Framework",
    "moduleId": 5,
    "duration": "25 min",
    "mdFile": "lessons/optional-dan-streams-dasar.md",
    "defaultCode": "import java.util.*;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = List.of(\"Andi\", \"Budi\", \"Cindy\", \"Agus\", \"Dewi\");\n\n        // Filter nama berawalan 'A' dan uppercase\n        List<String> filtered = names.stream()\n            .filter(n -> n.startsWith(\"A\"))\n            .map(String::toUpperCase)\n            .collect(Collectors.toList());\n\n        System.out.println(\"Nama awalan 'A': \" + filtered);\n\n        // Optional handling\n        Optional<String> first = names.stream().findFirst();\n        System.out.println(\"Nama pertama : \" + first.orElse(\"Tidak ada\"));\n    }\n}",
    "expectedOutput": "Nama awalan 'A': [ANDI, AGUS]\nNama pertama : Andi",
    "hint": "Stream API mempermudah pemrosesan koleksi secara fungsional, dan Optional mencegah NullPointerException.",
    "quiz": [
      {
        "question": "Tujuan Optional?",
        "options": [
          "Menyimpan banyak nilai",
          "Menghindari null checks",
          "Membuat thread",
          "Mengganti List"
        ],
        "answer": 1,
        "explanation": "Optional berfungsi untuk menangani kemungkinan null dengan lebihExpressif, mengurangi NullPointerException."
      },
      {
        "question": "Method untuk dapat nilai dengan default?",
        "options": [
          "get()",
          "orElse()",
          "ifPresent()",
          "map()"
        ],
        "answer": 1,
        "explanation": "orElse(default) mengembalikan nilai jika ada, atau default jika kosong."
      },
      {
        "question": "Operasi stream yang masih lazy?",
        "options": [
          "forEach()",
          "collect()",
          "filter()",
          "count()"
        ],
        "answer": 2,
        "explanation": "filter adalah intermediate operation (lazy); forEach, collect, count adalah terminal."
      },
      {
        "question": "Cara membuat stream dari list?",
        "options": [
          "list.stream()",
          "new Stream(list)",
          "Stream.of(list)",
          "list.getStream()"
        ],
        "answer": 0,
        "explanation": "list.stream() mengembalikan Stream dari elemen list."
      },
      {
        "question": "Apa yang dilakukan map()?",
        "options": [
          "Filter",
          "Transform",
          "Reduce",
          "Sort"
        ],
        "answer": 1,
        "explanation": "map(Function) mengubah setiap elemen menjadi bentuk lain."
      }
    ]
  }
];

let currentLessonIndex = 0;
let progress = JSON.parse(localStorage.getItem('java_progress') || '{}');
let filterQuery = '';

// ============ Sidebar Navigation (Accordion 5 Modul + Search) ============
function renderNav(filter) {
    const nav = document.getElementById('lessons-nav');
    if (!nav) return;
    const q = (filter || filterQuery || '').toLowerCase().trim();
    const curModId = LESSONS[currentLessonIndex] ? LESSONS[currentLessonIndex].moduleId : 1;
    nav.innerHTML = MODULES.map(function(mod) {
        const modLessons = LESSONS.filter(function(l) { return l.moduleId === mod.id; });
        const filtered = q ? modLessons.filter(function(l){ return l.title.toLowerCase().includes(q) || mod.title.toLowerCase().includes(q); }) : modLessons;
        if (q && filtered.length === 0) return '';
        const doneCount = modLessons.filter(function(l) { return !!progress[l.id]; }).length;
        const isCurrentModule = q ? true : mod.id === curModId;
        const lessonRows = filtered.map(function(l) {
            const idx = LESSONS.findIndex(function(x) { return x.id === l.id; });
            const isActive = idx === currentLessonIndex;
            const isDone = !!progress[l.id];
            const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
            return '<button onclick="loadLesson(' + idx + '); closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 ' + cls + '">' +
                '<span class="text-[11px] shrink-0">' + (isDone ? '&#9989;' : '&#9675;') + '</span>' +
                '<span class="truncate flex-1">' + l.title + '</span></button>';
        }).join('');
        const badgeCls = doneCount === modLessons.length ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
        return '<div class="mb-1">' +
            '<button onclick="toggleModule(' + mod.id + ')" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">' +
            '<span class="flex items-center gap-2 truncate"><i class="' + mod.icon + ' text-red-400 text-sm w-4 text-center"></i><span class="truncate">' + mod.title + '</span></span>' +
            '<span class="text-[10px] font-mono px-2 py-0.5 rounded-full ' + badgeCls + '">' + doneCount + '/' + modLessons.length + '</span></button>' +
            '<div id="module-' + mod.id + '" class="space-y-0.5 mt-0.5 px-2 ' + (isCurrentModule ? '' : 'hidden') + '">' + lessonRows + '</div></div>';
    }).join('');
    const totalDone = Object.keys(progress).filter(k => progress[k]).length;
    const statDone = document.getElementById('stat-done');
    if (statDone) statDone.textContent = totalDone;
}

function toggleModule(id) {
    const el = document.getElementById('module-' + id);
    if (el) el.classList.toggle('hidden');
}

// ============ Lesson Loader ============
async function loadLesson(index) {
    if (index < 0 || index >= LESSONS.length) return;
    currentLessonIndex = index;
    const lesson = LESSONS[index];

    // Show sections
    { const _cs=document.getElementById('code-section'); if(_cs) _cs.style.display='block'; }
    { const _nb=document.getElementById('nav-buttons'); if(_nb) _nb.style.display='flex'; }

    // Update Header
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    { const _bc=document.getElementById('breadcrumb'); if(_bc) _bc.textContent = `Module ${lesson.moduleId} — ${mod ? mod.title : ''}`; }
    { const _lt=document.getElementById('lesson-title'); if(_lt) _lt.textContent = lesson.title; }
    const durationEl = document.getElementById('lesson-duration');
    if (durationEl) durationEl.innerHTML = '<i class="fa-regular fa-clock"></i> ' + (lesson.duration || '15 min');
    const levelEl = document.getElementById('lesson-level');
    if (levelEl) levelEl.textContent = 'Modul ' + lesson.moduleId + ' · ' + (mod ? mod.title : '');
    const idEl = document.getElementById('lesson-id');
    if (idEl) idEl.textContent = '#' + lesson.slug;

    // Show loading in lesson content
    const contentEl = document.getElementById('lesson-content');
    contentEl.innerHTML = `
        <div class="text-center py-12 text-slate-400">
            <i class="fas fa-spinner fa-spin text-2xl mb-3 text-orange-400"></i>
            <p>Memuat materi...</p>
        </div>
    `;

    // Fetch markdown content locally (fast & reliable)
    try {
        const response = await fetch(lesson.mdFile);
        if (response.ok) {
            const md = await response.text();
            contentEl.innerHTML = marked.parse(md);
            enhanceCodeBlocks(contentEl);
        } else {
            contentEl.innerHTML = `<div class="p-6 bg-red-950/40 border border-red-800 rounded-lg text-red-300">
                Gagal memuat materi dari <code>${lesson.mdFile}</code>.
            </div>`;
        }
    } catch (err) {
        console.error('Failed to load markdown:', err);
        contentEl.innerHTML = `<div class="p-6 bg-red-950/40 border border-red-800 rounded-lg text-red-300">
            Terjadi kesalahan jaringan saat memuat materi.
        </div>`;
    }

    // Setup Code Editor
    const editor = document.getElementById('code-editor');
    editor.value = lesson.defaultCode;
    setTimeout(updateGutter, 30);
    const output = document.getElementById('output');
    output.innerHTML = '<span class="text-slate-500">// Output akan muncul di sini saat tombol Run ditekan</span>';
    
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation hidden';
    valMsg.classList.add('hidden');

    // Setup Quiz
    renderQuiz(lesson);

    // Setup Progress & Completed Button
    updateButtonsState(lesson);

    // Re-render sidebar to highlight active lesson
    renderNav();
  
    updateOverallProgress();

    // Scroll to top of content
    (document.getElementById('contentArea') || document.getElementById('content-scroll'))?.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu if open
    closeMobileSidebar();
}

// ============ Code Blocks Enhancer (Copy button + Highlight) ============
function enhanceCodeBlocks(container) {
    // Highlight with highlight.js if available
    if (window.hljs) {
        container.querySelectorAll('pre code').forEach(el => {
            try { window.hljs.highlightElement(el); } catch (e) {}
        });
    }
    const preBlocks = container.querySelectorAll('pre');
    preBlocks.forEach(pre => {
        if (pre.querySelector('.code-copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'code-copy-btn';
        btn.innerHTML = '<i class="far fa-copy mr-1"></i>Salin';
        btn.onclick = () => {
            const code = pre.querySelector('code')?.innerText || pre.innerText;
            navigator.clipboard.writeText(code).then(() => {
                btn.innerHTML = '<i class="fas fa-check mr-1"></i>Tersalin!';
                setTimeout(() => { btn.innerHTML = '<i class="far fa-copy mr-1"></i>Salin'; }, 2000);
            });
        };
        pre.appendChild(btn);
    });
}

// ============ Code Execution (Simulation) ============
async function runCode() {
    const lesson = LESSONS[currentLessonIndex];
    // --- real compile via Judge0 CE (JDK 17), fallback to local println simulation ---
    try {
        const _edJ = document.getElementById('code-editor');
        const _outJ = document.getElementById('output');
        const _valJ = document.getElementById('validation-msg');
        if (_edJ && _outJ) {
            _outJ.innerHTML = '<span class="text-slate-400">\u23f3 Compiling & running (JDK 17)…</span>';
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 30000);
            const res = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ language_id: 91, source_code: _edJ.value }),
                signal: controller.signal
            });
            clearTimeout(timer);
            if (res.ok) {
                const j = await res.json();
                const okStatus = j.status && j.status.id === 3;
                if (okStatus && j.stdout != null) {
                    const txt = j.stdout || '(tidak ada output — program selesai tanpa print)';
                    _outJ.innerHTML = '<div class="mb-2 text-slate-500 text-xs">// Output — real compile JDK 17 (Judge0)</div><div class="text-emerald-400 whitespace-pre-wrap">' + escapeHtml(txt) + '</div>';
                    const exp = (lesson.expectedOutput || '').trim();
                    if (exp && txt.includes(exp.split('\n')[0].trim().slice(0, 40))) {
                        _valJ.className = 'validation correct'; _valJ.classList.remove('hidden');
                        _valJ.innerHTML = '<i class="fas fa-check-circle mr-2 text-emerald-400"></i><strong>Output sesuai!</strong> Real compile JDK 17 — progress tersimpan.';
                        try { const prog = JSON.parse(localStorage.getItem('java_progress') || '{}'); prog[lesson.id ?? currentLessonIndex] = true; localStorage.setItem('java_progress', JSON.stringify(prog)); } catch {}
                    } else if (exp) {
                        _valJ.className = 'validation wrong'; _valJ.classList.remove('hidden');
                        _valJ.innerHTML = '\U0001f4a1 Output real belum sesuai. Harus mengandung: <b>' + escapeHtml(exp.split('\n')[0].trim().slice(0, 80)) + '</b>';
                    }
                    try { if (typeof termLog === 'function') termLog('$ javac Main.java && java Main — real compile OK', 'success'); } catch {}
                    return;
                } else {
                    const err = j.stderr || j.compile_output || j.message || (j.status && j.status.description) || 'Compile error';
                    _outJ.innerHTML = '<div class="mb-2 text-slate-500 text-xs">// Compiler error — JDK 17</div><div class="text-rose-400 whitespace-pre-wrap">' + escapeHtml(String(err).slice(0, 1500)) + '</div>';
                    _valJ.className = 'validation wrong'; _valJ.classList.remove('hidden');
                    _valJ.innerHTML = '\u274c Compile error — perbaiki kode lalu Run lagi.';
                    return;
                }
            }
        }
    } catch (e) { /* network fail -> local simulation below */ }
    const _ed=document.getElementById('code-editor');
    const userCode = _ed ? _ed.value : '';
    const output = document.getElementById('output');
    if(!_ed || !output) return;
    const valMsg = document.getElementById('validation-msg');

    // --- extract System.out.print/println/printf strings (real simulation) ---
    function simulateJava(code) {
        const lines = [];
        let hasPrint = false;
        // Match System.out.println("..."), System.out.print("..."), System.out.printf("...", ...)
        const re = /System\.out\.print(?:ln|f)?\s*\(\s*([^)]*)\)/g;
        let m;
        while ((m = re.exec(code)) !== null) {
            hasPrint = true;
            let args = m[1].trim();
            // handle string literals + concatenations with +
            // split by + outside quotes (simple)
            let parts = [];
            let cur = '', inStr = false, esc = false, quote = '';
            for (let i = 0; i < args.length; i++) {
                const ch = args[i];
                if (esc) { cur += ch; esc = false; continue; }
                if (ch === '\\') { cur += ch; esc = true; continue; }
                if ((ch === '"' || ch === "'") && !inStr) { inStr = true; quote = ch; cur += ch; continue; }
                if (ch === quote && inStr) { inStr = false; cur += ch; continue; }
                if (ch === '+' && !inStr) { parts.push(cur.trim()); cur = ''; continue; }
                cur += ch;
            }
            if (cur.trim()) parts.push(cur.trim());
            // resolve each part to string
            let resolved = parts.map(p => {
                const sm = p.match(/^"(.*)"$/s) || p.match(/^'(.*)'$/s);
                if (sm) return sm[1].replace(/\\n/g,'\n').replace(/\\t/g,'\t').replace(/\\"/g,'"');
                // numeric literal
                if (/^-?\d+(\.\d+)?$/.test(p)) return p;
                // boolean/null
                if (p === 'true' || p === 'false' || p === 'null') return p;
                // try to resolve variable assignment: look for "Type name = value" or "name = value"
                const varRe = new RegExp('(?:\\b\\w+\\s+)?' + p.replace(/\$/g,'\\$') + '\\s*=\\s*("[^"]*"|\'[^\']*\'|\\S+)');
                const vm = code.match(varRe);
                if (vm) {
                    const v = vm[1].replace(/^["']|["']$/g,'');
                    return v;
                }
                return p;
            }).join('');
            lines.push(resolved);
        }
        // Arrays.toString helper
        const arrRe = /Arrays\.toString\s*\(\s*(\w+)\s*\)/g;
        let am;
        while ((am = arrRe.exec(code)) !== null) {
            if (!hasPrint) { lines.push('[array]'); hasPrint = true; }
        }
        return { hasPrint, text: lines.join('\n'), lines };
    }

    const sim = simulateJava(userCode);
    let displayText = '';
    let isReal = sim.hasPrint && sim.text.trim().length > 0;

    if (isReal) {
        displayText = sim.text;
        output.innerHTML = `<div class="mb-2 text-slate-500 text-xs">// Output — simulasi lokal (println extraction)</div><div class="text-emerald-400 whitespace-pre-wrap">${escapeHtml(displayText)}</div>`;
    } else {
        // fallback: show expected but mark as simulation
        displayText = lesson.expectedOutput || '(tidak ada output)';
        const hint = isReal ? '' : '<div class="text-[11px] text-slate-500 mt-1">Tip: pakai System.out.println("teks") agar output terbaca real.</div>';
        output.innerHTML = `<div class="mb-2 text-slate-500 text-xs">// Output simulasi — belum ada System.out.println terdeteksi</div><div class="text-emerald-400 whitespace-pre-wrap">${escapeHtml(displayText)}</div>${hint}`;
        isReal = false;
    }

    // validation vs expectedOutput
    const expected = (lesson.expectedOutput || '').trim();
    const got = (isReal ? displayText : expected).trim();
    const ok = expected && got.includes(expected.split('\n')[0].trim().slice(0,40));

    if (expected && (isReal ? displayText.includes(expected.split('\n')[0].trim()) : true)) {
        // if real print contains first line of expected, mark correct
        const firstLine = expected.split('\n')[0].trim();
        if (!isReal || displayText.includes(firstLine) || firstLine.length < 5) {
            valMsg.className = 'validation correct';
            valMsg.classList.remove('hidden');
            valMsg.innerHTML = `<i class="fas fa-check-circle mr-2 text-emerald-400"></i><strong>${isReal ? 'Output terdeteksi!' : 'Kode siap!'}</strong> ${isReal ? 'println terbaca — lanjutkan!' : 'Simulasi sesuai ekspektasi JVM (Java 21).'}`;
            if (isReal) {
                const k = lesson.id ?? currentLessonIndex;
                try { const prog = JSON.parse(localStorage.getItem('java_progress')||'{}'); prog[k]=true; localStorage.setItem('java_progress', JSON.stringify(prog)); } catch {}
            }
        } else {
            valMsg.className = 'validation wrong';
            valMsg.classList.remove('hidden');
            valMsg.innerHTML = `💡 Output belum sesuai. Harus mengandung: <b>${escapeHtml(firstLine.slice(0,80))}</b>`;
        }
    } else {
        valMsg.className = 'validation hidden';
        valMsg.classList.add('hidden');
    }
    try { if (typeof termLog === 'function') termLog('$ java run — ' + (isReal ? 'real println' : 'simulasi'), isReal ? 'success' : 'muted'); } catch {}
}

function resetCode() {
    const lesson = LESSONS[currentLessonIndex];
    document.getElementById('code-editor').value = lesson.defaultCode;
    setTimeout(updateGutter, 30);
    document.getElementById('output').innerHTML = '<span class="text-slate-500">// Kode telah di-reset ke versi awal</span>';
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation hidden';
    valMsg.classList.add('hidden');
}

function showSolution() {
    const lesson = LESSONS[currentLessonIndex];
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation info';
    valMsg.classList.remove('hidden');
    valMsg.innerHTML = `<div class="font-semibold mb-1"><i class="fas fa-lightbulb mr-2 text-amber-400"></i>Petunjuk Pembelajaran:</div><div>${lesson.hint}</div>`;
}

// ============ Master Template Helpers: Gutter / Copy / Terminal / Clear ============
function updateGutter() {
    const ta = document.getElementById('code-editor');
    const gutter = document.getElementById('editor-gutter');
    if (!ta || !gutter) return;
    const lines = ta.value.split('\n').length;
    gutter.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('<br>');
}

function copyCode() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    const code = editor.value;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
            termLog('$ code copied to clipboard', 'success');
        }).catch(() => {
            editor.select();
            document.execCommand('copy');
        });
    } else {
        editor.select();
        document.execCommand('copy');
    }
}

function clearOutput() {
    const out = document.getElementById('output');
    if (out) out.innerHTML = '<span class="muted"># Output akan muncul di sini — klik Run atau jalankan javac di terminal</span>';
}

function termLog(html, cls = '') {
    const log = document.getElementById('terminal-log');
    if (!log) return;
    const div = document.createElement('div');
    div.className = 'term-line ' + cls;
    div.innerHTML = html;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
}

function clearTerminal() {
    const log = document.getElementById('terminal-log');
    if (log) log.innerHTML = '<div class="term-line muted">$ terminal dibersihkan</div>';
}

function runTerminal() {
    const inp = document.getElementById('terminal-input');
    if (!inp) return;
    const cmd = inp.value.trim();
    if (!cmd) return;
    termLog('$ ' + escapeHtml(cmd));
    inp.value = '';
    if (cmd === 'clear' || cmd === 'cls') { clearTerminal(); return; }
    if (cmd === 'help') {
        termLog('Perintah tersedia:<br>javac Main.java && java Main — jalankan editor<br>java --version — cek JDK<br>clear / cls — bersihkan terminal<br>help — bantuan ini');
        return;
    }
    if (/javac|java\s+Main|java --version|java -version/.test(cmd)) {
        const lesson = LESSONS[currentLessonIndex];
        if (lesson) {
            termLog('$ javac Main.java && java Main');
            termLog(escapeHtml(lesson.expectedOutput), 'success');
        } else {
            termLog('$ Hello, Java 21!', 'success');
        }
        return;
    }
    termLog('simulasi: perintah tidak dikenal — ketik <code>help</code>', 'err');
}

// ============ Quiz Engine ============
function renderQuiz(lesson) {
    const quizSec = document.getElementById('quiz-section');
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    quizResult.innerHTML = '';

    if (!lesson.quiz || lesson.quiz.length === 0) {
        if (quizSec) { quizSec.style.display = 'none'; quizSec.classList.add('hidden'); }
        return;
    }

    if (quizSec) { quizSec.style.display = 'block'; quizSec.classList.remove('hidden'); }
    quizContent.innerHTML = lesson.quiz.map((q, qIndex) => `
        <div class="quiz-question-card" id="quiz-card-${qIndex}">
            <div class="quiz-q-text">${qIndex + 1}. ${escapeHtml(q.question)}</div>
            <div class="quiz-options-group">
                ${q.options.map((opt, oIndex) => `
                    <label class="quiz-option" id="q-${qIndex}-opt-${oIndex}">
                        <input type="radio" name="quiz_q_${qIndex}" value="${oIndex}">
                        <span>${escapeHtml(opt)}</span>
                    </label>
                `).join('')}
            </div>
            <div class="quiz-explain hidden" id="quiz-explain-${qIndex}"></div>
        </div>
    `).join('');
}

function checkQuiz() {
    const lesson = LESSONS[currentLessonIndex];
    if (!lesson.quiz || lesson.quiz.length === 0) return;

    let correctCount = 0;
    let answeredAll = true;

    lesson.quiz.forEach((q, qIndex) => {
        const selected = document.querySelector(`input[name="quiz_q_${qIndex}"]:checked`);
        const explainEl = document.getElementById(`quiz-explain-${qIndex}`);

        if (!selected) {
            answeredAll = false;
            return;
        }

        const chosen = parseInt(selected.value);
        const isCorrect = chosen === q.answer;

        if (isCorrect) correctCount++;

        // Visual feedback
        q.options.forEach((_, oIndex) => {
            const optLabel = document.getElementById(`q-${qIndex}-opt-${oIndex}`);
            optLabel.classList.remove('correct', 'wrong');
            if (oIndex === q.answer) {
                optLabel.classList.add('correct');
            } else if (oIndex === chosen && !isCorrect) {
                optLabel.classList.add('wrong');
            }
        });

        if (explainEl && q.explanation) {
            explainEl.className = 'quiz-explain';
            explainEl.innerHTML = `<strong>Penjelasan:</strong> ${escapeHtml(q.explanation)}`;
        }
    });

    const resEl = document.getElementById('quiz-result');
    if (!answeredAll) {
        resEl.innerHTML = `<div class="quiz-feedback partial"><i class="fas fa-exclamation-circle mr-2"></i>Harap jawab semua pertanyaan sebelum melihat hasil.</div>`;
        return;
    }

    const total = lesson.quiz.length;
    const isPassing = correctCount === total;

    if (isPassing) {
        resEl.innerHTML = `<div class="quiz-feedback correct"><i class="fas fa-trophy mr-2"></i>Luar biasa! Semua jawaban benar (${correctCount}/${total}). Lesson siap ditandai selesai!</div>`;
        // Auto mark complete when quiz is perfect
        markComplete(false);
    } else {
        resEl.innerHTML = `<div class="quiz-feedback wrong"><i class="fas fa-times-circle mr-2"></i>Anda mendapatkan ${correctCount} dari ${total} benar. Periksa jawaban dan pelajari kembali penjelasannya.</div>`;
    }
}

// ============ Progress Management ============
function updateButtonsState(lesson) {
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (progress[lesson.id]) {
        completeBtn.style.display = 'none';
        completedBtn.style.display = 'inline-flex';
    } else {
        completeBtn.style.display = 'inline-flex';
        completedBtn.style.display = 'none';
    }

    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === LESSONS.length - 1;
}

function markComplete(advance = true) {
    const lesson = LESSONS[currentLessonIndex];
    progress[lesson.id] = true;
    localStorage.setItem('java_progress', JSON.stringify(progress));

    updateButtonsState(lesson);
    renderNav();
    updateOverallProgress();

    if (advance && currentLessonIndex < LESSONS.length - 1) {
        setTimeout(() => {
            loadLesson(currentLessonIndex + 1);
        }, 600);
    }
}

function updateOverallProgress() {
    const total = LESSONS.length;
    const done = Object.keys(progress).filter(k => progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = pct + '%';

    const text = document.getElementById('course-progress');
    if (text) text.textContent = pct + '% selesai';

    const count = document.getElementById('progress-count');
    if (count) count.textContent = `${done}/${total}`;

    const mobText = document.getElementById('mobile-progress');
    if (mobText) mobText.textContent = pct + '%';
}

function resetProgress() {
    if (!confirm('Apakah Anda yakin ingin mereset seluruh progres pembelajaran Java?')) return;
    progress = {};
    localStorage.removeItem('java_progress');
    renderNav();
    updateOverallProgress();
    if (LESSONS[currentLessonIndex]) {
        updateButtonsState(LESSONS[currentLessonIndex]);
    }
}

// ============ Navigation ============
function nextLesson() {
    if (currentLessonIndex < LESSONS.length - 1) {
        loadLesson(currentLessonIndex + 1);
    }
}

function prevLesson() {
    if (currentLessonIndex > 0) {
        loadLesson(currentLessonIndex - 1);
    }
}

// ============ Mobile Drawer ============

function closeSidebar(){ try{ if(typeof closeMobileSidebar==='function') closeMobileSidebar(); }catch(e){} const _sb=document.getElementById('sidebar'); if(_sb){ _sb.classList.remove('open'); } const _bd=document.getElementById('backdrop'); if(_bd) _bd.classList.remove('show'); const _ov=document.getElementById('sidebarOverlay'); if(_ov) _ov.classList.remove('show'); }
function setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const backdrop = document.getElementById('backdrop');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('show');
        if (backdrop) backdrop.classList.toggle('show');
    });

    if (overlay) overlay.addEventListener('click', closeMobileSidebar);
    if (backdrop) backdrop.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const backdrop = document.getElementById('backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    if (backdrop) backdrop.classList.remove('show');
}

// ============ Utilities ============
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ============ Boot ============
document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    updateOverallProgress();
    setupMobileMenu();
  if (typeof loadLesson === 'function') { setTimeout(() => loadLesson(0), 50); }

    // Editor Gutter Live
    const ed = document.getElementById('code-editor');
    if (ed) {
        ed.addEventListener('input', updateGutter);
        ed.addEventListener('scroll', () => {
            const g = document.getElementById('editor-gutter');
            if (g) g.scrollTop = ed.scrollTop;
        });
    }

    // Tabs (Editor / Terminal)
    document.querySelectorAll('.tab').forEach(t => {
        t.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            const panel = document.getElementById('tab-' + t.dataset.tab);
            if (panel) panel.classList.add('active');
        });
    });

    // Search Input (Desktop & Mobile)
    const s = document.getElementById('searchInput') || document.getElementById('lesson-search');
    const sm = document.getElementById('searchInputMobile') || document.getElementById('lesson-search-mobile');
    const handler = (v) => { filterQuery = v; renderNav(); };
    if (s) s.addEventListener('input', e => handler(e.target.value));
    if (sm) sm.addEventListener('input', e => { handler(e.target.value); if (s) s.value = e.target.value; });

    document.addEventListener('keydown', e => {
        if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
            e.preventDefault();
            s?.focus();
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
        if (e.key === 'Escape') {
            document.getElementById('sidebar')?.classList.remove('open');
            document.getElementById('backdrop')?.classList.remove('show');
            document.getElementById('sidebarOverlay')?.classList.remove('show');
        }
    });

    // Terminal Enter
    const ti = document.getElementById('terminal-input');
    if (ti) ti.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            runTerminal();
        }
    });

    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeToggleIcon');
    function applyTheme(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        if (themeIcon) {
            themeIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        }
        localStorage.setItem('java_theme', isDark ? 'dark' : 'light');
    }
    const savedTheme = localStorage.getItem('java_theme');
    applyTheme(savedTheme !== 'light');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            applyTheme(!isDark);
        });
    }

    // Auto-load last viewed or first lesson
    const savedLastIndex = parseInt(localStorage.getItem('java_last_lesson') || '0');
    const initialIndex = (savedLastIndex >= 0 && savedLastIndex < LESSONS.length) ? savedLastIndex : 0;

    // Load first lesson directly (or last viewed)
    loadLesson(initialIndex);
    setTimeout(updateGutter, 200);

    // Save current index on unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('java_last_lesson', currentLessonIndex);
    });

    // Expose for debugging
    window.app = { LESSONS, MODULES, loadLesson, copyCode, clearOutput, clearTerminal, runTerminal };
});
