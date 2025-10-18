import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  return (
    <main style={{ padding: "20px", display: "flex", gap: "50px" }}>
      <section style={{ flex: 1 }}>
        <h2>Add Product</h2>
        <AddProduct onAdd={handleAddProduct} />
      </section>

      <section style={{ flex: 1 }}>
        <h2>Product List</h2>
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </section>
    </main>
  );
}

export default App;