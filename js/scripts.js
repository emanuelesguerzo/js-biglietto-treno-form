const formElem = document.querySelector(".user-form");
const userElem = document.getElementById("username");
const ageElem = document.getElementById("age");
const distanceElem = document.getElementById("km-distance");
const btnElem = document.querySelector(".btn-confirm");
const undoBtnElem = document.querySelector(".btn-undo");
const nameElem = document.querySelector(".user-out");
const ticketElem = document.querySelector(".ticket-type");
const carriageElem = document.querySelector(".carriage");
const cpElem = document.querySelector(".cp-code");
const priceElem = document.querySelector(".price");
const containerElem = document.querySelector(".ticket-container");

formElem.addEventListener("submit", function(event) {
    event.preventDefault();

    let travelDistance = distanceElem.value.trim();
    let userAge = ageElem.value.trim();
    let username = userElem.value.trim();
    let kmPrice = 0.21;
    let underageDiscount = 20;
    let seniorDiscount = 40;

    let basePrice = travelDistance * kmPrice;

    let discountPercent;
    if (userAge < 18) {
        discountPercent = underageDiscount;
    } else if (userAge >= 65) {
        discountPercent = seniorDiscount;
    } else {
        discountPercent = 0;
    }

    let discountMessage;
    if (userAge < 18) {
        discountMessage = `Biglietto Ridotto`;
    } else if (userAge >= 65) {
        discountMessage = `Biglietto Senior`;
    } else {
        discountMessage = `Biglietto Standard`;
    };

    const discountValue = basePrice / 100 * discountPercent;
    const finalPrice = basePrice - discountValue;

    containerElem.classList.remove("d-none");
    nameElem.innerHTML = username;
    ticketElem.innerHTML = discountMessage;
    carriageElem.innerHTML = randomNum(1, 9);
    cpElem.innerHTML = randomNum(90000, 100000);
    priceElem.innerHTML = `${finalPrice.toFixed(2)}€`;
    
})

undoBtnElem.addEventListener("click", function() {
    containerElem.classList.add("d-none");
});

////////////////
// FUNCTIONS //
//////////////
function randomNum(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt;
}