# List dan ArrayList

`List<E>` adalah interface untuk koleksi urutan yang diperbolehkan duplikat dan akses by index. Implementasi paling populer adalah `ArrayList`.

## ArrayList

Berbasis array dinamis. Kapasitas otomatis tumbuh saat elemen ditambahkan di luar kapasitas saat ini.

```
List<String> list = new ArrayList<>();
list.add("Alice");
list.add("Bob");
list.add(0, "Before"); // insert di indeks 0
String first = list.get(0); // "Before"
list.remove("Bob"); // remove by object
list.remove(1); // remove by index
int size = list.size(); // jumlah elemen
boolean contains = list.contains("Alice");

```

## Iterasi List

Beberapa cara:

```
// for loop dengan index
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

// enhanced for-loop
for (String s : list) {
    System.out.println(s);
}

// iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}

// forEach (Java 8+)
list.forEach(s -> System.out.println(s));

```

## List yang Tidak Termodifikasi

Anda bisa membuat list yang tidak bisa diubah:

```
List<String> immutable = List.of("a", "b", "c");
// immutable.add("d"); // UnsupportedOperationException

```

## Konversi Array ↔ List

```
String[] arr = {"a","b","c"};
List<String> list = Arrays.asList(arr); // fixed-size list
// list.add("d"); // UnsupportedOperationException
List<String> mutable = new ArrayList<>(Arrays.asList(arr));
String[] back = mutable.toArray(new String[0]);

```

## Performance

- `get(i)` O(1) untuk ArrayList.

- `add()` di akhir jarang mengakibatkan resize (amortized O(1)).

- `add(0, ...)` atau `remove(0)` cause shifting (O(n)).

## Best Practice

- Gunakan interface `List` sebagai tipe reference, `ArrayList` sebagai implementasi default untuk random access.

- Hindari modifying list (add/remove) selama iterasi dengan for-each; gunakan `Iterator.remove()` atau `removeIf()`.

- Pre-size ArrayList jika ukuran roughly known: `new ArrayList<>(expectedSize)` mencegahbeberapa kaliresize.