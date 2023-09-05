// Getting DOM Elements
const mobileNavDiv = document.querySelector(".mobile-nav");
const accountMenuButton = document.querySelector(".menu-icon");
const showMapBtn = document.querySelector(".showmap");
const mapContainer = document.querySelector(".right-map");
const cardsContainer = document.querySelector(".cards-container");
const navLocationEle = document.querySelector(".location");
const navDateEle = document.querySelector(".dates");
const numOfGuestsEle = document.querySelector(".numofguests");
const listingsNumHeading = document.querySelector(".listings-num-heading");

// Getting the data from Local storage

let searchedlocation = JSON.parse(localStorage.getItem("location"));
let checkInDate = JSON.parse(localStorage.getItem("checkInDates"));
let checkoutDate = JSON.parse(localStorage.getItem("checkOutDates"));
let numOfGuests = JSON.parse(localStorage.getItem("numOfGuests"));

let obj;

// Util Functions

// Redirect user to home page

function redirectUserToHomePage() {
    window.location.href = "../index.html";
}

// Updating the navbar
function updateNavbar() {
    if (searchedlocation == '') {
        redirectUserToHomePage();
    }
    if (checkInDate == '') {
        let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let currMonth = monthArr[new Date().getMonth()];
        let currDate = new Date().getDate();
        checkInDate = currMonth + " " + currDate;
        checkoutDate = currDate + 2;
        if (checkoutDate > 30) {
            checkInDate = 1;
        }
        localStorage.setItem("checkInDates", JSON.stringify(new Date().toLocaleDateString()).trim());
        localStorage.setItem("checkOutDates", JSON.stringify(new Date().toLocaleDateString()).trim());
    } else {
        localStorage.setItem("checkInDates", JSON.stringify(checkInDate.trim()));
        localStorage.setItem("checkOutDates", JSON.stringify(checkoutDate.trim()));
    }
    if (numOfGuests == '') {
        numOfGuests = 1;
    }

    localStorage.setItem("numOfGuests", JSON.stringify(numOfGuests));
    navLocationEle.textContent = searchedlocation;
    navDateEle.textContent = checkInDate + "-" + checkoutDate
    numOfGuestsEle.textContent = numOfGuests + " " + "Guests";
    fetchData(searchedlocation);
}
updateNavbar();

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




// Map Show Hide Functionality for smaller devices
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



// Data fetcher function
async function fetchData(searchInput) {
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${searchInput}&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fdeaaee48amsh97c5aaeb968d51bp1fcba9jsn44ebe7fd3b2a',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        updateUi(result);
        obj = result;
    } catch (error) {
        alert("Something went wrong, Redirecting you to home page");
        console.error(error);
        redirectUserToHomePage();
    }
}


function createListingCard(hotelData) {

    let amenitiesArr = hotelData.previewAmenities;

    const listingCard = document.createElement("div");
    listingCard.classList.add("single-card");
    listingCard.innerHTML = `
                        <div class="single-card-left">
                        <img src="${hotelData.images[0]}" alt="hotel img" />
                    </div>
                    <div class="single-card-right">
                        <div class="text-left">
                        <div class="left-top">
                            <div class="type-of-place">${hotelData.type}</div>
                            <div class="name-of-place">${hotelData.name}</div>
                        </div>
                        <div class="sm-hr-line"></div>
                        <div class="left-middle">
                            <div class="place-info">
                            
                            </div>
                        </div>
                        <div class="sm-hr-line"></div>
                        <div class="left-bottom">
                            <div class="star-ratings">${hotelData.rating ? hotelData.rating : "0"}</div>
                            <div class="star">
                            <img src="../assets/icons/star.svg" alt="star icon" />
                            </div>
                            <div class="num-of-reviews">(${hotelData.reviewsCount} reviews)</div>
                        </div>
                        </div>
                        <div class="text-right">
                        <div class="right-top">
                            <img src="../assets/icons/heart.svg" alt="heart icon" />
                        </div>
                        <div class="right-bottom">
                            ${hotelData.price.rate} <span class="night-text">/night</span>
                        </div>
                        </div>
                    </div>
                            `;

    let placeInfo = listingCard.querySelector(".place-info");
    amenitiesArr.forEach((singleAnemmiti) => {
        let span = document.createElement("span");
        span.classList.add("more-info");
        span.textContent = singleAnemmiti + " · ";
        placeInfo.appendChild(span);
    });

    listingCard.addEventListener("click", function () {
        let hotelDataStringObj = JSON.stringify(hotelData);
        localStorage.setItem("hotelData", hotelDataStringObj);
        window.location.href = "../detailsPage/hotelDetails.html";
    });


    setTimeout(() => {
        new google.maps.Marker({
            map,
            position: { lat: hotelData.lat, lng: hotelData.lng },
        });
    }, 100);

    return listingCard;
}

// Ui Updation function 
let numOfCards = 0;
let bottomReachedMessageCount = 0;
let mapCreatedCount = 0;

function updateUi(resultObj) {
    let hotelsArr = resultObj.results;
    listingsNumHeading.textContent = hotelsArr.length + "+" + " stays in " + searchedlocation;

    if (mapCreatedCount <= 0) {
        (function (resultObj) {
            let latitude = resultObj.results[0].lat;
            let longitude = resultObj.results[0].lng;
            let newobj = {
                lat: latitude,
                lng: longitude
            }
            initMap(newobj);
        })(resultObj);
        mapCreatedCount++;
    }



    if (numOfCards < hotelsArr.length - 1) {
        let currentNumOfCards = numOfCards;
        for (let i = numOfCards; i < currentNumOfCards + 5; i++) {
            if (numOfCards == hotelsArr.length) {
                break;
            }
            let eachHotelData = hotelsArr[i];
            let card = createListingCard(eachHotelData);
            cardsContainer.appendChild(card);
            numOfCards++;
        }
    } else {
        if (bottomReachedMessageCount > 0) {
            return;
        }
        let endMessage = document.createElement("div");
        endMessage.innerHTML = ` <p style="text-align: center; color: #374151;">You've Reached End! Happy findings</p>`
        cardsContainer.appendChild(endMessage);
        bottomReachedMessageCount++;
    }

}

// Checking if the user is reached to bottom for pagination
document.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (window.scrollY >= scrollableHeight) {
        updateUi(obj);
    }
});
