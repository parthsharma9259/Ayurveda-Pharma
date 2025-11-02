document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productSummaryContainer = document.getElementById("product-summary");
    let placeOrderButton = document.getElementById("place-order");

    function displayProductSummary() {
        console.log("Cart Data:", cart); // Debugging: Check if cart data exists

        if (!productSummaryContainer) {
            console.error("Product summary container not found.");
            return;
        }

        if (cart.length === 0) {
            productSummaryContainer.innerHTML = "<p>No items in cart.</p>";
            return;
        }

        let total = 0;
        let tableHTML = `<h2>Order Summary</h2>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>`;

        cart.forEach(item => {
            let itemTotal = item.price * item.quantity;
            total += itemTotal;
            tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${itemTotal}</td>
            </tr>`;
        });

        tableHTML += `
            <tr>
                <td colspan="3"><strong>Total Price:</strong></td>
                <td><strong>₹${total}</strong></td>
            </tr>
        </table>`;

        productSummaryContainer.innerHTML = tableHTML;
    }

    function validateForm() {
        let name = document.getElementById("name")?.value.trim();
        let address = document.getElementById("address")?.value.trim();
        let isValid = true;

        if (!name || name.length < 3) {
            isValid = false;
            document.getElementById("name")?.classList.add("error");
        } else {
            document.getElementById("name")?.classList.remove("error");
        }

        if (!address || address.length < 10) {
            isValid = false;
            document.getElementById("address")?.classList.add("error");
        } else {
            document.getElementById("address")?.classList.remove("error");
        }

        return isValid;
    }

    if (placeOrderButton) {
        placeOrderButton.addEventListener("click", function () {
            if (!validateForm()) return;
            alert("Order placed successfully!");
            localStorage.removeItem("cart");
            window.location.href = "../index.html";
        });
    }

    let paymentForm = document.getElementById("payment-form");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Payment Successful! Thank you for your purchase.");
            localStorage.removeItem("cart");
            window.location.href = "../index.html";
        });
    }

    displayProductSummary();

    // Card Number Formatting
  const cardNumberInput = document.getElementById("card-number");
  cardNumberInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (this.value.length > 19) {
          this.value = this.value.slice(0, 19); // Limit to 16 digits + 3 spaces
      }
  });
  
  // Expiry Date Formatting
  const expiryInput = document.getElementById("expiry");
  expiryInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, '').slice(0, 4); // Limit to 4 digits
      if (this.value.length >= 3) {
          this.value = this.value.slice(0, 2) + '/' + this.value.slice(2); // Add slash
      }
  });
  
  // CVV Validation
  const cvvInput = document.getElementById("cvv");
  cvvInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, '').slice(0, 3); // Limit to 3 digits
  });
});
