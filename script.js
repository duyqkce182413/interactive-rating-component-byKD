function changeNumber(input) {
    const number = document.getElementById("number-selected");
    number.innerHTML = input;
}

function changeState() {
    const ratingState = document.getElementById("rating-state");
    const thankState = document.getElementById("thank-state");

    if(ratingState.style.display == "block" && thankState.style.display == "none") {
        ratingState.style.display = "none";
        thankState.style.display = "block";
    } else {
        ratingState.style.display = "block";
        thankState.style.display = "none";
    }
}