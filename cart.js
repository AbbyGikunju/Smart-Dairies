// Cart array to store added products
let cart = [];

// Products data (you can expand this with more details)
const products = [
  { id: 1, name: 'Fresh Whole Milk', price: 2.50 },
  { id: 2, name: 'Yoghurt', price: 1.50 },
  { id: 3, name: 'Ice Cream', price: 3.00 },
  { id: 4, name: 'Dairy Cow', price: 1000.00 }
];

// Function to add product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id == productId);
  if (product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    updateCartCount(); // Update the cart count on the navbar
  }
}

// Function to update cart count in the navbar
function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = cart.length; // Update the count with the number of items in the cart
}

// Show cart items when the cart icon is clicked
document.querySelector('.cart-icon').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default link behavior
  showCartItems(); // Call the function to display the cart
});

// Function to display cart items
function showCartItems() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    let cartDetails = 'Items in your cart:\n';
    cart.forEach((item, index) => {
      cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
    });
    alert(cartDetails); // You can replace this with a more sophisticated UI
  }
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    addToCart(productId);
  });
});
