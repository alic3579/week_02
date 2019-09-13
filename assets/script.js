var myWrapper = document.getElementById("wrapper");
var myWrapperTwo = document.getElementById("wrapperTwo");



for (var i = 0; i < 200; i++) {

	myWrapper.innerHTML += '<div class="patternUnit" style=" border: 5px solid rgb('+(255 - i)+','+(170 + (i*3))+', '+(200 + (i+1))+'); transform: rotate('+ (200 * i) +'deg);"></div>';
}


// border-radius: ('+(50 + (i * 8))+'px); transform: scale('+ (5* i) +');