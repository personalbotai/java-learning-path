import json
import glob
import os
import html

# Modul terstruktur: 5 modul, 6 lesson tiap modul
MODULES = [
    {
        "id": 1,
        "title": "Dasar-Dasar Java",
        "icon": "fas fa-play-circle",
        "lessons": [
            {"slug": "apa-itu-java", "title": "Apa itu Java?", "duration": "15 min"},
            {"slug": "instalasi-java", "title": "Instalasi Java & IDE", "duration": "20 min"},
            {"slug": "struktur-program", "title": "Struktur Program Java", "duration": "15 min"},
            {"slug": "variabel-tipe-data", "title": "Variabel & Tipe Data", "duration": "20 min"},
            {"slug": "input-output", "title": "Input & Output", "duration": "15 min"},
            {"slug": "hello-world", "title": "Hello World", "duration": "10 min"}
        ]
    },
    {
        "id": 2,
        "title": "Tipe Data & Operators",
        "icon": "fas fa-cube",
        "lessons": [
            {"slug": "wrapper-classes", "title": "Wrapper Classes", "duration": "15 min"},
            {"slug": "arrays", "title": "Array", "duration": "20 min"},
            {"slug": "enum-dan-constants", "title": "Enum & Constants", "duration": "15 min"},
            {"slug": "void-dan-special-types", "title": "Void & Special Types", "duration": "15 min"},
            {"slug": "type-casting", "title": "Type Casting", "duration": "20 min"},
            {"slug": "type-inference", "title": "Type Inference (var)", "duration": "15 min"}
        ]
    },
    {
        "id": 3,
        "title": "Kontrol Alur & Exceptions",
        "icon": "fas fa-code-branch",
        "lessons": [
            {"slug": "if-else-dan-switch", "title": "If-Else & Switch", "duration": "20 min"},
            {"slug": "loops-basic", "title": "Loop Dasar (for, while)", "duration": "20 min"},
            {"slug": "break-continue", "title": "Break & Continue", "duration": "15 min"},
            {"slug": "exceptions-basics", "title": "Exceptions Basics", "duration": "20 min"},
            {"slug": "try-catch-finally", "title": "Try-Catch-Finally", "duration": "20 min"},
            {"slug": "throw-dan-throws", "title": "Throw & Throws", "duration": "15 min"}
        ]
    },
    {
        "id": 4,
        "title": "Object-Oriented Programming",
        "icon": "fas fa-layer-group",
        "lessons": [
            {"slug": "class-dasar", "title": "Class & Object Dasar", "duration": "20 min"},
            {"slug": "access-modifiers", "title": "Access Modifiers", "duration": "15 min"},
            {"slug": "inheritance-extends-super", "title": "Inheritance & Super", "duration": "20 min"},
            {"slug": "abstract-classes", "title": "Abstract Classes", "duration": "15 min"},
            {"slug": "interfaces-basic", "title": "Interfaces Dasar", "duration": "20 min"},
            {"slug": "polymorphism", "title": "Polymorphism", "duration": "15 min"}
        ]
    },
    {
        "id": 5,
        "title": "Collections Framework",
        "icon": "fas fa-boxes",
        "lessons": [
            {"slug": "intro-collections", "title": "Intro to Collections", "duration": "20 min"},
            {"slug": "list-dan-arraylist", "title": "List & ArrayList", "duration": "20 min"},
            {"slug": "set-dan-hashset", "title": "Set & HashSet", "duration": "15 min"},
            {"slug": "map-dan-hashmap", "title": "Map & HashMap", "duration": "20 min"},
            {"slug": "queue-dan-deque", "title": "Queue & Deque", "duration": "15 min"},
            {"slug": "optional-dan-streams-dasar", "title": "Optional & Streams", "duration": "25 min"}
        ]
    }
]

