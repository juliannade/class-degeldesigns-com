window.onload = startAll;
// 3 types of bagels
function startAll() {
	document.getElementById("Sesame").onclick = jd_saySomething;
	document.getElementById("Everything").onclick = jd_saySomething;
	document.getElementById("Cinnamon").onclick = jd_saySomething;
}
// The main characteristics/ingredients of the bagels
function jd_saySomething() {
	switch(this.id) {
		case "Sesame":
			alert("Sesame bagels contain sesame seeds.");
			break;
		case "Everything":
			alert("Everything bagels contain onion, sesame seeds, poppy seeds, and salt.");
			break;
		case "Cinnamon":
			alert("Cinnamon bagels are flavored with cinnamon and occaisionally raisins.");
			break;
		default:
	}
}

window.addEventListener("load",initPage,false);

function initPage() {
	var now = new Date();
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);

	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;

	var lastVisit = cookieVal("pageVisit");
	if (lastVisit == 0) {
		lastVisit = "";
	}

	document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString();
	document.cookie = "pageVisit=" + now + ";expires=" + expireDate.toGMTString();

	var outMsg = "You have visited this page " + hitCt + " times.";
	if (lastVisit != "") {
		outMsg += "<br>Your last visit was " + lastVisit;
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}

function cookieVal(cookieName) {
	var thisCookie = document.cookie.split("; ");

	for (var i=0; i<thisCookie.length; i++) {
		if (cookieName == thisCookie[i].split("=")[0]) {
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}
