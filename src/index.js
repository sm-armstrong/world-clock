function updateTime() {
    // Brisbane
    let brisbaneElement = document.querySelector("#brisbane");
    if (brisbaneElement) {
        let brisbaneDateElement = brisbaneElement.querySelector(".date");
        let brisbaneTimeElement = brisbaneElement.querySelector(".time");
        let brisbaneTime = moment().tz("Australia/Brisbane");

        brisbaneDateElement.innerHTML = brisbaneTime.format("Do MMMM YYYY");
        brisbaneTimeElement.innerHTML = brisbaneTime.format("HH:mm:ss");
    }

    // Nairobi
    let nairobiElement = document.querySelector("#nairobi");
    if (nairobiElement) {
        let nairobiDateElement = nairobiElement.querySelector(".date");
        let nairobiTimeElement = nairobiElement.querySelector(".time");
        let nairobiTime = moment().tz("Africa/Nairobi");

        nairobiDateElement.innerHTML = nairobiTime.format("Do MMMM YYYY");
        nairobiTimeElement.innerHTML = nairobiTime.format("HH:mm:ss");
    }

    // Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");

        tokyoDateElement.innerHTML = tokyoTime.format("Do MMMM YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace('_', ' ').split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        <a href="/">All cities</a>
        <br />
        <br />
    `
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
