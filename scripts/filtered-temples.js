// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger Menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('open');
});

// Temple Data Array
const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/temples/aba-nigeria-temple-lds-273999-mobile.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/temples/manti-utah-temple-768199-mobile.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/temples/payson-utah-temple-exterior-1416671-mobile.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2022, May, 22", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/temples/yigo-guam-temple-2.jpg" },
    { templeName: "Harare Zimbabwe", location: "Harare, Zimbabwe", dedicated: "2025, September, 1", area: 17250, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-main.jpg" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah", dedicated: "1893, April, 6", area: 253015, imageUrl: "https://content.churchofjesuschrist.org/temples/salt-lake-temple-lds-1153139-mobile.jpg" },
    { templeName: "Logan Utah", location: "Logan, Utah", dedicated: "1884, May, 17", area: 119619, imageUrl: "https://content.churchofjesuschrist.org/temples/logan-utah-temple-lds-934331-mobile.jpg" },
    { templeName: "Bern Switzerland", location: "Münchenbuchsee, Switzerland", dedicated: "1955, September, 11", area: 35546, imageUrl: "https://content.churchofjesuschrist.org/temples/bern-switzerland-temple-lds-759160-mobile.jpg" },
    { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 41010, imageUrl: "https://content.churchofjesuschrist.org/temples/rome-italy-temple-lds-2169733-mobile.jpg" }
];

// Display Function
function displayTemples(filteredList) {
    const container = document.querySelector("#temple-container");
    container.innerHTML = "";
    filteredList.forEach(temple => {
        const card = document.createElement("section");
        card.className = "temple-card";
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span>Location:</span> ${temple.location}</p>
            <p><span>Dedicated:</span> ${temple.dedicated}</p>
            <p><span>Area:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}

// Event Listeners
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
});
document.querySelector("#new").addEventListener("click", () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
});
document.querySelector("#large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});
document.querySelector("#small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
});

// Initial Load
displayTemples(temples);
