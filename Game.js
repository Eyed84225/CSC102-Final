window.alert('Hello')

function rollDice(){
  // Randomlly selects a number between 1 and 6
  var die1 = Math.floor(Math.random() * 6) +1 ;
  var die2 = Math.floor(Math.random() * 6) +1 ;
  // writes what you got for the rolls
  console.log("Your first roll was " + die1)
  console.log("Your second Roll was " + die2)
  //tells the sum
  var sum = die1 + die2
  // makes a window appear so you can see the results
window.alert("Your first role was" + " " + die1)
window.alert("Your Second role was" + " " + die2)
window.alert("Making your total" + " " + sum)
  
  console.log("That makes your total " + sum)
  // if statements to show if you won or lose 
  if (sum == 7) { 
    console.log("Nice try, but you fail")
    // will pop up a window to show weather you won or lose
    window.alert("meaning you falied, Press the button to play again")
  } else if(sum == 11) { 
    console.log("Nice try, but you fail")
        // will pop up a window to show weather you won or lose

    window.alert("meaning you falied, Press the button to play again")
  }
  else {
    console.log("you won")
        // will pop up a window to show weather you won or lose
    window.alert("meaning you Won, Press the button to play again")

  }

}


