var myWrapper = document.getElementById("wrapper");
var myContent = document.getElementById("content");



for (var i = 0; i < 200; i++) {

	myWrapper.innerHTML += '<div class="patternUnit" style=" border: 5px solid rgb('+(0 + i)+', 200, '+(255 - i)+');"></div>';
}


// border-radius: ('+(50 + (i * 8))+'px); transform: scale('+ (5* i) +');



for (var j = 0; j < 160; j++) {

	myContent.innerHTML += '<div class="contentUnit" style=" border: 5px solid rgb('+(0 + j)+', 0, '+(255 - j)+'); transform: rotate('+ (180 * j) +'deg);"></div>';
}