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
      $("#status").html("Check complete");
      Draw(); // GET the next card
    }
    else {
      alert("try again");
      ClearText();
    }
  });

  function ClearText() {
    $("#answer").val("");
    $("#status").html("Try again");
  }

  function startGame() {
 
    resetValues();
    updateQuote();
   
    // clear old and start a new timer
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
  }
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
      Draw(); // GET the next card
    }
    else {
      alert("try again");
      ClearText();
    }
  });

  function ClearText() {
    $("#answer").val("");
    $("#status").html("X");
  }

  function Init() {
    var card1 = {
      card: 1,
      picture : "APP.png",
      answertext : "`"
    };
    
    var card2 = {
      card: 2,
      picture : "bart.jpg",
      answertext : "Bart"
    };
    deck.push(card1);
    deck.push(card2);
    deck.push(card3);
    deck.push(card4);
    deck.push(card5);
    deck.push(card6);
    deck.push(card7);
    deck.push(card8);
    deck.push(card9);
    deck.push(card10);
    deck.push(card11);
    deck.push(card12);
    deck.push(card13);
    deck.push(card14);
    deck.push(card15);
    deck.push(card16);
    deck.push(card17);
    deck.push(card18);
    deck.push(card19);
    deck.push(card20);
    deck.push(card21);
    deck.push(card22);
    deck.push(card23);
    deck.push(card24);
    deck.push(card25);
    deck.push(card26);
    deck.push(card27);
    deck.push(card28);
    deck.push(card29);
    deck.push(card30);
  }

  function Draw() {
    currcard  =  deck.shift();
    $("#a").attr("src", currcard.picture);
  }
});

  function Draw() {
    currcard  =  deck.shift();
    $("#a").attr("src", currcard.picture);
  }
})