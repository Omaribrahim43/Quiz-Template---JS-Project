const loginButton = document.getElementById("showlogin");
const registerButton = document.getElementById("showregister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const regBTN = document.getElementById("regBTN");
const logBTN = document.getElementById("logBTN");

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

function onSignIn(googleUser) {
  // This function is called when the user signs in successfully.
  const profile = googleUser.getBasicProfile();
  const idToken = googleUser.getAuthResponse().id_token;
  // You can now use the 'idToken' to authenticate the user on your backend.
  // Send the 'idToken' to your server via an API call for further verification and authentication.

  // For example, you can send the 'idToken' using a fetch API:
  fetch("/your-backend-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idToken }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      console.error("Error:", error);
    });
}

function signOut() {
  // This function is called when the user clicks the sign-out button.
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}

// Initialize the Google Sign-In button
function initGoogleSignIn() {
  gapi.load("auth2", function () {
    gapi.auth2.init({
      client_id:
        "794603395203-kr6l4uot3fr5ukdlhm2masdhmvflbgla.apps.googleusercontent.com",
      scope: "profile",
    });
  });

  // Add event listener to the sign-in button
  document
    .getElementById("google-signin-button")
    .addEventListener("click", function () {
      gapi.auth2.getAuthInstance().signIn().then(onSignIn);
    });
}

// Call the initialization function when the page is loaded
window.onload = function () {
  initGoogleSignIn();
}; 

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
  let regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
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
      document.getElementById("c-pass-message").style.color = "green";
    }
  }
};
let u = localStorage.getItem("noAcc");
if (JSON.parse(u)) {
  loginButton.classList.add("active");
  registerButton.classList.remove("active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
} else{
  loginButton.classList.remove("active");
  registerButton.classList.add("active");
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

function getNewUserID() {
  let lastUserID = localStorage.getItem("lastUserID");
  if (lastUserID === null) {
    lastUserID = 0;
  } else {
    lastUserID = parseInt(lastUserID);
  }
  const newUserID = lastUserID + 1;
  localStorage.setItem("lastUserID", newUserID);
  return newUserID;
}
regBTN.onclick = function () {
  let email1 = registrationInputs[0].value;
  let username1 = registrationInputs[1].value;
  let password1 = registrationInputs[2].value;
  if (
    document.getElementById("email-message").style.color === "green" &&
    document.getElementById("username-message").style.color === "green" &&
    document.getElementById("pass-message").style.color === "green" &&
    document.getElementById("c-pass-message").style.color === "green"
  ) {
    window.alert("registration success");
    let users1 = [];
    let user = {
      id: getNewUserID(),
      email: email1,
      username: username1,
      password: password1,
    };
    if (localStorage.users != null) {
      users1 = JSON.parse(localStorage.users);
    } else {
      users1 = [];
    }
    users1.push(user);

    localStorage.setItem("users", JSON.stringify(users1));
  } else {
    window.alert("registration unsuccess");
  }
};
logBTN.onclick = function () {
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
    } else {
      window.alert("Invalid credentials. Please try again.");
    }
  } else {
    window.alert("No registered users found. Please register first.");
  }
};
