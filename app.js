const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    image: 'product1.jpg',
    price: 25.99, // Price in dollars
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    image: 'product2.jpg',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    image: 'product3.jpg',
    price: 14.99,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for Product 4',
    image: 'product1.jpg', // Reusing the image from Product 1
    price: 19.99,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description for Product 5',
    image: 'product2.jpg', // Reusing the image from Product 2
    price: 24.99,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description for Product 6',
    image: 'product3.jpg', // Reusing the image from Product 3
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Description for Product 7',
    image: 'product1.jpg', // Reusing the image from Product 1
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Description for Product 8',
    image: 'product2.jpg', // Reusing the image from Product 2
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'Description for Product 9',
    image: 'product3.jpg', // Reusing the image from Product 3
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'Description for Product 10',
    image: 'product1.jpg', // Reusing the image from Product 1
  },
  {
    id: 11,
    name: 'Product 11',
    description: 'Description for Product 11',
    image: 'product2.jpg', // Reusing the image from Product 2
  },
  {
    id: 12,
    name: 'Product 12',
    description: 'Description for Product 12',
    image: 'product3.jpg', // Reusing the image from Product 3
  },
  {
    id: 13,
    name: 'Product 13',
    description: 'Description for Product 13',
    image: 'product1.jpg', // Reusing the image from Product 1
  },
  {
    id: 14,
    name: 'Product 14',
    description: 'Description for Product 14',
    image: 'product2.jpg', // Reusing the image from Product 2
  },
  {
    id: 15,
    name: 'Product 15',
    description: 'Description for Product 15',
    image: 'product3.jpg', // Reusing the image from Product 3
  },
  {
    id: 16,
    name: 'Product 16',
    description: 'Description for Product 16',
    image: 'product1.jpg', // Reusing the image from Product 1
  },
  {
    id: 17,
    name: 'Product 17',
    description: 'Description for Product 17',
    image: 'product2.jpg', // Reusing the image from Product 2
  },
  {
    id: 18,
    name: 'Product 18',
    description: 'Description for Product 18',
    image: 'product3.jpg', // Reusing the image from Product 3
  },
  {
    id: 19,
    name: 'Product 19',
    description: 'Description for Product 19',
    image: 'product1.jpg', // Reusing the image from Product 1
  },
  {
    id: 20,
    name: 'Product 20',
    description: 'Description for Product 20',
    image: 'product2.jpg', // Reusing the image from Product 2
  },
];


  
// Function to create the product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const img = document.createElement('img');
  img.src = `/public/images/${product.image}`;
  img.alt = product.name;
  img.classList.add('product-image');

  const name = document.createElement('h4');
  name.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = `$${product.price.toFixed(2)}`;

  const viewProductLink = document.createElement('a');
  viewProductLink.href = `product.html?id=${product.id}`; // Replace 'product.html' with the actual product detail page URL
  viewProductLink.textContent = 'View Product';

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(viewProductLink);

  return card;
}

// Function to display the latest products in the "Latest Products" section
function displayLatestProducts() {
  const latestProductsContainer = document.querySelector('.main-containers .container:first-child');
  latestProductsContainer.innerHTML = ''; // Clear the container first

  // Fetch the latest products (For now, we will use the first 3 products as latest)
  const latestProducts = products.slice(0, 3);

  // Create and add product cards for each latest product
  latestProducts.forEach(product => {
    const card = createProductCard(product);
    latestProductsContainer.appendChild(card);
  });
}

// Function to display the featured products in the "Featured Products" section
function displayFeaturedProducts() {
  const featuredProductsContainer = document.querySelector('.main-containers .container:last-child');
  featuredProductsContainer.innerHTML = ''; // Clear the container first

  // Fetch the featured products (For now, we will use the next 3 products as featured)
  const featuredProducts = products.slice(3, 6);

  // Create and add product cards for each featured product
  featuredProducts.forEach(product => {
    const card = createProductCard(product);
    featuredProductsContainer.appendChild(card);
  });
}

// Function to display recommended products in the "Product Recommendations" section
function displayRecommendedProducts() {
  const recommendSection = document.querySelector('.product-recommendation');
  recommendSection.innerHTML = ''; // Clear the section first

  // Fetch recommended products (For now, we will use the next 3 products as recommendations)
  const recommendedProducts = products.slice(6, 9);

  // Create and add product cards for each recommended product
  recommendedProducts.forEach(product => {
    const card = createProductCard(product);
    card.addEventListener('click', () => {
      // Redirect to "shop.html" (Replace 'shop.html' with the actual shop page URL)
      window.location.href = 'shop.html';
    });
    recommendSection.appendChild(card);
  });
}

// Call the functions to display the latest, featured, and recommended products
displayLatestProducts();
displayFeaturedProducts();
displayRecommendedProducts();