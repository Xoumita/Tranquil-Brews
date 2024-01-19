// $(".carousel").ready(function(){
//     $('.carousel').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: false,
//     });
// });

// function prevSlide() {
//     $('.carousel').slick('slickPrev');
// }

// function nextSlide() {
//     $('.carousel').slick('slickNext');
// }

// $(".fa-arrow-right").click(nextSlide)
// $(".fa-arrow-left").click(prevSlide)


// collapsing 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// cart

let cartItems = {};
const itemPrices = {
    drink1: 200.50,
    drink2: 200.50,
    drink3: 200.50,
    drink4: 200.50,
    drink5: 200.50,
    // Add prices for other items (item2, item3, ...)
};

function addToCart(itemId) {
    if (cartItems[itemId]) {
        cartItems[itemId]++;
    } else {
        cartItems[itemId] = 1;
    }
    updateCart();
}

function updateCart() {
    
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartList.innerHTML = '';

    for (const itemId in cartItems) {
        const listItem = document.createElement('li');
        const itemPrice = itemPrices[itemId] * cartItems[itemId];

        listItem.innerHTML = `Item ${itemId}: ${cartItems[itemId]} x ${itemPrices[itemId]} = ${itemPrice.toFixed(2)}`;
        
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.onclick = function () {
            cartItems[itemId]++;
            updateCart();
        };

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = function () {
            if (cartItems[itemId] > 0) {
                cartItems[itemId]--;
                updateCart();
            }
        };

        listItem.appendChild(decreaseButton);
        listItem.appendChild(increaseButton);

        cartList.appendChild(listItem);

        totalPrice += itemPrice;
    }

    totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function increaseQuantity() {
    const quantityElement = document.getElementById('quantity');
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
}

function decreaseQuantity() {
    const quantityElement = document.getElementById('quantity');
    const currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
    }
}

function orderNow() {
  const cartList = document.getElementById('cart-items');
  
  // Check if there are items in the cart
  if (cartList.children.length === 0) {
      alert('Add items to the cart first.');
      return;
  }

  // The rest of your order processing logic here
  alert('Order placed!');
}

function removeFromCart(itemId) {
  delete cartItems[itemId];
  updateCart();
}

function increaseQuantity(itemId) {
  cartItems[itemId]++;
  updateCart();
}

function decreaseQuantity(itemId) {
  if (cartItems[itemId] > 0) {
      cartItems[itemId]--;
      if (cartItems[itemId] === 0) {
          removeFromCart(itemId);
      } else {
          updateCart();
      }
  }
}

// quatity increse or decrease

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total-price');
  let totalPrice = 0;

  cartList.innerHTML = '';

  for (const itemId in cartItems) {
      const listItem = document.createElement('li');
      const itemPrice = itemPrices[itemId] * cartItems[itemId];

      listItem.innerHTML = `
          Item ${itemId}: ${cartItems[itemId]} x $${itemPrices[itemId]} = $${itemPrice.toFixed(2)}
          <button class="remove-btn" onclick="removeFromCart('${itemId}')">Remove</button>
          <button class="decrease-btn" onclick="decreaseQuantity('${itemId}')">-</button>
          <button class="increase-btn" onclick="increaseQuantity('${itemId}')">+</button>
      `;

      cartList.appendChild(listItem);

      totalPrice += itemPrice;
  }

  totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}



// order description

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const requirements = document.getElementById('requirements').value;
  const preference = document.querySelector('input[name="preference"]:checked');

  // Validate form data
  if (!requirements || !preference) {
      alert('Please fill out all fields.');
      return;
  }

  // Display the collected information (you can modify this part)
  const message = `Special Requirements: ${requirements}\nPreference: ${preference.value}`;
  alert(message);

  // Reset the form
  document.getElementById('orderForm').reset();
}

// review
function submitReview(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const review = document.getElementById('review').value;

  // Validate form data
  if (!review) {
      alert('Please fill out the review.');
      return;
  }

  // Display the collected information (you can modify this part)
  const message = `Review: sumbitted`;
  alert(message);

  // Reset the form
  document.getElementById('reviewForm').reset();
}
