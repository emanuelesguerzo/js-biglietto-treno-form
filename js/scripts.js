// Form Data
const formElem = document.querySelector(".user-form");
const userElem = document.getElementById("username");
const ageElem = document.getElementById("age");
const distanceElem = document.getElementById("km-distance");
const btnElem = document.querySelector(".btn-confirm");
const undoBtnElem = document.querySelector(".btn-undo");

// Ticket Data
const nameElem = document.querySelector(".user-out");
const ticketElem = document.querySelector(".ticket-type");
const carriageElem = document.querySelector(".carriage");
const cpElem = document.querySelector(".cp-code");
const priceElem = document.querySelector(".price");
const containerElem = document.querySelector(".ticket-container");

// General Data
let kmPrice = 0.21;

//Event Listeners
formElem.addEventListener("submit", calculatePrice);

undoBtnElem.addEventListener("click", function() {
    containerElem.classList.add("d-none");
});

////////////////
// FUNCTIONS //
//////////////
function calculatePrice(event) {
    event.preventDefault();

    const travelDistance = parseInt(distanceElem.value);
    const userAge = ageElem.value.trim();
    const username = userElem.value.trim();

    const basePrice = travelDistance * kmPrice;

    let discountMessage;
    let discountPercent;
    if (userAge < 18) {
        discountPercent = 20;  
        discountMessage = `Biglietto Ridotto`;
    } else if (userAge >= 65) {
        discountPercent = 40;
        discountMessage = `Biglietto Senior`;
    } else {
        discountPercent = 0;
        discountMessage = `Biglietto Standard`;
    };

    const finalPrice = basePrice - (basePrice / 100 * discountPercent);

    containerElem.classList.remove("d-none");
    nameElem.innerHTML = username;
    ticketElem.innerHTML = discountMessage;
    carriageElem.innerHTML = randomNum(1, 9);
    cpElem.innerHTML = randomNum(90000, 100000);
    priceElem.innerHTML = `${finalPrice.toFixed(2)}€`;
};

function randomNum(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt;
};