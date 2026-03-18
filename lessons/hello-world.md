# Hello World

Selamat! Anda telah mempelajari instalasi, struktur program, variabel, dan I/O. Sekarang saatnya menulis program pertama Anda: **Hello World**. Ini tradisi pemrograman sejak awal.

## Kode Hello World

Buat file bernama `HelloWorld.java` dengan isi:

```
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

```

Perlu diingat:

- Nama file harus persis sama dengan nama public class (`HelloWorld.java`).

- Java bersifat case-sensitive.

- Kode berada dalam method `main`; JVM akan memanggilnya saat program dijalankan.

## Kompilasi

Buka terminal, navigasi ke direktori penyimpanan file, lalu jalankan:

```
javac HelloWorld.java

```

Jika tidak ada kesalahan, akan terbuat file `HelloWorld.class` (bytecode).

## Eksekusi

Jalankan program dengan perintah:

```
java HelloWorld

```

Output yang diharapkan:

```
Hello, World!

```

Jangan tambahkan `.class` ekstensi saat menjalankan. Juga, pastikan Anda berada di direktori yang mengandung `.class` tersebut.

## Penjelasan Kode

- `public class HelloWorld` — mendefinisikan class yang dapat diakses dari luar.

- `public static void main(String[] args)` — entry point program. Kata kunci:
  
    
- `public`: akses dari JVM.
    
- `static`: tidak perlu instansiasi class.
    
- `void`: tidak mengembalikan nilai.
    
- `String[] args`: argumen command-line (belum digunakan).
  

- `System.out.println(...)` — mencetak teks ke console, followed by newline.

## Kesalahan Umum

- **Class name tidak sama dengan file name** — compiler error.

- **Tidak ada method main** — program tidak dapat dijalankan.

- **Kompilasi dengan versi JDK berbeda` — pastikan `javac` dan `java` versinya match.

- **Path atau classpath salah** — gunakan direktori saat ini atau atur `CLASSPATH` dengan benar.

## Langkah Selanjutnya

Setelah Hello World berhasil, Anda siap mengeksplorasi dasar-dasar lainnya: variabel, tipe data, kontrol alur (if/else, loops), serta pengumpulan input dari pengguna. Modul-modul berikutnya akan membahas masing-masing topik secara mendalam.

Selamat mengoding! Dunia Java menanti Anda.