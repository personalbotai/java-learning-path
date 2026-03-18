# Inheritance (Pewarisan)

Inheritance memungkinkan sebuah class (*subclass*) mewarisi field dan method dari class lain (*superclass*). Menerapkan hubungan "is-a".

## Syntax

```
class Animal {
    String name;

    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(name + " says: Woof!");
    }
}

```

`Dog` mewarisi `name` dan `eat()` dari `Animal`.

## Menggunakan Superclass Reference

Sebuah reference dapat menunjuk ke instance subclass:

```
Animal a = new Dog(); // upcast (implicit)
a.eat(); // memanggil method Dog's (jika overridden) atau Animal's
// a.bark(); // ERROR:Animal tidak memiliki bark()

```

## Method Overriding

Subclass dapat mengganti implementasi method superclass dengan `@Override` annotation:

```
class Animal {
    void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

```

Saat method dipanggil melalui reference, runtime determine which implementation based pada actual object type (dynamic dispatch).

## Kata kunci `super`

`super` untuk mengakses member superclass:

```
class Dog extends Animal {
    @Override
    void makeSound() {
        super.makeSound(); // panggil versi superclass
        System.out.println("Woof!");
    }
}

```

`super()` dapat dipanggil dalam constructor untuk memanggil constructor superclass:

```
class Animal {
    Animal(String name) { ... }
}
class Dog extends Animal {
    Dog(String name) {
        super(name); // call superclass constructor
    }
}

```

## Single Inheritance

Java hanya mendukung single class inheritance (satu superclass). Namun multiple interface inheritance allowed.

## Protected Visibility

Jika field/method di superclass `protected`, subclass dapat mengaksesnya secara langsung (tanpa getter/setter).

## Best Practice

- Gunakan inheritance untuk hubungan "is-a" (Dog is an Animal).

- Prefer composition over inheritance jika tidak diperlukan.

- Selalu beri `@Override` annotation.

- Hindari deeply inheritance hierarchy (favor composition).