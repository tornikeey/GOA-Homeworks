function outer() {
  let count = 0

  function inner() {
    count++
    console.log(count)
  }

  return inner
}

const counter = outer()
counter()
counter()
counter()

// Closure არის ისეთი ფუნქცია, რომელსაც შეუძლია მოიხმოს ცვლადები გარედან, ანუ იმ ფუნქციის შიგნიდან სადაც ის შეიქმნა.