document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const closeBtn = document.querySelector('.close-btn');

    if (hamburger) {
        console.log('Hamburger menu found, adding click listener');
        hamburger.addEventListener('click', function() {
            console.log('Hamburger menu clicked');
            dropdownMenu.style.transform = 'translateX(0)';
            dropdownMenu.style.display = 'flex';
            console.log('Dropdown menu should be visible now');
        });
    } else {
        console.error('Hamburger menu element not found!');
    }

    if (closeBtn) {
        console.log('Close button found, adding click listener');
        closeBtn.addEventListener('click', function() {
            console.log('Close button clicked');
            dropdownMenu.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                dropdownMenu.style.display = 'none';
                console.log('Dropdown menu should be hidden now');
            }, 300);
        });
    } else {
        console.error('Close button element not found!');
    }

});

document.addEventListener('click', function(event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    const isClickInside = dropdownMenu.contains(event.target) || 
                         hamburger.contains(event.target);
    
    if (!isClickInside) {
        // Close main dropdown menu
        if (dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 300);
        } 
    }
});
// JavaScript for search bar
function toggleSearchBar() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('show');
}
// Scroll animation for sections
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('animate');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
    const cartIcon = document.querySelector(".fas.fa-cart-shopping");

    // Function to update the cart count display
    function updateCartCount() {
        if (cartCount > 0) {
            cartIcon.innerHTML = `<span class="cart-badge">${cartCount}</span>`;
        } else {
            cartIcon.innerHTML = "";
        }
    }

    // Function to add items to the cart
    function addToCart() {
        cartCount++;
        localStorage.setItem("cartCount", cartCount);
        updateCartCount();
    }

    // Attach event listeners to all "Add to Cart" buttons
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-to-cart-btn")) {
            addToCart();
        }
    });

    // Initialize cart count display on page load
    updateCartCount();
});
