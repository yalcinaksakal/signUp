const form = document.getElementById("form");
const pwdEl1 = document.getElementById("password1");
const pwdEl2 = document.getElementById("password2");

const msgContainer = document.querySelector(".message-container");
const msg = document.getElementById("message");

let isValid = false;
let pwdsMatch = false;

function styleMsg(color) {
  msg.style.color = color;
  msgContainer.style.borderColor = color;
}
function pwdsBorder(color) {
  pwdsMatch = color === "green" ? true : false;
  pwdEl1.style.borderColor = pwdEl2.style.borderColor = color;
}

function validateForm() {
  //using constraint API
  isValid = form.checkValidity();
  //Style msg for err
  if (!isValid) {
    msg.textContent = "Please fill out all fields.";
    styleMsg("red");
    return false;
  }
  if (pwdEl1.value === pwdEl2.value) pwdsBorder("green");
  else {
    msg.textContent = "Make sure passwords match.";
    styleMsg("red");
    pwdsBorder("red");
    return false;
  }

  //if rom isvalid and pwds match

  msg.textContent = "Successfully registered.";
  styleMsg("green");
  return true;
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  form.reset();
  form.hidden = true;
}

function processFormData(e) {
  e.preventDefault();
  if (validateForm()) storeFormData();
}

//event listener
form.addEventListener("submit", processFormData);
