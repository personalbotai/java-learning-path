# Struktur Program Java

Program Java memiliki struktur yang ketat. Sebuah program minimal terdiri dari satu *class* yang berisi `main` method. Memahami struktur ini adalah langkah pertama sebelum menulis kode yang lebih kompleks.

## Komponen Dasar

### 1. Package (opsional)

Package adalah cara mengorganisir kelas-kelas related. Jika tidak didefinisikan,program berada di *default package*. Contoh deklarasi package:

```
package com.example.app;

```

Harus menjadi baris pertama dalam file sumber.

### 2. Class

Java adalah bahasa berorientasi objek; setiap kode harus berada dalam dalam sebuah class (atau interface, enum, dll). Class didefinisikan dengan kata kunci `class`:

```
public class HelloWorld {
    // isi class
}

```

Nama class harus **camel case** dan sesuai dengan nama file (jika public).

### 3. Main Method

Untuk menjalankan program, Java mencari method `main` dengan signature tertentu:

```
public static void main(String[] args)

```

- `public`: dapat diakses oleh JVM.

- `static`: tidak perlu instansiasi class.

- `void`: tidak mengembalikan nilai.

- `String[] args`: parameter untuk menerima argumen command-line.

## Contoh Program Lengkap

```
// Package declaration (optional)
package myapp;

// Import statements (optional)
import java.util.Scanner;

public class MyApp {
    public static void main(String[] args) {
        System.out.println("Selamat datang di Java!");
        // kode lainnya
    }
}

```

## Kompilasi dan Eksekusi

Setelah menulis kode dalam file `MyApp.java`, kompilasi dengan:

```
javac MyApp.java

```

Perintah ini menghasilkan `MyApp.class` (bytecode). Untuk menjalankan:

```
java myapp.MyApp   # gunakan nama package lengkap
# atau jika tanpa package:
java MyApp

```

Catatan: JRF:** Anda harus berada di direktori di atas package root saat menjalankan `java`.

## Tips Umum

- File name harus persis sama dengan nama public class (case-sensitive).

- Setiap statement di dalam method diakhiri dengan titik koma `;`.

- Gunakan komentar `//baris` atau `/* beberapa baris */` untuk dokumentasi.

Dengan paham struktur dasar ini, Anda siap menambahkan variabel, kontrol alur, dan konsep lain.