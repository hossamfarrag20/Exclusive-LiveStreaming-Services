// let currentSlide = 0;
// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");

// function showSlide(index) {
//     slider.style.transform = `translateX(-${index * 100}%)`;
//     dots.forEach((dot) => dot.classList.remove("active"));
//     dots[index].classList.add("active");
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         currentSlide = index;
//         showSlide(currentSlide);
//     });
// });
// showSlide(currentSlide);
// setInterval(nextSlide, 2500);





$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000
    });
});




// =====================Main======================
const hexagons = Array.from(document.querySelectorAll(".hexagon"));

document.addEventListener("DOMContentLoaded", function () {
    let started = false;

    function getFade() {
        const sortedHexagons = hexagons.sort((a, b) => {
            let numA = parseInt(a.className.match(/item(\d+)/)?.[1] || 0);
            let numB = parseInt(b.className.match(/item(\d+)/)?.[1] || 0);
            return numA - numB;
        });

        sortedHexagons.forEach((hexagon, index) => {
            setTimeout(() => {
                hexagon.classList.add("fading");
            }, index * 200);
        });
    }

    function checkHexagonGalleryVisible() {
        if (document.body.scrollHeight > window.innerHeight * 1.1 && !started) {
            started = true;
            getFade();
        }
    }

    checkHexagonGalleryVisible();
    window.addEventListener("resize", checkHexagonGalleryVisible);
});


// =====================Main Operations======================
const floatingimage = document.querySelector(".floating-image");
const theimage = document.querySelector(".floating-image img");

function showMainImage() {
    hexagons.forEach((hexagon) => {
        hexagon.addEventListener("click", (e) => {
            console.log(e.currentTarget.className);
            theimage.src = hexagon.querySelector("img").src;
            hexagon.classList.add("fading");
            floatingimage.classList.add("display-block");
            setTimeout(() => {
                floatingimage.classList.remove("display-block");
            }, 1300);
        });
    });
}

showMainImage();

// ======================counter======================
document.addEventListener("DOMContentLoaded", function () {
    const nums = document.querySelectorAll(".num");
    let started = false;

    function startCounting() {
        nums.forEach(num => {
            let target = +num.textContent;
            let count = 0;
            let speed = target / 50;

            let updateCount = setInterval(() => {
                count += Math.ceil(speed);
                if (count >= target) {
                    count = target;
                    clearInterval(updateCount);
                }
                num.textContent = count;
            }, 50);
        });
    }

    function checkFooterVisible() {
        let footer = document.querySelector("footer");
        let rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight && !started) {
            started = true;
            startCounting();
        }
    }

    window.addEventListener("scroll", checkFooterVisible);
});

