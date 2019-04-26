
// onload runs jd_newWinLinks
window.onload = jd_newWinLinks;


/*
jd_newWinLinks creates an array of document jd_newWinLinks
if the current link className is equal to newWin, then if the
user clicks it will run jd_newWindow
*/
function jd_newWinLinks() {
	for (var j=0; j<document.links.length; j++) {
		if (document.links[j].className == "newWin") {
			document.links[j].onclick = jd_newWindow;
		}
	}
}

/*
fun jd_newWindow creates var jd_catWindow, which opens a new window object,
width and hieght control the size of the window while left and top control
where it opens on screen
*/
function jd_newWindow() {
	var jd_catWindow = window.open(this.href,"catWin","width=350,height=260,left=200,top=300");
	jd_catWindow.focus();
	return false;
}
