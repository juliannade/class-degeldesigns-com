//when the window loads jd_initBannerLink runs
window.onload = jd_initBannerLink;

//jd_theAd is set to zero
var jd_theAd = 0;

//jd_adURL is a new array of sites
var jd_adURL = new Array("negrino.com","sun.com","microsoft.com");

//jd_adImages is a new array of images
var jd_adImages = new Array("illustration.png","black_background.png","bagels.png");

/*
fun jd_initBannerLink checks to see if there is an id "adBanner" that is surrounded by
a link tag. And if so, when the link is clicked jd_newLocation will be called and then
the jd_rotate function is called.
*/
function jd_initBannerLink() {
	if (document.getElementById("adBanner").parentNode.tagName == "A") {
		document.getElementById("adBanner").parentNode.onclick = jd_newLocation;
	}

	jd_rotate();
}

//sets the current document window to the string plus the value of jd_adURL at jd_theAd
// return false prevents the default href link from loading
function jd_newLocation() {
	document.location.href = "http://www." + jd_adURL[jd_theAd];
	return false;
}


/*
during jd_rotate jd_theAd increments by 1
when jd_theAd is equal to the amount of images, and has reached the end of the array
it resets back to the beginning
*/
function jd_rotate() {
	jd_theAd++;
	if (jd_theAd == jd_adImages.length) {
		jd_theAd = 0;
	}

	/*the new source for "adBanner" are in the array jd_adImages and the
	 value of jd_theAd determines which image appears
	 */
	document.getElementById("adBanner").src = jd_adImages[jd_theAd];

// function rotate is called every 3 seconds
	setTimeout(jd_rotate, 2 * 1000);
}
