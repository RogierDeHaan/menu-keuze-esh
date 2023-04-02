const spinner = document.querySelector("#spinner");
const alertBoxPositive = document.querySelector("#alert-box-positief");
const alertBoxNegative = document.querySelector("#alert-box-negatief");
const closeModal = document.querySelector(".close-modal");
const closeModalNegatief = document.querySelector(".close-modal-n");
const form = document.forms["menu-keuzes"];

const checkVoor2 = document.querySelector("#voorgerecht2");

const checkVoor4 = document.querySelector("#voorgerecht4");

const checkVoor6 = document.querySelector("#voorgerecht6");
const checkVoor7 = document.querySelector("#geen-voorgerecht");

const checkHoofd2 = document.querySelector("#hoofdgerecht2");

const checkHoofd4 = document.querySelector("#hoofdgerecht4");

const checkHoofd6 = document.querySelector("#hoofdgerecht6");
const checkHoofd7 = document.querySelector("#geen-hoofdgerecht");
const locationPopup = document.querySelector("#location-popup");
const locationH3 = document.querySelector("#location-h3");
const locationH3Negative = document.querySelector("#location-h3-negatief");
const closeLocation = document.querySelector(".close-location");
const closeLocationNegative = document.querySelector(
  ".close-location-negatief"
);
const locationPopupNegative = document.querySelector(
  "#location-popup-negatief"
);
let latitude = undefined;
let longitude = undefined;

checkVoor2.addEventListener("click", CheckVoor2);

checkVoor4.addEventListener("click", CheckVoor4);

checkVoor6.addEventListener("click", CheckVoor6);
checkVoor7.addEventListener("click", CheckVoor7);

checkHoofd2.addEventListener("click", CheckHoofd2);

checkHoofd4.addEventListener("click", CheckHoofd4);

checkHoofd6.addEventListener("click", CheckHoofd6);
checkHoofd7.addEventListener("click", CheckHoofd7);

//uncheck checkboxes when one is checked

function CheckVoor2() {
  if ((checkVoor2.checked = true)) {
    checkVoor4.checked = false;

    checkVoor6.checked = false;
    checkVoor7.checked = false;
  }
}

function CheckVoor4() {
  if ((checkVoor4.checked = true)) {
    checkVoor2.checked = false;

    checkVoor6.checked = false;
    checkVoor7.checked = false;
  }
}

function CheckVoor6() {
  if ((checkVoor6.checked = true)) {
    checkVoor2.checked = false;

    checkVoor4.checked = false;

    checkVoor7.checked = false;
  }
}
function CheckVoor7() {
  if ((checkVoor7.checked = true)) {
    checkVoor2.checked = false;

    checkVoor4.checked = false;

    checkVoor6.checked = false;
  }
}

function CheckHoofd2() {
  if ((checkHoofd2.checked = true)) {
    checkHoofd4.checked = false;

    checkHoofd6.checked = false;
    checkHoofd7.checked = false;
  }
}

function CheckHoofd4() {
  if ((checkHoofd4.checked = true)) {
    checkHoofd2.checked = false;

    checkHoofd6.checked = false;
    checkHoofd7.checked = false;
  }
}

function CheckHoofd6() {
  if ((checkHoofd6.checked = true)) {
    checkHoofd2.checked = false;

    checkHoofd4.checked = false;

    checkHoofd7.checked = false;
  }
}
function CheckHoofd7() {
  if ((checkHoofd7.checked = true)) {
    checkHoofd2.checked = false;

    checkHoofd4.checked = false;

    checkHoofd6.checked = false;
  }
}

const submitButton = document.querySelector("#submit");
const imgNl = document.querySelector(".img-nl");
const imgEn = document.querySelector(".img-en");
const scriptURL =
  "https://script.google.com/macros/s/AKfycby3I-k3yImJ8WaX-LAlWoQ09AG_65Ekzu6NGJ0vxdv_3jpuixT76lJY1m23ULEsv9fZjw/exec";
const languageData =
  "https://rogierdehaan.github.io/esh-menu-api/menu-keuze.json";

// Implementatie-ID
// AKfycbxV2VokB2bYbZdTBqsCSrK4y7VfF_dUt8L6jEZyyzrIE9krL3p3-OH4sb-GLi72hcG6

//google sheets menu data
const sheetId = "1GjsqxfhbANrd6D8pF9w_tj2lMQKkq6P9XrQEvJghlbY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "gerechten";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

