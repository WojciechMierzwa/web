var gap = document.getElementById("gap");
var jump = false;

gap.addEventListener("animationiteration",(e)=>{
	var top = Math.floor(Math.random() * 400) + 100;
	console.log(top);
	gap.style.top = -top + "px";
});

var fall = setInterval(()=>{

	var ball = document.getElementById("ball");
	var top = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));

	console.log(top);
	ball.style.top = top + 10 + "px";

	var ballheight = ball.getBoudingClientRect().height;
	console.log(ballheight);

	if(top >= 541 + ballheight)
{
	alert("Game Over");
	clearInterval(fall);
	window.location.reload();
}


var gapbound =document.getElementById("gap").getBoundingClientRect();
var ballbound =document.getElementById("ball").getBoundingClientRect();



if(ballbound.left >= gapbound.left && !( ballbound.top>gapbound.top && ballbound.bottom < gapbound.bottom ))
{
	alert("Game Over");
	window.location.reload();
}


	if(!jump) ball.style.top = top + 10 + "px";

},50);

window.addEventListener("keydown",(e)=>{
	if(e.key== "ArrowUp"){
		console.log("I");
		jump = "true";

		var ball = document.getElementById("ball");
		var top = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
		ball.style.top = top - 50 + "px";

		setTimeout(()=>{
			jump = false;
		},1000);




	}




})