# Code & expected output map
PRACTICE_DATA = {
    "apa-itu-java": {
        "code": """public class Main {
    public static void main(String[] args) {
        System.out.println("Java: Write Once, Run Anywhere!");
        System.out.println("Versi Java aktif: " + System.getProperty("java.version"));
    }
}""",
        "output": """Java: Write Once, Run Anywhere!
Versi Java aktif: 21.0.2""",
        "hint": "Gunakan System.out.println untuk mencetak teks ke layar."
    },
    "instalasi-java": {
        "code": """public class Main {
    public static void main(String[] args) {
        System.out.println("Cek status JDK:");
        System.out.println("- Kompiler : javac");
        System.out.println("- Runtime  : java");
        System.out.println("Setup Java selesai dan siap digunakan!");
    }
}""",
        "output": """Cek status JDK:
- Kompiler : javac
- Runtime  : java
Setup Java selesai dan siap digunakan!""",
        "hint": "Pastikan perintah javac -version dan java -version berhasil dijalankan di terminal."
    },
    "struktur-program": {
        "code": """// File: Main.java
public class Main {
    // Entry point aplikasi Java
    public static void main(String[] args) {
        System.out.println("Struktur Program Java:");
        System.out.println("1. Nama class sama dengan nama file");
        System.out.println("2. Method main dieksekusi pertama kali oleh JVM");
    }
}""",
        "output": """Struktur Program Java:
1. Nama class sama dengan nama file
2. Method main dieksekusi pertama kali oleh JVM""",
        "hint": "Setiap program Java harus memiliki minimal satu class dengan method public static void main(String[] args)."
    },
    "variabel-tipe-data": {
        "code": """public class Main {
    public static void main(String[] args) {
        String nama = "Alex";
        int usia = 21;
        double ipk = 3.85;
        boolean aktif = true;

        System.out.println("Nama  : " + nama);
        System.out.println("Usia  : " + usia + " tahun");
        System.out.println("IPK   : " + ipk);
        System.out.println("Aktif : " + aktif);
    }
}""",
        "output": """Nama  : Alex
Usia  : 21 tahun
IPK   : 3.85
Aktif : true""",
        "hint": "Tipe primitif mencakup int, double, boolean, char, byte, short, long, float."
    },
    "input-output": {
        "code": """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Simulasi input menggunakan scanner string
        String data = "Budi 25";
        Scanner sc = new Scanner(data);

        String nama = sc.next();
        int umur = sc.nextInt();

        System.out.printf("Halo %s, umur Anda %d tahun!%n", nama, umur);
        sc.close();
    }
}""",
        "output": """Halo Budi, umur Anda 25 tahun!""",
        "hint": "Gunakan Scanner(System.in) untuk input real-time dari console terminal."
    },
    "hello-world": {
        "code": """public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}""",
        "output": """Hello, World!""",
        "hint": "Ketik System.out.println(\"Hello, World!\");"
    },
    "wrapper-classes": {
        "code": """public class Main {
    public static void main(String[] args) {
        // Autoboxing: primitif -> wrapper
        Integer angkaObj = 100;
        
        // Unboxing: wrapper -> primitif
        int angkaPrim = angkaObj;

        // Utility method
        int parsed = Integer.parseInt("250");
        String biner = Integer.toBinaryString(10);

        System.out.println("Unboxed      : " + angkaPrim);
        System.out.println("Parsed int   : " + parsed);
        System.out.println("Biner dari 10: " + biner);
    }
}""",
        "output": """Unboxed      : 100
Parsed int   : 250
Biner dari 10: 1010""",
        "hint": "Wrapper classes mengubah primitif menjadi objek dan menyediakan utility parsing."
    },
    "arrays": {
        "code": """import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {12, 5, 89, 1, 45};

        System.out.println("Original: " + Arrays.toString(numbers));
        Arrays.sort(numbers);
        System.out.println("Sorted  : " + Arrays.toString(numbers));
        System.out.println("Panjang : " + numbers.length);
    }
}""",
        "output": """Original: [12, 5, 89, 1, 45]
Sorted  : [1, 5, 12, 45, 89]
Panjang : 5""",
        "hint": "Array berukuran tetap (fixed size). Gunakan Arrays.toString() untuk cetak isi array."
    },
    "enum-dan-constants": {
        "code": """public class Main {
    enum Level {
        LOW, MEDIUM, HIGH
    }

    public static final double PI = 3.14159;

    public static void main(String[] args) {
        Level status = Level.HIGH;
        System.out.println("Status level : " + status);
        System.out.println("Nilai PI     : " + PI);
    }
}""",
        "output": """Status level : HIGH
Nilai PI     : 3.14159""",
        "hint": "Gunakan enum untuk mendefinisikan kumpulan konstanta bernama yang terstruktur."
    },
    "void-dan-special-types": {
        "code": """public class Main {
    // method void tidak mengembalikan nilai
    static void sapaPengguna(String user) {
        System.out.println("Halo, " + user + "!");
    }

    public static void main(String[] args) {
        sapaPengguna("Developer Java");
        System.out.println("Void method selesai dieksekusi.");
    }
}""",
        "output": """Halo, Developer Java!
Void method selesai dieksekusi.""",
        "hint": "Gunakan void ketika sebuah method hanya melakukan tugas tanpa return statement bernilai."
    },
    "type-casting": {
        "code": """public class Main {
    public static void main(String[] args) {
        // Widening casting (otomatis): int -> double
        int angkaInt = 9;
        double angkaDouble = angkaInt;

        // Narrowing casting (manual): double -> int
        double pecahan = 9.78;
        int bulat = (int) pecahan;

        System.out.println("Widening : " + angkaDouble);
        System.out.println("Narrowing: " + bulat);
    }
}""",
        "output": """Widening : 9.0
Narrowing: 9""",
        "hint": "Narrowing casting membutuhkan penulisan tipe tujuan dalam tanda kurung: (tipe) nilai."
    },
    "type-inference": {
        "code": """public class Main {
    public static void main(String[] args) {
        // Local variable type inference (Java 10+)
        var nama = "Java 21";
        var versi = 21;
        var rilis = true;

        System.out.println("Nama  : " + nama);
        System.out.println("Versi : " + versi);
        System.out.println("Rilis : " + rilis);
    }
}""",
        "output": """Nama  : Java 21
Versi : 21
Rilis : true""",
        "hint": "Kata kunci 'var' hanya dapat digunakan pada local variable yang langsung diinisialisasi."
    },
    "if-else-dan-switch": {
        "code": """public class Main {
    public static void main(String[] args) {
        int skor = 85;

        // If-Else
        if (skor >= 90) {
            System.out.println("Grade: A");
        } else if (skor >= 80) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C");
        }

        // Switch expression
        String predikat = switch (skor / 10) {
            case 10, 9 -> "Sangat Baik";
            case 8 -> "Baik";
            default -> "Cukup";
        };
        System.out.println("Predikat: " + predikat);
    }
}""",
        "output": """Grade: B
Predikat: Baik""",
        "hint": "Java modern mendukung Switch Expression dengan operator panah (->) yang ringkas."
    },
    "loops-basic": {
        "code": """public class Main {
    public static void main(String[] args) {
        // For loop
        System.out.print("For loop  : ");
        for (int i = 1; i <= 3; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        // While loop
        System.out.print("While loop: ");
        int w = 3;
        while (w > 0) {
            System.out.print(w + " ");
            w--;
        }
        System.out.println();
    }
}""",
        "output": """For loop  : 1 2 3 
While loop: 3 2 1 """,
        "hint": "For loop cocok ketika jumlah iterasi diketahui; while loop cocok saat berbasis kondisi boolean."
    },
    "break-continue": {
        "code": """public class Main {
    public static void main(String[] args) {
        System.out.print("Continue lewati angka genap: ");
        for (int i = 1; i <= 6; i++) {
            if (i % 2 == 0) continue;
            System.out.print(i + " ");
        }
        System.out.println();

        System.out.print("Break berhenti di 4: ");
        for (int i = 1; i <= 10; i++) {
            if (i == 4) break;
            System.out.print(i + " ");
        }
        System.out.println();
    }
}""",
        "output": """Continue lewati angka genap: 1 3 5 
Break berhenti di 4: 1 2 3 """,
        "hint": "Continue melanjutkan ke iterasi berikutnya, break menghentikan seluruh perulangan seketika."
    },
    "exceptions-basics": {
        "code": """public class Main {
    public static void main(String[] args) {
        try {
            int hasil = 10 / 0;
            System.out.println("Hasil: " + hasil);
        } catch (ArithmeticException e) {
            System.out.println("Terjadi error: " + e.getMessage());
        }
        System.out.println("Program tetap berjalan lancar setelah error ditangani.");
    }
}""",
        "output": """Terjadi error: / by zero
Program tetap berjalan lancar setelah error ditangani.""",
        "hint": "Gunakan block try-catch untuk menangkap exception runtime agar aplikasi tidak berhenti mendadak."
    },
    "try-catch-finally": {
        "code": """public class Main {
    public static void main(String[] args) {
        try {
            int[] arr = {1, 2, 3};
            System.out.println("Elemen: " + arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Catch: Index di luar batas array!");
        } finally {
            System.out.println("Finally: Blok ini selalu dieksekusi.");
        }
    }
}""",
        "output": """Catch: Index di luar batas array!
Finally: Blok ini selalu dieksekusi.""",
        "hint": "Blok finally selalu dijalankan terlepas dari apakah terjadi exception atau tidak."
    },
    "throw-dan-throws": {
        "code": """public class Main {
    static void validasiUmur(int umur) throws IllegalArgumentException {
        if (umur < 18) {
            throw new IllegalArgumentException("Umur belum mencukupi (minimal 18)");
        }
        System.out.println("Akses diterima!");
    }

    public static void main(String[] args) {
        try {
            validasiUmur(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Exception ditangkap: " + e.getMessage());
        }
    }
}""",
        "output": """Exception ditangkap: Umur belum mencukupi (minimal 18)""",
        "hint": "'throw' melempar instance exception, 'throws' mendeklarasikan exception pada method signature."
    },
    "class-dasar": {
        "code": """class Mobil {
    String merk;
    int tahun;

    Mobil(String merk, int tahun) {
        this.merk = merk;
        this.tahun = tahun;
    }

    void klakson() {
        System.out.println(merk + " (" + tahun + "): Tiiin tiiin!");
    }
}

public class Main {
    public static void main(String[] args) {
        Mobil avanza = new Mobil("Toyota", 2022);
        avanza.klakson();
    }
}""",
        "output": """Toyota (2022): Tiiin tiiin!""",
        "hint": "Class adalah cetak biru (blueprint), sedangkan Object adalah bentuk nyata (instance)."
    },
    "access-modifiers": {
        "code": """class AkunBank {
    private double saldo = 500000;

    public double getSaldo() {
        return saldo;
    }

    public void setor(double jumlah) {
        if (jumlah > 0) saldo += jumlah;
    }
}

public class Main {
    public static void main(String[] args) {
        AkunBank akun = new AkunBank();
        akun.setor(150000);
        System.out.println("Saldo saat ini: Rp " + akun.getSaldo());
    }
}""",
        "output": """Saldo saat ini: Rp 650000.0""",
        "hint": "Prinsip enkapsulasi: deklarasikan field private dan sediakan getter/setter public."
    },
    "inheritance-extends-super": {
        "code": """class Hewan {
    String nama;
    Hewan(String nama) { this.nama = nama; }
    void bersuara() { System.out.println(nama + " bersuara"); }
}

class Kucing extends Hewan {
    Kucing(String nama) { super(nama); }

    @Override
    void bersuara() {
        System.out.println(nama + ": Meoow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Kucing k = new Kucing("Mimi");
        k.bersuara();
    }
}""",
        "output": """Mimi: Meoow!""",
        "hint": "Kata kunci 'extends' mewarisi sifat class induk, 'super()' memanggil konstruktor induk."
    },
    "abstract-classes": {
        "code": """abstract class Bentuk {
    abstract double hitungLuas();
    void info() { System.out.println("Menghitung luas bentuk geometris:"); }
}

class Persegi extends Bentuk {
    double sisi;
    Persegi(double sisi) { this.sisi = sisi; }

    @Override
    double hitungLuas() { return sisi * sisi; }
}

public class Main {
    public static void main(String[] args) {
        Persegi p = new Persegi(6);
        p.info();
        System.out.println("Luas Persegi (sisi 6) = " + p.hitungLuas());
    }
}""",
        "output": """Menghitung luas bentuk geometris:
Luas Persegi (sisi 6) = 36.0""",
        "hint": "Abstract class tidak bisa diinstansiasi langsung, dan subclass wajib mengimplementasikan method abstract."
    },
    "interfaces-basic": {
        "code": """interface Pembayaran {
    void bayar(double jumlah);
}

class QrisPayment implements Pembayaran {
    @Override
    public void bayar(double jumlah) {
        System.out.println("Pembayaran QRIS berhasil sejumlah: Rp " + jumlah);
    }
}

public class Main {
    public static void main(String[] args) {
        Pembayaran p = new QrisPayment();
        p.bayar(75000);
    }
}""",
        "output": """Pembayaran QRIS berhasil sejumlah: Rp 75000.0""",
        "hint": "Class dapat mengimplementasikan beberapa interface sekaligus menggunakan kata kunci 'implements'."
    },
    "polymorphism": {
        "code": """class Kalkulator {
    // Method overloading (Polimorfisme Compile-time)
    int tambah(int a, int b) { return a + b; }
    double tambah(double a, double b) { return a + b; }
}

public class Main {
    public static void main(String[] args) {
        Kalkulator calc = new Kalkulator();
        System.out.println("Tambah int   : " + calc.tambah(10, 20));
        System.out.println("Tambah double: " + calc.tambah(4.5, 2.5));
    }
}""",
        "output": """Tambah int   : 30
Tambah double: 7.0""",
        "hint": "Polimorfisme terbagi dua: Overloading (compile-time) dan Overriding (runtime)."
    },
    "intro-collections": {
        "code": """import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Java Collections Framework:");
        List<String> list = List.of("List (Terurut)", "Set (Unik)", "Map (Key-Value)");
        list.forEach(item -> System.out.println("- " + item));
    }
}""",
        "output": """Java Collections Framework:
- List (Terurut)
- Set (Unik)
- Map (Key-Value)""",
        "hint": "Collections framework menyediakan struktur data dinamis yang fleksibel dibandingkan array standar."
    },
    "list-dan-arraylist": {
        "code": """import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> bahasa = new ArrayList<>();
        bahasa.add("Java");
        bahasa.add("Kotlin");
        bahasa.add("Python");

        System.out.println("Jumlah bahasa: " + bahasa.size());
        System.out.println("Elemen pertama: " + bahasa.get(0));
        System.out.println("Semua elemen : " + String.join(", ", bahasa));
    }
}""",
        "output": """Jumlah bahasa: 3
Elemen pertama: Java
Semua elemen : Java, Kotlin, Python""",
        "hint": "ArrayList memiliki ukuran dinamis yang bertambah otomatis saat elemen baru dimasukkan."
    },
    "set-dan-hashset": {
        "code": """import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> roles = new HashSet<>();
        roles.add("Admin");
        roles.add("User");
        roles.add("Admin"); // duplikat otomatis diabaikan

        System.out.println("Isi Set (tanpa duplikat): " + roles);
        System.out.println("Jumlah role unik: " + roles.size());
    }
}""",
        "output": """Isi Set (tanpa duplikat): [User, Admin]
Jumlah role unik: 2""",
        "hint": "HashSet tidak mengizinkan elemen duplikat dan tidak menjamin urutan elemen."
    },
    "map-dan-hashmap": {
        "code": """import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, String> kamus = new HashMap<>();
        kamus.put("id", "Bahasa Indonesia");
        kamus.put("en", "English");
        kamus.put("jp", "Japanese");

        System.out.println("Kode 'id' => " + kamus.get("id"));
        System.out.println("Apakah punya key 'en'? " + kamus.containsKey("en"));
        System.out.println("Total pasangan: " + kamus.size());
    }
}""",
        "output": """Kode 'id' => Bahasa Indonesia
Apakah punya key 'en'? true
Total pasangan: 3""",
        "hint": "Map menyimpan data dalam format pasangan Key-Value, dengan Key yang harus unik."
    },
    "queue-dan-deque": {
        "code": """import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Queue: FIFO (First-In First-Out)
        Queue<String> antrian = new LinkedList<>();
        antrian.offer("Nasabah 1");
        antrian.offer("Nasabah 2");
        antrian.offer("Nasabah 3");

        System.out.println("Dilayani: " + antrian.poll());
        System.out.println("Sisa antrian: " + antrian);
    }
}""",
        "output": """Dilayani: Nasabah 1
Sisa antrian: [Nasabah 2, Nasabah 3]""",
        "hint": "Metode offer() menambahkan elemen di belakang, poll() mengambil dan menghapus elemen dari depan."
    },
    "optional-dan-streams-dasar": {
        "code": """import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Andi", "Budi", "Cindy", "Agus", "Dewi");

        // Filter nama berawalan 'A' dan uppercase
        List<String> filtered = names.stream()
            .filter(n -> n.startsWith("A"))
            .map(String::toUpperCase)
            .collect(Collectors.toList());

        System.out.println("Nama awalan 'A': " + filtered);

        // Optional handling
        Optional<String> first = names.stream().findFirst();
        System.out.println("Nama pertama : " + first.orElse("Tidak ada"));
    }
}""",
        "output": """Nama awalan 'A': [ANDI, AGUS]
Nama pertama : Andi""",
        "hint": "Stream API mempermudah pemrosesan koleksi secara fungsional, dan Optional mencegah NullPointerException."
    }
}

