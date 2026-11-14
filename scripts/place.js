// Static weather values (metric, since Japan uses Celsius)
const temperature = 2; // °C
const windSpeed = 12; // km/h

function calculateWindChill(t, v) {
  // prettier-ignore
  return (13.12 + 0.6215 * t - 11.37 * v ** 0.16 + 0.3965 * t * v ** 0.16).toFixed(1);
}

document.querySelector("#temp").textContent = temperature;
document.querySelector("#speed").textContent = windSpeed;

const windChill =
  temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed)} °C`
    : "N/A";
document.querySelector("#chill").textContent = windChill;

// Footer dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  `Last modified: ${document.lastModified}`;
