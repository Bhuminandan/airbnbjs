//Getting DOM Elements
const mobileNavDiv = document.querySelector(".mobile-nav");
const accountMenuButton = document.querySelector(".menu-icon");
const iamFlexibleBtn = document.getElementById("iamflexible");
const locationSeachInput = document.querySelector("#location");
const searchBtn = document.querySelector(".search-btn");
const checkInInput = document.getElementById("checkin");
const checkOutInput = document.getElementById("checkout");
const GuestsNumInput = document.getElementById("guests");
const inspirationCardsArr = document.querySelectorAll(".single-card");

// Util functions ------------------------


// User redirecting function

function redirectUserToListings() {
    window.location.href = "./listings/listings.html";
}

// ----------------------------------------------


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
    localStorage.setItem("location", "London");
    redirectUserToListings();
})


// Search btn functionality

searchBtn.addEventListener("click", () => {
    setLocalStorageValues(locationSeachInput.value, checkInInput.value, checkOutInput.value, GuestsNumInput.value);
})




// Setting the data in the Local Storage

function setLocalStorageValues(location, checkIn, checkOut, Guests) {

    if (location == '') {
        alert('Location required');
        return;
    }

    localStorage.setItem("location", location);
    localStorage.setItem("checkInDates", checkIn);
    localStorage.setItem("checkOutDates", checkOut);
    localStorage.setItem("numOfGuests", Guests);
    redirectUserToListings();
}


// Inspirational Cards Functionality

inspirationCardsArr.forEach((singleCard) => {
    singleCard.addEventListener('click', function () {
        let cardTitle = this.querySelector(".card-title");
        localStorage.setItem("location", cardTitle.innerText);
        redirectUserToListings();
    })
})