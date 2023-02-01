const spinner = document.querySelector("#spinner");
const alertBoxPositive = document.querySelector("#alert-box-positief");
const alertBoxNegative = document.querySelector("#alert-box-negatief");
const closeModal = document.querySelector(".close-modal");
const closeModalNegatief = document.querySelector(".close-modal-n");
const form = document.forms["menu-keuzes"];
const submitButton = document.querySelector("#submit");
const svgNl = document.querySelector(".svg-nl");
const svgEn = document.querySelector(".svg-en");
const scriptURL =
  "https://script.google.com/macros/s/AKfycby3I-k3yImJ8WaX-LAlWoQ09AG_65Ekzu6NGJ0vxdv_3jpuixT76lJY1m23ULEsv9fZjw/exec";
const languageData =
  "https://rogierdehaan.github.io/esh-menu-api/menu-keuze.json";

const checkVoor1 = document.querySelector("#voorgerecht1");
const checkVoor2 = document.querySelector("#voorgerecht2");
const checkVoor3 = document.querySelector("#voorgerecht3");
const checkVoor4 = document.querySelector("#voorgerecht4");
const checkVoor5 = document.querySelector("#voorgerecht5");
const checkVoor6 = document.querySelector("#voorgerecht6");
const checkVoor7 = document.querySelector("#geen-voorgerecht");
const checkHoofd1 = document.querySelector("#hoofdgerecht1");
const checkHoofd2 = document.querySelector("#hoofdgerecht2");
const checkHoofd3 = document.querySelector("#hoofdgerecht3");
const checkHoofd4 = document.querySelector("#hoofdgerecht4");
const checkHoofd5 = document.querySelector("#hoofdgerecht5");
const checkHoofd6 = document.querySelector("#hoofdgerecht6");
const checkHoofd7 = document.querySelector("#geen-hoofdgerecht");

checkVoor1.addEventListener("click", CheckVoor1);

checkVoor3.addEventListener("click", CheckVoor3);

checkVoor5.addEventListener("click", CheckVoor5);

checkVoor7.addEventListener("click", CheckVoor7);
checkHoofd1.addEventListener("click", CheckHoofd1);

checkHoofd3.addEventListener("click", CheckHoofd3);

checkHoofd5.addEventListener("click", CheckHoofd5);

checkHoofd7.addEventListener("click", CheckHoofd7);

//uncheck checkboxes when one is checked
function CheckVoor1() {
  if ((checkVoor1.checked = true)) {
    checkVoor3.checked = false;

    checkVoor5.checked = false;

    checkVoor7.checked = false;
  }
}

function CheckVoor3() {
  if ((checkVoor3.checked = true)) {
    checkVoor1.checked = false;

    checkVoor5.checked = false;

    checkVoor7.checked = false;
  }
}

function CheckVoor5() {
  if ((checkVoor5.checked = true)) {
    checkVoor3.checked = false;

    checkVoor1.checked = false;

    checkVoor7.checked = false;
  }
}

function CheckVoor7() {
  if ((checkVoor7.checked = true)) {
    checkVoor3.checked = false;

    checkVoor5.checked = false;

    checkVoor1.checked = false;
  }
}

function CheckHoofd1() {
  if ((checkHoofd1.checked = true)) {
    checkHoofd3.checked = false;

    checkHoofd5.checked = false;

    checkHoofd7.checked = false;
  }
}

function CheckHoofd3() {
  if ((checkHoofd3.checked = true)) {
    checkHoofd1.checked = false;

    checkHoofd5.checked = false;

    checkHoofd7.checked = false;
  }
}

function CheckHoofd5() {
  if ((checkHoofd5.checked = true)) {
    checkHoofd3.checked = false;

    checkHoofd1.checked = false;

    checkHoofd7.checked = false;
  }
}

function CheckHoofd7() {
  if ((checkHoofd7.checked = true)) {
    checkHoofd3.checked = false;

    checkHoofd5.checked = false;

    checkHoofd1.checked = false;
  }
}

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
const voorgerecht1 = document.querySelector(".voorgerecht1");

const voorgerecht3 = document.querySelector(".voorgerecht3");

const voorgerecht5 = document.querySelector(".voorgerecht5");

const voorgerecht7 = document.querySelector(".voorgerecht7");
const mainCourses = document.querySelector("#main-courses");
const hoofdgerecht1 = document.querySelector(".hoofdgerecht1");

const hoofdgerecht3 = document.querySelector(".hoofdgerecht3");

const hoofdgerecht5 = document.querySelector(".hoofdgerecht5");

const hoofdgerecht7 = document.querySelector(".hoofdgerecht7");
const dessertsSpan = document.querySelector(".desserts-span");
const dessertsP = document.querySelector(".desserts-p");
const dieet = document.querySelector(".dieet");
let placeHolderDieetwensen = document.getElementById("dieet-wensen");
const alertBoxPositiefH3 = document.querySelector(".alert-box-positief-h3");
const alertBoxNegatiefH3 = document.querySelector(".alert-box-negatief-h3");

