// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var result = document.getElementById("result");
// var clear = document.getElementById("clear");

// clear.addEventListener("click", function() {
//     result.innerHTML = null;
// })

// var array = ['guineapig0', 'guineapig1', 'guineapig2', 'guineapig3', 'guineapig4', 'guineapig5', 'guineapig6', 'guineapig7', 'guineapig8', 'guineapig9'];

// array.forEach(function(el) {
//     var circle = document.getElementById(el);
//     var seconds = getRandomInt(800, 1200);

//     circle.addEventListener("click", function(e) {
//         var number = e.target.innerText;
//         result.innerHTML += number;
//     })
    
//     var myVar = setInterval(function() {
//         circle.style.top = getRandomInt(0, 100) + '%';
//         circle.style.left = getRandomInt(0, 100) + '%';
//     }, seconds, circle);
// }) 

var dot1 = document.getElementById("dot1");

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {
    dot1.classList.toggle("animate");
});