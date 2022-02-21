const sliderVal = document.querySelector(".slider");
const sliderMsg = document.querySelector(".slider-val");

sliderVal.addEventListener("input", () => {
    sliderMsg.innerHTML = `${sliderVal.value}`;
})