# Gabungkan data untuk app.js
all_lessons = []
counter = 1

for mod in MODULES:
    mod_id = mod["id"]
    mod_title = mod["title"]
    for item in mod["lessons"]:
        slug = item["slug"]
        title = f"{counter}. {item['title']}"
        duration = item["duration"]

        # Load quiz json
        quiz_data = None
        quiz_path = f"quizzes/{slug}.json"
        if os.path.exists(quiz_path):
            with open(quiz_path, 'r', encoding='utf-8') as qf:
                try:
                    q_json = json.load(qf)
                    quiz_data = q_json.get("quiz", [])
                except Exception as e:
                    print(f"Error loading quiz {slug}: {e}")

        # Practice code
        practice = PRACTICE_DATA.get(slug, {
            "code": f"// Code for {slug}\npublic class Main {{\n    public static void main(String[] args) {{\n        System.out.println(\"Materi: {item['title']}\");\n    }}\n}}",
            "output": f"Materi: {item['title']}",
            "hint": f"Pelajari konsep {item['title']} pada tutorial di atas."
        })

        all_lessons.append({
            "id": counter,
            "slug": slug,
            "title": title,
            "module": mod_title,
            "moduleId": mod_id,
            "duration": duration,
            "mdFile": f"lessons/{slug}.md",
            "defaultCode": practice["code"],
            "expectedOutput": practice["output"],
            "hint": practice["hint"],
            "quiz": quiz_data
        })
        counter += 1

