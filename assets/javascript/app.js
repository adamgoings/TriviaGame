//global variables---------------------------
var correctAnswers = 0;
var incorrectAnswers = 0;
var totalAnswers = correctAnswers + incorrectAnswers;
var unanswered = 0;

var questions = ["Cash rules everything around me: CREAM. Get the money.  Dolla dolla bill y'all!", "Spit your game, talk your sh*t, grab your gat, call your clique.", "I see I said, jealousy I said. Got the whole industry mad at me I said","And since birth I've been cursed with this curse to just curse, and just blurt this berserk and bizzare sh*t that works...", "Out on bail, fresh outta jail. California Dreamin.  Soon as I step on the stage I'm hearin hoochies screamin."];

var answers1 = ["EPMD", "Wu Tang Clan", "KRS One"];
var answers2 = ["Notorious BIG", "Dr Dre", "Boosie Bad Ass"];
var answers3 = ["Lil Wayne", "50 Cent", "Jay Z"];
var answers4 = ["Logic", "Drake", "Eminem"];
var answers5 = ["2Pac", "Eazy E", "Kendrick Lamar"];

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

      <p>Lyric: ${questions[1]} </p>

      <input type="radio" id="q2a1" name="question2" value="${answers2[0]}"/>
        <label for="q2a1"><span>${answers2[0]}</span><label>

      <input type="radio" id="q2a2" name="question2" value="${answers2[1]}"/>
        <label for="q2a2"><span>${answers2[1]}</span><label>

      <input type="radio" id="q2a3" name="question2" value="${answers2[2]}"/>
        <label for="q2a3"><span>${answers2[2]}</span><label>

      <br>

      <p>Lyric: ${questions[2]} </p>

      <input type="radio" id="q3a1" name="question3" value="${answers3[0]}"/>
        <label for="q3a1"><span>${answers3[0]}</span><label>
  
      <input type="radio" id="q3a2" name="question3" value="${answers3[1]}"/>
        <label for="q3a2"><span>${answers3[1]}</span><label>
  
      <input type="radio" id="q3a3" name="question3" value="${answers3[2]}"/>
        <label for="q3a3"><span>${answers3[2]}</span><label>
  
        <br>

        <p>Lyric: ${questions[3]} </p>

        <input type="radio" id="q4a1" name="question4" value="${answers4[0]}"/>
          <label for="q4a1"><span>${answers4[0]}</span><label>
    
        <input type="radio" id="q4a2" name="question4" value="${answers4[1]}"/>
          <label for="q4a2"><span>${answers4[1]}</span><label>
    
        <input type="radio" id="q4a3" name="question4" value="${answers4[2]}"/>
          <label for="q4a3"><span>${answers4[2]}</span><label>
    
          <br>

          <p>Lyric: ${questions[4]} </p>

          <input type="radio" id="q5a1" name="question5" value="${answers5[0]}"/>
            <label for="q5a1"><span>${answers5[0]}</span><label>
      
          <input type="radio" id="q5a2" name="question5" value="${answers5[1]}"/>
            <label for="q5a2"><span>${answers5[1]}</span><label>
      
          <input type="radio" id="q5a3" name="question5" value="${answers5[2]}"/>
            <label for="q5a3"><span>${answers5[2]}</span><label>
      
            <br>
      `
      );

      //generate the submission button      
      $("#done-button").html(`<button>SUBMIT</button>`);


      //create a countdown timer that submits the results once at 0
      var n = 30;
      setTimeout(countDown, 1000);

        function countDown () {
          n--;
          if (n > 0) {
            setTimeout(countDown, 1000);
          } else {
            results();
          }
          
          console.log(n);
        }

    });


      $("#done-button").on("click",submitAnswers());
      
      //function for answer submission logic
      function submitAnswers() {
      console.log(this);


        //logic here for either selecting the correct or incorrect answer and updating the appropriate counter.

        if ($("input:radio[name ='question1']:checked").val() === answers1[1]) {
          correctAnswers++;
        } else if ($("input:radio[name ='question1']:checked").val() === answers1[0] || $("input:radio[name ='question1']:checked").val() === answers1[2]) {
          incorrectAnswers++;
        }

        if ($("input:radio[name ='question2']:checked").val() === answers2[0]) {
          correctAnswers++;
        } else if ($("input:radio[name ='question2']:checked").val() === answers2[1] || $("input:radio[name ='question2']:checked").val() === answers2[2]) {
          incorrectAnswers++;
        }

        if ($("input:radio[name ='question3']:checked").val() === answers3[2]) {
          correctAnswers++;
        } else  if ($("input:radio[name ='question3']:checked").val() === answers3[0] || $("input:radio[name ='question3']:checked").val() === answers3[1]) {
          incorrectAnswers++;
        }

        if ($("input:radio[name ='question4']:checked").val() === answers4[2]) {
          correctAnswers++;
        } else if ($("input:radio[name ='question4']:checked").val() === answers4[0] || $("input:radio[name ='question4']:checked").val() === answers1[1]) {
          incorrectAnswers++;
        }

        if ($("input:radio[name ='question5']:checked").val() === answers5[0]) {
          correctAnswers++;
        } else if ($("input:radio[name ='question5']:checked").val() === answers5[1] || $("input:radio[name ='question5']:checked").val() === answers5[2]) {
          incorrectAnswers++;
        }
        
        

        //creating logic for unanswered questions
        if (totalAnswers === 5) {
          unanswered = 0;
        } else {
          unanswered = 5 - totalAnswers;
        } 
        results();
      } 
      

      function results() {
        // show the results of the trivia game
        //hide the questions and submission button        
        $("#questions").hide();
        $("#done-button").hide();

        $("#results").append(
          `
          <p>Correct Answers: ${correctAnswers}</p>
          <p>Incorrect Answers: ${incorrectAnswers}</p>
          <p>Unanswered Questions: ${unanswered}</p> 
          `
        )
      }
  });