//submit the form to google drive
form.addEventListener("submit", (e) => {
  spinner.removeAttribute("hidden");
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
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
});

//close the different modals
closeModal.addEventListener("click", () => {
  alertBoxPositive.setAttribute("hidden", "");
});

closeModalNegatief.addEventListener("click", () => {
  alertBoxNegative.setAttribute("hidden", "");
});

//change opacity of the flag png's
svgNl.addEventListener("click", () => {
  svgNl.classList.remove("opacity-change");
  svgEn.classList.add("opacity-change");
});
svgEn.addEventListener("click", () => {
  svgNl.classList.add("opacity-change");
  svgEn.classList.remove("opacity-change");
});
svgNl.click(); // set starting position of flag opacity to highlight dutch flag

// get data from api and use it in website
function getData() {
  fetch(languageData)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const setLanguage = data;

      nl.addEventListener("click", () => {
        firstName.textContent = setLanguage.nl.givenName;
        placeHolderFirstName.placeholder = setLanguage.nl.givenName;
        surName.textContent = setLanguage.nl.surName;
        placeHolderSurName.placeholder = setLanguage.nl.surName;
        trainingName.textContent = setLanguage.nl.nameTraining;
        placeHolderTrainingName.placeholder = setLanguage.nl.nameTraining;
        conferenceRoom.textContent = setLanguage.nl.conferenceRoom;
        placeHolderConferenceRoom[0].textContent =
          setLanguage.nl.conferenceRoom;
        starters.textContent = setLanguage.nl.starters;
        voorgerecht1.textContent = setLanguage.nl.voorgerecht1;

        voorgerecht3.textContent = setLanguage.nl.voorgerecht3;

        voorgerecht5.textContent = setLanguage.nl.voorgerecht5;

        voorgerecht7.textContent = setLanguage.nl.voorgerecht7;
        mainCourses.textContent = setLanguage.nl.mainCourses;
        hoofdgerecht1.textContent = setLanguage.nl.hoofdgerecht1;

        hoofdgerecht3.textContent = setLanguage.nl.hoofdgerecht3;

        hoofdgerecht5.textContent = setLanguage.nl.hoofdgerecht5;

        hoofdgerecht7.textContent = setLanguage.nl.hoofdgerecht7;
        dessertsSpan.textContent = setLanguage.nl.dessertsSpan;
        dessertsP.textContent = setLanguage.nl.dessertsP;
        dieet.textContent = setLanguage.nl.dieet;
        placeHolderDieetwensen.placeholder = setLanguage.nl.dieetWensen;
        submitButton.textContent = setLanguage.nl.submit;
        alertBoxPositiefH3.textContent = setLanguage.nl.alertBoxPositiefH3;
        alertBoxNegatiefH3.textContent = setLanguage.nl.alertBoxNegatiefH3;
        closeModal.textContent = setLanguage.nl.closeModal;
        closeModalNegatief.textContent = setLanguage.nl.closeModalNegatief;
      });

      en.addEventListener("click", () => {
        firstName.textContent = setLanguage.en.givenName;
        placeHolderFirstName.placeholder = setLanguage.en.givenName;
        surName.textContent = setLanguage.en.surName;
        placeHolderSurName.placeholder = setLanguage.en.surName;
        trainingName.textContent = setLanguage.en.nameTraining;
        placeHolderTrainingName.placeholder = setLanguage.en.nameTraining;
        conferenceRoom.textContent = setLanguage.en.conferenceRoom;
        placeHolderConferenceRoom[0].textContent =
          setLanguage.en.conferenceRoom;
        starters.textContent = setLanguage.en.starters;
        voorgerecht1.textContent = setLanguage.en.voorgerecht1;

        voorgerecht3.textContent = setLanguage.en.voorgerecht3;

        voorgerecht5.textContent = setLanguage.en.voorgerecht5;

        voorgerecht7.textContent = setLanguage.en.voorgerecht7;
        mainCourses.textContent = setLanguage.en.mainCourses;
        hoofdgerecht1.textContent = setLanguage.en.hoofdgerecht1;

        hoofdgerecht3.textContent = setLanguage.en.hoofdgerecht3;

        hoofdgerecht5.textContent = setLanguage.en.hoofdgerecht5;

        hoofdgerecht7.textContent = setLanguage.en.hoofdgerecht7;
        dessertsSpan.textContent = setLanguage.en.dessertsSpan;
        dessertsP.textContent = setLanguage.en.dessertsP;
        dieet.textContent = setLanguage.en.dieet;
        placeHolderDieetwensen.placeholder = setLanguage.en.dieetWensen;
        submitButton.textContent = setLanguage.en.submit;
        alertBoxPositiefH3.textContent = setLanguage.en.alertBoxPositiefH3;
        alertBoxNegatiefH3.textContent = setLanguage.en.alertBoxNegatiefH3;
        closeModal.textContent = setLanguage.en.closeModal;
        closeModalNegatief.textContent = setLanguage.en.closeModalNegatief;
      });
      nl.click();
    });
}
getData();
