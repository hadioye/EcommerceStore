
// Function to create the product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const img = document.createElement('img');
  img.src = `/public/images/${product.image}`;
  img.classList.add('product-image');

  const name = document.createElement('h3');
  name.textContent = product.name;

  // Display the product price
  const price = document.createElement('span');
  price.textContent = `$${product.price.toFixed(2)}`; // Format price to 2 decimal places

  // Add button to add product to the cart
  const addButton = document.createElement('button');
  addButton.textContent = 'Add to Cart';
  addButton.addEventListener('click', () => {
    addToCart(product);
    updateCartIcon(); // Update the cart icon after adding a product
    displayCartItems(); // Update the cart items after adding a product
  });

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(price); // Add price to the card
  card.appendChild(addButton);

  return card;
}

// Function to display the products on the "shop.html" page
function displayProducts() {
  const productGrid = document.getElementById('product-grid');

  products.forEach(product => {
    const card = createProductCard(product);
    productGrid.appendChild(card);
  });
}

// Call the function to display the products
displayProducts();

// Function to update the cart icon with the number of items in the cart
function updateCartIcon() {
  const cartCount = document.querySelector('.cart-count');
  cartCount.textContent = getCartItemCount();
}

// Function to get the cart items from local storage
function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to get the number of items in the cart
function getCartItemCount() {
  return getCartItems().length;
}

// Function to save cart items to local storage
function saveCartItemsToLocalStorage(cartItems) {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Function to add product to the cart
function addToCart(product) {
  const cartItems = getCartItems();
  cartItems.push({ name: product.name, price: product.price }); // Include product name and price
  saveCartItemsToLocalStorage(cartItems);
}

// Function to generate the invoice
function generateInvoice() {
  const total = calculateTotal();
  console.log('Invoice generated. Cart Items:', getCartItems(), 'Total:', total);
}

// Function to calculate the total price of cart items
function calculateTotal() {
  const cartItems = getCartItems();
  return cartItems.reduce((total, product) => total + product.price, 0);
}

// Add event listener for the "Generate Invoice" button
const generateInvoiceBtn = document.getElementById('generate-invoice-btn');
generateInvoiceBtn.addEventListener('click', generateInvoice);

// Call the functions to update the cart icon and display the cart items
updateCartIcon();
displayCartItems();

// Function to clear the cart items from local storage
function clearCart() {
  localStorage.removeItem('cart');
  updateCartIcon(); // Update the cart icon after clearing the cart
  displayCartItems(); // Update the cart items after clearing the cart
}

// Add event listener for the "Clear Cart" button (assuming you have a button with the id "clear-cart-btn")
const clearCartBtn = document.getElementById('clear-cart-btn');
clearCartBtn.addEventListener('click', clearCart);

