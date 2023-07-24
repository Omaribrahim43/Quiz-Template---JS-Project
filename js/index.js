const loginButtonIndex = document.getElementById("login");
const signUpButtonIndex = document.getElementById("signup");
const logoutButtonIndex = document.getElementById("logout");
const login = localStorage.getItem("user");

loginButtonIndex.addEventListener("click", function () {
  // take the user to the login page
  localStorage.setItem(login[0], "");
  localStorage.setItem(login[1], false);
  window.location.assign("/pages/registration.html");
});
logoutButtonIndex.addEventListener("click", function () {
  localStorage.setItem("user", false);
  window.location.assign("/pages/registration.html");
});
signUpButtonIndex.addEventListener("click", function () {
  // take the user to the sign-up page
  
  window.location.assign("../Pages/registration.html");
});

const quizButton = document.getElementById("start-quiz-btn");
quizButton.addEventListener("click", function () {
  // take the user to the quiz page
  if (JSON.parse(login) == false) {
    window.alert("Log in first or create an account");
    window.location.assign("../Pages/registration.html");
  } else {
    window.location.assign("../Pages/quiz_start.html");
  }
});
// ----------------------------------------------------------

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
