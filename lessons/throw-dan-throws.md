# Throw dan Throws

Kata kunci `throw` digunakan untuk melempar exception, sedangkan `throws` pada method signature untuk deklarasikan exception yang mungkin dilempar ke caller.

## Throw

Anda dapat melempar instance dari `Throwable` (biasanya `Exception` atau subclass). Contoh:

```
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    this.age = age;
}

```

Untuk membuat exception kustom, extends `Exception` (checked) atau `RuntimeException` (unchecked).

## Throws (Method Declaration)

Jika sebuah method melempan checked exception, harus dideklarasikan dengan `throws`:

```
public String readFile(String path) throws IOException {
    Files.readString(Path.of(path));
}

```

Caller harus menangani atau propagasikan exception tersebut:

```
try {
    String content = readFile("file.txt");
} catch (IOException e) {
    e.printStackTrace();
}

```

Beberapa method dapat menimbulkan lebih dari satu exception, tuliskan dengan koma:

```
public void process() throws IOException, ParseException { ... }

```

## Unchecked Exception (RuntimeException)

Tidak perlu dideklarasikan dengan `throws`; caller tidak wajib menangkap. Contoh: `NullPointerException`, `IllegalArgumentException`.

## Throwable vs Exception

Sebaiknya jangan melempar `Error` atau `Throwable`. Gunakan only `Exception` atau subclass.

## Try-catch dengan Throw

Anda bisa combine:

```
try {
    somethingRisky();
} catch (SomeException e) {
    throw new RuntimeException("Wrapped", e); // rethrow with cause
}

```

## Best Practice

- Gunakan checked exception untuk recoverable conditions (seperti I/O error, file not found).

- Gunakan unchecked exception untuk programming errors (illegal argument, null).

- Buat custom exception jika semantics berbeda (misal `InsufficientFundsException`).

- Always provide a descriptive message when constructing exception.

- Sertakan cause (throw new ...(cause)) untuk wrapped exception.