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
