//jd_buzzwords is an array of buzzwords for the bingo squares
var jd_buzzwords = new Array ("Aggregate",
	"Ajax",
	"API",
	"Bandwidth",
	"Beta",
	"Bleeding edge",
	"Convergence",
	"Design pattern",
	"Disruptive",
	"DRM",
	"Enterprise",
	"Facilitate",
	"Folksonomy",
	"Framework",
	"Impact",
	"Innovate",
	"Long tail",
	"Mashup",
	"Microformats",
	"Mobile",
	"Monetize",
	"Open social",
	"Paradigm",
	"Podcast",
	"Proactive",
	"Rails",
	"Scalable",
	"Social bookmarks",
	"Social graph",
	"Social software",
	"Spam",
	"Synergy",
	"Tagging",
	"Tipping point",
	"Truthiness",
	"User-generated",
	"Vlog",
	"Webinar",
	"Wiki",
	"Workflow"
);

// jd_usedWords returns an empty array of the length of jd_buzzwords
var jd_usedWords = new Array(jd_buzzwords.length);

//window.onload - Once the wondow loads jd_initAll will run
window.onload = jd_initAll;


/* jd_initAll - calls the function jd_anotherCard during the onclick event, and calls
 * function jd_newCard
 */
function jd_initAll() {
	if (document.getElementById) {
		document.getElementById("reload").onclick = jd_anotherCard;
		jd_newCard();
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

/* jd_newCard- Starts a loop, starting at index 0, increment by 1 and continuing
 as long as the index in less than 24.
jd_setSquare will run j amount of times
 */
function jd_newCard() {
	for (var j=0; j<24; j++) {
		jd_setSquare(j);
	}
}

/*jd_setSquare - sets the square to the word using a do while loop.
during the loop jd_randomWord is equal to a random whole number between 0 and the length of jd_buzzwords
while jd_usedWords is at jd_randomWord place is true var jd_currSquare is equal to the concatination of square
plus jd_thisSquare.
*/
function jd_setSquare(jd_thisSquare) {
	do {
		var jd_randomWord = Math.floor(Math.random() * jd_buzzwords.length);
	}
	while (jd_usedWords[jd_randomWord]);
	jd_usedWords[jd_randomWord] = true;

	var jd_currSquare = "square" + jd_thisSquare;

	//gets the innerHTML of the words on the sqaures
	document.getElementById(jd_currSquare).innerHTML = jd_buzzwords[jd_randomWord];

	//class name is empty
	document.getElementById(jd_currSquare).className = "";

	//onmousedown runs jd_toggleColor
	document.getElementById(jd_currSquare).onmousedown = jd_toggleColor;
}


/**
 * jd_anotherCard - loads a new bingo card, starting a loop that starts at 0,
 * goes for the length of jd_buzzwords, and increases by 1 each time.
 */
function jd_anotherCard() {
	for (var j=0; j<jd_buzzwords.length; j++) {
		jd_usedWords[j] = false;
	}

	jd_newCard();
	return false;
}

//jd_togglecolor changes the color of a square if a user clicks on it. jd_checkWin runs
function jd_toggleColor(evt) {
	if (evt) {
		var jd_thisSquare = evt.target;
	}
	else {
		var jd_thisSquare = window.event.srcElement;
	}
	if (jd_thisSquare.className == "") {
		jd_thisSquare.className = "pickedBG";
	}
	else {
		jd_thisSquare.className = "";
	}
	jd_checkWin();
}


//jd_checkWin sets jd_winningOption to -1, and jd_setSquares to 0
// assigns a new array to jd_winners, which each value is equal to each possible winning set
function jd_checkWin() {
	var jd_winningOption = -1;
	var jd_setSquares = 0;
	var jd_winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

//for loop runs, var jd_currSquareequals the concatination of square and j
// if the className is not null and equals pickedBG
	for (var j=0; j<24; j++) {
		var jd_currSquare = "square" + j;
		if (document.getElementById(jd_currSquare).className != "") {
			document.getElementById(jd_currSquare).className = "pickedBG";
			//jd_setSquares is equal to the bitwise or of jd_setSquares and Math.pow(2,j)
			// Math.pow takes 2 to the jth power
			jd_setSquares = jd_setSquares | Math.pow(2,j);
		}
	}

//another for loop, that runs the length of the array of jd_winners
	for (var j=0; j<jd_winners.length; j++) {

/* if the bitwise and of jd_winners[j] and jd_setSquares equals jd_winners[j]
then jd_winningOption is j
*/
		if ((jd_winners[j] & jd_setSquares) == jd_winners[j]) {
			jd_winningOption = j;
		}
	}

/*if jd_winningOption is greater than -1, a for loop runs. if jd_winners[jd_winningOption] Math.pow(2,j)
are true, then jd-jd_currSquare will be set to the concatination of square + j
Then change the class name of jd_currSquare to winningBG, which will flash the red gif

*/
	if (jd_winningOption > -1) {
		for (var j=0; j<24; j++) {
			if (jd_winners[jd_winningOption] & Math.pow(2,j)) {
				jd_currSquare = "square" + j;
				document.getElementById(jd_currSquare).className = "winningBG";
			}
		}
	}
}
