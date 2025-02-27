let slideIndex = 0;

function moveSlide() {
    let slides = document.querySelector(".slides");
    slideIndex++;

    if (slideIndex > 2) {
        slideIndex = 0;
    }

    let offset = slideIndex * -100; // التحرك بنسبة 100% لكل صورة
    slides.style.transform = translateX(${offset}%);
}

// تحريك السلايد كل 3 ثوانٍ
setInterval(moveSlide, 3000);







let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides.style.transform = translateX(-${currentIndex * 100}%);
}

setInterval(moveSlide, 3000); // تغيير الصورة كل 3 ثوانٍ

document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector(".menu-toggle");
    let navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // إغلاق القائمة عند النقر على أي رابط منها
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});


    function toggleMenu() {
        let nav = document.querySelector(".nav-links");
        nav.classList.toggle("active");
    }



    function hideWelcomeScreen() {
        let welcomeScreen = document.querySelector(".welcome-screen");
        welcomeScreen.style.opacity = "0";
        setTimeout(() => {
            welcomeScreen.style.display = "none";
        }, 500);
    }

    
    function toggleMenu() {
        let navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
    }
    
