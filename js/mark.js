let showResult = document.getElementById("showResult")
let body = document.body
let quizMark= document.getElementById("quizMark")
let numCorrect = document.getElementById("numCorrect")
let numWrong = document.getElementById ( "numWrong")
let corrAnswers = new XMLHttpRequest();
corrAnswers.open("GET", "../json/answers.json");
let  count=0
corrAnswers.onload= function(){
const data = JSON.parse(corrAnswers.responseText);
   for(i=0; i<=20;i++){
   if (submittedAns[i] === data[i].correct_answers){
    count=+1
}
}
quizMark.innerHTML= (count *2);
numCorrect.innerHTML= count;
numWrong.innerHTML= (20-count);
}
let tbody = document.getElementById("tbody")
tbody = `
          <tr>
            <td id="mark"> <span id="quizMark">${count *2}</span>out of 40 </td>
            <td id="answersNum"> <span id="numCorrect"> ${count}</span> Correct Answers , 
              <span id="numWrong"> ${20-count}</span> Wrong Answers </td>
          </tr>`
showResult.addEventListener("click",myFunction);
function myFunction(){
   window.location.href='../pages/result.html';
}
let mark = document.getElementById("mark")
let answersNum= document.getElementById("answersNum")
submittedAns = localStorage.getItem("answer")
submittedAnsjson = JSON.parse(submittedAns)
corrAnswers.send();










