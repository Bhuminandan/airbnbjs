const mobileNavDiv = document.querySelector(".mobile-nav");
const accountMenuButton = document.querySelector(".menu-icon");
const showMapBtn = document.querySelector(".showmap");
const mapContainer = document.querySelector(".right-map");
const cardsContainer = document.querySelector(".left-listings");

// Global Variables
let isMobNavOpen = false;
let isMapOpen = false;


// Mobile Nave bar functionality
accountMenuButton.addEventListener("click", () => {
    if (isMobNavOpen) {
        mobileNavDiv.style.display = "none";
        isMobNavOpen = false;
        return;
    }

    mobileNavDiv.style.display = "flex";
    isMobNavOpen = true;
});

showMapBtn.addEventListener("click", () => {
    if (isMapOpen) {
        mapContainer.style.display = "none";
        cardsContainer.style.display = "block";
        isMapOpen = false;
        return;
    }

    mapContainer.style.display = "block";
    cardsContainer.style.display = "none";
    isMapOpen = true;
});


