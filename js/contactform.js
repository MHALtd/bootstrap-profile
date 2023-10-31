const scriptURL = "https://script.google.com/macros/s/AKfycbwLEiNdr8zp-c-2Gd2CGhqWZCnYStU-zefim3bMwmYypflXx23jHZZIkUnKE0jIwJyv9Q/exec";
const form = document.forms["portofolio-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoad = document.querySelector(".btn-load");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // when button pressed
  // show load button, hide send button
  btnLoad.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // show send button, hide load button
      btnLoad.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      // show alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
