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
      ClearText();
      Draw(); // GET the next card
    }
    else {
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

    var card13 = {
      card: 13,
      picture : "Back_one.png",
      answertext : "numpad 0"
    };
    
    var card14 = {
      card: 14,
      picture : "Last_bookmark.png",
      answertext : "numpad -"
    };
        
    var card15 = {
      card: 15,
      picture : "Next_bookmark.png",
      answertext : "numpad +"
    };
    var card16 = {
      card: 16,
      picture : "SMARTData_Penalty.png",
      answertext : "f"
    };
    
    var card17 = {
      card: 17,
      picture : "SMARTData_RedCard.png",
      answertext : "r"
    };
        
    var card18 = {
      card: 18,
      picture : "SMARTData_Goal.png",
      answertext : "g"
    };

    var card19 = {
      card: 19,
      picture : "SMARTData_MistakenIdentity.png",
      answertext : "m"
    };
    
    var card20 = {
      card: 20,
      picture : "Rewind.png",
      answertext : "numpad 7"
    };
        
    var card21 = {
      card: 21,
      picture : "Open_SMARTData.png",
      answertext : "ctrl d"
    };

    var card22 = {
      card: 22,
      picture : "Open_Pending Archives.png",
      answertext : "alt g"
    };
    
    var card23 = {
      card: 23,
      picture : "Open_Audio Panel.png",
      answertext : "ctrl z"
    };
        
    var card24 = {
      card: 24,
      picture : "Open_CaptureStatusControl.png",
      answertext : "alt v"
    };
    var card25 = {
      card: 25,
      picture : "Toggle-All-Recording.png",
      answertext : "ctrl shift r"
    };
    
    var card26 = {
      card: 26,
      picture : "SMARTData_Kick-Off.png",
      answertext : "k"
    };
        
    var card27 = {
      card: 27,
      picture : "Check_APP.png",
      answertext : "delete"
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
  }

  function Draw() {
    currcard  =  deck.shift();
    $("#a").attr("src", currcard.picture);
  }
});
