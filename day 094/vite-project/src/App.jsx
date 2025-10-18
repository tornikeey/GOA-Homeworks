import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState(["Product 1", "Product 2"]);

  const handleAdd = () => {
    const newProduct = `Product ${products.length + 1}`;

    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}

export default Products;

// ცუდი პრაქტიკაა setCount-ის 2-ჯერ გამოძახება, რადგან ორივე მხოლოდ ძველ მნიშვნელობას იყენებს, შესაბამისად მოსალოდნელი შედეგის ნაცვლად ძველ პირობას მივიღებთ
// კარგი პრაქტიკაა setCount-ში prevValue-ს გამოყენება, რადგან ყველა გამოძახებაში ვიღებთ ახალ State-ს. შედეგიც ის არის რაც რეალურად მოსალოდნელია