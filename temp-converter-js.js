let tempInputEl = document.getElementById("tempInput");
let convertBtnEl = document.getElementById("convertBtn");
let tempOutputEl = document.getElementById("tempOutput");
let errorMsgEl = document.getElementById("errorMsg");

let hoursErrorMessage = "Please Enter Temprature Value";



function converter() {

    if (tempInputEl.value === "") {
        errorMsgEl.textContent = hoursErrorMessage;
        tempOutputEl.textContent = "";
    } else {
        let tempInCelcius = parseInt(tempInputEl.value);
        let tempInKelvin = tempInCelcius + 273;
        let tempInFarenheit = tempInCelcius * (9 / 5) + 32;

        tempOutputEl.textContent = "Temprature in kelvin and Farenheit :- " + tempInKelvin + " Kelvin, " + tempInFarenheit + " Farenheit";
        tempOutputEl.classList.add("sec-display");
        errorMsgEl.textContent = "";
    }

}

convertBtnEl.addEventListener("click", converter);