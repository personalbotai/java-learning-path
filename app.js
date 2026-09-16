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
        "question": "Apa peran utama Java Virtual Machine (JVM) dalam eksekusi kode Java?",
        "options": [
          "Mengeksekusi bytecode (.class) dan mengelolanya ke instruksi mesin native via JIT Compiler",
          "Mengedit file source code .java secara otomatis",
          "Menggantikan peran sistem operasi host",
          "Hanya bertugas memformat string output"
        ],
        "answer": 0,
        "explanation": "JVM mengeksekusi bytecode portabel dan mengoptimalkannya dengan JIT compiler."
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
        "question": "Apa perbedaan mendasar antara JDK, JRE, dan JVM?",
        "options": [
          "JDK memuat compiler (javac) dan developer tools; JRE memuat runtime library; JVM adalah mesin eksekusi bytecode",
          "JDK hanya untuk Android, JRE untuk server",
          "JVM adalah compiler, javac adalah interpreter",
          "Ketiganya sinonim tanpa perbedaan"
        ],
        "answer": 0,
        "explanation": "JDK adalah toolkit lengkap, JRE runtime saja, dan JVM core execution engine."
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
        "question": "Fitur Virtual Threads di Java 21 (Project Loom) dirancang untuk apa?",
        "options": [
          "Menjalankan jutaan lightweight threads dengan overhead memori sangat kecil untuk I/O-bound tasks",
          "Menggantikan seluruh Garbage Collector",
          "Mempercepat kompilasi javac",
          "Menghapus keyword synchronized"
        ],
        "answer": 0,
        "explanation": "Virtual threads berjalan di atas carrier thread pool OS, sangat ideal untuk throughput I/O tinggi."
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
        "question": "Signature method entry point standar program Java yang benar adalah?",
        "options": [
          "public static void main(String[] args)",
          "public void main(String[] args)",
          "static int main(String args)",
          "public main(String[] args)"
        ],
        "answer": 0,
        "explanation": "Entry point standar mewajibkan modifier public static void main(String[] args)."
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
        "question": "Keyword 'var' di Java 10+ (Local Variable Type Inference) hanya diizinkan di mana?",
        "options": [
          "Hanya untuk variabel lokal di dalam method yang langsung diinisialisasi nilainya",
          "Untuk field class instance dan static",
          "Untuk parameter method dan return type",
          "Untuk deklarasi package"
        ],
        "answer": 0,
        "explanation": "var hanya berlaku untuk local variables dengan initializers."
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
        "question": "Mengapa String di Java bersifat IMMUTABLE?",
        "options": [
          "Untuk keamanan, thread-safety, caching hash code, dan efisiensi String Constant Pool di JVM",
          "Karena memori JVM tidak mendukung update teks",
          "Agar String tidak bisa dimasukkan ke dalam Array",
          "Karena String bertipe primitif"
        ],
        "answer": 0,
        "explanation": "Immutability String memastikan keamanan multi-threading dan efisiensi memory reuse."
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
        "question": "Karakteristik apa yang membedakan 'record' class di Java 16+ dibanding class biasa?",
        "options": [
          "Record adalah immutable data carrier yang otomatis menghasilkan constructor, getters, equals(), hashCode(), dan toString()",
          "Record bisa meng-extend class lain",
          "Record field-nya bersifat mutable",
          "Record tidak memiliki constructor"
        ],
        "answer": 0,
        "explanation": "Record menyederhanakan deklarasi kelas pembawa data yang murni immutable."
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
        "question": "Sealed Classes / Interfaces di Java 17+ menggunakan keyword apa untuk membatasi class yang boleh meng-extend-nya?",
        "options": [
          "permits",
          "allows",
          "extends only",
          "restrict"
        ],
        "answer": 0,
        "explanation": "Keyword 'permits' mendeklarasikan subclass resmi yang diizinkan meng-extend sealed type."
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
        "question": "Pada materi 'Enum & Constants', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Void & Special Types', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Type Casting', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Type Inference (var)', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'If-Else & Switch', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Loop Dasar (for, while)', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Break & Continue', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Exceptions Basics', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Try-Catch-Finally', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Throw & Throws', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Class & Object Dasar', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Access Modifiers', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Inheritance & Super', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Abstract Classes', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Interfaces Dasar', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Polymorphism', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Intro to Collections', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'List & ArrayList', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Set & HashSet', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Map & HashMap', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Queue & Deque', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
        "question": "Pada materi 'Optional & Streams', manakah prinsip arsitektur Modern Java 21 LTS yang benar?",
        "options": [
          "Memanfaatkan type-safety ketat, immutability (Records/Sealed), dan garbage collection efisien",
          "Menonaktifkan exception handling dengan blok catch kosong",
          "Menggunakan raw types tanpa generics",
          "Menghindari penggunaan OOP dan collections"
        ],
        "answer": 0,
        "explanation": "Modern Java 21 LTS mengedepankan type-safety, immutability, dan performa GC modern."
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
    const a = document.getElementById('complete-btn');
    const b = document.getElementById('completed-btn');
    const isDone = lesson && !!progress[lesson.id];
    if (a) a.style.display = isDone ? 'none' : 'inline-flex';
    if (b) b.style.display = isDone ? 'inline-flex' : 'none';
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (prevBtn) prevBtn.disabled = currentLessonIndex === 0;
    if (nextBtn) nextBtn.disabled = currentLessonIndex === LESSONS.length - 1;
}
function updateCompleteButtons(){ const cur = LESSONS[currentLessonIndex]; if(cur) updateButtonsState(cur); }

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
    const bar  = document.getElementById('progress-fill-bar');
    if (bar)  bar.style.width  = pct + '%';
    const text = document.getElementById('course-progress');
    if (text) text.textContent = pct + '%';
    const pt   = document.getElementById('progress-text');
    if (pt)   pt.textContent   = pct + '%';
    const count = document.getElementById('progress-count');
    if (count) count.textContent = `${done}/${total}`;
    const mobText = document.getElementById('mobile-progress');
    if (mobText) mobText.textContent = pct + '%';
    const sd = document.getElementById('stat-done');
    if (sd) sd.textContent = String(done);
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

