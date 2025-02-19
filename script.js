document.addEventListener("DOMContentLoaded", function () {
    // រកទាំងអស់នូវប៊ូតុង BUY
    let buyButtons = document.querySelectorAll(".product-card button");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.parentElement.querySelector("h3").innerText;
            let productPrice = this.parentElement.querySelector(".price").innerText;

            // បង្ហាញ popup modal
            document.getElementById("modal-product-name").innerText = productName;
            document.getElementById("modal-product-price").innerText = productPrice;
            document.getElementById("modal").style.display = "flex";
        });
    });

    // បិទ popup modal
    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("modal").style.display = "none";
    });
});
