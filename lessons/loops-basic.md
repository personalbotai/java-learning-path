# Loop Dasar (for, while, do-while)

Loop digunakan untuk mengulang suatu blok kode beberapa kali atau selama kondisi tertentu.

## For Loop

Loop `for` cocok ketikaKnow jumlah iterasi.

```
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

```

Komponen: initialization, condition, update. Cukup satu pernyataan di setiap bagian; dapat menggunakan multiple (misal `int i=0, j=10; i<j; i++, j--`).

## For-Each Loop

Iterasi melalui array atau collection tanpa index:

```
int[] numbers = {1,2,3,4,5};
for (int n : numbers) {
    System.out.println(n);
}

List<String> list = List.of("a","b","c");
for (String s : list) {
    System.out.println(s);
}

```

## While Loop

Loop ketika kondisi benar (cek kondisi sebelum eksekusi). Bisa infinite jika kondisi selalu true.

```
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

```

## Do-While Loop

Pastikan blok dieksekusi minimal sekali, lalu cek kondisi:

```
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);

```

## Contoh: Iterasi dengan Index

Gunakantradisional for jika perlu index:

```
String[] names = {"Alice","Bob","Charlie"};
for (int i = 0; i < names.length; i++) {
    System.out.println(i + ": " + names[i]);
}

```

## Tips & Pitfalls

- Hindari infinite loop: pastikan variabel loop berubah sehingga kondisi bisa false.

- While loop bisanull (infinite) jika kondisi selalu true, misal `while (true) { ... }`—gunakan dengan hati-hati.

- Do-while jarang digunakan, tapi berguna untuk menu input yang minimal sekali.

- For-each tidak memodifikasi collection (kecuali via iterator remove).

- Mengubah loop variable di dalam body bisa menyebabkan error logika.

## Break dan Continue

`break` menghentikan loop; `continue` melompat ke iterasi berikutnya. Akan dibahas lebih lanjut di modul berikutnya.