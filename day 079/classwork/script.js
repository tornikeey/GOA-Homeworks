async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

fetchProducts()
  .then(products => {
  })
  .catch(err => {
  });