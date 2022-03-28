const glImg = document.querySelector(".carusel-v2__important-img");
const imgContainer = document.querySelector(".images-list-container");
const images = document.querySelectorAll(".images-list-img-container");
const arrow = document.querySelector(".images-list__arrow");


let ProductDetailPageBySkipli = function (event) {
    if (event.type == "mouseover") {
        if (event.target.classList.contains("images-list-img")) {
            glImg.src = event.target.src;
            images.forEach((item) => {
                item.classList.remove(".images-list-img-active");
            });
            event.target.parentElement.classList.add(".images-list-img-active");
        }
    }
    if (event.type == "click") {
        let top = 60;
        if (event.target.classList.contains("images-list__arrow-top")) top = -60;
        imgContainer.scrollBy({
            top,
            behavior: 'smooth'
        })
        let left = -70;
        if (event.target.classList.contains("images-list__arrow-top")) left = 70;
        imgContainer.scrollLeft += left;
    }
};

document.addEventListener("mouseover", ProductDetailPageBySkipli);
document.addEventListener("click", ProductDetailPageBySkipli);

