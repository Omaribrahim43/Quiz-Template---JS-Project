let answer = document.getElementsByClassName("answer ");
let body1 = document.getElementById("body");
let next = document.getElementsByTagName("button")[0];
let box_of_quastion = document.getElementById("box-of-quastion");
let category = document.getElementById("category");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let radio4 = document.getElementById("radio4");
const login = localStorage.getItem("user");

document.getElementById("nameSpan").innerHTML = JSON.parse(localStorage.getItem(login)[0]);
let value_of_local = [];
box_of_quastion.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("answer")) {
    const answers = box_of_quastion.querySelectorAll(".answer");

    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove("background");
      answers[i].querySelector("input").checked = false;
    }

    clickedElement.classList.add("background");
    clickedElement.querySelector("input").checked = true;
  }
});
let json1 = new XMLHttpRequest();
json1.open("GET", "../json/answers.json");
let countofpage = 1;
let countofquastion = 0;
let arr = 0;
let countofpage_tch = 0;
next.addEventListener("click", function (event) {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].childNodes[1].checked) {
      let value_of_answer = answer[i]
        .querySelector(".contentofanswer")
        .innerHTML.trim();
      let stringifyvalue = JSON.stringify(value_of_answer);
      value_of_local.push(stringifyvalue);
      localStorage.setItem("Answer", value_of_local);
    }
  }
  if (!(radio1.checked || radio2.checked || radio3.checked || radio4.checked)) {
    event.preventDefault();
    console.log("hi");
  }
  let json = JSON.parse(json1.responseText);
  countofquastion += 1;
  countofpage += 1;
  if (countofquastion == 5) {
    category.innerHTML = "English Quiz";
    arr -= 1;
  }

  arr += 1;
  if (countofquastion <= 10) {
    if (countofpage <= 5) {
      next.innerHTML = "Next Question";
      let nextquastion = `
    <p id="numofquestion">
    ${countofpage}/5
        </p>
        <div id="question">
         ${json[arr].question}
    
        </div>
    <div id="answers">
    <!-- box1  -->
    <div class="answer1 answer">
       <input type="radio" name="answer" id="radio1">
      <label class="contentofanswer" for="radio1">
      ${json[arr].answers.answer_a}
 </label >
    </div>
    <!-- box2 -->

      <div class="answer2 answer">

         <input type="radio" name="answer" id="radio">
        <label class="contentofanswer">
        ${json[arr].answers.answer_b}


        </label>
    </div>
    <!-- box3  -->
 
    <div class="answer3 answer">
       <input type="radio" name="answer" id="radio">
      <label class="contentofanswer">
      ${json[arr].answers.answer_c}


      </label>
  </div>
        <!-- box4  -->
 
        <div class="answer4 answer">
           <input type="radio" name="answer" id="radio">
          <label class="contentofanswer" for="radio">
          ${json[arr].answers.answer_d}

  
          </label>
      </div>
  </div>
    `;
      box_of_quastion.innerHTML = nextquastion;
    } else {
      let pageBetweenAnswer = `
       <p id="english_page">You have completed the IQ Quiz and must now take the English language Quiz.</p>>
        `;
      box_of_quastion.innerHTML = pageBetweenAnswer;
      next.innerHTML = "Start English Quiz";
      countofpage = 0;
    }
  } else if (countofquastion == 11) {
    arr -= 1;
    box_of_quastion.innerHTML = `this is ${countofquastion}`;
    category.innerHTML = " Technical Test";
    next.innerHTML = "Start Technical Quiz";
    let pageBetweenAnswer = `
        <p id="english_page">You have completed the English Quiz and must now take the Technical language Quiz.</p>>
         `;
    box_of_quastion.innerHTML = pageBetweenAnswer;
  }
  if (countofquastion > 11 && countofquastion < 22) {
    countofpage_tch += 1;
    let nextquastion = `
    <p id="numofquestion">
    ${countofpage_tch}/10
        </p>
        <div id="question">
        ${json[arr].question}
   
       </div>
   <div id="answers">
   <!-- box1  -->
   <div class="answer1 answer">
      <input type="radio" name="answer" id="radio1">
     <label class="contentofanswer" for="radio1">
     ${json[arr].answers.answer_a}
</label >
   </div>
   <!-- box2 -->

     <div class="answer2 answer">

        <input type="radio" name="answer" id="radio">
       <label class="contentofanswer">
       ${json[arr].answers.answer_b}


       </label>
   </div>
   <!-- box3  -->

   <div class="answer3 answer">
      <input type="radio" name="answer" id="radio">
     <label class="contentofanswer">
     ${json[arr].answers.answer_c}


     </label>
 </div>
       <!-- box4  -->

       <div class="answer4 answer">
          <input type="radio" name="answer" id="radio">
         <label class="contentofanswer" for="radio">
         ${json[arr].answers.answer_d}

 
         </label>
     </div>
 </div>
    `;
    box_of_quastion.innerHTML = nextquastion;
  } else if (countofquastion == 22) {
    let rania = `rania`;
    box_of_quastion.innerHTML = rania;
  }
});
// localStorage.clear()
json1.send();
// json111.send();
// for (let i = 1; i < 5; i++) {
//   an="answer"
//    let answerr=an+i
//     answerr.addEventListener("click",function () {
//         answerr.style.background="blue"
//     })
// }
