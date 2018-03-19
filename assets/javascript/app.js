


$(document).ready(function() {
  $(".questions").hide();



  var timer = {
    startTime: 30,

    start: function() {
      counter = setInterval(timer.count, 1000);
      $(".timer").html("<p>Timer: " + timer.startTime + " seconds remain</p>");
    },

    stop: function() {
      clearInterval(counter);
    },

    reset: function() {
      this.time = 30;
      $(".timer").html("<p>" + this.startTime + " seconds remain</p>");
    },

    count: function() {
      timer.startTime--;
      // console.log(timer.startTime);
      $(".timer").html("<p>Timer: " + timer.startTime + " seconds remain</p>");

      if (timer.startTime > 0) {
        $(".timer").html(
          "<p>Timer: " + timer.startTime + " seconds remain</p>"
        );
      } else {
        timer.stop();
        scoreKeeper();
        showScore();
      }
    }
  };

 

  var questionsArray = [
    {
      question: "Which president said 'we have nothing to fear but fear itself?'",
      choices: ["A. Thomas Jefferson", "B. Abraham Lincoln", "C. Andrew Jackson", "D. Franklin Delano Roosevelt"],

      answer: "D. Franklin Delano Roosevelt"
    },

    {
      question:
        "Which president said 'read my lips, no new taxes'",
      choices: ["A. Richard Nixon", "B. Gerald Ford", "C. George H W Bush", "D. Ronald Reagan"],

      answer: "C. George H W Bush"
    },

    {
      question: "Which president said 'ask not what your country can do for you, ask what you can do for your country'?",
      choices: ["A. Harry Truman", "B. John F Kennedy", "C. Lyndon Johnson", "D. Bill Clinton"],

      answer: "B. John F Kennedy"
    },

    {
      question: "Which president said 'Yesterday is not ours to recover, but tomorrow is ours to win or lose.?",
      choices: [
        "A. Lyndon Johnson",
        "B. Warren Harding",
        "C. Abraham Lincoln",
        "D. Barack Obama"
      ],

      answer: "A. Lyndon Johnson"
    },

    {
      question: "Which president said 'Times change, and we change with them.'?",

      choices: [
        "A. John Quincy Adams",
        "B. Martin Van Buren",
        "C. William Henry Harrison",
        "D. John Tyler"
      ],

      answer: "C. William Henry Harrison"
    },

    {
      question: "Which president said 'An honorable defeat is better than a dishonorable victory.'?",

      choices: ["A. Millard Fillmore", "B. Franklin Pierce", "C. Andrew Johnson", "D. Ulysses S Grant"],

      answer: "A. Millard Fillmore"
    },

    {
      question: "Which president said 'In the time of darkest defeat, victory may be nearest.'?",

      choices: ["A. Grover Cleveland", "B. William McKinley", "C. Theodore Roosevelt", "D. Woodrow Wilson"],

      answer: "B. William McKinley"
    }
  ];



  function instructionPage() {
    $(".instructions").html(
      "<h3>Test your knowledge about presidential quotes! You have 30 seconds once you hit the start button."
    );
    $(".instructions").append(
      "<button class='startButton'>Start Game!</button>"
    );
    $(".instructions").on("click", function() {
      $(this).hide();
      $(".questions").show();
    });
  }

  instructionPage();

  $(".startButton").on("click", function() {
    $(".timer").show();
    $(".questions").show();
    timer.start();
    displayQuestions();
  });

  var storeAnswers = [];
  function displayQuestions() {
    for (var i = 0; i < questionsArray.length; i++) {
      $(".questions").append(
        "<br><h4>" + questionsArray[i].question + "<h4>" + "<hr><br>"
      );



      for (var j = 0; j < questionsArray[i].choices.length; j++) {
        $(".questions").append(
          "<input type='radio' id='radio' name='question-" +
            i +
            "'value='" +
            questionsArray[i].choices[j] +
            "'>" +
            questionsArray[i].choices[j] +
            "<br><br>"
        );
      }
    }




    $(".questions").append("<button class='submitButton'>Submit</button>");

    $(document).on("click", ".submitButton", function() {
      scoreKeeper();
      showScore();
    });

    $(".questions").on("click", "#radio", function() {
      var answers = $(this).val();
      storeAnswers.push(answers);
      console.log(storeAnswers);
    });
  }

  var correct = 0;
  var incorrect = 0;

  function showScore() {
    $(".questions").empty();
    $(".questions").append("<br><h2><p>Your Score:</p></h2>");
    $(".questions").append("<h2><p>" + correct + " correct</p></h2>");
    $(".questions").append("<h2><p>" + incorrect + " incorrect</p></h2>");
    timer.stop();
    $(".timer").empty();
  }

  function scoreKeeper() {
    for (i = 0; i < storeAnswers.length; i++) {
      if (storeAnswers[i] === questionsArray[i].answer) {
        correct++;
        console.log(correct);
      } else {
        incorrect++;
      }
    }
  }
});