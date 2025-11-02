document.addEventListener("DOMContentLoaded", function () {
    let productList = document.getElementById("product-list");
    const searchInput = document.getElementById("search-bar");
    const singleProductCard = document.getElementById("single-product-card");
    
    let products = [
    { id: 1, name: "Ashwagandha Capsules", price: 299, image: "../img/Ashawagandha.png" },
    { id: 2, name: "Triphala Tablets", price: 199, image: "../img/Triphala.png" },
    { id: 3, name: "Neem Tablets", price: 149, image: "../img/Neem.png" },
    { id: 4, name: "Aloe Vera Gel", price: 399, image: "../img/AloeVeera.png" },
    { id: 5, name: "Brahmi Syrup", price: 249, image: "../img/brahmi.png" },
    { id: 6, name: "Shatavari Granules", price: 349, image: "../img/shatarvi.png" },
    { id: 7, name: "Giloy Juice", price: 269, image: "../img/giloy.png" },
    { id: 8, name: "Chyawanprash", price: 499, image: "../img/chavanprash.png" },
    { id: 9, name: "Herbal Pain Balm", price: 129, image: "../img/PainBalm.png" },
    { id: 10, name: "Herbal Hair Oil", price: 199, image: "../img/Hair Oil.png" },
    { id: 11, name: "Ayurvedic Face Cream", price: 299, image: "../img/FaceCream.png" },
    { id: 12, name: "Immunity Booster Tablets", price: 349, image: "../img/ImmunityBooster.png" },
    { id: 13, name: "Herbal Detox Tea", price: 189, image: "../img/Herbal Tea.png" },
    { id: 14, name: "Diabetic Care Capsules", price: 299, image: "../img/DiabeticCare.png" },
    { id: 15, name: "Liver Detox Syrup", price: 349, image: "../img/liverDetox.png" },
    { id: 16, name: "Joint Pain Oil", price: 399, image: "../img/JointPain.png" }

    ];

    function displayProducts(products) {
        productList.innerHTML = "";
        if (products.length === 1) {
            const product = products[0];
            let productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button class="add-to-cart-btn" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
            `;
            productList.appendChild(productCard); // Append the single product card
        } else {
            singleProductCard.style.display = "none"; // Hide single product card if not applicable
            products.forEach(product => {
                let productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <button class="add-to-cart-btn" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
                    `;
                productList.appendChild(productCard);
            });
        }

        // Add to Cart Functionality
        document.querySelectorAll(".add-to-cart-btn").forEach(button => {
            button.addEventListener("click", function () {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                const productToAdd = {
                    name: this.getAttribute("data-name"),
                    price: parseFloat(this.getAttribute("data-price")),
                    image: this.getAttribute("data-image"),
                    quantity: 1 // Default quantity
                };

                // Check if product already exists in cart
                const existingProductIndex = cart.findIndex(item => item.name === productToAdd.name);
                if (existingProductIndex > -1) {
                    // If it exists, increase the quantity
                    cart[existingProductIndex].quantity++;
                } else {
                    // If it doesn't exist, add it to the cart
                    cart.push(productToAdd);
                }

                // Update localStorage
                localStorage.setItem("cart", JSON.stringify(cart));
            });
        });
    }

    displayProducts(products); // Initial display of all products

    // Search Functionality
    searchInput.addEventListener("input", function () {
        let searchText = searchInput.value.toLowerCase();
        let filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchText)
        );
        displayProducts(filteredProducts);
    });
});
