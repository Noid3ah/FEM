const form = document.getElementById("form");
const email = document.querySelector("#email");
const error = document.querySelector(".error-text");
const submit = document.getElementById("submit");

let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;

submit.addEventListener("click", blockSubmit);

function blockSubmit(event) {
  event.preventDefault();
  validate();
}

function validate() {
  const emailValue = email.value.trim();
  const emailNull = "Field cannot be empty";
  const emailInvalid = "Please provide a valid email";

  if (emailValue === "") {
    setInvalid(email, emailNull);
  } else if (!isValidEmail(emailValue)) {
    setInvalid(email, emailInvalid);
  } else if (isValidEmail(emailValue)) {
    setValid(email);
  }
}

function setInvalid(input, msg) {
  const contain = input.parentElement;
  error.innerText = msg;
  contain.classList.remove("invalid");
  contain.classList.add("invalid");
}

function setValid(input) {
  const contain = input.parentElement;
  contain.classList.remove("invalid");
  error.innerText = "";
}

function isValidEmail(email) {
  return regex.test(email);
}
