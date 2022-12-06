$(document).ready(function(){
  $("#status").val("hello there");
  $("#a").attr("src", "APP.png");
});

// script.js
$(document).ready(function() {
  var deck = new Array();
  var currcard = null;

  Init();
  Draw();
  
  // EVENT HANDLER

  $("#clickme").click(function() {
    var useranswer = $("#answer").val();
    $("#status").html(useranswer);
    
    if (currcard.answertext == useranswer) {
      alert("correct");
      ClearText();
      $("#status").html("Correct","on to the next one","well done","check complete");
      Draw(); // GET the next card
    }
    else {
      alert("try again");
      ClearText();
    }
  });

  function ClearText() {
    $("#answer").val("");
    $("#status").html("Time's ticking");
  }

  function startGame() {
 
    resetValues();
    updateQuote();
   
    // clear old and start a new timer
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
  }


  function Init() {
    var card1 = {
      card: 1,
      picture : "APP.png",
      answertext : "`"
    };
    
    var card2 = {
      card: 2,
      picture : "Reset.png",
      answertext : "2"
    };
    
    var card3 = {
      card: 3,
      picture : "Reset.png",
      answertext : "3"
    };

    var card4 = {
      card: 4,
      picture : "APP.png",
      answertext : "4"
    };

    deck.push(card1);
    deck.push(card2);
    deck.push(card3);
    deck.push(card4);
  }

  function Draw() {
    currcard  =  deck.shift();
    $("#a").attr("src", currcard.picture);
  }
});


function startGame() {
 
  resetValues();
  updateQuote();
 
  // clear old and start a new timer
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}
function resetValues() {
  timeLeft = TIME_LIMIT;
  timeElapsed = 0;
 
  input_area.value = "";
  timer_text.textContent = timeLeft + 's';
  restart_btn.style.display = "none";
}

function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;
 
    // increase the time elapsed
    timeElapsed++;
 
    // update the timer text
    timer_text.textContent = timeLeft + "s";
  }
  else {
    // finish the game
    finishGame();
  }
}