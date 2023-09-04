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



let userLocation;




let arrayOfHotelLatLng = [];

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


function updateNavbar() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }
}


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

    } catch (error) {
        alert("Something went wrong, Redirecting you to home page");
        console.error(error);
        redirectUserToHomePage();
    }
}

let obj = {
    "error": false,
    "headers": {
        "response_time": 1107,
        "response_timestamp": "2023-09-02T06:31:25.110Z",
        "response_id": 25677724
    },
    "results": [
        {
            "id": "886403481749858930",
            "url": "https://www.airbnb.com/rooms/886403481749858930",
            "deeplink": "https://www.airbnb.com/rooms/886403481749858930?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 1,
            "name": "Secret shared Crash Pad",
            "bathrooms": 1,
            "bedrooms": 0,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/7a39d613-ba4c-4fbf-9924-799333ab6909.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/41a16533-e78e-46f5-b096-f68c2fb7d69e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/e4e6c633-8e92-4301-be66-4500cc57c9eb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/9c99beca-5813-41ff-85cf-6b4d0f64e694.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/c976f60c-c973-4331-b041-6f993e8333ca.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/daf455e0-0f2e-485e-8814-9b9ef77eb0cc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/3d4aeb15-5f1d-45c9-b510-f3f6bf6f5f1d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-886403481749858930/original/ed57a327-ac43-4691-b00a-3bc4750f5ed7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/9e8e2257-34b4-4095-887e-86da756ff873.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/63c60534-fda1-40c0-8e5d-304c3c700611.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9bc44a45-6d5c-4c5a-b044-17ff4dc9532e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/91a97683-3715-410e-8d0f-144a7ebe1dc8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/33750cfd-1b43-4519-86ba-b3923383fb8c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/aa2028cd-c55d-4703-b371-f1c578a8955f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fe3ab6c7-ce28-4743-a323-9538a93e1e97.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a3e8129a-3d2f-4909-aa4c-126bb83ff73e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/96ed9533-58b5-4fbf-abd2-e4857420d25b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/39c21bd7-9b06-40ca-b26b-53d414ae8c4b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ae4e7571-879e-4d14-918c-cd7caa6a89ec.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ffc9c229-3f60-42c9-a2a1-0621db5f9fb4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/021e6df3-2e25-4ec8-b21f-136a01c0825e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dd6536e9-cf91-4668-817f-a658a69d6bd3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f17b17ac-2870-4595-8ef3-dc5635ac2f73.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e6eb0d91-01bf-4ede-9e6a-ba774d15d8ee.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8d0ef4da-8041-4186-a8b5-17e444742948.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/39d031ad-2821-4483-be9b-ef47db9ba9c6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4d3d76a3-cafe-4f72-b756-6f107af1f8c7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/00cc3f4d-3dd7-4f2a-8251-c5d1910e1e08.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dd51a9be-8f9c-4552-8e63-1cc63d7ed25a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2af373c4-a0b8-4c3d-a588-ac61361b9615.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/50c772f6-8db8-453b-b791-9d79d43f9da1.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.1510541,
            "lng": -86.79209709999999,
            "persons": 2,
            "reviewsCount": 21,
            "rating": 4.9,
            "type": "Private room in rental unit",
            "userId": 75014080,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                7,
                8,
                392,
                9,
                137,
                10,
                394,
                522,
                145,
                657,
                21,
                23,
                280,
                665,
                30,
                415,
                671,
                672,
                33,
                34,
                35,
                37,
                39,
                40,
                41,
                44,
                45,
                46,
                47,
                51,
                179,
                308,
                53,
                61,
                322,
                77,
                79,
                85,
                86,
                89,
                90,
                91,
                92,
                93,
                94,
                96,
                99,
                611,
                103,
                236,
                625,
                626,
                248
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 137,
                "currency": "USD",
                "total": 137,
                "priceItems": [
                    {
                        "title": "$65 x 1 night",
                        "amount": 65
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 35
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 17
                    },
                    {
                        "title": "Taxes",
                        "amount": 20
                    }
                ]
            }
        },
        {
            "id": "40323169",
            "url": "https://www.airbnb.com/rooms/40323169",
            "deeplink": "https://www.airbnb.com/rooms/40323169?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 2,
            "name": "Historic Music Row (E Minor)",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/de6d2f7f-a68b-4a7a-8e25-b92029be0e88.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/e029a406-6d80-41e7-9d32-29862892d823.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/5faf1557-5f8e-4edf-b456-c7b61a72218f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/4f3b3c60-a4b0-4888-931d-b82a4d02e00f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/d1be0235-c0e3-404a-b376-25d446ea52b9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/34bf1135-42a9-4c7b-85b3-8818476b1f3b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/16de03d4-6329-4d7f-b379-ecbb5e5ca7f0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4afc67ec-537c-42b7-81fe-5e55cecc1acc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1d320788-4157-460a-a327-ef078584fcba.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/56f67ad0-86b9-47d9-a8b8-79d228520538.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/a4a20c65-bbb7-4873-b270-c4d83079894b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/ba137cc8-38d8-4a08-a331-6f216ab3c1d5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/eafa11d0-5d2d-4444-9c9b-361f70275acd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/5ea3a6e6-3802-4d61-979c-991ba5d058b5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/e2c0beda-b222-4ff9-8065-c022eb0170b5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/da2077b7-30af-45dc-b4b7-c7df450735e5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-40323169/original/7dfa5fa6-f7b3-47fe-9ffe-3ed29a8b7ac8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/2af76400-4a86-418c-8654-309f9ae1ae90.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0359410f-9b68-43d4-904a-b20ea4c416e9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/78d6e0a0-d37c-49d8-ace4-66eed5ea2d69.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c438c89e-06ae-428b-9ac6-f1e78b04c5ed.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ff2b04ab-c943-4210-a13a-dadb1d00f5ef.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9f0aaf1c-f408-4c34-ab98-664a25bc6a4f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3e09b5b0-f67c-42e7-b239-9e44d5784567.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7962696e-be92-4337-a633-c61dbd879694.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b1b5532c-dccb-40df-a989-d99de939cbe3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/894d4026-c90d-4ef3-a376-149a6e4363fc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ba39ef98-b675-441e-8b2d-b0d270cc1f6b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/385feefc-1945-4ce4-a05b-ba5fcacd31b4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1d6bda97-0f87-464c-b181-51dc80961b8a.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-58013734/original/439e23bc-6919-42e6-8100-fe266af40792.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.14527,
            "lng": -86.7914,
            "persons": 2,
            "reviewsCount": 55,
            "rating": 5,
            "type": "Private room in home",
            "userId": 58013734,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                139,
                77,
                85,
                86,
                93,
                30,
                94,
                35,
                36,
                37,
                39,
                103,
                40,
                42,
                44,
                45,
                46,
                47,
                51,
                53
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 172,
                "currency": "USD",
                "total": 172,
                "priceItems": [
                    {
                        "title": "$106 x 1 night",
                        "amount": 106
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 20
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 21
                    },
                    {
                        "title": "Taxes",
                        "amount": 25
                    }
                ]
            }
        },
        {
            "id": "395889",
            "url": "https://www.airbnb.com/rooms/395889",
            "deeplink": "https://www.airbnb.com/rooms/395889?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 3,
            "name": "Contemporary-Mod Paradise w/ Private Bathroom",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/dbf1f191-1901-4fa6-9b93-268a1bfb205c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/061edd55-5668-4154-919d-ed5904dc7efc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/7673f9a7-03aa-495a-87b5-00330bf4a15e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/d14d315a-7399-42c8-a6f4-dab6fff3598a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/c9fd6273-c28f-4dad-abca-02755da30fcf.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/6a68380a-9049-4d3e-a18e-25675b06272f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/141c6898-3444-45d8-a18a-cf8c181e5848.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/315c610e-279c-4a20-b8b1-7de4daed39da.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/673d2c28-2aa0-4d8f-b90e-03836ae776bb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/4ac60a5c-67c1-4bde-a353-cc8cb22d45c9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/097b9d89-e9ff-4f66-afe8-5aed0a4b3269.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/2b59da6b-9c2a-45f2-ba58-dd9dad4db3e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/85a46801-f122-40dd-97db-d34ace664b41.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/928d89d5-f3dd-4fbc-9f3f-4612e8aba794.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/46d7bb44-19bc-4319-a373-d97f817e2c27.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/53ecf46e-dcbe-4baf-8774-5043e6bf6dfc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/f9eb5a2c-03ff-4fdc-8413-73a472ad891a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/125b3c0e-365f-4059-a313-262b566a3097.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-395889/original/2c5147d3-8228-4072-976e-fc4acd0dd53a.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5ad1bc40-9628-43c5-98ea-c8a7ad362cb4.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.16499,
            "lng": -86.75054,
            "persons": 2,
            "reviewsCount": 317,
            "rating": 4.86,
            "type": "Private room in home",
            "userId": 1547584,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                131,
                4,
                5,
                8,
                9,
                11,
                77,
                23,
                89,
                91,
                92,
                93,
                30,
                94,
                95,
                96,
                33,
                34,
                35,
                39,
                103,
                40,
                104,
                41,
                42,
                44,
                45,
                46,
                47,
                49,
                50
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 136,
                "currency": "USD",
                "total": 136,
                "priceItems": [
                    {
                        "title": "$99 x 1 night",
                        "amount": 99
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 17
                    },
                    {
                        "title": "Taxes",
                        "amount": 20
                    }
                ]
            }
        },
        {
            "id": "39562406",
            "url": "https://www.airbnb.com/rooms/39562406",
            "deeplink": "https://www.airbnb.com/rooms/39562406?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 4,
            "name": "The Guest Suite at Highpoint Farm",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/af015364-e9c0-4bf6-9d0b-77f77be015a7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a0ac45e3-64da-4eb0-b872-d11852384b64.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4dc30b97-e673-4dc0-8ab0-a237aa530bbc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2a3125b1-51b1-446c-b94d-ef3195eb6447.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b3bcdfe4-3ebb-45a7-9ba5-d92e93eb006b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ce09c8ab-096a-4f29-8642-08e8c082f585.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9a8c6d9b-6643-4322-82bc-c56c0783f3eb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0d97c4d5-c122-4ed2-b489-ac3bb9d83b80.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/04ac0f0c-2db5-49c0-8e91-de73d5472f2d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/87f89241-d3df-4e7c-a3ae-877a3104538a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fa80dcba-89d1-45be-941a-cfb839f909e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/61d07c1c-1f31-4bad-97ce-55471a6133c8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f6746403-3735-48cb-84a2-8133e3cf16e0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/33037ed5-6b47-47f1-a35b-5f89cad4f4ca.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0e1fc7de-61f6-4dfb-b2a6-cbc2c909841d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e58a28b1-8988-4569-941b-bbcd6f27041f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d9aa5912-1cce-4ae2-bfa9-91309212f28b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4fb54234-fdfe-40e6-9de5-ecbc910b1ea6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/575ff6c4-cb62-49df-bd72-2e7db02aa89b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/28b745e3-1fee-46c7-b3f8-9574b618eb28.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f8c5fed4-edd4-4e7f-b03a-42698a0bd316.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/94f29d0d-fba9-4fb4-92ae-ef333fccde0a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f1144391-385f-4a04-b84d-7559d9676f6a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7a73da41-f4c8-4f32-ba61-5d9b58b3d540.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6b925a98-5819-41f1-b461-4ebf418db36b.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/12b0759e-f452-4f89-83db-cecacc27fc5f.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": true,
            "lat": 36.26781,
            "lng": -86.88325,
            "persons": 2,
            "reviewsCount": 621,
            "rating": 4.93,
            "type": "Entire guest suite",
            "userId": 36011881,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                2,
                66,
                4,
                5,
                9,
                394,
                522,
                77,
                146,
                89,
                90,
                93,
                30,
                35,
                611,
                36,
                37,
                101,
                39,
                40,
                41,
                45,
                46,
                47,
                51,
                54,
                57,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 181,
                "currency": "USD",
                "total": 181,
                "priceItems": [
                    {
                        "title": "$125 x 1 night",
                        "amount": 125
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 8
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 22
                    },
                    {
                        "title": "Taxes",
                        "amount": 26
                    }
                ]
            }
        },
        {
            "id": "33453266",
            "url": "https://www.airbnb.com/rooms/33453266",
            "deeplink": "https://www.airbnb.com/rooms/33453266?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 5,
            "name": "Country Suite w/private entrance. NO Shared spaces",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/f3d60759-d37b-4f2c-a18b-b5544ae47056.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/46399a49-d638-45b6-a838-b8e2b3e37fdf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7732a87f-4a21-4764-bfd1-34f54cddbb16.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/646afc0e-18d3-4e8a-8c73-5f4cfe7b8089.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d748ab17-b1a2-4be0-b82b-9eb23d71c4a9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2b0b8812-03c2-44f0-9141-59c461edc77f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d6d06f7f-f71a-419d-a5ab-0f559b2914a8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b1a0f5a7-f309-4fb9-86b2-dc50608c9070.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/87def8ed-9652-4336-b066-9b9e88eb0865.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1bcc6efd-7984-40d6-9385-e4d0024bc801.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4b2c2001-970f-4297-bdd5-a2713dc6c017.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f0e93a12-a440-4516-81da-cab543952fc5.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/867fd40f-cb03-4e05-b235-78c06f0665c6.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.31658,
            "lng": -86.87883,
            "persons": 2,
            "reviewsCount": 341,
            "rating": 4.96,
            "type": "Private room in home",
            "userId": 191735572,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                2,
                4,
                5,
                9,
                139,
                77,
                79,
                657,
                146,
                85,
                86,
                23,
                663,
                89,
                665,
                90,
                27,
                476,
                30,
                671,
                672,
                35,
                36,
                100,
                101,
                40,
                104,
                41,
                42,
                44,
                45,
                46,
                51,
                308,
                53,
                57
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 116,
                "currency": "USD",
                "total": 116,
                "priceItems": [
                    {
                        "title": "$75 x 1 night",
                        "amount": 75
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 10
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 14
                    },
                    {
                        "title": "Taxes",
                        "amount": 17
                    }
                ]
            }
        },
        {
            "id": "53146443",
            "url": "https://www.airbnb.com/rooms/53146443",
            "deeplink": "https://www.airbnb.com/rooms/53146443?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 6,
            "name": "One Bedroom Apartment | Placemakr | Music Row",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 2,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/7a97ee15-ffdf-4bb7-a2e2-adda4aaf3f0f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/17221352-9d81-41fd-b7e2-0d6298771648.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/50d5c1cf-8987-43d0-9a4f-a1e7f75edb8c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/4c4167f4-a9c4-4d62-bb83-80d475b3aa1d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/e866cc05-1ed1-4e18-84f3-1ee718a9a5e9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/f4ae167b-173e-441b-8950-d998f283ec1a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/31a24039-1315-4cd8-b337-e10a8b5c5078.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/b481a2a5-cc2b-495b-aafd-1b8aab25ddf9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1b728549-cd03-4904-8ba0-907937c2872c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/671d9f77-af4a-4f0b-9c8b-0933c5ef4c4a.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/2808c533-fc00-4589-b128-55062ee26477.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/2576b809-c4eb-4850-b890-d51979470d0a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/5ed56b6f-a8d0-4b14-8d0e-d4920cd1705c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/b1d63ea0-7cac-4dff-b491-0813129d9ec8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/fb96a830-9818-4e78-a7a2-c2a0967f8b90.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53146443/original/1b05029d-b3d9-4836-ba83-40521b120902.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/6fe5a24d-4799-4694-ba4f-fd05bbe2778e.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": true,
            "lat": 36.153236,
            "lng": -86.792923,
            "persons": 2,
            "reviewsCount": 143,
            "rating": 4.67,
            "type": "Room in aparthotel",
            "userId": 426925233,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                7,
                8,
                12,
                15,
                657,
                21,
                280,
                665,
                30,
                287,
                415,
                671,
                672,
                33,
                34,
                35,
                36,
                37,
                39,
                40,
                41,
                42,
                44,
                45,
                46,
                47,
                51,
                179,
                308,
                55,
                184,
                57,
                71,
                73,
                77,
                79,
                85,
                86,
                89,
                90,
                91,
                219,
                92,
                476,
                93,
                95,
                96,
                99,
                227,
                611,
                103,
                104,
                236,
                251
            ],
            "previewAmenities": [
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 356,
                "currency": "USD",
                "total": 356,
                "priceItems": [
                    {
                        "title": "$265 x 1 night",
                        "amount": 265
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 39
                    },
                    {
                        "title": "Taxes",
                        "amount": 52
                    }
                ]
            }
        },
        {
            "id": "597089963313499707",
            "url": "https://www.airbnb.com/rooms/597089963313499707",
            "deeplink": "https://www.airbnb.com/rooms/597089963313499707?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 7,
            "name": "Modern & Roomy | Near Downtown",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/73f01d53-443f-4a64-9ac6-741f491879f0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/0fb5b328-ec2b-43e5-96f6-20ed5073d887.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/8432cff8-532a-4749-a9ae-673b2a94abe1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/941abe31-8bbc-4e5a-a389-6e40df3a8e6b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/1f57e6e9-bf0c-4205-97cb-647c4feb6b37.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/c93337fa-98fd-41d3-9169-52fbdafde895.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/ace2d735-0f9f-48f8-b103-026aee289653.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/c4f0de51-5d83-4c13-a24b-c3ff1b0590a2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/aa533cca-67ed-471f-8a79-6da060de34e2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/80c527d3-9ac1-4c8d-8720-0c1b927409f9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/2c138247-34d2-461a-aac2-34802928dbc2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/e5449d43-ec0c-41db-9d71-19cf39903925.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/b45b444c-593d-4c9e-9bcc-f6523f524ea8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/46385a26-64eb-4f68-8932-40269321d2b7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/1bffdfb3-d646-4eba-abc4-5f64b43f6a90.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/5fc74384-199b-49ea-abc2-ed814fa9b4e0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/dc61e2e5-2881-4a41-b5f0-22fb032e47ce.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/24219bc0-0e6e-4b4d-b278-1ca199682a3e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/f233dec9-a41d-4a37-a389-78713251bad9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/9b4bc019-0374-47d5-84ba-bea122bbb306.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/998f1793-e978-4ae9-b8d7-beb9e57ba998.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/35772f90-ce7c-4b76-a870-d9101cf59617.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/16e6f271-bad8-4b74-a591-6555f22eeb27.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-597089963313499707/original/7bc5786c-88aa-4078-ad4d-cedb035ec88a.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/b327e125-07d0-4ea4-b710-071fe18e7d34.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.17295,
            "lng": -86.80752,
            "persons": 2,
            "reviewsCount": 74,
            "rating": 4.77,
            "type": "Private room in home",
            "userId": 193757773,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                137,
                139,
                23,
                665,
                30,
                415,
                671,
                33,
                34,
                35,
                36,
                37,
                40,
                41,
                42,
                44,
                45,
                46,
                47,
                51,
                308,
                53,
                57,
                61,
                322,
                73,
                75,
                77,
                79,
                85,
                86,
                89,
                90,
                91,
                92,
                476,
                93,
                94,
                95,
                96,
                611,
                100,
                101,
                236,
                251,
                510
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 177,
                "currency": "USD",
                "total": 177,
                "priceItems": [
                    {
                        "title": "$85 x 1 night",
                        "amount": 85
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 45
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 22
                    },
                    {
                        "title": "Taxes",
                        "amount": 25
                    }
                ]
            }
        },
        {
            "id": "45465547",
            "url": "https://www.airbnb.com/rooms/45465547",
            "deeplink": "https://www.airbnb.com/rooms/45465547?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 8,
            "name": "Comfy Studio Getaway in the Heart of Nashville",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/1d5ad64b-ea7b-4f7e-acb5-062aa1bd87df.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-45465547/original/50190542-5d6a-4697-8662-2090c6fa2aeb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-45465547/original/fb5ab288-4c57-4c8b-bad8-5d5f2e5e051b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-45465547/original/a449df1c-f689-4c86-8d0c-0ba798c26f89.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-45465547/original/43e26e9b-908a-4a5a-84aa-616eb23788bd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/070beb1b-5d90-4ae6-ac36-373806355d1a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ebd60291-c7ef-4bf4-a2f5-de84aa7de17a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-45465547/original/d55b6f65-ed03-43a1-9242-6426185aad6f.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7ae9c134-1cf5-4758-8aa6-43d7ecea9137.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.12657,
            "lng": -86.77863,
            "persons": 2,
            "reviewsCount": 81,
            "rating": 4.83,
            "type": "Entire rental unit",
            "userId": 367836686,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                7,
                8,
                9,
                522,
                77,
                85,
                86,
                23,
                663,
                89,
                665,
                90,
                91,
                476,
                93,
                30,
                94,
                95,
                415,
                671,
                96,
                672,
                33,
                34,
                35,
                39,
                40,
                104,
                44,
                45,
                46,
                47,
                625,
                51,
                308,
                53,
                57,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 191,
                "currency": "USD",
                "total": 191,
                "priceItems": [
                    {
                        "title": "$100 x 1 night",
                        "amount": 100
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 40
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 24
                    },
                    {
                        "title": "Taxes",
                        "amount": 27
                    }
                ]
            }
        },
        {
            "id": "928643583316656096",
            "url": "https://www.airbnb.com/rooms/928643583316656096",
            "deeplink": "https://www.airbnb.com/rooms/928643583316656096?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 9,
            "name": "King Room at  Downtown Convention Center",
            "bathrooms": 1,
            "bedrooms": 0,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/bd0c8696-e663-46e7-be84-e2955bd13eca.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/b23df688-bd32-494f-974a-1b6a359c0e5f.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/f5033c62-5617-4399-abdf-0be3d282eba0.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/173ab81e-e4b0-42ef-997f-f608050eb309.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/02d8a183-d798-42d7-9cc3-52fc1103c2c1.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/1bdf53f4-1d3e-40ae-83f9-a996eb8a218b.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/6b0bd853-1860-40ea-8c88-4b9d5c296366.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/830dbe89-1a43-4dc1-b2cb-599c5886fd13.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/d77ab67a-b8da-460a-94bd-6bb12f6a6210.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/8130dbf3-0a8f-42df-ae59-fd6b2097fae0.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/f94c0169-3fd8-494d-90f8-534bb8377d12.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/a487bd83-aa5b-41d3-8133-16f51c798f9f.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/e47879e2-9ce7-469c-80d7-c9ad0e839722.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/2267d6b8-5b25-4cee-88fc-1961731c56a7.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/6c55b25e-876f-4389-af14-3c8ec669c9f3.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/ace16217-250f-4275-9bd6-8c60b5ba1742.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/490118e5-86fd-4397-bd56-251c3ae9f615.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/eaaa6fe7-78e5-4247-9cb4-4b6d7ca74785.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/7c1af12d-af73-44cd-81e6-4ec34a399671.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/88e20fc7-d237-4fd8-b203-85024b66972c.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/b5133a1b-77ae-453f-bb8d-4cf92c999daa.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/3e563d6d-ceb5-4ee6-93ed-fa2c0c37a118.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/c98ff575-ae26-41d7-ad59-2225443cb8bd.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-928643583316656096/original/cb2bfd2a-fc7e-4979-a584-3d5e44e289b2.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/c4447496-bb0f-4054-978f-9ee5ace3573a.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.15683847619277,
            "lng": -86.77686512939624,
            "persons": 2,
            "reviewsCount": 23,
            "rating": 4.87,
            "type": "Entire rental unit",
            "userId": 513301100,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                129,
                2,
                3,
                4,
                5,
                7,
                8,
                10,
                15,
                79,
                16,
                21,
                85,
                89,
                90,
                91,
                92,
                93,
                30,
                96,
                35,
                36,
                37,
                40,
                41,
                42,
                44,
                45,
                46,
                308,
                56,
                57
            ],
            "previewAmenities": [
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 391,
                "currency": "USD",
                "total": 391,
                "priceItems": [
                    {
                        "title": "$289 x 1 night",
                        "amount": 289
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 49
                    },
                    {
                        "title": "Taxes",
                        "amount": 53
                    }
                ]
            }
        },
        {
            "id": "20432958",
            "url": "https://www.airbnb.com/rooms/20432958",
            "deeplink": "https://www.airbnb.com/rooms/20432958?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 10,
            "name": "Pet-friendly, Private Entry Direct Backyard Access",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 2,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/226c9bd2-07d3-4d19-90b1-225ba77cc3ac.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/21f00d65-2d62-4c7c-80c9-1d226a00b170.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0bc598dc-b050-43d5-8ff0-c56c72540ded.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/71750489-78e5-4c5a-8b52-7611cd6329c1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/03181df0-6d3b-47a1-832e-1a54e1440d5d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2de4bfb0-1048-4dc7-8898-561d2bea817a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/62d8f528-3032-4c61-8477-ecfa9d0f6c96.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4711c7f0-4e97-4c14-9e11-533983a53299.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b3f147e0-dfc0-449b-b2cc-e7cf603be3e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9abb75a4-0f89-4f0e-b745-22b34f17aa4d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ea580c1c-28b5-4331-b94e-34510357ac1d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/70bf8dc4-876d-43ac-ae2d-3e7e0c7f9afe.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/276ae24d-9bf1-4873-8035-4e98abf4e5c8.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.21142991094671,
            "lng": -86.75218026502718,
            "persons": 2,
            "reviewsCount": 416,
            "rating": 4.86,
            "type": "Private room in home",
            "userId": 80912307,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                72,
                9,
                73,
                12,
                77,
                17,
                145,
                18,
                146,
                85,
                86,
                280,
                89,
                90,
                91,
                219,
                93,
                30,
                415,
                672,
                33,
                34,
                35,
                36,
                100,
                37,
                101,
                39,
                40,
                104,
                41,
                42,
                45,
                46,
                51,
                179,
                53,
                57,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 169,
                "currency": "USD",
                "total": 169,
                "priceItems": [
                    {
                        "title": "$109 x 1 night",
                        "amount": 109
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 15
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 21
                    },
                    {
                        "title": "Taxes",
                        "amount": 24
                    }
                ]
            }
        },
        {
            "id": "679338764125073901",
            "url": "https://www.airbnb.com/rooms/679338764125073901",
            "deeplink": "https://www.airbnb.com/rooms/679338764125073901?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 11,
            "name": "Cozy, cute for leisure or biz",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-679338764125073901/original/47bc63fa-c729-4066-ad52-a1bfca118829.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679338764125073901/original/af25bd87-0c55-4b5e-91aa-16db6ce44b1d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679338764125073901/original/3ad28eb3-4eb3-4341-b346-49c99ae4a61d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679338764125073901/original/1dc901dc-0905-427f-8ca4-8331586541de.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679338764125073901/original/3d5d0c10-521e-4744-b8e2-f86f6dbc99a2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-679338764125073901/original/ae4e3c18-e469-4d82-a314-e02af7cacd14.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/7bbdafc8-caf9-4743-a3f5-916ed415330b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ea6adf06-c36d-4acd-a254-53de393c297c.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/2ad54569-daed-458a-a66a-6c3e9d09d9b1.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.04699384123598,
            "lng": -86.70852767461173,
            "persons": 2,
            "reviewsCount": 5,
            "rating": 5,
            "type": "Private room in rental unit",
            "userId": 70058605,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                4,
                5,
                9,
                73,
                137,
                522,
                139,
                77,
                79,
                145,
                657,
                85,
                86,
                23,
                663,
                89,
                665,
                90,
                91,
                476,
                30,
                415,
                671,
                98,
                35,
                611,
                100,
                37,
                101,
                40,
                41,
                44,
                45,
                51,
                53,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 97,
                "currency": "USD",
                "total": 97,
                "priceItems": [
                    {
                        "title": "$70 x 1 night",
                        "amount": 70
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 12
                    },
                    {
                        "title": "Taxes",
                        "amount": 15
                    }
                ]
            }
        },
        {
            "id": "970247017013866887",
            "url": "https://www.airbnb.com/rooms/970247017013866887",
            "deeplink": "https://www.airbnb.com/rooms/970247017013866887?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 12,
            "name": "Music City room near downtown.",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-966544174424357900/original/d6553d14-d360-4e72-adc3-49112c4d392d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966544174424357900/original/8d83d2a0-7986-4fc4-8f04-626ffe2c497c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966544174424357900/original/0e9747ac-8a0c-4b31-b5d9-3022daa578ba.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966544174424357900/original/7c6a42c9-adb6-491f-9530-8458018a5b7a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966544174424357900/original/92bf373c-d61c-46af-abc9-b0086f58eb71.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966544174424357900/original/c6d33215-ad63-47c8-aca9-85b272d08501.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966544174424357900/original/b9433358-fb36-46a4-b955-bacc8d10f956.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/349f2682-636c-4100-a34b-3be507d8c75f.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.13609,
            "lng": -86.72412,
            "persons": 2,
            "reviewsCount": 0,
            "type": "Room in hotel",
            "userId": 443377359,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                33,
                35,
                99,
                227,
                4,
                5,
                37,
                7,
                39,
                8,
                9,
                521,
                12,
                47,
                51,
                55,
                219,
                510
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 146,
                "currency": "USD",
                "total": 146,
                "priceItems": [
                    {
                        "title": "$113 x 1 night",
                        "amount": 113
                    },
                    {
                        "title": "Special offer",
                        "amount": 23
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 25
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 19
                    },
                    {
                        "title": "Taxes",
                        "amount": 12
                    }
                ]
            }
        },
        {
            "id": "638649193479324086",
            "url": "https://www.airbnb.com/rooms/638649193479324086",
            "deeplink": "https://www.airbnb.com/rooms/638649193479324086?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 13,
            "name": "Amazing 1-Bedroom Hotel Room with Local Pub onsite",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/bbc76617-34a6-443f-b3af-50f84ac5ef4f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638649193479324086/original/e67bdfa4-0bd4-4706-9dcb-e43d5d03c849.png?im_w=720",
                "https://a0.muscache.com/im/pictures/1de09bfd-0298-4224-b74f-7ddd03f499a6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f7d8b4d9-bdec-46d6-a5bd-3bec67c52fec.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5b9837d3-5919-4afd-adee-9c7f6ebfbf4d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6df126be-eb73-44d7-a1fb-94a01f02396c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0381f519-1121-4d25-aa05-8c08d7c51908.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f90b14a1-9816-4959-938c-786d427cbce5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1a7e242c-c8a9-4378-9973-14a36f12c78e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d15f098d-f027-414c-b019-66162dc6c8a0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bb43fe79-43cb-4b97-9d46-7903fd1f154b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6253f09b-9dbc-4310-a5f4-00de19ec07bf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6e684c07-2f0e-4811-85d4-1aaa1a516edf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5db1b8bf-65ac-44b8-b828-f93e16ddbb4f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/127a23e5-915c-4b6a-9472-e30a492da4f1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3550d3d0-2768-4122-b149-50ff3b6838b1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638649193479324086/original/637e4bd8-d3b1-4763-908a-edd3cc019f2a.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638649193479324086/original/8788835c-9130-4a93-9662-3f36e81e16ae.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/3a1a55e5-b3d4-4768-8bc8-28cd850e9ca3.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.13595,
            "lng": -86.72377,
            "persons": 2,
            "reviewsCount": 57,
            "rating": 4.33,
            "type": "Room in hotel",
            "userId": 380927421,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                7,
                71,
                9,
                521,
                12,
                77,
                15,
                79,
                80,
                81,
                83,
                85,
                219,
                30,
                32,
                33,
                34,
                35,
                227,
                293,
                40,
                41,
                42,
                44,
                45,
                46,
                47,
                51,
                55,
                57
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 145,
                "currency": "USD",
                "total": 145,
                "priceItems": [
                    {
                        "title": "$99 x 1 night",
                        "amount": 99
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 15
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 19
                    },
                    {
                        "title": "Taxes",
                        "amount": 12
                    }
                ]
            }
        },
        {
            "id": "780530270717584922",
            "url": "https://www.airbnb.com/rooms/780530270717584922",
            "deeplink": "https://www.airbnb.com/rooms/780530270717584922?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 14,
            "name": "Sonder The Verse | Studio Apartment",
            "bathrooms": 1,
            "bedrooms": 0,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/8300a522-08e1-48a0-9a57-3fa1ef587253.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/331712e4-142e-4eab-a07f-c68c3a449867.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/5078711b-2429-47b6-85f7-25432738dc93.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/4e810890-064b-4649-b72c-5c7d540302a8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/73f06d62-481a-4986-999d-094a19c97701.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/160e6733-289c-43b9-a3bd-4b5e9d853d8f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/32e2e0ec-6731-41e0-b69b-5a9af0db1014.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/12386899-bf0a-4b56-bc85-5dfdabc4f7c6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/8acb6af5-aa43-4814-b49b-e474e5e28dab.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/afead319-80d9-44cf-ade2-f26f332e2289.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/06e230c5-e514-46d3-b3e4-25b0ed50bd5b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/8aa4ae59-4006-4fa8-b7b2-de785d747a4b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/54c28d4d-5d65-4c00-b63f-e67abff8d816.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-780530270717584922/original/4ea35868-22f2-4d8d-95f3-82044f69d13e.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/4787c8ef-86dc-4347-ba6f-4a61abb74015.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": true,
            "lat": 36.17215,
            "lng": -86.79189,
            "persons": 2,
            "reviewsCount": 172,
            "rating": 4.27,
            "type": "Entire rental unit",
            "userId": 224851351,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                77,
                85,
                23,
                89,
                90,
                91,
                92,
                93,
                30,
                94,
                287,
                96,
                33,
                34,
                35,
                100,
                101,
                39,
                40,
                104,
                41,
                44,
                45,
                46,
                51,
                53,
                56
            ],
            "previewAmenities": [
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 331,
                "currency": "USD",
                "total": 331,
                "priceItems": [
                    {
                        "title": "$285 x 1 night",
                        "amount": 285
                    },
                    {
                        "title": "Taxes",
                        "amount": 46
                    }
                ]
            }
        },
        {
            "id": "27611390",
            "url": "https://www.airbnb.com/rooms/27611390",
            "deeplink": "https://www.airbnb.com/rooms/27611390?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 15,
            "name": "The Music City Suite, private entry and suite!",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/c6059024-97fe-4e8b-93be-f2213b09d4cc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/89231f9c-903f-4830-983d-49d9310d9d0c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0f13dc91-b81c-4e7d-a9e6-3b2d04b75c7b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9ebb5cbe-c8a1-48df-ba47-d710aabb3436.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/805cdc3c-020a-4522-ac05-0eca4c014fc8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7d8beb12-71f4-4294-9426-56635c0f172f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3fa0dd28-71ed-4b44-8481-42fb44bd89b4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/44e7bb3e-edb5-4f4f-aeca-6a3c4aab728e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2d08eeed-1655-4e2c-a84d-df830d483625.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/87f0f8f2-46c0-4a56-bed7-cb59aa816cbd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7b99c0c0-28ea-44f7-8a53-f13ecf798a44.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/62ca32ad-4b52-4062-a86c-9a5b85298d5c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3365b898-01b9-4111-8103-4e63e1f79181.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c6e6aba4-8104-4c1b-91a5-d1cf6175a8a5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c120bd82-6aab-4c7e-a35c-bdeec01dc121.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ab667bcf-6dc4-4024-b768-39153cb7882a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/518ca8a6-1835-4afd-8219-1778a5165ea0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ef8c640f-c66a-413a-940e-8950fea30395.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5592044f-ace9-447d-919c-912f77dc0378.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8c1aeee0-ad41-4ba0-a476-064459552343.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fd863fab-44a8-4ac0-a68d-aa7cade7b700.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-82349956/original/021eeb2e-a7b9-4359-836c-895f21dca6ff.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.16631,
            "lng": -86.67803,
            "persons": 2,
            "reviewsCount": 224,
            "rating": 4.98,
            "type": "Private room in home",
            "userId": 82349956,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                9,
                77,
                90,
                91,
                30,
                98,
                35,
                36,
                100,
                37,
                38,
                39,
                40,
                104,
                41,
                42,
                44,
                45,
                46,
                51,
                627,
                52,
                57
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 268,
                "currency": "USD",
                "total": 268,
                "priceItems": [
                    {
                        "title": "$149 x 1 night",
                        "amount": 149
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 49
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 33
                    },
                    {
                        "title": "Taxes",
                        "amount": 37
                    }
                ]
            }
        },
        {
            "id": "778993175114252157",
            "url": "https://www.airbnb.com/rooms/778993175114252157",
            "deeplink": "https://www.airbnb.com/rooms/778993175114252157?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 16,
            "name": "2 rooms with private bathroom.",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/39a161c7-2fba-429c-8b3a-b481b043ec5b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7be2836f-7805-4cb3-9b4e-6837bbd76925.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7e3094ac-23f8-44dd-bf90-1079bd3a498f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/26596670-303c-4539-a457-d57d0f253838.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e317b461-c0e6-453e-92a9-089dfabffdd7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6fee6970-46e7-4616-a880-77e3a388fac6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/21d869e1-bf75-4aea-b05e-192d05f66080.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1fb54d24-ed2a-4174-9f69-84ff8311b590.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/1ef3fd76-6ce4-4d6b-84a2-8657d5355678.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.11811,
            "lng": -86.71151,
            "persons": 2,
            "reviewsCount": 31,
            "rating": 4.84,
            "type": "Private room in rental unit",
            "userId": 45242129,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                9,
                522,
                139,
                77,
                79,
                657,
                146,
                85,
                663,
                89,
                665,
                90,
                93,
                30,
                94,
                415,
                35,
                227,
                611,
                36,
                101,
                39,
                103,
                40,
                104,
                41,
                42,
                236,
                45,
                46,
                51,
                53,
                56,
                251
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 146,
                "currency": "USD",
                "total": 146,
                "priceItems": [
                    {
                        "title": "$57 x 1 night",
                        "amount": 57
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 50
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 18
                    },
                    {
                        "title": "Taxes",
                        "amount": 21
                    }
                ]
            }
        },
        {
            "id": "27136966",
            "url": "https://www.airbnb.com/rooms/27136966",
            "deeplink": "https://www.airbnb.com/rooms/27136966?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 17,
            "name": "Downtown Private Guest Loft with Cool Vintage Vibe-Sanitized",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/8c89c8ad-3fa0-4799-a2a8-f355e1b51269.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6085acb5-e2b8-4cf4-b253-6acc6c8264c8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5543abe1-7a15-4f0a-9520-c37667196dea.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dd57e433-33ac-4d34-aacc-43da32c6de0e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/98529983-b710-4781-aa7c-6f24d57f57b8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/15ee211f-80a2-49ec-8846-2ef22aec94c3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/96fd0ee1-36f7-4267-987c-adf4b3b67276.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/743ad885-d1b9-4947-82eb-e1b5561acbd1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3a9e8e23-d35c-4f29-bed3-fff69cadbcc3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/309f4d09-bab6-4ca5-9a21-d2282a8bd5c3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ddc04e21-6439-4a47-b6fc-7d3d428da42a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9fc2088c-b983-4d37-adfb-6a1e081bccfa.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0368de2f-6f9e-4eec-9ad4-b837a34f647c.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/bae9d132-ceb3-4ed2-ac0d-d87f639e7552.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.17557,
            "lng": -86.79755,
            "persons": 4,
            "reviewsCount": 443,
            "rating": 4.96,
            "type": "Entire guesthouse",
            "userId": 32592159,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                137,
                265,
                266,
                139,
                23,
                151,
                283,
                285,
                30,
                35,
                36,
                292,
                37,
                293,
                38,
                39,
                40,
                41,
                42,
                44,
                45,
                46,
                51,
                53,
                57,
                185,
                77,
                79,
                81,
                83,
                85,
                86,
                89,
                90,
                91,
                93,
                94,
                95,
                96,
                103,
                104,
                234,
                117,
                118,
                127
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 296,
                "currency": "USD",
                "total": 296,
                "priceItems": [
                    {
                        "title": "$169 x 1 night",
                        "amount": 169
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 49
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 37
                    },
                    {
                        "title": "Taxes",
                        "amount": 41
                    }
                ]
            }
        },
        {
            "id": "968305562572541089",
            "url": "https://www.airbnb.com/rooms/968305562572541089",
            "deeplink": "https://www.airbnb.com/rooms/968305562572541089?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 18,
            "name": "Classic Queen: Nashville Vibes, No Cleaning Fee",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/1d17f6ef-3f9f-48a4-8940-d4a29a0d709e.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/066f4436-e27c-48fb-b46b-8269da5b864d.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/ed5b2b2e-477d-4fc8-8a08-3d377e6689ca.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/15329e02-e7bb-43f1-b10e-64e33d47f6c1.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/f90e4867-5e98-4a74-af58-c49dd7e7ccf4.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/c4f4419c-bcd8-4d50-b968-a18c7d0a4499.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/9e0ea3fa-fb52-40dd-a22a-a6eb5a1d0289.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/d47effe1-fc6b-4943-8061-e8dc8c361aeb.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/dfe2790c-47ef-4fad-b109-ff4a6f5ef809.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/b841fd0f-53f8-4fbb-b4bb-72bbf028e13d.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/6ca3c1da-2112-4e8e-a4e2-c2066b8ab971.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/1c6beae2-50a1-4402-b247-660811960bcd.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/f67ab4e6-7ce1-469d-b14b-a0524dcfc74a.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/f2a3f024-7f97-45ab-b26f-eace018732d1.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/6809bcf9-b685-4bf2-b920-7c1ee8408814.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/a44c0054-4ede-4d83-968f-60253e568d55.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/da05cfcc-5a24-48e7-868b-06f58439c02e.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/5b82ac3b-6525-4212-a52d-7f5be2d3f216.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/b66ae45a-c077-4f5b-9902-f23e0fa1fb31.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/26b9a972-2ee9-4632-8e2d-c87a637aee1d.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/584059fc-a1d8-4a36-82e7-73e221867fe0.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/8586319a-edb3-4aa3-a358-215a3388fdd6.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/5d439b17-68ca-443a-8992-970f2cd09739.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/eaaa5b33-2ffe-4da1-b608-ca15a5294595.png?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-968305562572541089/original/c1d152d4-faa2-4c6a-b582-83f5dd5286d2.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/abe01e9d-9946-4c8d-880c-3879cb78b99a.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.18898841395471,
            "lng": -86.79889852424083,
            "persons": 2,
            "reviewsCount": 0,
            "type": "Entire rental unit",
            "userId": 500939566,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                129,
                3,
                4,
                5,
                7,
                9,
                57,
                42,
                90,
                15,
                47
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 218,
                "currency": "USD",
                "total": 218,
                "priceItems": [
                    {
                        "title": "$160 x 1 night",
                        "amount": 160
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 27
                    },
                    {
                        "title": "Taxes",
                        "amount": 31
                    }
                ]
            }
        },
        {
            "id": "40802395",
            "url": "https://www.airbnb.com/rooms/40802395",
            "deeplink": "https://www.airbnb.com/rooms/40802395?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 19,
            "name": "Luxurious Suite w/ King  Bed + Massage Chair!",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 2,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/626b4202-c796-4767-a08d-0feb8c904c8e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/96fa11a2-0fc5-40b3-9464-3c4b3d42948b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0b78cf22-2491-496a-aca8-085e0a73ee55.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2bccf318-21e4-4778-af7d-0d0cad2019d7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c62e1cff-9c7f-4a1d-9a1c-4afd0bde768b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c0cbb4a1-bc98-41d3-aa36-29fe92c8017b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/08fd25de-db7c-42ad-bf4f-a07ed50c1414.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9c0d6d9b-68a6-410e-9c94-dfc0448340ce.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/82bdaf0c-ac93-42cc-8c96-b6e826949a5b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7926ea5e-0cbe-4203-811e-af8df3bab15d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bee4ca0b-4645-4389-a3f0-f8ea972bafab.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/acee8f23-4d7a-46b2-8312-e8cbcfb6fb6d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/10f299b3-30d5-4995-8afc-1e2e41d98168.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bae1d36f-ed36-4f9c-93dd-c8559d52a6df.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1f0ddd6d-56d6-41d6-8c8c-37ecd765bb78.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/20c6cf19-4cae-4644-a606-2f8f7f80aaba.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4af97f68-5ed7-46dd-8ed3-90a7590c9b88.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/783ddda4-938f-41ea-9a5a-31deeb8a8adf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4f66e2e8-d8c2-4c5c-bc20-efd267e2c977.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4bbd4ac3-01a3-438c-b702-01c8daca1bd7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d1f50ed5-b773-46f8-9850-735f1f2c3545.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b9f3f5f8-0d8c-4a28-a390-913352def96e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c9dd76b6-ccdd-4710-bfd6-751fbc7acc3f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/367e14f1-c9a2-4d11-b336-afa70a75826c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5ae3e42e-1b72-4151-9c27-d6957da0b37e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ab70fc0d-0687-4bc7-9910-d0173d88d1f9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c4f58a73-aa0a-4357-b0b6-62c31e7ac1ca.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4e01cd8f-974c-444b-be99-5342b35d6a68.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ae5df1a3-58a5-42f8-ab56-feb4ada12d3b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e3587e49-5966-4304-b526-53e86d58b40f.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a695e122-e442-4ed6-8cf1-201ff2a2a90d.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.20163,
            "lng": -86.62887,
            "persons": 4,
            "reviewsCount": 236,
            "rating": 4.98,
            "type": "Entire guest suite",
            "userId": 166457472,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                2,
                4,
                5,
                392,
                9,
                521,
                394,
                657,
                280,
                153,
                665,
                30,
                415,
                672,
                33,
                34,
                35,
                37,
                39,
                40,
                41,
                44,
                45,
                46,
                51,
                179,
                52,
                308,
                57,
                315,
                60,
                62,
                66,
                322,
                71,
                72,
                73,
                74,
                77,
                85,
                86,
                89,
                90,
                91,
                219,
                476,
                93,
                98,
                611,
                100,
                101,
                236,
                251
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 224,
                "currency": "USD",
                "total": 224,
                "priceItems": [
                    {
                        "title": "$95 x 1 night",
                        "amount": 95
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 60
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 26
                    },
                    {
                        "title": "Taxes",
                        "amount": 43
                    }
                ]
            }
        },
        {
            "id": "36240209",
            "url": "https://www.airbnb.com/rooms/36240209",
            "deeplink": "https://www.airbnb.com/rooms/36240209?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 20,
            "name": "Simply Suite (Cozy Apartment)>8mi to downtown",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36240209/original/7d2b5487-2fa3-46b9-b170-6052041ffd72.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/a34e61de-e5ca-491e-80ec-661b17f35f5d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/756dfc70-f80a-406b-abfa-c047ae590262.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36240209/original/e6e3736d-63b2-4f20-bff3-0a8867bf953f.png?im_w=720",
                "https://a0.muscache.com/im/pictures/5c610a6e-de2c-41da-a114-27d6e6e5e37c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36240209/original/adfbf8fa-1d9e-44c2-b4ed-99d6b92274ca.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/c6dc7379-ffd5-4a21-8da6-df686e55a653.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36240209/original/2e715202-e52c-42a5-a068-dbf0e97fbbf8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/876d81b9-ac56-43e8-9496-da5162a443a1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cb3fb88b-886d-44e6-9c1b-fad584fab7b8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/01c8eef4-799b-40dd-acbd-d39078a34256.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36240209/original/a648ab14-9bbd-4e34-a4fc-80fb84a138dc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/491d0d0b-a2df-4eaf-bc70-a59afe46c2e9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1504a6d5-f2fe-4359-985b-6e7e4c2794e2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/455fbb9c-9ce2-461b-b149-561d6c9561a1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0b4ca397-7a05-47ba-951e-cbdff1313a71.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a566b2fb-8f32-453f-ab15-e2e6d9f4537b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7f44f50c-aa9d-48a1-8929-7601370a0639.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d62d4efb-b8d8-41cd-b90e-e389f7ea40c2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6a15fc12-5525-4356-b2e6-2d29451c4bc5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/eb1c33ff-07ca-4e21-9bc3-1b91d2684b9b.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/af99fb28-310e-498a-b419-b3f5b9a0b97b.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": true,
            "lat": 36.26802,
            "lng": -86.76188,
            "persons": 2,
            "reviewsCount": 228,
            "rating": 4.99,
            "type": "Entire guest suite",
            "userId": 47585304,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                137,
                522,
                77,
                79,
                145,
                657,
                146,
                85,
                86,
                663,
                280,
                89,
                665,
                90,
                91,
                476,
                93,
                30,
                94,
                415,
                671,
                35,
                611,
                36,
                37,
                101,
                39,
                40,
                104,
                41,
                42,
                44,
                236,
                45,
                46,
                47,
                51,
                54,
                56,
                57,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 236,
                "currency": "USD",
                "total": 236,
                "priceItems": [
                    {
                        "title": "$109 x 1 night",
                        "amount": 109
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 65
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 29
                    },
                    {
                        "title": "Taxes",
                        "amount": 33
                    }
                ]
            }
        },
        {
            "id": "959427365078965002",
            "url": "https://www.airbnb.com/rooms/959427365078965002",
            "deeplink": "https://www.airbnb.com/rooms/959427365078965002?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 21,
            "name": "Cute 1BR 10 Mins From Nashville",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/8ef695b2-fd98-4181-89ef-935207d04baa.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/a3ef6a23-aa75-4ae1-85e9-262b44aed958.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/320ca34c-e8cd-4059-af93-758f209714ce.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/54991f13-0e36-40d8-b935-bfbff0b34735.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/55cc427d-d184-48e8-9ccd-e8e55a2e3c16.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/f67bdc2a-b196-4b26-b8f1-855120ae27ff.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/063c7b00-6f1c-4bc4-802b-db253291db27.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/dba288db-ec63-4beb-b836-d2cb22259ae5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/a5261574-637e-4bff-a9bd-b98f90352411.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/04f7e7b7-b997-43b9-906d-e7ad0dbc0ff3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/d8304a8a-a452-485b-bffd-c83020af4750.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/c2d2d4d6-7d8c-46b5-951f-e24c0c0cd71e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/5439ad63-eda2-4db2-b09d-22108c9fb5f0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/044f18b1-6cf1-4cb5-b1ae-523f9bf15792.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/66490944-6d7f-4808-a83f-320c57f7e213.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/3ee99b24-09cf-4dc9-8f1d-2d37521bc89b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/0bfe2efc-8008-40d9-bd00-7607f8635d14.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/28953885-e716-476e-b7e9-b4f8582c2c41.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/ea9b00c3-4ab7-403f-9cb0-4883176267b0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/15247398-baf1-4755-a274-26094299f498.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-959427365078965002/original/210c450d-93be-4f49-a708-988355e1cccc.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/893918db-11c9-4aa8-9d4b-e51f0c6ac9e4.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.19534766604361,
            "lng": -86.83300936097567,
            "persons": 2,
            "reviewsCount": 0,
            "type": "Room in hotel",
            "userId": 532195323,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                35,
                227,
                4,
                36,
                5,
                9,
                12,
                30
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 164,
                "currency": "USD",
                "total": 164,
                "priceItems": [
                    {
                        "title": "$106 x 1 night",
                        "amount": 106
                    },
                    {
                        "title": "Special offer",
                        "amount": 21
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 65
                    },
                    {
                        "title": "Taxes",
                        "amount": 14
                    }
                ]
            }
        },
        {
            "id": "19606463",
            "url": "https://www.airbnb.com/rooms/19606463",
            "deeplink": "https://www.airbnb.com/rooms/19606463?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 22,
            "name": "Historic Music Row (G Major)",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 2,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/aaec4b5c-91f3-4bfa-905b-780ddbeb04d9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/d0d70341-b691-44e4-8c23-e2973acd9bda.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/9a6bc400-ed24-495b-af45-dec6643903df.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/c03c1004-9dc8-4cbf-bb7e-5bf7ad4c4dbc.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/feafe3d8-62a4-4033-8a4c-ababdf196be0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/3beceec4-4e3d-4891-a394-4cd70d8dfe1f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/889068c9-2a7f-499e-b8c4-dbc66c48fd23.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/52cabc58-b2b6-424c-b024-3e699a818aee.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/24ef742a-3c47-48d7-9d41-67fb345b0b9b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/21b3b892-2e51-4feb-b62c-3dd4722ea97e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/ea2c670f-c637-4ab1-af7b-e55bf118fc90.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/61a2c1b6-056e-460e-90cf-ad8aaa192e0d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/f9a97bf1-19a6-4701-9140-dcf0f1fed6f7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/90e4e6a2-8092-4f62-94a3-d5e817503c12.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/c120f26c-7411-4e0b-94fb-b9a1cc021d1f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/653209f8-fab8-49f6-9767-0197a8c94e22.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/1fc915ce-b122-4e25-9cd6-14c739c90a28.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/2dbe9513-6d79-43ec-8a57-56d244ac2c9f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/5f287a5f-01fb-4344-9697-9b0abf1d6d2f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/30994e7c-8ba0-4e29-ba24-44cd2ec9743b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/4b5aa63f-ad0c-4cb4-b5e0-da3b396343d5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/a6bc6d88-4d0b-42dc-ae79-5b1e82d78507.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/f06e4f09-9cf1-4df9-9329-e0ba8924146e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/69f38ae7-ee1c-4190-aaf2-b8dde887141a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/500e6cee-dd93-49d0-b012-9555bac168ab.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/5d15261f-db61-4052-9c0b-aad4363262f8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/136d8787-330e-472b-8d74-cca817855bd0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/297e72f3-6288-4834-80a1-cd30372d6069.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/e9d6d9e5-9302-4b7d-b486-69f723aa8391.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-19606463/original/8c5d3985-af2d-4c9e-a01e-20bdb9493517.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-58013734/original/439e23bc-6919-42e6-8100-fe266af40792.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.1455,
            "lng": -86.79086,
            "persons": 2,
            "reviewsCount": 225,
            "rating": 4.94,
            "type": "Private room in home",
            "userId": 58013734,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                131,
                4,
                5,
                8,
                9,
                77,
                85,
                86,
                89,
                90,
                91,
                93,
                30,
                35,
                611,
                36,
                100,
                37,
                101,
                38,
                39,
                103,
                40,
                41,
                42,
                44,
                45,
                46,
                47,
                56
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 213,
                "currency": "USD",
                "total": 213,
                "priceItems": [
                    {
                        "title": "$137 x 1 night",
                        "amount": 137
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 20
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 26
                    },
                    {
                        "title": "Taxes",
                        "amount": 30
                    }
                ]
            }
        },
        {
            "id": "966553075826882323",
            "url": "https://www.airbnb.com/rooms/966553075826882323",
            "deeplink": "https://www.airbnb.com/rooms/966553075826882323?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 23,
            "name": "Cozy room near Broadway.",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-966553075826882323/original/4b2820c4-b57b-4486-9089-4fde5a1106ec.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966553075826882323/original/045bb48f-f97c-4d8f-824a-563fef9e44e8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966553075826882323/original/e438597f-0dce-4222-945e-c10632613ed9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966553075826882323/original/c603967b-2b69-4692-a7e7-5121bc5abaf3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966553075826882323/original/bf279f29-078f-4ea9-8428-1c4000e85e8a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966553075826882323/original/5ff5a2e1-0eed-4bc4-8379-aa4961686f2b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-966553075826882323/original/202f332c-c1bb-4946-bcdf-88efb61fa804.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/349f2682-636c-4100-a34b-3be507d8c75f.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.13632,
            "lng": -86.72342200000001,
            "persons": 2,
            "reviewsCount": 0,
            "type": "Room in hotel",
            "userId": 443377359,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                33,
                35,
                99,
                227,
                4,
                5,
                37,
                7,
                39,
                8,
                9,
                521,
                12,
                47,
                51,
                55,
                219,
                510
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 146,
                "currency": "USD",
                "total": 146,
                "priceItems": [
                    {
                        "title": "$113 x 1 night",
                        "amount": 113
                    },
                    {
                        "title": "Special offer",
                        "amount": 23
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 25
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 19
                    },
                    {
                        "title": "Taxes",
                        "amount": 12
                    }
                ]
            }
        },
        {
            "id": "671264317804310628",
            "url": "https://www.airbnb.com/rooms/671264317804310628",
            "deeplink": "https://www.airbnb.com/rooms/671264317804310628?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 24,
            "name": "**Nashville Living w/Irish Pub**",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/3e64e99b-68f7-485e-9c50-e13b1961c6aa.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/1c133719-eaba-4f8d-8e6f-0e8bdb8af252.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/572c9c00-b0da-4fab-8eb9-72680b048601.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/85fa1bbf-af16-4216-a326-63e92eb5562c.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/123d42cd-f555-4be6-87df-8026a0c962fc.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/ed274de7-6d61-49d8-aa24-9c61f07dc4ac.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/8d3e8a6f-d3ce-42a9-b02a-b03dde3e87b4.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/9eab1dae-1152-4760-861e-45bb2b4975ff.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/2c6de0d7-ebb5-4d21-bf60-9540f746b826.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-638658079571294060/original/4a78b58e-a383-4c47-bfb6-d8e53069f852.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/3a1a55e5-b3d4-4768-8bc8-28cd850e9ca3.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.13555,
            "lng": -86.72458,
            "persons": 2,
            "reviewsCount": 22,
            "rating": 4.36,
            "type": "Room in boutique hotel",
            "userId": 380927421,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                7,
                71,
                9,
                73,
                521,
                12,
                77,
                15,
                79,
                657,
                85,
                219,
                30,
                671,
                32,
                33,
                34,
                35,
                227,
                103,
                40,
                104,
                41,
                42,
                44,
                45,
                46,
                51,
                55,
                57
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 158,
                "currency": "USD",
                "total": 158,
                "priceItems": [
                    {
                        "title": "$109 x 1 night",
                        "amount": 109
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 15
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 21
                    },
                    {
                        "title": "Taxes",
                        "amount": 13
                    }
                ]
            }
        },
        {
            "id": "29003171",
            "url": "https://www.airbnb.com/rooms/29003171",
            "deeplink": "https://www.airbnb.com/rooms/29003171?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 25,
            "name": "★ Bright & Cozy Bedroom | Near Downtown ★",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/8ae68e18-e7f0-4dd7-ab7d-5ad48f04a671.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6f6eb869-18e3-4c80-82a8-861f29cc3d70.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c45c3752-b74c-42c6-9aec-09ccc21f1c5a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/55274148-62fb-4557-8362-48d32b635721.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e57fb903-c79e-447b-a217-a6b647f514af.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/26f2f4ca-130b-4564-b877-9f528b80b0f2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a1e6e0f5-1e54-4e04-b191-673c4b75ae06.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6f9239c3-fe20-4f16-bedf-56e60def0062.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bc36dee4-6877-478b-9eca-4363370f45ad.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/22a06d67-c054-43c1-af42-0a158c87d900.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5c63913d-f176-47f3-852c-fa3f98dc5f40.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/72c64a35-5bfb-428c-92ea-9b25330dbaa9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b3564193-b622-47f0-9443-013fff3c64c8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9712f58c-2152-45ad-a43c-1b59d1843474.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/37068406-9516-46f8-828c-29c78a7b9c92.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/07133a21-36dd-47b5-be3f-74a7ba9e3930.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c59bf0d1-9e50-437d-b0d0-72116416ef2c.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/b327e125-07d0-4ea4-b710-071fe18e7d34.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.1724,
            "lng": -86.80898,
            "persons": 2,
            "reviewsCount": 146,
            "rating": 4.74,
            "type": "Private room in home",
            "userId": 193757773,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                73,
                77,
                85,
                86,
                23,
                89,
                90,
                91,
                92,
                93,
                30,
                94,
                95,
                96,
                33,
                34,
                98,
                35,
                36,
                100,
                101,
                39,
                40,
                104,
                41,
                42,
                44,
                45,
                46,
                47,
                51,
                53,
                57
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 177,
                "currency": "USD",
                "total": 177,
                "priceItems": [
                    {
                        "title": "$85 x 1 night",
                        "amount": 85
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 45
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 22
                    },
                    {
                        "title": "Taxes",
                        "amount": 25
                    }
                ]
            }
        },
        {
            "id": "35573520",
            "url": "https://www.airbnb.com/rooms/35573520",
            "deeplink": "https://www.airbnb.com/rooms/35573520?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 26,
            "name": "Charming East Nashville Studio w/ Private Patio",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/35a8f526-7cba-4708-8a31-841916064b4e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e1c29a70-639d-482a-9b88-fc17ca4f02d1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/53ab82a8-155d-49e0-9152-0e6fc211ab4a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b152a822-178f-4b96-9810-6de77588b600.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/da5fce99-d44d-4b5a-9e07-735825b930ae.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6d13d266-0ddc-4fea-90ec-6f6e674cc46a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0aa7b8ce-8aa8-4e31-8937-a6ecae9271af.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5977220b-b3b8-49b9-8747-536f5043a441.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/88385101-e763-45d4-9aaf-8a5fb48c5f2c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c52feb99-4af1-4c64-9423-0919af97b34f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0ef30556-5140-4ea7-b1a8-62ea525b7df8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ce6b4cdf-c3bf-4b2f-b61b-716c722b0abb.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/f8c4aa36-b5cd-479f-ba82-41f4b28e3fc6.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.18181,
            "lng": -86.71732,
            "persons": 2,
            "reviewsCount": 413,
            "rating": 4.94,
            "type": "Private room in home",
            "userId": 43526389,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                2,
                4,
                5,
                9,
                137,
                522,
                77,
                79,
                657,
                146,
                85,
                280,
                90,
                30,
                415,
                35,
                611,
                36,
                100,
                37,
                39,
                40,
                232,
                41,
                42,
                44,
                45,
                51,
                53,
                57
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
            "price": {
                "rate": 237,
                "currency": "USD",
                "total": 237,
                "priceItems": [
                    {
                        "title": "$150 x 1 night",
                        "amount": 150
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 25
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 29
                    },
                    {
                        "title": "Taxes",
                        "amount": 33
                    }
                ]
            }
        },
        {
            "id": "44098182",
            "url": "https://www.airbnb.com/rooms/44098182",
            "deeplink": "https://www.airbnb.com/rooms/44098182?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 27,
            "name": "Spacious Studio Apt - Walk to Vanderbilt",
            "bathrooms": 1,
            "bedrooms": 0,
            "beds": 2,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/5780c9e4-3b0f-4914-a73b-8f953b7804f9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b572d2c3-e762-447e-9646-fcf2c3b381d1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dbff6f80-6d4e-4780-bbcb-d338faebac4f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c6b0949d-756e-40d2-aaaf-aa749d9ca8c0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f9390e4e-e248-4576-b967-8698f19812b0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/be17ebc9-6088-4d18-9aed-6447742b09bc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b5206d88-d817-450b-86f2-7549a4a27337.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f61c886d-6314-48ae-995d-c62a4818084c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7ddc44a4-8c05-4f42-be10-aabb089061a8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a4de645d-23d0-4478-abe0-5e5de6a325cd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/435403b4-e221-4bf2-ba43-26bbce79c045.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a2d616b8-8ad4-4977-8085-dee865e740e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/65fa7dab-d8ed-427f-8ddf-a7ce59310db0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a997a438-abb8-4109-8dff-eda95ed42b66.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c55e8e55-4346-4cd3-8baa-f575ff60e975.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/eb160dcb-1f2e-44e4-b071-6face1bb5af0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6176ecb6-c2bb-4b7d-bbe4-3b9152a362d4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/45fba2e4-ad8d-4084-95a6-0d9aebc32b55.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c8f34df5-87f5-42cd-a796-5331dd6413b8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a300b2cd-01b4-4983-af17-d760fad4e42d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2a15b18a-9e16-4635-9032-5e513e6ce466.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9735dc00-1aed-48d1-9799-27fc95734265.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/176bb063-97f7-4c67-8750-3d564b16dca1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b6b15abb-fd3e-4429-842b-35f6f03327fc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c501a352-e73e-4922-ae14-9106d9a6ded9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0fee3980-7e42-4dce-9824-3dd51309876a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/792ea228-eb94-4cda-afe9-2aa09f5d3306.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f156b172-1f99-455b-b325-47cf41dea96a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-44098182/original/825bf431-848a-4ec2-804d-a083d399ad1a.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/50958f4b-c057-4086-9683-9c0234d01afa.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.13701,
            "lng": -86.80006,
            "persons": 2,
            "reviewsCount": 35,
            "rating": 4.6,
            "type": "Entire serviced apartment",
            "userId": 349191206,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                77,
                21,
                85,
                86,
                89,
                90,
                91,
                92,
                93,
                30,
                94,
                95,
                96,
                33,
                34,
                35,
                611,
                36,
                37,
                40,
                104,
                41,
                44,
                45,
                109,
                46,
                51,
                52
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 267,
                "currency": "USD",
                "total": 267,
                "priceItems": [
                    {
                        "title": "$244 x 1 night",
                        "amount": 244
                    },
                    {
                        "title": "Taxes",
                        "amount": 23
                    }
                ]
            }
        },
        {
            "id": "940835652799683270",
            "url": "https://www.airbnb.com/rooms/940835652799683270",
            "deeplink": "https://www.airbnb.com/rooms/940835652799683270?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 28,
            "name": "Shops and restaurants and everything else you need",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/hosting/Hosting-940835652799683270/original/c0397fc0-0101-4df8-a11a-a512b662bd58.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-940835652799683270/original/b7f4f5f2-cc93-4c49-9a5a-ed2859efc59c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-940835652799683270/original/530cb439-236d-4471-af48-940ceb1c2911.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-940835652799683270/original/c830372c-b692-4f97-a371-2c3fcaa18219.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-940835652799683270/original/a8c1dd7b-a94f-427c-9c71-0a22eb71e8d7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-940835652799683270/original/64cf3bf2-4c4b-4a07-b6bb-7cd0a15bfc2a.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/2ad54569-daed-458a-a66a-6c3e9d09d9b1.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.04894,
            "lng": -86.70894,
            "persons": 2,
            "reviewsCount": 3,
            "rating": 5,
            "type": "Private room in home",
            "userId": 70058605,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                9,
                73,
                137,
                77,
                79,
                657,
                85,
                89,
                665,
                90,
                91,
                476,
                30,
                415,
                35,
                611,
                40,
                41,
                44,
                45,
                51,
                308,
                53,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 97,
                "currency": "USD",
                "total": 97,
                "priceItems": [
                    {
                        "title": "$70 x 1 night",
                        "amount": 70
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 12
                    },
                    {
                        "title": "Taxes",
                        "amount": 15
                    }
                ]
            }
        },
        {
            "id": "44098325",
            "url": "https://www.airbnb.com/rooms/44098325",
            "deeplink": "https://www.airbnb.com/rooms/44098325?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 29,
            "name": "Large 1 Bedroom - Walk to Vanderbilt",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 2,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/e5538261-76aa-4e80-94af-0e5bddaf45b1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c4016b8c-3ac7-4f68-b75c-c825ccde5624.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/550854b6-f7d9-4c44-a242-3310ac72e69c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7b93621d-f6ff-47b9-8713-e9a1094c636c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/159713d4-ce5e-4188-8f0e-47966b842286.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3ada91f1-89d0-4ef7-8560-614996d3ae9d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c006ed12-1786-41dd-ba27-8203de5aeb48.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3725e564-6a1c-4439-858d-5d18918f0fd1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5ba753cb-edc7-4bbe-aadf-0cafa7ef5f07.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0378e20d-eec4-44ac-99e5-57a0e5359889.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/012a5d0d-faa6-4855-b803-c40a1426c01b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6a05dcc4-9ebc-4328-8828-d9d489ff3bf8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/47483988-fef5-45dd-9a74-8db9072eb99a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/41a6a4e3-708f-4cb6-a7be-f5a7c124ffa1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f6dc4412-0342-4f6f-968c-70301b731184.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1aacb850-78fa-4fca-9e19-e86ff718ecf1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1c773238-e3c5-4c73-bbc4-8fcad6de69f3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/04c8bc9d-8106-4cc6-b2f2-1d207cbcbf81.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f556cf0f-c37d-4c30-a035-9280b4fcbbbf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/97a40d99-64ba-43de-8580-b94abdfa7713.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/efc06683-7fbb-4c23-8a11-e1806ecaad12.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-44098325/original/ba391bbd-a899-4e92-a48f-62a6d1bd28d6.png?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/50958f4b-c057-4086-9683-9c0234d01afa.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": true,
            "lat": 36.13841,
            "lng": -86.80132,
            "persons": 4,
            "reviewsCount": 246,
            "rating": 4.6,
            "type": "Entire serviced apartment",
            "userId": 349191206,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                4,
                5,
                8,
                9,
                77,
                21,
                85,
                86,
                89,
                90,
                91,
                92,
                93,
                30,
                94,
                95,
                96,
                33,
                34,
                35,
                611,
                36,
                37,
                40,
                104,
                41,
                44,
                45,
                109,
                46,
                51,
                52,
                56
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 288,
                "currency": "USD",
                "total": 288,
                "priceItems": [
                    {
                        "title": "$264 x 1 night",
                        "amount": 264
                    },
                    {
                        "title": "Taxes",
                        "amount": 24
                    }
                ]
            }
        },
        {
            "id": "637425",
            "url": "https://www.airbnb.com/rooms/637425",
            "deeplink": "https://www.airbnb.com/rooms/637425?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 30,
            "name": "Art room French Flair",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/d3be58ba-6bd4-469e-876b-2dfa3500a97e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/d721c54b-8b1c-4d57-8365-7dac85099a2d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/4d2f981d-aec5-4d53-860b-beabeda61a40.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/30c48f0b-4e8a-4b62-87d0-90c6a2117b64.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/d52a5049-a8e0-42fe-99e0-a3de57407ba9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/10084ce9-0d9b-4199-9271-b4e23db68c27.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/5a43e71a-038d-4047-bc1c-c5d523c15300.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4bf5f509-fec4-4247-beb7-8b2d534a1b1f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/884a5b5c-3722-45b6-a258-e3fb99e2018c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d762dc65-ad44-42a8-8743-fb8aebc11e62.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/18cf7357-d0db-4e90-ad43-e84b6e791aa3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/bcd5640a-a0cb-418b-94b8-2dbb600c7191.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/33b12574-88d4-4d8c-a3f8-590464505bd9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/ee016b90-4441-475c-a6de-ffe8ec1e0571.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/2275f90e-5315-4ee3-af55-7b14ec454a34.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/a7afb5a7-dddc-4de1-8476-2e2880fd6835.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/7d90bdb7-6b55-4860-bc4f-374755fad067.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/dfe3a713-e2bb-4d67-8cff-6d5b05584e5e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/244fd057-440a-45f2-b5d4-996891e97751.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/d6bce0e9-35c3-4bfd-b7a3-94a4a60c61d7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/e858852c-c2e4-4ad4-80e5-c6af3939db40.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/9353835f-06d1-4bd5-b739-99e9e8507528.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/0c6a973f-dbc9-4729-8858-75284f46eed3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/424e12cf-5b4c-42d3-80c6-dcf6673ee463.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/20bf10ca-fc94-4e1e-9728-829dca98c4d3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/6aa1f943-d5d2-4928-99ce-f43ff7539991.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/ccf44e49-d303-4442-8c98-7f3f752ad857.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/4cdd1333-f16e-4d50-9ac5-1802a6bd09a8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/24694915/04284c6c_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-637425/original/1233923e-30f8-48f4-bdc8-5128953b65fc.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/852cb8ad-a983-4bd1-a518-5a8bb583be5b.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.19236,
            "lng": -86.743,
            "persons": 2,
            "reviewsCount": 168,
            "rating": 4.82,
            "type": "Private room in home",
            "userId": 2427763,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                129,
                3,
                4,
                5,
                392,
                9,
                137,
                394,
                522,
                17,
                657,
                19,
                23,
                663,
                280,
                665,
                30,
                31,
                415,
                671,
                672,
                35,
                36,
                292,
                37,
                293,
                39,
                40,
                41,
                42,
                44,
                45,
                46,
                47,
                179,
                308,
                61,
                66,
                70,
                77,
                79,
                81,
                83,
                85,
                86,
                89,
                90,
                91,
                219,
                476,
                93,
                611,
                100,
                101,
                103,
                104,
                107,
                236,
                248
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 204,
                "currency": "USD",
                "total": 204,
                "priceItems": [
                    {
                        "title": "$125 x 1 night",
                        "amount": 125
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 25
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 25
                    },
                    {
                        "title": "Taxes",
                        "amount": 29
                    }
                ]
            }
        },
        {
            "id": "969612827756434277",
            "url": "https://www.airbnb.com/rooms/969612827756434277",
            "deeplink": "https://www.airbnb.com/rooms/969612827756434277?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 31,
            "name": "Antioch room",
            "bathrooms": 0.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969612827756434277/original/dc91fbeb-1a80-43f8-9193-25543f3b8fb1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969612827756434277/original/82fe0191-249a-4123-b5c2-1cd55e604057.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969612827756434277/original/644aedeb-d73c-4930-9078-956d8e90dafb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969612827756434277/original/61ab9284-9749-4d5c-af01-d46bd3eac06d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969612827756434277/original/db2244ee-c76d-40a8-b40e-f98a443394c5.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969612827756434277/original/cf27d7b8-eed8-47ff-972f-1ef020ddc81f.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=A&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.03892403480526,
            "lng": -86.63547066486586,
            "persons": 3,
            "reviewsCount": 0,
            "type": "Private room in rental unit",
            "userId": 352919291,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                32,
                1,
                33,
                35,
                99,
                227,
                4,
                5,
                7,
                8,
                9,
                11,
                12,
                179
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 77,
                "currency": "USD",
                "total": 77,
                "priceItems": [
                    {
                        "title": "$70 x 1 night",
                        "amount": 70
                    },
                    {
                        "title": "Special offer",
                        "amount": 14
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 9
                    },
                    {
                        "title": "Taxes",
                        "amount": 12
                    }
                ]
            }
        },
        {
            "id": "35119883",
            "url": "https://www.airbnb.com/rooms/35119883",
            "deeplink": "https://www.airbnb.com/rooms/35119883?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 32,
            "name": "Creature Camp",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Ashland City",
            "images": [
                "https://a0.muscache.com/im/pictures/29156e7c-06d6-4efc-863f-f551ad219a18.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/78695922-652e-4dcd-bb2c-593f48b69f3f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/db439823-64a7-4b15-b0d5-31757895c52a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d2f50ea5-9538-4b3e-adbe-de4184d70bfb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5f0c9e18-b7d9-4edf-a7e6-054227f939a2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/56512e4c-9850-4cac-8624-2ee92ad140fd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3dd95775-da19-4ccd-ab43-4afe03ad06f2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8a3ef569-75e3-488c-aa02-dfdd40494d24.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b4558103-06d5-4278-a308-1891201f366b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/308be908-c5c3-4fcb-bd2c-d21a02723244.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d128f9db-c7c0-4dee-960b-afd84d41da26.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a23fa62d-3784-4fcf-a97c-54a3c749ec28.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/18b2d6c5-0c3e-4395-8bc2-62ac8be3163e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c097debd-57f9-407b-af73-298e97a1ae10.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2a04d5d2-eefe-4176-8932-f6d10ba403ac.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4f5549a2-1815-427e-98db-161ba7b3da6f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6a7c15e5-f808-4114-8d94-bc339eb9c2f3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/62c760d5-19e5-4808-87dd-2068726a286c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-35119883/original/50805eee-304e-4bfc-af58-2ec471c0f644.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-35119883/original/6620f7c0-3019-41a9-a5fc-70b899ce037b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-35119883/original/a4ca39af-5c9b-4ae5-af89-16194b27acc9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/d9245e0a-6663-43ea-9661-e66b8cb86cd9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ad96ccac-871c-42a8-a739-7ed7433a687c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/31ee086c-2eb9-42fd-8fdd-778aba9cf095.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ad2c63ac-cf99-4804-9454-6ce15fbdb2f0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ad3f87cb-ee83-4a05-a2b5-8510991052c2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6abfbc7f-cc58-49aa-a07f-19cbb9b0c340.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d625d229-5d92-4d13-9c3c-fcc3574adc62.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4783c8bb-c673-466c-8cf4-eea024617fbf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7a1818cc-c593-424f-ae91-11edf0d72a13.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/37df4eb4-4c93-47ca-ad9a-5217b6f0e17b.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.22648,
            "lng": -86.99633,
            "persons": 2,
            "reviewsCount": 47,
            "rating": 4.96,
            "type": "Camper/RV",
            "userId": 45112178,
            "address": "Ashland City, TN, United States",
            "amenityIds": [
                1,
                5,
                8,
                9,
                137,
                394,
                12,
                77,
                146,
                210,
                85,
                280,
                665,
                90,
                219,
                93,
                30,
                94,
                415,
                96,
                99,
                611,
                37,
                101,
                40,
                42,
                51,
                179,
                54,
                57
            ],
            "previewAmenities": [
                "Free parking",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 133,
                "currency": "USD",
                "total": 133,
                "priceItems": [
                    {
                        "title": "$100 x 1 night",
                        "amount": 100
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 17
                    },
                    {
                        "title": "Taxes",
                        "amount": 16
                    }
                ]
            }
        },
        {
            "id": "13139208",
            "url": "https://www.airbnb.com/rooms/13139208",
            "deeplink": "https://www.airbnb.com/rooms/13139208?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 33,
            "name": "Chez Bewer, private room,balcony, and bath.",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-13139208/original/cfe015a5-cc8d-42f2-beb0-e2d70c8d4a70.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-13139208/original/6a1586e4-0279-4a7f-8042-45dab6f2906b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-13139208/original/62ab1e92-4f54-43c3-8a8e-ca4a0e280a48.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-13139208/original/267a74f8-421a-4bf4-96dc-d81e27362716.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-13139208/original/feda7080-abd7-4bac-a490-dd8032acded7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-13139208/original/a7372046-2510-4c28-a36c-43170c8db404.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/efc553b8-8261-462b-b77c-b3bfefcfc783.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d59104e9-9c0a-40b9-bd22-dd62b9673ea9.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/b0b6e1b2-1245-48fa-ab76-c3ad67d77d6e.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.1536,
            "lng": -86.86252,
            "persons": 2,
            "reviewsCount": 272,
            "rating": 4.92,
            "type": "Private room in home",
            "userId": 73222963,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                4,
                5,
                9,
                77,
                17,
                18,
                23,
                90,
                27,
                93,
                30,
                94,
                31,
                35,
                36,
                101,
                39,
                103,
                40,
                104,
                42,
                44,
                45,
                46,
                47,
                51,
                54
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 176,
                "currency": "USD",
                "total": 176,
                "priceItems": [
                    {
                        "title": "$129 x 1 night",
                        "amount": 129
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 22
                    },
                    {
                        "title": "Taxes",
                        "amount": 25
                    }
                ]
            }
        },
        {
            "id": "28158418",
            "url": "https://www.airbnb.com/rooms/28158418",
            "deeplink": "https://www.airbnb.com/rooms/28158418?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 34,
            "name": "Chill room in house by Lake for Weary Travelers",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 3,
            "city": "Hendersonville",
            "images": [
                "https://a0.muscache.com/im/pictures/492ad992-d785-4d77-9050-4ab1c82b2b94.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d8f66ec7-d749-480d-a3fd-b0791da062bd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2832ba8b-45cf-4bc9-bbd9-2d61e16f48b3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b2f33034-e7a5-4648-aa03-5cd347f49d3a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9ea97aa7-2f05-4792-8fa5-6a18f29f0a1f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/014e670d-664c-4f14-9188-034b0f1d05c9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c9e042e7-6279-4d89-9bd6-ecb28f9e53af.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b0a9944c-1fde-4ade-8f68-28b338475abb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/65ec4d4c-32e4-4c07-8ca4-7ec8923d075a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7e618ee8-6f40-472d-ac20-97e7234662ce.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c79f3cd5-54ae-46fb-bbab-e0f58b8c7a86.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2ddd5335-80bd-45a9-ad7c-0ed44a31abaf.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/213845eb-9bf4-4a2a-a4dc-3ff244db75e8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9864c483-289c-4216-89a6-e272dd5625cd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/40b37c52-18d1-403e-8a7f-8f534d5d2a6a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d5e54c17-f4dd-4ff5-851e-7446979f0668.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0142bce1-3458-470a-8474-5ac03e7276a7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/982b4bd5-cbe5-4da8-a40a-baf8dfea85f9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b4358a08-d301-48e7-becf-ca90711599f8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f3846646-41c9-462c-8b86-323c9b002bfd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/16412889-8ff2-4fe3-88d9-9a0c2d2ac95a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/90975349-9d93-45b8-b4c6-964437f6d350.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2347dbc3-4b7e-428f-92db-03cdabffd0a8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ac20552c-9dfc-498d-bb68-1d68ba6e0bf1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bb7cae15-6087-43b8-96c3-0ebaf8c5c596.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/252a8149-5a60-40e3-900b-4e5f93a32100.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/users/2493728/profile_pic/1444061958/original.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.2593,
            "lng": -86.61326,
            "persons": 3,
            "reviewsCount": 273,
            "rating": 4.81,
            "type": "Private room in home",
            "userId": 2493728,
            "address": "Hendersonville, TN, United States",
            "amenityIds": [
                3,
                4,
                5,
                9,
                77,
                85,
                663,
                280,
                89,
                90,
                91,
                30,
                415,
                98,
                35,
                611,
                36,
                100,
                37,
                101,
                40,
                42,
                43,
                44,
                51,
                308,
                53,
                251,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 86,
                "currency": "USD",
                "total": 86,
                "priceItems": [
                    {
                        "title": "$33 x 1 night",
                        "amount": 33
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 30
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 11
                    },
                    {
                        "title": "Taxes",
                        "amount": 12
                    }
                ]
            }
        },
        {
            "id": "41319020",
            "url": "https://www.airbnb.com/rooms/41319020",
            "deeplink": "https://www.airbnb.com/rooms/41319020?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 35,
            "name": "Clean and cozy room in family home in LaVergne",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "La Vergne",
            "images": [
                "https://a0.muscache.com/im/pictures/be3787ba-2427-4865-8f40-1079e6564372.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5e27f91d-8a5d-4b39-a4de-66ca6e510d36.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c3e8917a-14c4-4081-9366-16c3ca0bb008.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/11e76613-a63b-4558-ab61-31dcdba89a00.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/19a8577b-3bf3-4154-bb04-8a0efebd4e38.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/effaa4c6-f26e-46a5-a70e-0e9f9343edb0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/27783faf-3e76-4aa1-a024-6ee0572584ab.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/02e2a6bf-a95a-4474-a4cf-ea6661ea451e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/49ca71ac-3ac7-4545-a3cc-f91b6c83ef7e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/64f34364-69a2-4143-90f2-2b566d948006.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1d483437-bd16-455f-8556-3016d656043e.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-193307307/original/60b57276-8138-4e09-b169-cd542d575e82.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.05263,
            "lng": -86.54447,
            "persons": 2,
            "reviewsCount": 409,
            "rating": 4.9,
            "type": "Private room in home",
            "userId": 193307307,
            "address": "La Vergne, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                133,
                72,
                9,
                73,
                522,
                139,
                12,
                77,
                79,
                657,
                146,
                85,
                86,
                663,
                89,
                665,
                90,
                91,
                93,
                30,
                415,
                33,
                34,
                98,
                35,
                611,
                36,
                37,
                101,
                39,
                103,
                40,
                104,
                41,
                42,
                44,
                45,
                46,
                47,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_MODERATE",
            "price": {
                "rate": 94,
                "currency": "USD",
                "total": 94,
                "priceItems": [
                    {
                        "title": "$69 x 1 night",
                        "amount": 69
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 12
                    },
                    {
                        "title": "Taxes",
                        "amount": 13
                    }
                ]
            }
        },
        {
            "id": "683435893186687289",
            "url": "https://www.airbnb.com/rooms/683435893186687289",
            "deeplink": "https://www.airbnb.com/rooms/683435893186687289?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 36,
            "name": "Bedroom in a peaceful Neighborhood",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "La Vergne",
            "images": [
                "https://a0.muscache.com/im/pictures/9e267afc-e3e3-4639-a130-91cfa95e410e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4a31b309-9079-460c-85d9-bf3bcecd15e6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3a505c5c-b819-4922-8932-9697a6ecc261.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f443bb29-8127-4408-8692-f2969b6ca8ec.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2e273696-65bd-448a-968e-6572d6e9091d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4fd17b04-cfa5-4a25-bb56-5f5c72858752.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bd469d7c-c379-43c7-9f96-64f1c1fe0393.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/21273eee-2b1d-4be5-bc66-d4851acfc4ae.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e006d669-84f9-437f-ad42-bf5cf3268124.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/cc5c2a18-4d5b-4322-a4d3-36c0eac88f7e.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.01626,
            "lng": -86.53973,
            "persons": 1,
            "reviewsCount": 45,
            "rating": 4.82,
            "type": "Private room in home",
            "userId": 458488103,
            "address": "La Vergne, TN, United States",
            "amenityIds": [
                1,
                33,
                34,
                4,
                5,
                101,
                9,
                42,
                91,
                93,
                30
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 80,
                "currency": "USD",
                "total": 80,
                "priceItems": [
                    {
                        "title": "$59 x 1 night",
                        "amount": 59
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 10
                    },
                    {
                        "title": "Taxes",
                        "amount": 11
                    }
                ]
            }
        },
        {
            "id": "8683283",
            "url": "https://www.airbnb.com/rooms/8683283",
            "deeplink": "https://www.airbnb.com/rooms/8683283?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 37,
            "name": "Writing and Spiritual Retreat Cabin",
            "bathrooms": 1.5,
            "bedrooms": 2,
            "beds": 2,
            "city": "Ashland City",
            "images": [
                "https://a0.muscache.com/im/pictures/111310312/da65e4cd_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111310344/8a7750d8_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5af5a293-c54b-4dd1-8e62-63f4f1cc3905.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111310338/edfa05be_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111310321/524950e1_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111310355/70fc2633_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111310360/581b9e89_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111310368/db3ccd64_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340232/e48f476c_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340241/128df4b4_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111341455/a8ac2959_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340237/5c640127_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340255/d4925c64_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340247/363f5dd7_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340839/50059434_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340268/71dfdb7a_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340276/208e7d73_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111340826/7cf7d1fc_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-8683283/original/619bbb34-3b6b-4a02-81b5-f05e3e477391.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/f99e6a01-3135-44e7-9a84-cd674894340b.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.21081,
            "lng": -87.04399,
            "persons": 2,
            "reviewsCount": 272,
            "rating": 4.92,
            "type": "Entire cottage",
            "userId": 45597879,
            "address": "Ashland City, TN, United States",
            "amenityIds": [
                129,
                4,
                5,
                133,
                8,
                9,
                137,
                394,
                522,
                77,
                146,
                85,
                86,
                663,
                280,
                89,
                665,
                90,
                219,
                93,
                30,
                94,
                95,
                98,
                35,
                36,
                100,
                37,
                101,
                39,
                103,
                40,
                104,
                107,
                44,
                236,
                46,
                47,
                49,
                625,
                50,
                179,
                57,
                185,
                251
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 86,
                "currency": "USD",
                "total": 86,
                "priceItems": [
                    {
                        "title": "$50 x 1 night",
                        "amount": 50
                    },
                    {
                        "title": "Cleaning fee",
                        "amount": 15
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 11
                    },
                    {
                        "title": "Taxes",
                        "amount": 10
                    }
                ]
            }
        },
        {
            "id": "969862378402001482",
            "url": "https://www.airbnb.com/rooms/969862378402001482",
            "deeplink": "https://www.airbnb.com/rooms/969862378402001482?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 38,
            "name": "nice and cozy",
            "bathrooms": 2,
            "bedrooms": 2,
            "beds": 2,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/927949ba-2998-4e18-9b9f-30721272aae7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/df874e3e-a970-480b-a103-9e780c654f4b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/6d684024-42d2-40dc-9932-909d5ace8599.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/789939a9-cb95-4980-ad34-8e3c88df6c51.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/7105195b-c0f8-4cb0-bee3-d5ed3e9aa324.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/bc82f634-226e-42df-b9ff-e96921757019.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/cd7cbf9c-1952-434e-8f9c-e30f68e5e2d4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/e936782e-50da-4b3a-8378-ed62ff9ea098.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/a0cdf9d6-f80d-4046-8f98-75bd5c6e6bc8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/hosting/Hosting-969862378402001482/original/1f6fe7ae-e44d-44bc-8a5f-c05e102c0eab.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-391821464/original/7beb7ff8-610d-43e4-b1f6-6260ed2251b4.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.15951,
            "lng": -86.64726,
            "persons": 5,
            "reviewsCount": 0,
            "type": "Entire rental unit",
            "userId": 391821464,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                35,
                4,
                5,
                39,
                8,
                9,
                510
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_FLEXIBLE",
            "price": {
                "rate": 130,
                "currency": "USD",
                "total": 130,
                "priceItems": [
                    {
                        "title": "$95 x 1 night",
                        "amount": 95
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 16
                    },
                    {
                        "title": "Taxes",
                        "amount": 19
                    }
                ]
            }
        },
        {
            "id": "953505279966840561",
            "url": "https://www.airbnb.com/rooms/953505279966840561",
            "deeplink": "https://www.airbnb.com/rooms/953505279966840561?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 39,
            "name": "One bedroom 10 min from Airport",
            "bathrooms": 1,
            "bedrooms": 1,
            "beds": 1,
            "city": "Nashville",
            "images": [
                "https://a0.muscache.com/im/pictures/miso/Hosting-953505279966840561/original/d3239a1d-32b1-4624-98d7-d5a0fd39b5e3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-953505279966840561/original/51c2c347-09ad-4c2d-9908-498b4c98a332.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-953505279966840561/original/5630797a-1624-41ea-899c-069467d8a17a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-953505279966840561/original/375cb772-0998-4990-ad9b-b55dd47c5702.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-953505279966840561/original/ea3e2918-6752-4687-b158-166444606c65.jpeg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/42947d64-18d9-4ad9-ba45-0109fed6b37c.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "rareFind": false,
            "lat": 36.17538,
            "lng": -86.63967,
            "persons": 2,
            "reviewsCount": 0,
            "type": "Entire rental unit",
            "userId": 177735587,
            "address": "Nashville, TN, United States",
            "amenityIds": [
                1,
                33,
                35,
                227,
                4,
                36,
                5,
                7,
                39,
                8,
                9
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 121,
                "currency": "USD",
                "total": 121,
                "priceItems": [
                    {
                        "title": "$110 x 1 night",
                        "amount": 110
                    },
                    {
                        "title": "Special offer",
                        "amount": 22
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 15
                    },
                    {
                        "title": "Taxes",
                        "amount": 18
                    }
                ]
            }
        },
        {
            "id": "687690009004258009",
            "url": "https://www.airbnb.com/rooms/687690009004258009",
            "deeplink": "https://www.airbnb.com/rooms/687690009004258009?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
            "position": 40,
            "name": "The Chamber of Secrets",
            "bathrooms": 1.5,
            "bedrooms": 1,
            "beds": 1,
            "city": "La Vergne",
            "images": [
                "https://a0.muscache.com/im/pictures/bb961a63-56ec-4697-a1a4-0c9a211a001e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/848dff07-97aa-4ef0-a521-2ddcfd54cfff.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/55bdeeaf-b0e6-493c-9988-8f202ccb099f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6904a654-1c6e-40b9-814b-7993c21b6e5b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4af6e113-883c-4023-8d18-3a938a7a6835.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d9dd7d2b-b6f8-483b-bd02-e73320bbec3d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/26e76b81-76ba-46b1-9179-71c64b41d842.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/eec76686-eb50-4d74-8ae4-e28fa2019774.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a3b7015a-eee5-4c5b-8fa7-3c9e3540668e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/bd5a79dd-fc18-4205-a083-4af7b6de2709.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2b29869c-8e2a-4f82-bd49-0d25a0ec7362.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/eefae4b2-e318-4ab4-89df-68990f09cd9b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/50228b90-79e6-48cf-bf0a-f1928243467a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/da7ff4a3-27cb-4f73-b6d2-44a9bfa8daee.jpg?im_w=720"
            ],
            "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-222028203/original/7dfa9e90-a40c-4754-a532-e68d979aba3f.jpeg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "rareFind": false,
            "lat": 36.02803,
            "lng": -86.55369,
            "persons": 2,
            "reviewsCount": 45,
            "rating": 4.89,
            "type": "Private room in townhouse",
            "userId": 222028203,
            "address": "La Vergne, TN, United States",
            "amenityIds": [
                1,
                4,
                5,
                8,
                9,
                73,
                522,
                12,
                77,
                85,
                86,
                663,
                89,
                665,
                90,
                91,
                92,
                476,
                93,
                30,
                94,
                95,
                415,
                671,
                96,
                35,
                36,
                42,
                44,
                236,
                46,
                51,
                308,
                54,
                61
            ],
            "previewAmenities": [
                "Free parking",
                "Wifi",
                "Air conditioning",
                "Self check-in"
            ],
            "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
            "price": {
                "rate": 74,
                "currency": "USD",
                "total": 74,
                "priceItems": [
                    {
                        "title": "$55 x 1 night",
                        "amount": 55
                    },
                    {
                        "title": "Airbnb service fee",
                        "amount": 9
                    },
                    {
                        "title": "Taxes",
                        "amount": 10
                    }
                ]
            }
        }
    ]
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

    arrayOfHotelLatLng.push([hotelData.lat, hotelData.lng]);
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
