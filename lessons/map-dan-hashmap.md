# Map dan HashMap

`Map<K,V>` adalah koleksi pasangan key-value. Tidak extends `Collection`. Implementasi utama: `HashMap`.

## Basic Operations

```
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);
map.put("Alice", 26); // replaces previous value for "Alice"
Integer age = map.get("Alice"); // 26
boolean hasBob = map.containsKey("Bob");
boolean hasValue = map.containsValue(30);
int size = map.size();
map.remove("Bob");

```

## Iterasi

Three common ways:

```
// Entry set
for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " -> " + e.getValue());
}

// Key set
for (String key : map.keySet()) {
    System.out.println(key + " -> " + map.get(key));
}

// Values only
for (Integer v : map.values()) {
    System.out.println(v);
}

```

## Hashtable vs HashMap

- `Hashtable` synchronized (thread-safe), tidak allow null key/value.

- `HashMap` tidak synchronized, allow one null key, multiple null values.

## Sorted Map: TreeMap

Urutan by natural order of keys atau custom Comparator.

```
Map<String, Integer> sorted = new TreeMap<>(Map.of("b",2,"a",1));
System.out.println(sorted); // {a=1, b=2}

```

## Immutable Map (Java 9+)

```
Map<String, Integer> immutable = Map.of("x",1, "y",2);
// immutable.put("z",3); // UnsupportedOperationException

```

## hashCode() dan equals() for Keys

Keys dalam HashMap harus memiliki `hashCode()` dan `equals()` yang konsisten. Keys yang immutable disarankan (misal String, Integer).

## Best Practice

- Gunakan `Map` interface untuk reference, `HashMap` untuk implementasi default.

- Jika urutan penting (insertion order), gunakan `LinkedHashMap`.

- Jika perlu sorted order, gunakan `TreeMap`.

- Hindari null keys jika possible; gunakan `getOrDefault()` atau `computeIfAbsent()`.