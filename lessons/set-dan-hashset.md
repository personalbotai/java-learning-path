# Set dan HashSet

`Set<E>` adalah koleksi yang tidak mengizinkan duplikat (berdasarkan `equals` dan `hashCode`). Implementasi paling umum: `HashSet`.

## HashSet

Tidak mempertahankan urutan (kecuali dengan `LinkedHashSet` atau `TreeSet`).

```
Set<String> set = new HashSet<>();
set.add("apple");
set.add("orange");
set.add("apple"); // ignored (duplicate)
System.out.println(set.size()); // 2
boolean hasBanana = set.contains("banana");
set.remove("orange");

```

## Iterasi Set

Sama seperti List, tapi tidak ada index:

```
for (String fruit : set) {
    System.out.println(fruit);
}

```

## LinkedHashSet dan TreeSet

- `LinkedHashSet`: mempertahankan urutan insertion (predictable iteration order).

- `TreeSet`: urutan natural atau custom `Comparator` (sorted set).

```
Set<Integer> sorted = new TreeSet<>(List.of(3,1,2));
System.out.println(sorted); // [1,2,3]

```

## equals() dan hashCode

Untuk kerja Set, class yang disimpan harus meng-override `equals()` dan `hashCode()` konsisten.

```
class Person {
    String name;
    int age;
    @Override public boolean equals(Object o) { ... }
    @Override public int hashCode() { ... }
}

```

Jika tidak, dua objek dengan nilai sama dianggap berbeda.

## Operasi Set

- `set.addAll(collection)` — union.

- `set.retainAll(collection)` — intersection.

- `set.removeAll(collection)` — difference.

## Performance

HashSet: add/remove/contains O(1) average.

## Best Practice

- Gunakan `Set` ketika perlu memastikan tidak ada duplikat.

- Prioritaskan `HashSet` untuk performa; jika perlu urutan, pilih `LinkedHashSet` atau `TreeSet`.

- Selalu override `equals` dan `hashCode` untuk custom objects yang digunakan di Set atau Map.