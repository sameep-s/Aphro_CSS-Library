const allStars = document.querySelectorAll('.rating-star');

allStars.forEach((star, i) => {
    star.onclick = () => {
        let curPosition = i;

        allStars.forEach((star, j) => {

            if (j <= curPosition) {
                star.style.fontWeight = "900";
                star.style.color = "yellow";
            } else {
                star.style.fontWeight = "  100";
                star.style.color = "grey";
            }
        })
    }
})


