//create 2 arrays that will make up the card deck, the first is the suits, then the card values and an empty array that will make up the deck
var suits = new Array("hearts", "diamonds", "spades", "clubs")
var cardValues= new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A")

//var deck is a new array matrix of suits and cardValues
var deck = new Array();
for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cardValues.length; x++)
		{
      //creates a new card object with a value and suit, adds it to the deck array
			var card = {Value: cardValues[x], Suit: suits[i]};
      deck.push(card);
		}
}

// getRoyaltyValues turns the strings into numbers, for function sum later
function getRoyaltyValues(cardValue){
  switch (cardValue){
    case 'A':
      return 11
    case 'J':
      return 10
    case 'Q':
      return 10
    case 'K':
      return 10
    default:
      return cardValue
  }
}

//renderDeck begings by creating a new empty array and var sum, var randomNum
// these variables are used to caluclate the sum of the cards and prevent duplicates
function renderDeck()
{
	document.getElementById('deck').innerHTML = '';
  var randomNum;
  var sum = 0;
  var randomOld = new Array()
  for(var i = 0; i < 3; i++)
	{
    randomNum = Math.floor(Math.random() * deck.length)
    while (randomOld.includes(randomNum)){
      randomNum = Math.floor(Math.random() * deck.length)
      console.log("found a duplicate")
    }
    randomOld.push(randomNum);

    //var card creates a div element
		var card = document.createElement("div");

    //var icon is assigned an image file based on the current position of the deck array
		var icon = '';
		if (deck[randomNum].Suit == 'hearts')
		icon="graphics/" + deck[randomNum].Value + "H" + ".png";
		else if (deck[randomNum].Suit == 'spades')
		icon="graphics/" + deck[randomNum].Value + "S" + ".png";
		else if (deck[i].Suit == 'diamonds')
		icon="graphics/" + deck[randomNum].Value + "D" + ".png";
		else
		icon="graphics/" + deck[randomNum].Value + "C" + ".png";

    //the card is displayed in the html
    card.innerHTML = '<img src="' + icon + '"/>';
    card.className = 'card';
    document.getElementById("deck").appendChild(card);

    //the cardValue is parsed into a number so the sum can be calculated
    sum = sum + parseInt(getRoyaltyValues(deck[randomNum].Value))
	}

  //if the sum is less than or equal to 21, a winning message is printed, along with the score
  if (sum <= 21){
     document.getElementById("results").innerHTML = "You won! Your Score: " + sum, myMove();
  }  else {

    //if the score is more than 21 then a losing message is displayed
    document.getElementById("results").innerHTML = "You lost. Your Score: " + sum;
  }

}

//render deck runs
renderDeck();

//playAgain is called when the user clicks the play again button
document.getElementById('play').onclick = playAgain;

//playAgain calls renderDeck
function playAgain () {
  renderDeck();
  return false
}

//creats a bagel animation if a player scores less than 21
function myMove()
{
  var elem = document.createElement("div");
  elem.className = 'myAnimation';
  elem.id='myAnimation';
  document.getElementById("deck").appendChild(elem);
  var pos = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (pos == 55) {
      clearInterval(id);
      myAnimation.style.display='none';
    } else {
      pos++;
      elem.style.top = pos + '1px';
      elem.style.left = pos + 'px';}
    }
  }
