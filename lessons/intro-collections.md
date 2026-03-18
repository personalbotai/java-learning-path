# Pengantar Collections Framework

Java Collections Framework (JCF) adalah serangkaian interface, class, dan algoritma untuk mengelola kelompok objek (data structures).

## Core Interfaces

InterfaceDeskripsi
`Collection<E>`Root interface untuk koleksi yang berisi elemen (tidak termasuk Map).
`List<E>`Urutan terurut, bisa duplikat, akses by index.
`Set<E>`Tidak ada duplikat (berdasarkan equals/hashCode).
`Queue<E>`Koleksi untuk antrian (FIFO/LIFO).
`Map<K,V>`Pasangan key-value, bukan Collection.

## Implementasi Utama

- `ArrayList` — List berbasis array, akses cepat, insert/remove di tengah lambat.

- `LinkedList` — List berbasis doubly-linked list, insert/remove cepat.

- `HashSet` — Set berbasis hash table, tidak berurutan.

- `TreeSet` — Set terurut (natural order atau custom Comparator).

- `HashMap` — Map berbasis hash table.

- `TreeMap` — Map terurut berdasarkan key.

## Pilih Implementasi yang Tepat

- Butuh akses index cepat? → `ArrayList`.

- Banyak insert/remove di awal/tengah? → `LinkedList`.

- Unik elements, tidak peduli urutan? → `HashSet`.

- Urutan natural? → `TreeSet`.

- Pencarian cepat by key → `HashMap`.

- Urutan key → `TreeMap`.

## Generics

Collections menggunakan generics untuk type safety:

```
List<String> names = new ArrayList<>();
Set<Integer> numbers = new HashSet<>();
Map<String, Integer> score = new HashMap<>();

```

Kompiler akan menangkap kesalahan tipe saat compile.

## Common Operations

```
list.add("a");
list.get(0);
list.remove("a");
set.add(1);
map.put("key", 100);
int v = map.get("key");

```

## Best Practice

- Program to interface: gunakan tipe interface (List, Set, Map) untuk reference, bukan implementasi konkre (ArrayList, HashMap).

- Pilih implementasi yang sesuai dengan use case.

- Gunakan generics untuk menghindari cast dan unchecked warnings.