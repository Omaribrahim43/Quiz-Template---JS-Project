const loginButtonIndex = document.getElementById("login");
const signUpButtonIndex = document.getElementById("signup");
const logoutButtonIndex = document.getElementById("logout");

// ----------------------------------------------------------
// take the user to the login page
loginButtonIndex.addEventListener("click", function () {
  // take the user to the login page.
  localStorage.setItem(login[0], "");
  localStorage.setItem(login[1], false);
  localStorage.setItem("noAcc", true);
  window.location.assign("/pages/registration.html");
});
// ----------------------------------------------------------
// it logouts the user.
logoutButtonIndex.addEventListener("click", function () {
  localStorage.setItem("user", JSON.stringify(["", false]));
  window.location.assign("/pages/registration.html");
});
// ----------------------------------------------------------
// take the user to the registration page.
signUpButtonIndex.addEventListener("click", function () {
  localStorage.setItem("noAcc", false);
  window.location.assign("../Pages/registration.html");
});
// ----------------------------------------------------------
// take the user to the quiz page.
const login = localStorage.getItem("user");
const quizButton = document.getElementById("start-quiz-btn");
quizButton.addEventListener("click", function () {
  // if he is logged in.
  if (JSON.parse(login)[1]) {
    window.location.assign("../Pages/quiz_start.html");
  }
  // if he is not logged in.
  else {
    window.alert("Log in first or create an account");
    window.location.assign("../Pages/registration.html");
  }
});

// ----------------------------------------------------------
// checking if there is a user logged in or not to edit the content of the navbar.

if (JSON.parse(login)[1] == true) {
  loginButtonIndex.style.display = "none";
  signUpButtonIndex.style.display = "none";
  logoutButtonIndex.style.display = "inline-block";
  document.getElementById("welcomeUsername").innerText = `Welcome ${
    JSON.parse(login)[0]
  }`;
} else {
  loginButtonIndex.style.display = "inline-block";
  signUpButtonIndex.style.display = "inline-block";
  logoutButtonIndex.style.display = "none";
  document.getElementById("welcomeUsername").display = "none";
}