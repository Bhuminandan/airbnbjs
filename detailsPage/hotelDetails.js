// Gettings the DOM Elements
const mobileNavDiv = document.querySelector(".mobile-nav");
const accountMenuButton = document.querySelector(".menu-icon");
const placeName = document.querySelector(".place-name");
const headerRating = document.querySelector(".header-rating");
const headerNumOfReviews = document.querySelector(".num-of-reviews u")
const hotelAdress = document.querySelector(".location-country")
const imgGrid = document.querySelectorAll(".image-grid img");
const hotelName = document.querySelector(".hotel-name");
const otherInfo = document.querySelector(".other-info");
const ownerAvatar = document.getElementById("owner-avtar");
const ownersSuperBadge = document.getElementById("super-host-badge-avatar");
const mapHotelAdressEle = document.querySelector(".map-hotel-adress");

// Price Card DOM Elements
const priceCadPrice = document.querySelector(".top-row-left");
const priceCadRating = document.querySelector(".price-card-rating");
const priceCadReviewCount = document.querySelector(".price-card-review-count");
const checkInDateEle = document.querySelector(".check-in-date");
const checkOutDateEle = document.querySelector(".check-out-date");
const numOfGuestsEle = document.querySelector(".num-of-guests");


// Host Details Elements
const hostAvatarDiv = document.querySelector(".host-details-row1 #owner-avtar");
const hostSuperHostBadge = document.querySelector("#super-host-badge-avatar");
const hotedBy = document.querySelector(".text-details-host .hosted-by");
const hostReviewsCount = document.querySelector(".row2-info-reviews");
const superHostInfo = document.querySelector(".superhost-row2-info");
const superHostEle = document.querySelector(".host-details-middle");


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

let hotelDetailsObj = JSON.parse(localStorage.getItem("hotelData"));



// Util functions

// Removing element from DOM

function removeElementFromDOM(element) {
    element.remove()
}

// Appending changes to the UI

appendDetails(hotelDetailsObj);
function appendDetails(hotelDetails) {

    // Getting values dianamically
    let amenities = makeAminitiesString(hotelDetails.previewAmenities);

    placeName.textContent = hotelDetails.name;
    headerRating.textContent = hotelDetails.rating;
    headerNumOfReviews.textContent = hotelDetails.reviewsCount + " Reviews";
    hotelAdress.textContent = hotelDetails.address;
    createImgGrid(hotelDetails.images);
    hotelName.textContent = hotelDetails.name;
    otherInfo.textContent = amenities;
    ownerAvatar.src = hotelDetails.hostThumbnail;
    if (hotelDetails.isSuperhost == false) {
        removeElementFromDOM(ownersSuperBadge);
    }
    updatePriceTable(hotelDetails);
    mapHotelAdressEle.textContent = hotelDetails.address;
    updateHostDetails(hotelDetails);

}

// Update the host details

function updateHostDetails(hotelDetails) {

    hostAvatarDiv.src = `${hotelDetails.hostThumbnail}`;
    if (hotelDetails.isSuperhost == false) {
        removeElementFromDOM(hostSuperHostBadge);
        removeElementFromDOM(superHostInfo);
        removeElementFromDOM(superHostEle);
    }
    hotedBy.textContent = hotelDetails.name;
    hostReviewsCount.textContent = hotelDetails.reviewsCount + " Reviews";

}


// function to update the price table elements 

function updatePriceTable(hotelDetails) {
    const checkInData = localStorage.getItem("checkInDates");
    const checkoutData = localStorage.getItem("checkOutDates")

    const checkInDate = JSON.parse(checkInData);
    const checkOutDate = JSON.parse(checkoutData);
    const numOfGuests = localStorage.getItem("numOfGuests");

    priceCadPrice.innerHTML = `$${hotelDetails.price.rate} <span>/night</span>`
    priceCadRating.textContent = hotelDetails.rating;
    priceCadReviewCount.textContent = hotelDetails.reviewsCount + " Reviews";
    checkInDateEle.textContent = checkInDate;
    checkOutDateEle.textContent = checkOutDate;
    numOfGuestsEle.textContent = numOfGuests;
    appendChargesInPriceTable(hotelDetails);
}


// Appending changes in price table

function appendChargesInPriceTable(hotelDetails) {
    let chargesPriceTable = document.querySelector('.pricing-table');
    chargesPriceTable.innerHTML = '';
    let chargesArr = hotelDetails.price.priceItems;
    let totalCharges = 0;
    chargesArr.forEach((eachPriceObj) => {
        let singleChargeDiv = document.createElement("div");
        singleChargeDiv.classList.add("pricing-table-row")

        singleChargeInnerHtml = ` <div class="pricing-for">${eachPriceObj.title}</div>
                                  <div class="price-charged">$${eachPriceObj.amount}</div>`
        singleChargeDiv.innerHTML = singleChargeInnerHtml;
        if (eachPriceObj.amount < 0) {
            let priceChargedDiv = singleChargeDiv.querySelector(".price-charged");
            priceChargedDiv.classList.add("minus-discount");
        }
        chargesPriceTable.appendChild(singleChargeDiv);
        totalCharges += Number(eachPriceObj.amount);
    })
    let hrLine = document.createElement("div");
    hrLine.classList.add("hr-line");
    chargesPriceTable.appendChild(hrLine);
    let totalChargesDiv = document.createElement("div");
    totalChargesDiv.classList.add("pricing-table-row");
    let totalChargesDivInnerHtml = `
                                <div class="pricing-for total-price">Total</div>
                                <div class="price-charged sum-of-price">$${totalCharges}</div>`
    totalChargesDiv.innerHTML = totalChargesDivInnerHtml;
    chargesPriceTable.appendChild(totalChargesDiv);
}


// Ametires string making funciton
function makeAminitiesString(amenitiesArr) {
    let amenitiesString = '';
    for (let i = 0; i < amenitiesArr.length; i++) {
        let singleAemenity = amenitiesArr[i];
        if (i < amenitiesArr.length - 1) {
            singleAemenity += " • "
        }
        amenitiesString += singleAemenity;
    }

    return amenitiesString;
}


// Creating img grid
function createImgGrid(imageArr) {
    for (let i = 0; i < 5; i++) {
        imgGrid[i].src = imageArr[i];
        imgGrid[i].addEventListener("click", () => handleImage(imgGrid, imageArr[i], i));
    }
}




// Handling the position changing of images when clicked
function handleImage(imageEleArr, clickedImgLink, clikedImgIndex) {
    let zerothIndexLink = imageEleArr[0].src;
    imageEleArr[0].src = clickedImgLink;
    imageEleArr[clikedImgIndex].src = zerothIndexLink;
}


let latitude = hotelDetailsObj.lat;
let longitude = hotelDetailsObj.lng;
let newobj = {
    lat: latitude,
    lng: longitude
}
initMap(newobj);


setTimeout(() => {
    new google.maps.Marker({
        map,
        position: { lat: hotelDetailsObj.lat, lng: hotelDetailsObj.lng },
    });
}, 100);

// Calender js

let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (month > 11 || month < 0) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month

    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = { value: currDate.getMonth() }
let curr_year = { value: currDate.getFullYear() }

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}