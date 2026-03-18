# Instalasi Java & IDE

Sebelum menulis kode Java, Anda perlu menginstal **Java Development Kit (JDK)**. JDK berisi compiler (`javac`), runtime (`java`), serta library standar. Versi **LTS (Long-Term Support)** seperti Java 17 atau Java 21 direkomendasikan untuk produksi.

## Langkah 1: Unduh JDK

Kunjungi situs resmi Adoptium Temurin atau jdk.java.net. Pilih distribusi untuk sistem operasi Anda (Linux, Windows, macOS).

- Untuk Linux, gunakan package manager (misal `apt install openjdk-21-jdk` di Debian/Ubuntu).

- Untuk Android/Termux, Anda bisa menjalankan `pkg install openjdk-21` (Namun, untuk pengembangan Java biasa, gunakan laptop/desktop).

Setelah unduh, instal following petunjuk installer.

## Langkah 2: Variabel Lingkungan

Untuk memudahkan eksekusi, atur variabel `JAVA_HOME` ke direktori instalasi JDK, dan tambahkan `bin` ke `PATH`.

```
# Contoh Linux/macOS (~/.bashrc atau ~/.zshrc)
export JAVA_HOME=$HOME/opt/jdk-21
export PATH=$JAVA_HOME/bin:$PATH

```

Setelah itu, restart terminal atau source file konfigurasi.

## Langkah 3: Verifikasi Instalasi

Jalankan perintah:

```
java -version
javac -version

```

Output yang benar menampilkan nomor versi (misal `openjdk 21.0.1`).

## Langkah 4: Instal IDE (Integrated Development Environment)

Meskipunmenggunakan teks editor biasa, sebuah IDE meningkatkan produktivitas. Dua pilihan populer:

- **Visual Studio Code** (ringan, gratis)
  
    
- Download dari code.visualstudio.com.
    
- Install ekstensi *Extension Pack for Java* (Microsoft).
    
- Ekstensi ini menyediakan IntelliSense, debugging, dan build tools.
  

- **IntelliJ IDEA Community Edition** (kayas, free)
  
    
- Download dari JetBrains.
    
- Dukungan bawaan untuk Maven, Gradle, dan frameworks.
  

## Langkah 5: Test Instalasi dengan Hello World

Buka terminal atau IDE, buat file `Hello.java` dengan konten:

```
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}

```

Kompilasi dan jalankan:

```
javac Hello.java   # menghasilkan Hello.class
java Hello         # output: Hello, Java!

```

Jika muncul output tersebut, instalasi Java dan IDE sudah berhasil.