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
      $("#status").html("Try again");
    }
  });

  function ClearText() {
    $("#answer").val("");
    $("#status").html("Check Complete");
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
      answertext : "`"
    };
        
    var card3 = {
      card: 3,
      picture : "Left_possession.png",
      answertext : "1"
    };
    var card4 = {
      card: 4,
      picture : "Right_Possession.png",
      answertext : "2"
    };
    
    var card5 = {
      card: 5,
      picture : "Book_it.png",
      answertext : "b"
    };
        
    var card6 = {
      card: 6,
      picture : "Contact_loop.png",
      answertext : "numpad 2"
    };

    var card7 = {
      card: 7,
      picture : "Intensity_loop.png",
      answertext : "numpad 8"
    };
    
    var card8 = {
      card: 8,
      picture : "Pause.png",
      answertext : "numpad 5"
    };
        
    var card9 = {
      card: 9,
      picture : "Go.png",
      answertext : "numpad 9"
    };
    var card10 = {
      card: 10,
      picture : "Slow.png",
      answertext : "numpad 6"
    };
    
    var card11 = {
      card: 11,
      picture : "Recall_APP.png",
      answertext : "delete"
    };
        
    var card12 = {
      card: 12,
      picture : "Forward_one.png",
      answertext : "numpad ."
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
  }

  function Draw() {
    currcard  =  deck.shift();
    $("#a").attr("src", currcard.picture);
  }
});