/* WDD 131 Project: Venturez Photography & Design */

// 1. FOOTER DATES (Run on every page)
const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Update: ${document.lastModified}`;
}

// 2. HAMBURGER MENU (Run on every page)
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Safety check: Only run if the button exists
if (hambutton && mainnav) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('open');
    });
}

// 3. PORTFOLIO DATA (Array of Objects)
const portfolio = [
    {
        title: "Neon City",
        category: "Photography",
        url: "https://placehold.co/600x400/4b2c6e/FFF?text=Neon+City"
    },
    {
        title: "Safari Brand Identity",
        category: "Design",
        url: "https://placehold.co/600x400/f4b400/000?text=Safari+Brand"
    },
    {
        title: "Wedding Bliss",
        category: "Photography",
        url: "https://placehold.co/600x400/4b2c6e/FFF?text=Wedding+Bliss"
    },
    {
        title: "Tech UI Kit",
        category: "Design",
        url: "https://placehold.co/600x400/f4b400/000?text=Tech+UI"
    },
    {
        title: "Urban Fashion",
        category: "Photography",
        url: "https://placehold.co/600x400/4b2c6e/FFF?text=Urban+Fashion"
    },
    {
        title: "Eco Logic Logo",
        category: "Design",
        url: "https://placehold.co/600x400/f4b400/000?text=Eco+Logo"
    }
];

// 4. DYNAMIC GALLERY GENERATOR
const galleryContainer = document.getElementById('gallery-grid');

function displayGallery(items) {
    // Only run if the gallery container exists (prevents errors on Home/Contact pages)
    if (galleryContainer) {
        galleryContainer.innerHTML = ''; // Clear existing content
        
        items.forEach(item => {
            // Create a card for each item
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Template Literal for HTML structure
            card.innerHTML = `
                <img src="${item.url}" alt="${item.title}" loading="lazy" width="300" height="200">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            `;
            
            galleryContainer.appendChild(card);
        });
    }
}

// Initial Load of Gallery (if on gallery page)
displayGallery(portfolio);

// 5. FILTER FUNCTION
function filterGallery(category) {
    if (category === 'all') {
        displayGallery(portfolio);
    } else {
        const filtered = portfolio.filter(item => item.category === category);
        displayGallery(filtered);
    }
}

// 6. LOCAL STORAGE: VISIT COUNTER
const welcomeMsg = document.getElementById('welcome-message');

if (welcomeMsg) {
    // Get the current count, default to 0 if not found
    let visits = Number(window.localStorage.getItem('venturez-visits-count')) || 0;

    // Display message based on visit count
    if (visits > 0) {
        welcomeMsg.textContent = `Welcome Back! You've visited this site ${visits} times.`;
    } else {
        welcomeMsg.textContent = `Welcome to Venturez! This is your first visit.`;
    }

    // Increment and save the new count
    visits++;
    localStorage.setItem('venturez-visits-count', visits);
}
