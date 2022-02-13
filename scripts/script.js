var modal = document.getElementById("modal-ex");

var btn = document.getElementById("open-modal");

var span = document.getElementById("close-modal");
var btn2 = document.getElementById("close-modal2");

btn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

btn2.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}