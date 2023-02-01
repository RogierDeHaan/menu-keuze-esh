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

const checkVoor2 = document.querySelector("#voorgerecht2");

const checkVoor4 = document.querySelector("#voorgerecht4");

const checkVoor6 = document.querySelector("#voorgerecht6");
const checkVoor7 = document.querySelector("#geen-voorgerecht");

const checkHoofd2 = document.querySelector("#hoofdgerecht2");

const checkHoofd4 = document.querySelector("#hoofdgerecht4");

const checkHoofd6 = document.querySelector("#hoofdgerecht6");
const checkHoofd7 = document.querySelector("#geen-hoofdgerecht");

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

        voorgerecht2.textContent = setLanguage.nl.voorgerecht2;

        voorgerecht4.textContent = setLanguage.nl.voorgerecht4;

        voorgerecht6.textContent = setLanguage.nl.voorgerecht6;
        voorgerecht7.textContent = setLanguage.nl.voorgerecht7;
        mainCourses.textContent = setLanguage.nl.mainCourses;

        hoofdgerecht2.textContent = setLanguage.nl.hoofdgerecht2;

        hoofdgerecht4.textContent = setLanguage.nl.hoofdgerecht4;

        hoofdgerecht6.textContent = setLanguage.nl.hoofdgerecht6;
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

        voorgerecht2.textContent = setLanguage.en.voorgerecht2;

        voorgerecht4.textContent = setLanguage.en.voorgerecht4;

        voorgerecht6.textContent = setLanguage.en.voorgerecht6;
        voorgerecht7.textContent = setLanguage.en.voorgerecht7;
        mainCourses.textContent = setLanguage.en.mainCourses;

        hoofdgerecht2.textContent = setLanguage.en.hoofdgerecht2;

        hoofdgerecht4.textContent = setLanguage.en.hoofdgerecht4;

        hoofdgerecht6.textContent = setLanguage.en.hoofdgerecht6;
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
