# Access Modifiers

Access modifiers mengendalikan visibilitas class, field, dan method. Ada empat tingkat akses:

ModifierPackageClassOutside package
`private`NoYesNo
`default` (no modifier)YesYesNo
`protected`YesYesYes (subclasses only)
`public`YesYesYes

## Private

Hanya bisa diakses di dalam class yang sama. Digunakan untuk encapsulation.

```
public class BankAccount {
    private double balance;

    public double getBalance() { return balance; }
    public void deposit(double amount) { ... }
}

```

## Default (Package-Private)

Jika tidak ada modifier, anggota hanya dapat diakses di dalam package yang sama.

```
class Helper { // default (package-private) class
    void assist() { ... }
}

```

## Protected

Dapat diakses di dalam package yang sama, dan juga oleh subclass di package lain.

```
public class Animal {
    protected String name;
}
public class Dog extends Animal {
    void print() {
        System.out.println(name); // OK: protected bisa diakses subclass
    }
}

```

## Public

Dapat diakses dari mana saja. Gunakan secara sparing.

## Class-Level Access

Top-level class bisa `public` (nama file harus sama) atau package-private (default). Tidak bisa `private` atau `protected`.

## Interface Methods

Di interface, methods secara default `public abstract` (sebelum Java 8). Fields `public static final`.

## Best Practice

- Gunakan `private` untuk field, akses via getters/setters.

- Gunakan `public` hanya untuk API yang diekspos ke luar.

- Hindari protected kecuali untuk menurunkan class yang perlu diakses di subclass.