let startQuiz = document.getElementById("start");
let exit = document.getElementById("exit");
const login = localStorage.getItem("user");

document.getElementById("Name").innerHTML = JSON.parse(login)[0];
startQuiz.addEventListener("click", function () {
  // if he is logged in.
  if (JSON.parse(login)[1]) {
    window.location.assign("../pages/quiz_start.html");
    
  }
  // if he is not logged in.
  else {
    window.alert("Log in first or create an account");
    window.location.assign("../Pages/registration.html");
  }
});

exit.addEventListener("click", function () {
  window.location.assign("../index.html");
});
