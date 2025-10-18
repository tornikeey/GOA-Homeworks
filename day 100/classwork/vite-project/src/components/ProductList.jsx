function ProductList({ products, onDelete }) {
  return (
    <ul>
      {products.length === 0 ? (
        <p>No products yet</p>
      ) : (
        products.map((item, i) => (
          <li key={i}>
            <strong>{item.name}</strong> — {item.description} — 💲{item.price} — Qty: {item.quantity}
            <button onClick={() => onDelete(i)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ProductList;