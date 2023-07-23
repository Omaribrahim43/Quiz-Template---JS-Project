const loginButton = document.getElementById("showlogin");
const registerButton = document.getElementById("showregister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginButton.addEventListener("click", () => {
  loginButton.classList.add("active");
  registerButton.classList.remove("active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

registerButton.addEventListener("click", () => {
  loginButton.classList.remove("active");
  registerButton.classList.add("active");
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

const registrationInputs = document.querySelectorAll(
  "#registerForm .input-field input"
);

// regEx for email
registrationInputs[0].onkeyup = () => {
  let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (registrationInputs[0].value === "") {
    document.getElementById("email-message").innerHTML = "";
  } else {
    if (!regex.test(registrationInputs[0].value)) {
      document.getElementById("email-message").innerHTML =
        "Invalid email given.";
      document.getElementById("email-message").style.color = "red";
    } else {
      document.getElementById("email-message").innerHTML = "Valid email given.";
      document.getElementById("email-message").style.color = "green";
    }
  }
};

// regEx for username
registrationInputs[1].onkeyup = () => {
  let regex = /^[a-zA-Z0-9]{3,7}$/;
  if (registrationInputs[1].value === "") {
    document.getElementById("username-message").innerHTML = "";
  } else {
    if (!regex.test(registrationInputs[1].value)) {
      document.getElementById("username-message").innerHTML =
        "Invalid username given.";
      document.getElementById("username-message").style.color = "red";
    } else {
      document.getElementById("username-message").innerHTML =
        "Valid username given.";
      document.getElementById("username-message").style.color = "green";
    }
  }
};

// regEx for password
registrationInputs[2].onkeyup = () => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  if (registrationInputs[2].value === "") {
    document.getElementById("pass-message").innerHTML = "";
  } else {
    if (!regex.test(registrationInputs[2].value)) {
      document.getElementById("pass-message").innerHTML =
        "Invalid password given.";
      document.getElementById("pass-message").style.color = "red";
    } else {
      document.getElementById("pass-message").innerHTML =
        "Valid password given.";
      document.getElementById("pass-message").style.color = "green";
    }
  }
};

// regEx for repeated password
registrationInputs[3].onkeyup = () => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  if (registrationInputs[3].value === "") {
    document.getElementById("c-pass-message").innerHTML = "";
  } else {
    if (registrationInputs[3].value != registrationInputs[2].value) {
      document.getElementById("c-pass-message").innerHTML =
        "it does not match the password given.";
      document.getElementById("c-pass-message").style.color = "red";
    } else {
      document.getElementById("c-pass-message").innerHTML = "";
    }
  }
};