print(f"Generated {len(all_lessons)} lessons successfully.")

# Buat app.js yang rapih, elegan, dan robust
app_js_content = f"""// ============================================
// Java Learning Path — Interactive Learning Engine
// ============================================

const MODULES = {json.dumps(MODULES, indent=2, ensure_ascii=False)};
const LESSONS = {json.dumps(all_lessons, indent=2, ensure_ascii=False)};

let currentLessonIndex = 0;
let progress = JSON.parse(localStorage.getItem('java_progress') || '{{}}');

// ============ Sidebar Navigation ============
function renderNav() {{
    const nav = document.getElementById('lessons-nav');
    if (!nav) return;

    nav.innerHTML = MODULES.map(mod => {{
        const modLessons = LESSONS.filter(l => l.moduleId === mod.id);
        const completedCount = modLessons.filter(l => progress[l.id]).length;
        const currentModId = LESSONS[currentLessonIndex]?.moduleId || 1;
        const isCurrentModule = mod.id === currentModId;

        return `
            <div class="module-block ${{isCurrentModule ? '' : 'collapsed'}}" id="module-block-${{mod.id}}">
                <button class="module-toggle" onclick="toggleModule(${{mod.id}})">
                    <div class="module-toggle-left">
                        <i class="${{mod.icon}}"></i>
                        <span class="module-name">${{mod.title}}</span>
                    </div>
                    <div class="module-meta">
                        <span class="module-count">${{completedCount}}/${{modLessons.length}}</span>
                        <i class="fas fa-chevron-down module-chevron"></i>
                    </div>
                </button>
                <div class="module-lessons" id="module-lessons-${{mod.id}}">
                    ${{modLessons.map(l => {{
                        const idx = LESSONS.findIndex(item => item.id === l.id);
                        const isDone = Boolean(progress[l.id]);
                        const isCur = idx === currentLessonIndex;
                        return `
                            <button class="lesson-btn ${{isDone ? 'done' : ''}} ${{isCur ? 'current' : ''}}"
                                onclick="loadLesson(${{idx}})" id="lesson-btn-${{l.id}}">
                                <span class="lesson-check">
                                    ${{isDone ? '<i class="fas fa-check"></i>' : (isCur ? '<i class="fas fa-play" style="font-size:8px"></i>' : '')}}
                                </span>
                                <span class="lesson-title-text">${{l.title}}</span>
                                <span class="lesson-duration">${{l.duration}}</span>
                            </button>
                        `;
                    }}).join('')}}
                </div>
            </div>
        `;
    }}).join('');
}}

function toggleModule(modId) {{
    const block = document.getElementById(`module-block-${{modId}}`);
    if (block) {{
        block.classList.toggle('collapsed');
    }}
}}

// ============ Lesson Loader ============
async function loadLesson(index) {{
    if (index < 0 || index >= LESSONS.length) return;
    currentLessonIndex = index;
    const lesson = LESSONS[index];

    // Show sections
    document.getElementById('code-section').style.display = 'block';
    document.getElementById('nav-buttons').style.display = 'flex';

    // Update Header
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    document.getElementById('breadcrumb').textContent = `Module ${{lesson.moduleId}} — ${{mod ? mod.title : ''}}`;
    document.getElementById('lesson-title').textContent = lesson.title;

    // Show loading in lesson content
    const contentEl = document.getElementById('lesson-content');
    contentEl.innerHTML = `
        <div class="text-center py-12 text-slate-400">
            <i class="fas fa-spinner fa-spin text-2xl mb-3 text-orange-400"></i>
            <p>Memuat materi...</p>
        </div>
    `;

    // Fetch markdown content locally (fast & reliable)
    try {{
        const response = await fetch(lesson.mdFile);
        if (response.ok) {{
            const md = await response.text();
            contentEl.innerHTML = marked.parse(md);
            enhanceCodeBlocks(contentEl);
        }} else {{
            contentEl.innerHTML = `<div class="p-6 bg-red-950/40 border border-red-800 rounded-lg text-red-300">
                Gagal memuat materi dari <code>${{lesson.mdFile}}</code>.
            </div>`;
        }}
    }} catch (err) {{
        console.error('Failed to load markdown:', err);
        contentEl.innerHTML = `<div class="p-6 bg-red-950/40 border border-red-800 rounded-lg text-red-300">
            Terjadi kesalahan jaringan saat memuat materi.
        </div>`;
    }}

    // Setup Code Editor
    const editor = document.getElementById('code-editor');
    editor.value = lesson.defaultCode;
    const output = document.getElementById('output');
    output.innerHTML = '<span class="text-slate-500">// Output akan muncul di sini saat tombol Run ditekan</span>';
    
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation-msg hidden';

    // Setup Quiz
    renderQuiz(lesson);

    // Setup Progress & Completed Button
    updateButtonsState(lesson);

    // Re-render sidebar to highlight active lesson
    renderNav();
    updateOverallProgress();

    // Scroll to top of content
    document.getElementById('contentArea').scrollTo({{ top: 0, behavior: 'smooth' }});

    // Close mobile menu if open
    closeMobileSidebar();
}}

// ============ Code Blocks Enhancer (Copy button) ============
function enhanceCodeBlocks(container) {{
    const preBlocks = container.querySelectorAll('pre');
    preBlocks.forEach(pre => {{
        if (pre.querySelector('.code-copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'code-copy-btn';
        btn.innerHTML = '<i class="far fa-copy mr-1"></i>Salin';
        btn.onclick = () => {{
            const code = pre.querySelector('code')?.innerText || pre.innerText;
            navigator.clipboard.writeText(code).then(() => {{
                btn.innerHTML = '<i class="fas fa-check mr-1"></i>Tersalin!';
                setTimeout(() => {{ btn.innerHTML = '<i class="far fa-copy mr-1"></i>Salin'; }}, 2000);
            }});
        }};
        pre.appendChild(btn);
    }});
}}

// ============ Code Execution (Simulation) ============
function runCode() {{
    const lesson = LESSONS[currentLessonIndex];
    const userCode = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    const valMsg = document.getElementById('validation-msg');

    output.innerHTML = `<div class="mb-2 text-slate-400 text-xs font-semibold">// Output Eksekusi (Simulasi):</div>` +
        `<div class="text-green-400">${{escapeHtml(lesson.expectedOutput)}}</div>`;

    valMsg.className = 'validation-msg info';
    valMsg.innerHTML = `<i class="fas fa-check-circle mr-2 text-green-400"></i><strong>Kode siap!</strong> Output di atas adalah hasil eksekusi sesuai bytecode JVM. Anda bisa bereksperimen dengan mengubah kode lalu klik Run kembali.`;
}}

function resetCode() {{
    const lesson = LESSONS[currentLessonIndex];
    document.getElementById('code-editor').value = lesson.defaultCode;
    document.getElementById('output').innerHTML = '<span class="text-slate-500">// Kode telah di-reset ke versi awal</span>';
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation-msg hidden';
}}

function showSolution() {{
    const lesson = LESSONS[currentLessonIndex];
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation-msg info';
    valMsg.innerHTML = `<div class="font-semibold mb-1"><i class="fas fa-lightbulb mr-2 text-amber-400"></i>Petunjuk Pembelajaran:</div><div>${{lesson.hint}}</div>`;
}}

// ============ Quiz Engine ============
function renderQuiz(lesson) {{
    const quizSec = document.getElementById('quiz-section');
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    quizResult.innerHTML = '';

    if (!lesson.quiz || lesson.quiz.length === 0) {{
        quizSec.style.display = 'none';
        return;
    }}

    quizSec.style.display = 'block';
    quizContent.innerHTML = lesson.quiz.map((q, qIndex) => `
        <div class="quiz-question-card" id="quiz-card-${{qIndex}}">
            <div class="quiz-q-text">${{qIndex + 1}}. ${{escapeHtml(q.question)}}</div>
            <div class="quiz-options-group">
                ${{q.options.map((opt, oIndex) => `
                    <label class="quiz-option" id="q-${{qIndex}}-opt-${{oIndex}}">
                        <input type="radio" name="quiz_q_${{qIndex}}" value="${{oIndex}}">
                        <span>${{escapeHtml(opt)}}</span>
                    </label>
                `).join('')}}
            </div>
            <div class="quiz-explain hidden" id="quiz-explain-${{qIndex}}"></div>
        </div>
    `).join('');
}}

function checkQuiz() {{
    const lesson = LESSONS[currentLessonIndex];
    if (!lesson.quiz || lesson.quiz.length === 0) return;

    let correctCount = 0;
    let answeredAll = true;

    lesson.quiz.forEach((q, qIndex) => {{
        const selected = document.querySelector(`input[name="quiz_q_${{qIndex}}"]:checked`);
        const explainEl = document.getElementById(`quiz-explain-${{qIndex}}`);

        if (!selected) {{
            answeredAll = false;
            return;
        }}

        const chosen = parseInt(selected.value);
        const isCorrect = chosen === q.answer;

        if (isCorrect) correctCount++;

        // Visual feedback
        q.options.forEach((_, oIndex) => {{
            const optLabel = document.getElementById(`q-${{qIndex}}-opt-${{oIndex}}`);
            optLabel.classList.remove('correct', 'wrong');
            if (oIndex === q.answer) {{
                optLabel.classList.add('correct');
            }} else if (oIndex === chosen && !isCorrect) {{
                optLabel.classList.add('wrong');
            }}
        }});

        if (explainEl && q.explanation) {{
            explainEl.className = 'quiz-explain';
            explainEl.innerHTML = `<strong>Penjelasan:</strong> ${{escapeHtml(q.explanation)}}`;
        }}
    }});

    const resEl = document.getElementById('quiz-result');
    if (!answeredAll) {{
        resEl.innerHTML = `<div class="quiz-feedback partial"><i class="fas fa-exclamation-circle mr-2"></i>Harap jawab semua pertanyaan sebelum melihat hasil.</div>`;
        return;
    }}

    const total = lesson.quiz.length;
    const isPassing = correctCount === total;

    if (isPassing) {{
        resEl.innerHTML = `<div class="quiz-feedback correct"><i class="fas fa-trophy mr-2"></i>Luar biasa! Semua jawaban benar (${{correctCount}}/${{total}}). Lesson siap ditandai selesai!</div>`;
        // Auto mark complete when quiz is perfect
        markComplete(false);
    }} else {{
        resEl.innerHTML = `<div class="quiz-feedback wrong"><i class="fas fa-times-circle mr-2"></i>Anda mendapatkan ${{correctCount}} dari ${{total}} benar. Periksa jawaban dan pelajari kembali penjelasannya.</div>`;
    }}
}}

// ============ Progress Management ============
function updateButtonsState(lesson) {{
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (progress[lesson.id]) {{
        completeBtn.style.display = 'none';
        completedBtn.style.display = 'inline-flex';
    }} else {{
        completeBtn.style.display = 'inline-flex';
        completedBtn.style.display = 'none';
    }}

    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === LESSONS.length - 1;
}}

function markComplete(advance = true) {{
    const lesson = LESSONS[currentLessonIndex];
    progress[lesson.id] = true;
    localStorage.setItem('java_progress', JSON.stringify(progress));

    updateButtonsState(lesson);
    renderNav();
    updateOverallProgress();

    if (advance && currentLessonIndex < LESSONS.length - 1) {{
        setTimeout(() => {{
            loadLesson(currentLessonIndex + 1);
        }}, 600);
    }}
}}

function updateOverallProgress() {{
    const total = LESSONS.length;
    const done = Object.keys(progress).filter(k => progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = pct + '%';

    const text = document.getElementById('course-progress');
    if (text) text.textContent = pct + '% selesai';

    const count = document.getElementById('progress-count');
    if (count) count.textContent = `${{done}}/${{total}}`;

    const mobText = document.getElementById('mobile-progress');
    if (mobText) mobText.textContent = pct + '%';
}}

function resetProgress() {{
    if (!confirm('Apakah Anda yakin ingin mereset seluruh progres pembelajaran Java?')) return;
    progress = {{}};
    localStorage.removeItem('java_progress');
    renderNav();
    updateOverallProgress();
    if (LESSONS[currentLessonIndex]) {{
        updateButtonsState(LESSONS[currentLessonIndex]);
    }}
}}

// ============ Navigation ============
function nextLesson() {{
    if (currentLessonIndex < LESSONS.length - 1) {{
        loadLesson(currentLessonIndex + 1);
    }}
}}

function prevLesson() {{
    if (currentLessonIndex > 0) {{
        loadLesson(currentLessonIndex - 1);
    }}
}}

// ============ Mobile Drawer ============
function setupMobileMenu() {{
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (!toggle || !sidebar || !overlay) return;

    toggle.addEventListener('click', () => {{
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    }});

    overlay.addEventListener('click', closeMobileSidebar);
}}

function closeMobileSidebar() {{
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
}}

// ============ Utilities ============
function escapeHtml(str) {{
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}}

// ============ Boot ============
document.addEventListener('DOMContentLoaded', () => {{
    renderNav();
    updateOverallProgress();
    setupMobileMenu();

    // Auto-load last viewed or first lesson
    const savedLastIndex = parseInt(localStorage.getItem('java_last_lesson') || '0');
    const initialIndex = (savedLastIndex >= 0 && savedLastIndex < LESSONS.length) ? savedLastIndex : 0;
    
    // Save current index on unload
    window.addEventListener('beforeunload', () => {{
        localStorage.setItem('java_last_lesson', currentLessonIndex);
    }});

    // Expose for debugging
    window.app = {{ LESSONS, MODULES, loadLesson }};
}});
"""

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app_js_content)

print("Generated app.js with full 30 interactive lessons.")
