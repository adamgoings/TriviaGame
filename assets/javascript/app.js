//global variables---------------------------
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = ["Cash rules everything around me: CREAM. Get the money.  Dolla dolla bill y'all!"];

var answers1 = ["EPMD", "Wu Tang Clan", "KRS One"];

//ready the document
$(document).ready(function() {

  //clicking the start button sends us to the trivia questions AND begins the timer
  $("#start-button").on("click", function createQuestions() {

    $("#start-button").hide();

    $("#questions").append(
      `
      <p>Lyric: ${questions[0]} </p>
      
      <input type="radio" id="q1a1" name="question1" value="${answers1[0]}" />
        <label for="q1a1"><span>${answers1[0]}</span></label>

      <input type="radio" id="q1a2" name="question1" value="${answers1[1]}"/>
        <label for="q1a2"><span>${answers1[1]}</span></label>

      <input type="radio" id="q1a3" name="question1" value="${answers1[2]}"/>
        <label for="q1a3"><span>${answers1[2]}</span></label>

      <br>
      `
      );

      //generate the submission button      
      $("#done-button").html(`<button>SUBMIT</button>`);

    });


//click the submission button to show results
      $("#done-button").on("click", function(){

        //logic here for either selecting the correct or incorrect answer and updating the appropriate counter.

        if ($("input:radio[name ='question1']:checked").val() === answers1[1]) {
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
    
        // console.log($("input:radio[name ='question1']:checked").val());
        // console.log(answers1[1]);
       
        // show the results of the trivia game

        $("#results").append(
          `
         <p>Correct Answers: ${correctAnswers}</p>
         <p>Incorrect Answers: ${incorrectAnswers}</p>
         <p>Unanswered Questions: ${unanswered}</p> 
          `
        )
        
//hide the questions and submission button        
        $("#questions").hide();
        $("#done-button").hide();
      })
    
    
  





});
