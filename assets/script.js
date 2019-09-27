var myCircle = document.getElementById("circle");
var mySquare = document.getElementById("square");



for (var i = 0; i < 105; i++) {

	myCircle.innerHTML += '<div class="circleUnit" style=" background-color: rgb('+(0 + (i*4))+', 200, '+(255 - (i*2))+'); transform: scale('+ (.01 * i) +'); "></div>';
} 




for (var j = 0; j < 66; j++) {

	mySquare.innerHTML += '<div class="squareUnit" style=" border: 5px solid black; transform: rotate('+ (160 * j) +'deg); border-radius:'+(50 - j)+'%; "></div>';
}