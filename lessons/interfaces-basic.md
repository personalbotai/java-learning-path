# Interfaces Dasar

**Interface** adalah kontrak yang mendefinisikan method abstract (sebelum Java 8) yang harus diimplementasikan oleh class. Sejak Java 8, interface dapat memiliki `default` dan `static` methods.

## Definisi Interface

```
public interface Drawable {
    void draw(); // implicitly public abstract
}

```

Implementasi:

```
public class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

```

Class dapat implements multiple interfaces:

```
class MyClass implements Runnable, Serializable, Closeable { ... }

```

## Default Methods (Java 8+)

Interface bisa memiliki concrete method menggunakan `default`keyword:

```
public interface Logger {
    void log(String msg);
    default void logInfo(String msg) {
        log("[INFO] " + msg);
    }
}

```

Class yang implements `Logger` dapat mengambil alih `logInfo` atau menggunakan default.

## Static Methods di Interface

Static methods also belong to interface, dipanggil via `InterfaceName.method()`:

```
public interface MathUtil {
    static int square(int x) { return x*x; }
}
int y = MathUtil.square(5);

```

## Constant Fields

Fields dalam interface secara otomatis `public static final`:

```
public interface Status {
    int OK = 200; // constant
}

```

## Basic vs. Inheritance Differences

- Interface mendukung multiple inheritance of type (class bisa implements banyak interface).

- Abstract class bisa memiliki state; interface cannot have instance fields (sebelum Java 8, bisa static final).

- Methods in interface are public by default (cannot be protected or private). Default methods are public.

## Functional Interfaces

Interface dengan tepat satu abstract method disebut *functional interface*. Dapat digunakan dengan lambda expressions.

```
@FunctionalInterface
interface Predicate {
    boolean test(T t);
    // default methods also allowed, but only one abstract
}

```

## Best Practice

- Use interfaces to define contracts and enable polymorphic behavior.

- Prefer interface over abstract class for maximum flexibility.

- Use default methods to evolve interfaces without breaking existing implementations.

- Keep interfaces small and cohesive (Interface Segregation Principle).