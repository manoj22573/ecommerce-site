document.addEventListener('DOMContentLoaded', function() {
    const featuredProductsContainer = document.getElementById('featured-products');
    const productListContainer = document.getElementById('product-list');

    const products = [
        { id: 1, name: 'Realme neo pro', price: 29999.99, image: 'images/product1.jpg' },
        { id: 2, name: 'lenovo desktop', price: 35629.99, image: 'images/product2.jpg' },
        { id: 3, name: 'digital watch', price: 539.99, image: 'images/product3.jpg' },
        { id: 4, name: 'ubon headset', price: 249.99, image: 'images/product4.jpg' },
        { id: 5, name: 'jbl wireless headset', price: 659.99, image: 'images/product5.jpg' },
        { id: 6, name: 'cannon EOS', price: 67769.99, image: 'images/product6.jpg' },
        { id: 7, name: 'lenovo tab', price: 8979.99, image: 'images/product7.jpg' },
        { id: 8, name: 'logi wireless keyboard', price: 489.99, image: 'images/product8.jpg' },
        { id: 9, name: 'EPSON printer', price: 54399.99, image: 'images/product9.jpg' },
        { id: 10, name: 'zebronics hometeater', price: 8109.99, image: 'images/product10.jpg' }
    ];

    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `Rs.${product.price}`;

        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);

        return productDiv;
    }

    if (featuredProductsContainer) {
        products.slice(0, 3).forEach(product => {
            const productElement = createProductElement(product);
            featuredProductsContainer.appendChild(productElement);
        });
    }

    if (productListContainer) {
        products.forEach(product => {
            const productElement = createProductElement(product);
            productListContainer.appendChild(productElement);
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert(`Logged in as ${username}`);
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;
            alert(`Registered as ${username} with email ${email}`);
        });
    }
});
