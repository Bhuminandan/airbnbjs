const mobileNavDiv = document.querySelector(".mobile-nav");
const accountMenuButton = document.querySelector(".menu-icon");
const iamFlexibleBtn = document.getElementById("iamflexible");

// Mobile Nave bar functionality
let isMobNavOpen = false;
accountMenuButton.addEventListener("click", () => {
    if (isMobNavOpen) {
        mobileNavDiv.style.display = "none";
        isMobNavOpen = false;
        return;
    }

    mobileNavDiv.style.display = "flex";
    isMobNavOpen = true;

})


// iamflexible button 

iamFlexibleBtn.addEventListener("click", () => {
    window.location.href = "./listings/listings.html";
})
