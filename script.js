// Script for JMB Printing Services Website

// Welcome Screen -> Main Site
function enterMainSite() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("mainSiteContent").classList.remove("hidden");
}

// Cart Logic
let cart = [];
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}
function updateCart() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    let total = 0;

    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
    } else {
        cart.forEach((c, index) => {
            total += c.price;
            cartItems.innerHTML += `
                <div class="flex justify-between items-center border p-2 rounded">
                    <span>${c.item}</span>
                    <span>₱${c.price}</span>
                </div>`;
        });
    }

    cartCount.innerText = cart.length;
    cartTotal.innerText = `₱${total}`;

    const checkoutBtn = document.getElementById("checkoutBtn");
    if (cart.length > 0) {
        checkoutBtn.disabled = false;
    } else {
        checkoutBtn.disabled = true;
    }
}
function toggleCart() {
    document.getElementById("cartModal").classList.toggle("hidden");
}
function proceedToCheckout() {
    document.getElementById("cartModal").classList.add("hidden");
    document.getElementById("checkoutModal").classList.remove("hidden");

    const checkoutItems = document.getElementById("checkoutItems");
    const checkoutTotal = document.getElementById("checkoutTotal");
    let total = 0;

    checkoutItems.innerHTML = "";
    cart.forEach(c => {
        total += c.price;
        checkoutItems.innerHTML += `<div class="flex justify-between"><span>${c.item}</span><span>₱${c.price}</span></div>`;
    });

    checkoutTotal.innerText = `₱${total}`;
}
function closeCheckout() {
    document.getElementById("checkoutModal").classList.add("hidden");
}
function sendOrderEmail() {
    alert("Order details sent to jmbprintingservices12@gmail.com!");
}

// Student Promo Form
function showStudentPromoForm() {
    document.getElementById("studentPromoModal").classList.remove("hidden");
}
function closeStudentPromo() {
    document.getElementById("studentPromoModal").classList.add("hidden");
}

// Claim Stub
function closeClaimStub() {
    document.getElementById("claimStubModal").classList.add("hidden");
}
function downloadClaimStub() {
    alert("Claim stub downloaded as image!");
}

// Customer & Admin Login
function showCustomerLogin() {
    document.getElementById("customerLoginModal").classList.remove("hidden");
}
function closeCustomerLogin() {
    document.getElementById("customerLoginModal").classList.add("hidden");
}
function showCustomerSignup() {
    document.getElementById("customerSignupModal").classList.remove("hidden");
}
function closeCustomerSignup() {
    document.getElementById("customerSignupModal").classList.add("hidden");
}
function showAdminLogin() {
    document.getElementById("adminLoginModal").classList.remove("hidden");
}
function closeAdminLogin() {
    document.getElementById("adminLoginModal").classList.add("hidden");
}
