# Optional dan Streams API Dasar

## Optional<T>

`Optional<T>` adalah wrapper yang menyatakan sebuah value mungkin ada atau tidak (null). Mengurangi `NullPointerException` dengan expressive API.

### Membuat Optional

```
Optional<String> optEmpty = Optional.empty();
Optional<String> optOf = Optional.of("hello"); // nilai bukan null
Optional<String> optOfNullable = Optional.ofNullable(possiblyNull);

```

### Menggunakan Optional

```
if (opt.isPresent()) {
    System.out.println(opt.get());
}

// atau dengan lambda
opt.ifPresent(s -> System.out.println(s));

// nilai default
String result = opt.orElse("default");

// hitung atau throw
String orElseThrow = opt.orElseThrow(() -> new NoSuchElementException());

// transform
Optional<Integer> length = opt.map(String::length);

```

Jangan gunakan `get()` tanpa `isPresent()`; lebih suka `orElse...` atau `ifPresent`.

## Streams API (Java 8+)

`Stream<T>` memproses urutan elemen dengan operasi functional (map, filter, reduce). Stream bisa dari koleksi, array, atau generator.

### Membuat Stream

```
List<String> list = List.of("a","b","c");
Stream<String> stream = list.stream();

Stream<Integer> range = IntStream.range(1,10).boxed();
Stream<String> generated = Stream.generate(() -> "x").limit(3);

```

### Intermediate Operations

Transformasi yang lazy (tertunda sampai terminal operation):

- `filter(Predicate)` — pilih elemen yang match.

- `map(Function)` — transformasi.

- `flatMap(Function<Stream<R>>)` — flatten nested streams.

- `distinct()`, `sorted()`, `limit()`, `skip()`.

### Terminal Operations

Memicu evaluasi dan menghasilkan hasil:

- `forEach(Consumer)` — iterasi.

- `collect(Collector)` — kumpulkan ke List, Set, Map, dll.

- `reduce(identity, accumulator)` — akumulasi.

- `count()`, `anyMatch()`, `allMatch()`, `noneMatch()`, `findFirst()`, `findAny()`.

### Contoh Pipeline

```
List<String> names = List.of("Alice","Bob","Anna","Charlie");
List<String> result = names.stream()
    .filter(s -> s.length() > 3)
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());
// ["ANNA", "CHARLIE"]

```

### Parallel Streams

Cukup ubah `stream()` menjadi `parallelStream()` untuk memanfaatkan multiple cores. Hatikan: operasi harus bebas side-effects.

## Best Practice

- Gunakan `Optional` sebagai return type, bukan parameter atau field.

- Hindari `Optional.get()`; gunakan `orElse...` atau `ifPresent`.

- Streams dirancang untuk functional style; hindari mutasi state di lambda.

- Choose sequential vs parallel berdasarkan data size dan operation characteristic.