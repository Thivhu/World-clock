function updateTime() {
  const cities = {
    "Los Angeles": "America/Los_Angeles",
    Paris: "Europe/Paris",
    London: "Europe/London",
    "New York": "America/New_York",
    Auckland: "Pacific/Auckland"
  };

  let cityContainer = document.getElementById("cities");
  cityContainer.innerHTML = "";

  Object.keys(cities).forEach((city) => {
    let now = new Date();
    let options = { timeZone: cities[city], hour12: true, hour: "numeric", minute: "numeric", second: "numeric" };
    let timeString = now.toLocaleTimeString("en-US", options);
    let dateString = now.toLocaleDateString("en-US", { timeZone: cities[city], weekday: "long", month: "long", day: "numeric", year: "numeric" });

    let cityElement = document.createElement("div");
    cityElement.classList.add("city");
    cityElement.innerHTML = `
      <div>
        <h2>${city}</h2>
        <div class="date">${dateString}</div>
      </div>
      <div class="time">${timeString}</div>
    `;
    cityContainer.appendChild(cityElement);
  });
}

document.getElementById("city-selector").addEventListener("change", function () {
  let selectedCity = this.value;
  if (selectedCity) {
    let cityContainer = document.getElementById("cities");
    cityContainer.innerHTML = "";

    let now = new Date();
    let timeZone = {
      London: "Europe/London",
      "New York": "America/New_York",
      Auckland: "Pacific/Auckland"
    }[selectedCity];

    let options = { timeZone: timeZone, hour12: true, hour: "numeric", minute: "numeric", second: "numeric" };
    let timeString = now.toLocaleTimeString("en-US", options);
    let dateString = now.toLocaleDateString("en-US", { timeZone: timeZone, weekday: "long", month: "long", day: "numeric", year: "numeric" });

    let cityElement = document.createElement("div");
    cityElement.classList.add("city");
    cityElement.innerHTML = `
      <div>
        <h2>${selectedCity}</h2>
        <div class="date">${dateString}</div>
      </div>
      <div class="time">${timeString}</div>
    `;
    cityContainer.appendChild(cityElement);
  }
});

setInterval(updateTime, 5000);
updateTime();
