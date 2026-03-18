# Queue dan Deque

`Queue<E>` mengantrikan elemen, umumnya FIFO (first-in-first-out). `Deque<E>` (double-ended queue) mendukung penambahan/penghapusan di kedua ujung.

## Implementasi Queue

- `ArrayDeque` —	array berbasis deque, cepat, tidak terbatas kapasitas.

- `LinkedList` — juga mengimplementasikan `Deque`.

- `PriorityQueue` — elemen diproses berdasarkan natural order atau Comparator (bukan FIFO).

## Basic Queue Operations

```
Queue<String> q = new ArrayDeque<>();
q.add("task1"); // or offer()
q.add("task2");
String head = q.peek(); // lihat elemen pertama (null jika kosong)
String removed = q.poll(); // ambil dan hapus kepala (null jika kosong)
// throw exceptions: element(), remove()

```

Pilih `offer()`/`poll()`/`peek()` untuk menangani null tanpa exception.

## Deque Operations

Deque memungkinkan operate di both ends:

```
Deque<String> deque = new ArrayDeque<>();
deque.addFirst("a");
deque.addLast("b");
String first = deque.removeFirst();
String last = deque.removeLast();
deque.offerFirst("x");
deque.offerLast("y");
String peekF = deque.peekFirst();
String peekL = deque.peekLast();

```

## Use Cases

- `Queue`: antrian tugas, BFS di graph.

- `Deque`: stack (LIFO) menggunakan `push()`/`pop()` 또한 deque operations, atau sliding window.

## PriorityQueue

Tidak FIFO; elemen diambil according to priority (natural order atau custom Comparator).

```
Queue<Integer> pq = new PriorityQueue<>();
pq.add(3); pq.add(1); pq.add(2);
System.out.println(pq.poll()); // 1
System.out.println(pq.poll()); // 2

```

## Best Practice

- Gunakan `ArrayDeque` sebagai default Queue/Deque (lebih cepat dari `LinkedList`).

- Pilih `PriorityQueue` jika perlu prioritizing elements.

- Choose methods sesuai safety: `offer()` dan `poll()` over `add()` dan `remove()` untuk handling full/empty gracefully.