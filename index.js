const form = document.getElementById("account-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateForm();
});

const validateForm = function () {
  // trim to remove the white spaces
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === "") {
    setError(fname, "First Name cannot be empty");
  } else {
    setSuccess(fname);
  }

  if (lnameValue === "") {
    setError(lname, "Last Name cannot be empty");
  } else {
    setSuccess(lname);
  }

  if (emailValue === "") {
    setError(email, "Looks like email is empty");
  } else if (isEmailValid(emailValue)) {
    setSuccess(email);
  } else {
    setError(email, "Provide valid email address");
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else if (passwordValue.length < 6 || passwordValue.length > 15) {
    setError(password, "Password min 6 and max 20 characters");
  } else {
    setSuccess(password);
  }
};

const setError = function (input, errorMessage) {
  const formControl = input.parentElement;
  if (formControl.classList.contains("success")) {
    formControl.classList.remove("success");
  }
  formControl.classList.add("error");
  const paragraph = formControl.querySelector("p");
  paragraph.textContent = errorMessage;
};

const setSuccess = function (input) {
  const formControl = input.parentElement;
  if (formControl.classList.contains("error")) {
    formControl.classList.remove("error");
  }
  formControl.classList.add("success");
};

const isEmailValid = function (email) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};
