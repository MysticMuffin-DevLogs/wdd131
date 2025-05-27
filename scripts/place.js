window.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("speed").textContent);
  const chillEl = document.getElementById("chill");

  function calculateWindChill(t, s) {
    // Celsius version of the wind chill formula
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
  }

  if (temp <= 10 && speed > 4.8) {
    chillEl.textContent = `${calculateWindChill(temp, speed)} °C`;
  } else {
    chillEl.textContent = "N/A";
  }

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last modified: ${document.lastModified}`;
});
