
// Function to create the gallery image element
function createGalleryImage(product) {
    const img = document.createElement('img');
    img.src = `/public/images/${product.image}`;
    img.alt = product.name;
    img.classList.add('gallery-image');
  
    // Add an event listener to redirect to the product page when clicked
    img.addEventListener('click', () => {
      window.location.href = `/views/product.html?name=${encodeURIComponent(product.name)}`;
    });
  
    return img;
  }
  
  // Function to display the gallery images on the "gallery.html" page
  function displayGalleryImages() {
    const galleryGrid = document.getElementById('gallery-grid');
  
    products.forEach(product => {
      const galleryImage = createGalleryImage(product);
      galleryGrid.appendChild(galleryImage);
    });
  }
  
  // Call the function to display the gallery images
  displayGalleryImages();