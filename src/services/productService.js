const API_BASE_URL = 'https://fakestoreapi.com';

export default async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
}