// define response reload anchors
const nl = document.querySelector("#nl");
const en = document.querySelector("#en");
const firstName = document.querySelector("#given-name");
let placeHolderFirstName = document.getElementById("voornaam");
const surName = document.querySelector("#sur-name");
let placeHolderSurName = document.getElementById("achternaam");
const trainingName = document.querySelector("#name-training");
let placeHolderTrainingName = document.getElementById("naam-training");
const conferenceRoom = document.querySelector("#conference-room");
let placeHolderConferenceRoom = document.getElementById("zaal-training");
const starters = document.querySelector("#starters");

const voorgerecht2 = document.querySelector(".voorgerecht2");

const voorgerecht4 = document.querySelector(".voorgerecht4");

const voorgerecht6 = document.querySelector(".voorgerecht6");
const voorgerecht7 = document.querySelector(".voorgerecht7");
const mainCourses = document.querySelector("#main-courses");

const hoofdgerecht2 = document.querySelector(".hoofdgerecht2");

const hoofdgerecht4 = document.querySelector(".hoofdgerecht4");

const hoofdgerecht6 = document.querySelector(".hoofdgerecht6");
const hoofdgerecht7 = document.querySelector(".hoofdgerecht7");
const dessertsSpan = document.querySelector(".desserts-span");
const dessertsP = document.querySelector(".desserts-p");
const dieet = document.querySelector(".dieet");
let placeHolderDieetwensen = document.getElementById("dieet-wensen");
const alertBoxPositiefH3 = document.querySelector(".alert-box-positief-h3");
const alertBoxNegatiefH3 = document.querySelector(".alert-box-negatief-h3");
// alert(
//   "Om het formulier te kunnen invullen moet uw locatie bij de ESH zijn daarom word er naar uw locatie gevraagd"
// );

//submit the form to google drive
form.addEventListener("submit", (e) => {
  console.log("form add eventlistener");
  spinner.removeAttribute("hidden");
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  // let atESH = false;
  if (atESH === true) {
    fetch(scriptURL, { method: "POST", body: requestBody })
      .then(() => {
        alertBoxPositive.removeAttribute("hidden");

        spinner.setAttribute("hidden", "");
        form.reset();
        submitButton.disabled = false;
      })
      .catch(() => {
        alertBoxNegative.removeAttribute("hidden");

        spinner.setAttribute("hidden", "");
        submitButton.disabled = false;
      });
  } else {
    locationPopupNegative.removeAttribute("hidden");
    spinner.setAttribute("hidden", "");
  }
});

//close the different modals
closeModal.addEventListener("click", () => {
  alertBoxPositive.setAttribute("hidden", "");
});

closeModalNegatief.addEventListener("click", () => {
  alertBoxNegative.setAttribute("hidden", "");
});

closeLocation.addEventListener("click", () => {
  locationPopup.setAttribute("hidden", "");
  getLocation();
});

