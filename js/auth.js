function auth() {
  const emailOrUsername = document.getElementById("emailOrUsername");
  const pas = document.getElementById("pas");
  let inputEmailOrUsername = emailOrUsername.value;
  let inputPassword = pas.value;

  if (localStorage.users != null) {
    let users1 = JSON.parse(localStorage.users);
    let loggedInUser = null;
    // Check if the inputEmailOrUsername matches any user's email or username
    for (let i = 0; i < users1.length; i++) {
      if (
        users1[i].email === inputEmailOrUsername ||
        users1[i].username === inputEmailOrUsername
      ) {
        loggedInUser = users1[i];
        break;
      }
    }
    if (loggedInUser !== null && loggedInUser.password === inputPassword) {
      window.location.assign("/index.html");
      let user = [];
      user.push(loggedInUser.username);
      user.push(true);
      localStorage.setItem("user", JSON.stringify(user));
      //   const welcomeUsername = document.getElementById("welcomeUsername");
      //   welcomeUsername.textContent = localStorage.getItem("personName");
      // Perform any actions you need to do after successful login, e.g., redirect to a different page
    } else {
      window.alert("Invalid credentials. Please try again.");
    }
  } else {
    window.alert("No registered users found. Please register first.");
  }
}
