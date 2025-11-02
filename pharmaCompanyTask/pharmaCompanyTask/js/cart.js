document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    let cartCountElement = document.getElementById("cart-count");

    // Proceed to Checkout functionality
    const checkoutButton = document.getElementById("checkout-btn");
    checkoutButton.addEventListener("click", function() {
        // Store selected products in local storage
        localStorage.setItem("selectedProducts", JSON.stringify(cart));
        
        if (cart.length > 0) {
            alert("Redirecting to payment gateway...");
            window.location.href = "../pages/payment.html"; // Redirect to payment page
        } else {
            alert("Your cart is empty. Please add items to the cart before proceeding to checkout.");
        }
    });
    
    function displayCartItems() {
        console.log("Cart Data:", cart);
        cartItemsContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartCountElement.textContent = "0";
            totalPriceElement.textContent = "0"; // Ensure total price is reset to 0
            return;
        }

        cart.forEach((item, index) => {
            let itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");

            let itemTotal = item.price * item.quantity;
            total += itemTotal;

            itemElement.innerHTML = `
                <div class="cart-item-details">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>Price: ₹${item.price}</p>
                        <p>Quantity: 
                            <button class="decrease" data-index="${index}">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase" data-index="${index}">+</button>
                        </p>
                        <p>Total: ₹${itemTotal}</p>
                    </div>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        totalPriceElement.textContent = total;
    console.log("Cart length before update:", cart.length); // Log cart length for debugging
            cartCountElement.textContent = cart.length > 0 ? cart.length : ""; // Update cart count or set to empty if cart is empty


    }

    cartItemsContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("increase")) {
            let index = e.target.getAttribute("data-index");
            cart[index].quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCartItems();
        }

        if (e.target.classList.contains("decrease")) {
            let index = e.target.getAttribute("data-index");
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1); // Remove item if quantity is 1
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCartItems();
        }

        if (e.target.classList.contains("remove-item")) {
            let index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCartItems();
        }

        if (cart.length === 0) {
            totalPriceElement.textContent = "0"; // Ensure total price is reset
        console.log("Cart is empty, resetting count to 0."); // Log for debugging
            cartCountElement.textContent = ""; // Reset cart count to empty


        }
    });
    

    displayCartItems();
});
