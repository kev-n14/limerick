document.addEventListener("DOMContentLoaded", function () {
    const cartBtns = document.querySelectorAll(".cartBtn");
    const checkoutBtn = document.getElementById("checkoutBtn");

    // object to track selected items
    const cart = {};

    cartBtns.forEach(btn => {

        btn.addEventListener("click", function () {
            const cardBody = btn.closest(".card-body");
            const productName = cardBody.querySelector(".card-title").textContent.trim();
            const price = parseFloat(cardBody.querySelector(".price").textContent.replace("€", "").trim());

            if (cart[productName]) {
                delete cart[productName];
                btn.textContent = "Add to Cart";
                btn.classList.remove("btn-danger");
                btn.classList.add("btn-outline-primary");


            } else {
                cart[productName] = price;
                btn.textContent = "Remove from Cart";
                btn.classList.remove("btn-outline-primary");
                btn.classList.add("btn-danger");

                let btn = cardBody.getElementById("checkBtn");
                btn.innerHTML = <button class="btn btn-success" id="checkoutBtn">Checkout</button>


            }
        });
    });

    //handle checkout
    checkoutBtn.addEventListener("click", function () {
        if (Object.keys(cart).length === 0) {
            alert("Your Cart is empty");
            return;
        }
        let receipt = "Receipt: \n\n";
        let total = 0;

        for (const [productName, price] of Object.entries(cart)) {
            receipt += `${productName}: €${price.toFixed(2)}\n`;
            total += price;
        }

        receipt += `\nTotal: €${total.toFixed(2)}`;

        alert(receipt);
    });


});

