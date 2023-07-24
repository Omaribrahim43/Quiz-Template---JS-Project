let body = document.body;
let corrAnswers = new XMLHttpRequest();
corrAnswers.open("GET", "../json/answers.json");
corrAnswers.onload = function () {
  const data = JSON.parse(corrAnswers.responseText);
  for (i = 0; i <= 20; i++) {
    body.innerHTML = `
   <img src="../images/logo.png" class="img-fluid img1"
      alt="logo">
   <div class="quiz-container">
    <h4 class="h">Question [i]</h4> <br>
    <p class="question">${data[i].question}</p>
    <div class="answers">
      <div class="answer">
        <input type="radio" name="answer" id="radio">
        <label for="radio">${data[i].answer_a}
        </label>
      </div>
      <div class="answer">
        <input type="radio" name="answer" id="radio">
        <label for="radio">${data[i].answer_b}
        </label>
      </div>
      <div class="answer">
        <input type="radio" name="answer" id="radio">
        <label for="q1c">${data[i].answer_c}
        </label>
      </div>
      <div class="answer">
        <input type="radio" name="answer" id="radio">
        <label for="radio">${data[i].answer_d}
        </label>
      </div>
    </div>
  </div>
   `;
    if (submittedAns[i] === data[i].correct_answers) {
      submittedAns[i].style.background = "green";
    } else {
      submittedAns[i].style.background = "red";
      data[i].correct_answers.style.background = "green";
    }
  }
};

submittedAns = localStorage.getItem("answer");
submittedAnsjson = JSON.parse(submittedAns);
corrAnswers.send();
