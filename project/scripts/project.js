// 1. Dynamic Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

// 2. Hamburger Menu
const nav = document.querySelector('.navigation');
const btn = document.querySelector('#menu');
if (btn) {
    btn.addEventListener('click', () => {
        nav.classList.toggle('show');
        btn.classList.toggle('open');
    });
}

// 3. Portfolio Array (Array of Objects)
const portfolio = [
    { title: "Neon Portraits", category: "Photography", url: "https://placehold.co/600x400?text=Neon+Portraits" },
    { title: "Safari Brand", category: "Design", url: "https://placehold.co/600x400?text=Safari+Brand" },
    { title: "Wedding Bliss", category: "Photography", url: "https://placehold.co/600x400?text=Wedding+Bliss" },
    { title: "Tech UI Kit", category: "Design", url: "https://placehold.co/600x400?text=Tech+UI" },
    { title: "Urban Fashion", category: "Photography", url: "https://placehold.co/600x400?text=Urban+Fashion" },
    { title: "Eco Logo", category: "Design", url: "https://placehold.co/600x400?text=Eco+Logo" }
];

// 4. Dynamic Gallery Function (Template Literals)
const galleryContainer = document.getElementById('gallery-grid');

function displayGallery(items) {
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        items.forEach(item => {
            // Creating card using template literals
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${item.url}" alt="${item.title}" loading="lazy">
                <h3>${item.title}</h3>
                <p>${item.category}</p>
            `;
            galleryContainer.appendChild(card);
        });
    }
}

// Initial Load
displayGallery(portfolio);

// 5. Filtering Function (Conditional Branching)
function filterGallery(category) {
    if (category === 'all') {
        displayGallery(portfolio);
    } else {
        const filtered = portfolio.filter(item => item.category === category);
        displayGallery(filtered);
    }
}

// 6. LocalStorage: Visit Counter
const welcomeMsg = document.getElementById('welcome-message');
if (welcomeMsg) {
    let visits = Number(window.localStorage.getItem('venturez-visits')) || 0;
    if (visits > 0) {
        welcomeMsg.textContent = `Welcome Back! You've visited ${visits} times.`;
    } else {
        welcomeMsg.textContent = `Welcome to Venturez! First time?`;
    }
    visits++;
    localStorage.setItem('venturez-visits', visits);
}
