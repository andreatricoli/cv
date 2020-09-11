var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS) {
	console.log('This is a IOS device');
	var list = document.querySelectorAll(".special-section");
	for(var i=0; i<list.length; i++){
		list[i].classList.remove('special-section');
		list[i].classList.add('special-section-ios-version');
	}
} else {
	console.log('This is Not a IOS device');
}
