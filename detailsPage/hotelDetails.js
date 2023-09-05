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

// let hotelDetailsObj = {
//     "id": "886403481749858930",
//     "url": "https://www.airbnb.com/rooms/886403481749858930",
//     "deeplink": "https://www.airbnb.com/rooms/886403481749858930?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
//     "position": 1,
//     "name": "Secret shared Crash Pad",
//     "bathrooms": 1,
//     "bedrooms": 0,
//     "beds": 1,
//     "city": "Nashville",
//     "images": [
//         "https://a0.muscache.com/im/pictures/7a39d613-ba4c-4fbf-9924-799333ab6909.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/41a16533-e78e-46f5-b096-f68c2fb7d69e.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/e4e6c633-8e92-4301-be66-4500cc57c9eb.jpeg?im_w=720",
//         "https://a0.muscache.com/im/pictures/9c99beca-5813-41ff-85cf-6b4d0f64e694.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/c976f60c-c973-4331-b041-6f993e8333ca.jpeg?im_w=720",
//         "https://a0.muscache.com/im/pictures/daf455e0-0f2e-485e-8814-9b9ef77eb0cc.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/3d4aeb15-5f1d-45c9-b510-f3f6bf6f5f1d.jpeg?im_w=720",
//         "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/ed57a327-ac43-4691-b00a-3bc4750f5ed7.jpeg?im_w=720",
//         "https://a0.muscache.com/im/pictures/9e8e2257-34b4-4095-887e-86da756ff873.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/63c60534-fda1-40c0-8e5d-304c3c700611.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/9bc44a45-6d5c-4c5a-b044-17ff4dc9532e.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/91a97683-3715-410e-8d0f-144a7ebe1dc8.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/33750cfd-1b43-4519-86ba-b3923383fb8c.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/aa2028cd-c55d-4703-b371-f1c578a8955f.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/fe3ab6c7-ce28-4743-a323-9538a93e1e97.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/a3e8129a-3d2f-4909-aa4c-126bb83ff73e.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/96ed9533-58b5-4fbf-abd2-e4857420d25b.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/39c21bd7-9b06-40ca-b26b-53d414ae8c4b.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/ae4e7571-879e-4d14-918c-cd7caa6a89ec.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/ffc9c229-3f60-42c9-a2a1-0621db5f9fb4.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/021e6df3-2e25-4ec8-b21f-136a01c0825e.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/dd6536e9-cf91-4668-817f-a658a69d6bd3.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/f17b17ac-2870-4595-8ef3-dc5635ac2f73.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/e6eb0d91-01bf-4ede-9e6a-ba774d15d8ee.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/8d0ef4da-8041-4186-a8b5-17e444742948.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/39d031ad-2821-4483-be9b-ef47db9ba9c6.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/4d3d76a3-cafe-4f72-b756-6f107af1f8c7.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/00cc3f4d-3dd7-4f2a-8251-c5d1910e1e08.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/dd51a9be-8f9c-4552-8e63-1cc63d7ed25a.jpg?im_w=720",
//         "https://a0.muscache.com/im/pictures/2af373c4-a0b8-4c3d-a588-ac61361b9615.jpg?im_w=720"
//     ],
//     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/50c772f6-8db8-453b-b791-9d79d43f9da1.jpg?aki_policy=profile_x_medium",
//     "isSuperhost": false,
//     "rareFind": false,
//     "lat": 36.1510541,
//     "lng": -86.79209709999999,
//     "persons": 2,
//     "reviewsCount": 21,
//     "rating": 4.9,
//     "type": "Private room in rental unit",
//     "userId": 75014080,
//     "address": "Nashville, TN, United States",
//     "amenityIds": [
//         1,
//         4,
//         5,
//         7,
//         8,
//         392,
//         9,
//         137,
//         10,
//         394,
//         522,
//         145,
//         657,
//         21,
//         23,
//         280,
//         665,
//         30,
//         415,
//         671,
//         672,
//         33,
//         34,
//         35,
//         37,
//         39,
//         40,
//         41,
//         44,
//         45,
//         46,
//         47,
//         51,
//         179,
//         308,
//         53,
//         61,
//         322,
//         77,
//         79,
//         85,
//         86,
//         89,
//         90,
//         91,
//         92,
//         93,
//         94,
//         96,
//         99,
//         611,
//         103,
//         236,
//         625,
//         626,
//         248
//     ],
//     "previewAmenities": [
//         "Free parking",
//         "Wifi",
//         "Air conditioning",
//         "Self check-in"
//     ],
//     "cancelPolicy": "CANCEL_FLEXIBLE",
//     "price": {
//         "rate": 137,
//         "currency": "USD",
//         "total": 137,
//         "priceItems": [
//             {
//                 "title": "$65 x 1 night",
//                 "amount": 65
//             },
//             {
//                 "title": "Cleaning fee",
//                 "amount": 35
//             },
//             {
//                 "title": "Airbnb service fee",
//                 "amount": 17
//             },
//             {
//                 "title": "Taxes",
//                 "amount": 20
//             }
//         ]
//     }
// }

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