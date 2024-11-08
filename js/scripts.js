const ageElem = document.getElementById("age");
const distanceElem = document.getElementById("km-distance");
const btnElem = document.querySelector(".btn")


btnElem.addEventListener("click", function () {
    let travelDistance = distanceElem.value.trim();
    let userAge = ageElem.value.trim();
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

    const discountValue = basePrice / 100 * discountPercent;
    const finalPrice = basePrice - discountValue;

    const message = `Abbiamo applicato lo sconto del ${discountPercent}% - ${discountValue.toFixed(2)}€. Quindi il tuo prezzo finale e' di ${finalPrice.toFixed(2)}€`
    console.log(message);
})