function closeSidebar() {
    try { if (typeof closeMobileSidebar === 'function') closeMobileSidebar(); } catch(e){}
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('backdrop');
    const ov = document.getElementById('sidebarOverlay');
    if (sb) { sb.classList.remove('open'); sb.classList.remove('sidebar-open'); }
    if (bd) { bd.classList.remove('show'); bd.classList.add('hidden'); }
    if (ov) { ov.classList.remove('show'); ov.classList.add('hidden'); }
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && sb) {
        sb.classList.remove('-translate-x-full');
    }
}
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

// Expose for debugging & inline handlers
if (typeof window !== 'undefined') {
    window.MODULES = MODULES;
    window.LESSONS = LESSONS;
    window.lessons = LESSONS;
    window.app = { MODULES, LESSONS, lessons: LESSONS, loadLesson, copyCode, clearOutput, clearTerminal, runTerminal, nextLesson, prevLesson, markComplete, resetProgress, renderNav };
}
});


// ============================================

// ============================================
// Unified Certificate Generator & Gating (100% Completion Only)
// ============================================

window.isCourseFullyCompleted = function() {
    const total = typeof LESSONS !== 'undefined' ? LESSONS.length : 30;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    return total > 0 && done >= total;
};

window.openCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const total = typeof LESSONS !== 'undefined' ? LESSONS.length : 30;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isCompleted = done >= total && total > 0;

    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');

    if (!isCompleted) {
        // Show Locked State
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');

        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const rText = document.getElementById('cert-locked-remaining-text');
        if (pText) pText.textContent = `${done} / ${total} (${pct}%)`;
        if (pBar) pBar.style.width = `${pct}%`;
        if (rText) rText.textContent = `Tersisa ${Math.max(0, total - done)} pelajaran lagi untuk membuka sertifikat.`;
    } else {
        // Show Unlocked State
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');

        const savedName = localStorage.getItem('user_cert_name') || 'Software Engineer';
        const input = document.getElementById('cert-name-input');
        if (input) input.value = savedName;

        setTimeout(() => {
            window.drawCertificate();
        }, 100);
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.drawCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const studentName = (document.getElementById('cert-name-input')?.value || 'Software Engineer').trim();
    localStorage.setItem('user_cert_name', studentName);
    
    // Background Dark Luxury
    ctx.fillStyle = '#0a0f1a';
    ctx.fillRect(0, 0, width, height);
    
    // Outer Border & Accents
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#ef4444');
    gradient.addColorStop(0.5, '#ea580c');
    gradient.addColorStop(1, '#ef4444');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    // Inner thin border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, width - 90, height - 90);
    
    // Corner ornaments
    const drawCorner = (x, y) => {
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);
    
    // Header Tag
    ctx.textAlign = 'center';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.fillStyle = '#ef4444';
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 120);
    
    // Title
    ctx.font = '800 38px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Java Learning Path — Modern Java 21 LTS', width / 2, 175);
    
    // Subtext
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Diberikan kepada:', width / 2, 240);
    
    // Student Name
    ctx.font = '700 46px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(studentName, width / 2, 310);
    
    // Underline name
    const textWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((width - textWidth) / 2 - 20, 335);
    ctx.lineTo((width + textWidth) / 2 + 20, 335);
    ctx.stroke();
    
    // Paragraph
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Telah berhasil menyelesaikan 100% seluruh kurikulum interaktif, latihan kode praktik,', width / 2, 400);
    ctx.fillText('dan uji pemahaman (quiz) pada platform Java Learning Path dengan predikat Sangat Memuaskan.', width / 2, 430);
    
    // Verification & Date Footer
    const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const codeId = 'LP-' + Math.abs(studentName.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString(36).toUpperCase().padStart(8, '0');
    
    ctx.textAlign = 'left';
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Tanggal: ${today}`, 90, 560);
    ctx.fillText(`ID Sertifikat: #${codeId}`, 90, 585);
    ctx.fillText(`Status: Terverifikasi (100% Selesai)`, 90, 610);
    
    // Seal / Badge
    ctx.save();
    ctx.beginPath();
    ctx.arc(width - 150, 570, 48, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fill();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.textAlign = 'center';
    ctx.font = '32px Inter, sans-serif';
    ctx.fillText('☕', width - 150, 565);
    ctx.font = '700 10px Inter, sans-serif';
    ctx.fillStyle = '#ef4444';
    ctx.fillText('VERIFIED', width - 150, 595);
    ctx.restore();
};

window.downloadCertificatePNG = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat diunduh setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    const name = (document.getElementById('cert-name-input')?.value || 'sertifikat').trim().toLowerCase().replace(/\s+/g, '-');
    link.download = `sertifikat-${name}-java.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
};

window.printCertificate = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat dicetak setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
        win.document.write(`
            <html>
                <head>
                    <title>Cetak Sertifikat</title>
                    <style>
                        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #111; }
                        img { max-width: 95vw; max-height: 95vh; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
                        @media print {
                            body { background: transparent; }
                            img { width: 100%; max-width: 100%; }
                        }
                    </style>
                </head>
                <body onload="window.print()">
                    <img src="${dataUrl}">
                </body>
            </html>
        `);
        win.document.close();
    }
};
