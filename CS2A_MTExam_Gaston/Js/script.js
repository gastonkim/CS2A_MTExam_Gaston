let cart = [];

function showNotification(message) {
    let notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => document.body.removeChild(notification), 500);
    }, 2000);
}

function addToCart(product) {
    cart.push(product);
    updateCart();
    showNotification(product + " added to cart!");
}

function removeFromCart(product) {
    let index = cart.indexOf(product);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
        showNotification(product + " removed from cart!");
    } else {
        showNotification(product + " is not in the cart!");
    }
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    if (!cartList) return;
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function sendMessage() {
    showNotification("Your message has been sent!");
}