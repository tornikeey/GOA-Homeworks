import React, { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "iPhone 15", price: 1200 },
    { id: 2, name: "Samsung S24", price: 1000 },
    { id: 3, name: "Xiaomi 14", price: 800 },
  ];

  const [cart, setCart] = useState([]);

  const handleToAddCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, unit: item.unit + 1 } : item
        )
      );
    } else {
      const newProduct = { ...product, unit: 1 };
      setCart([...cart, newProduct]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, unit: item.unit + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, unit: item.unit - 1 } : item
        )
        .filter((item) => item.unit > 0)
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.unit,
    0
  );

  const totalUnits = cart.reduce((acc, item) => acc + item.unit, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Product List</h2>
      {products.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ${item.price}
          </span>
          <button onClick={() => handleToAddCart(item)}>Add to Cart</button>
        </div>
      ))}

      <hr />

      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty...</p>
      ) : (
        <>
          {cart.map((c) => (
            <div key={c.id}>
              {c.name} - ${c.price} × {c.unit}
              <button onClick={() => increaseQuantity(c.id)}>+</button>
              <button onClick={() => decreaseQuantity(c.id)}>-</button>
            </div>
          ))}
          <hr />
          <h3>Total Products: {totalUnits}</h3>
          <h3>Total Price: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default App;