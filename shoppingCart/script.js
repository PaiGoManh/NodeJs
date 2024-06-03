document.addEventListener('DOMContentLoaded', () => {
    const itemSelect = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    const addToCartButton = document.getElementById('add-to-cart');
    const cartTableBody = document.querySelector('#cart tbody');
    const totalValueSpan = document.getElementById('total-value');

    const cart = new Map();

    addToCartButton.addEventListener('click', () => {
        const itemName = itemSelect.options[itemSelect.selectedIndex].text;
        const itemValue = itemSelect.value;
        const itemPrice = parseFloat(itemSelect.options[itemSelect.selectedIndex].dataset.price);
        const quantity = parseInt(quantityInput.value);

        if (cart.has(itemValue)) {
            const currentItem = cart.get(itemValue);
            currentItem.quantity += quantity;
            cart.set(itemValue, currentItem);
        } else {
            cart.set(itemValue, { name: itemName, price: itemPrice, quantity: quantity });
        }

        updateCartDisplay();
    });

    function updateCartDisplay() {
        cartTableBody.innerHTML = '';
        let totalCartValue = 0;

        cart.forEach((item, key) => {
            const totalPrice = item.quantity * item.price;
            totalCartValue += totalPrice;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${totalPrice.toFixed(2)}</td>
                <td><button class="delete-button" data-item="${key}">Delete</button></td>
            `;

            cartTableBody.appendChild(row);
        });

        totalValueSpan.textContent = totalCartValue.toFixed(2);

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const itemKey = event.target.dataset.item;
                cart.delete(itemKey);
                updateCartDisplay();
            });
        });
    }
});
