// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Wind Chill Calculation
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(t, v) {
    // Metric Formula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
    return (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);
}

const wcDisplay = document.getElementById("windchill");

if (temp <= 10 && wind > 4.8) {
    wcDisplay.textContent = calculateWindChill(temp, wind) + " °C";
} else {
    wcDisplay.textContent = "N/A";
}
