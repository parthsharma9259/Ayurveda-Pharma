document.getElementById('inventory-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    // Calculate total value
    const totalValue = quantity * price;

    // Create a new row for the inventory table
    const inventoryList = document.getElementById('inventory-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${productName}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>${totalValue}</td>
        <td><button class="remove-btn">Remove</button></td>
    `;
    inventoryList.appendChild(row);

    // Clear the form
    document.getElementById('inventory-form').reset();
});
