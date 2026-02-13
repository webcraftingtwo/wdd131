// Exact Product Array from BYU assignment data
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. POPULATE THE DROPDOWN
    // We target "product-name" to match the updated HTML ID
    const productList = document.getElementById("product-name");

    if (productList) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id; // Store the ID as the value
            option.textContent = product.name; // Show the Name to the user
            productList.appendChild(option);
        });
    }

    // 2. COUNTER LOGIC (For review.html)
    // This part runs only on the confirmation page
    if (window.location.pathname.includes("review.html")) {
        // Retrieve current count or start at 0 if none exists
        let reviewTotal = Number(localStorage.getItem("reviewCount")) || 0;
        
        // Increment the total for this new submission
        reviewTotal++;
        
        // Save back to localStorage for persistence
        localStorage.setItem("reviewCount", reviewTotal);
        
        // Update the display on the page
        const display = document.getElementById("review-count-display");
        if (display) {
            display.textContent = reviewTotal;
        }
    }
});