console.log(latitude);
console.log(longitude);
function getLocation() {
  // // get gps position from user
  const successCallback = (position) => {
    console.log(position);
    console.log(`Current location ${position.coords.latitude} latitude`);
    latitude = position.coords.latitude;
    console.log(latitude);
    console.log(`Current location ${position.coords.longitude} longitude`);
    longitude = position.coords.longitude;
    console.log(longitude);
    if (
      ((position.coords.latitude > 52.167 ||
        position.coords.latitude < 52.161) &&
        position.coords.longitude > 5.243) ||
      position.coords.longitude < 5.221
    ) {
      console.log("not close enough");
      alert("You are not at ESH");
      atESH = false;
    } else {
      console.log("You are at ESH");
      alert("at ESH");
      atESH = true;
    }
  };

  const errorCallback = (error) => {
    console.log(error);
    alert("errorCallback");
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

closeLocationNegative.addEventListener("click", () => {
  locationPopupNegative.setAttribute("hidden", "");
});

function getData() {
  //get data from json file at github
  fetch(languageData)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const response = data;
      //get data from google sheets
      fetch(url)
        .then((res) => res.text())
        .then((rep) => {
          const jsData = JSON.parse(rep.substring(47).slice(0, -2));
          let gerechten = [];
          jsData.table.rows.forEach((element) => {
            gerechten.push(element);
          });
          // console.log(gerechten);

          //dutch dishes
          let gerechtenNL = gerechten[2];
          gerechtenNL = gerechtenNL.c.slice(0);

          //english dishes
          let gerechtenEN = gerechten[4];
          gerechtenEN = gerechtenEN.c.slice(0);

          //dutch menu
          const voorgerechtenNL = [];
          const hoofdgerechtenNL = [];
          for (i = 0; i <= 6; i++) {
            voorgerechtenNL.push(gerechtenNL[i].v);
          }
          for (i = 7; i <= 13; i++) {
            hoofdgerechtenNL.push(gerechtenNL[i].v);
          }

          // english menu
          const voorgerechtenEN = [];
          const hoofdgerechtenEN = [];
          for (i = 0; i <= 6; i++) {
            voorgerechtenEN.push(gerechtenEN[i].v);
          }
          for (i = 7; i <= 13; i++) {
            hoofdgerechtenEN.push(gerechtenEN[i].v);
          }

          nl.addEventListener("click", () => {
            imgNl.classList.remove("opacity-change");
            imgEn.classList.add("opacity-change");
            firstName.textContent = response.nl.givenName;
            placeHolderFirstName.placeholder = response.nl.givenName;
            surName.textContent = response.nl.surName;
            placeHolderSurName.placeholder = response.nl.surName;
            trainingName.textContent = response.nl.nameTraining;
            placeHolderTrainingName.placeholder = response.nl.nameTraining;
            conferenceRoom.textContent = response.nl.conferenceRoom;
            placeHolderConferenceRoom[0].textContent =
              response.nl.conferenceRoom;
            starters.textContent = response.nl.starters;

            voorgerecht2.textContent = voorgerechtenNL[1];

            voorgerecht4.textContent = voorgerechtenNL[3];

            voorgerecht6.textContent = voorgerechtenNL[5];
            voorgerecht7.textContent = voorgerechtenNL[6];
            mainCourses.textContent = response.nl.mainCourses;

            hoofdgerecht2.textContent = hoofdgerechtenNL[1];

            hoofdgerecht4.textContent = hoofdgerechtenNL[3];

            hoofdgerecht6.textContent = hoofdgerechtenNL[5];
            hoofdgerecht7.textContent = hoofdgerechtenNL[6];
            dessertsSpan.textContent = response.nl.dessertsSpan;
            dessertsP.textContent = response.nl.dessertsP;
            dieet.textContent = response.nl.dieet;
            placeHolderDieetwensen.placeholder = response.nl.dieetWensen;
            submitButton.textContent = response.nl.submit;
            alertBoxPositiefH3.textContent = response.nl.alertBoxPositiefH3;
            alertBoxNegatiefH3.textContent = response.nl.alertBoxNegatiefH3;
            closeModal.textContent = response.nl.closeModal;
            closeModalNegatief.textContent = response.nl.closeModalNegatief;
            locationH3.textContent = response.nl.locationH3;
            locationH3Negative.textContent = response.nl.locationH3Negatief;
            closeLocation.textContent = response.nl.closeLocation;
            closeLocationNegative.textContent = response.nl.closeLocation;
          });
          en.addEventListener("click", () => {
            imgNl.classList.add("opacity-change");
            imgEn.classList.remove("opacity-change");
            firstName.textContent = response.en.givenName;
            placeHolderFirstName.placeholder = response.en.givenName;
            surName.textContent = response.en.surName;
            placeHolderSurName.placeholder = response.en.surName;
            trainingName.textContent = response.en.nameTraining;
            placeHolderTrainingName.placeholder = response.en.nameTraining;
            conferenceRoom.textContent = response.en.conferenceRoom;
            placeHolderConferenceRoom[0].textContent =
              response.en.conferenceRoom;
            starters.textContent = response.en.starters;

            voorgerecht2.textContent = voorgerechtenEN[1];

            voorgerecht4.textContent = voorgerechtenEN[3];

            voorgerecht6.textContent = voorgerechtenEN[5];
            voorgerecht7.textContent = voorgerechtenEN[6];
            mainCourses.textContent = response.en.mainCourses;

            hoofdgerecht2.textContent = hoofdgerechtenEN[1];

            hoofdgerecht4.textContent = hoofdgerechtenEN[3];

            hoofdgerecht6.textContent = hoofdgerechtenEN[5];
            hoofdgerecht7.textContent = hoofdgerechtenEN[6];
            dessertsSpan.textContent = response.en.dessertsSpan;
            dessertsP.textContent = response.en.dessertsP;
            dieet.textContent = response.en.dieet;
            placeHolderDieetwensen.placeholder = response.en.dieetWensen;
            submitButton.textContent = response.en.submit;
            alertBoxPositiefH3.textContent = response.en.alertBoxPositiefH3;
            alertBoxNegatiefH3.textContent = response.en.alertBoxNegatiefH3;
            closeModal.textContent = response.en.closeModal;
            closeModalNegatief.textContent = response.en.closeModalNegatief;
            locationH3.textContent = response.en.locationH3;
            locationH3Negative.textContent = response.en.locationH3Negatief;
            closeLocation.textContent = response.en.closeLocation;
            closeLocationNegative.textContent = response.nl.closeLocation;
          });
          nl.click();
        });
    });
}
getData();
