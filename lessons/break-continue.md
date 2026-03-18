# Break dan Continue

Dua statement untuk mengendalikan alur loop: `break` dan `continue`.

## Break

`break` segera mengakhiri **loop** atau `switch` terdekat.

```
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // keluar dari loop saat i = 5
    }
    System.out.println(i); // print 0-4
}

```

Dalam nested loop, break hanya keluar dari loop terdalam. Untuk keluar dari multiple loops, gunakan *labeled break*:

```
outer:
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (i * j > 6) {
            break outer; // keluar kedua loop
        }
        System.out.println(i + "," + j);
    }
}

```

## Continue

`continue` melompat ke **iterasi berikutnya** dari loop, mengabaikan sisa kode di bawahnya.

```
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // skip angka genap
    }
    System.out.println(i); // print hanya ganjil
}

```

Sama seperti break, `continue` juga bisa diberi label untuk loop luar.

## Break dalam Switch

Dalam `switch`, break mencegah fall-through. Tanpa break, eksekusi akan turun ke case berikutnya.

## Kapan Digunakan?

- `break`: Ketika sudah menemukan hasil yang diinginkan, atau kondisi akhir tercapai.

- `continue`: Ketika ingin skip beberapa kondisi spesifik tapi tetap lanjut loop.

## Pitfall

- Kedua statement hanya berlaku pada loop atau switch. Tidak bisa digunakan di luar.

- Labeled break/continue sering dihindari karena mengurangi readability. Gunakan hanya jika really needed.

- Infinite loop with break di dalam: pastikan break juga akan tercapai.

## Contoh: Filter dengan Continue

```
List<Integer> nums = List.of(1,2,3,4,5,6);
for (int n : nums) {
    if (n % 2 != 0) continue; // skip odds
    System.out.println(n); // print evens
}

```