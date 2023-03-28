
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playGame() {
      var player1 = 0;
      var player2 = 0;
      var txtresult="";
      var player1Roll = rollDice();
      var player2Roll = rollDice(); 
      var sc1 =document.getElementById("pr1");
      sc1.innerHTML=player1Roll;
      var Img = document.getElementById("pl1Img");
			Img.src = "images/dice"+player1Roll+".png";
			Img.alt = player1Roll;

	  var sc2= document.getElementById("pr2");
      sc2.innerHTML = player2Roll;
      var Img2 = document.getElementById("pl2Img");
      Img2.src ="images/dice"+player2Roll+".png";
      console.log(Img2);
      Img2.alt = player2Roll;

      if (player1Roll > player2Roll) {
        player1++;
        txtresult+="Player 1 wins this round! Congratulations!!";
      } else if (player2Roll > player1Roll) {
        player2++;
        txtresult+="Player 2 wins this round! Congratulations!!";
      } else {
        txtresult+="Tie!!!";
      }
      document.getElementById("result").innerHTML = txtresult;
    
    }
  
 
playGame();
  