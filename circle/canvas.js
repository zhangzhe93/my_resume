var ball = {x:112,y:112,R:50,r:30,angle:[0,0.5,1,1.5],beta:0.05,a:4.5};

window.onload = function(){
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	canvas.width = 350;
	canvas.height = 162;
	setInterval(update,50);
	function update(){
		updateposition(ctx,ball);
		}
	}
function updateposition(ctx,ball){
	ball.angle[0] = ball.angle[0] + ball.beta;
	ball.angle[1] = ball.angle[1] + ball.beta;
	ball.angle[2] = ball.angle[2] + ball.beta;
	ball.angle[3] = ball.angle[3] + ball.beta;
	if(ball.x > 300||ball.x < 50){
		ball.a = -ball.a;
		ball.beta = -ball.beta;
		console.log("hah");
		}
	ball.x = ball.x + ball.a;
	draw(ctx,ball);
}
function stopRotate(ball){ball.beta = 0;}
function startRotate(ball){ball.beta = 0.05;}
function draw(ctx, ball){
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
	ctx.beginPath();
	ctx.arc(ball.x,ball.y,ball.R,ball.angle[0]*Math.PI,ball.angle[1]*Math.PI);
	ctx.arc(ball.x,ball.y,ball.r,ball.angle[0]*Math.PI,ball.angle[1]*Math.PI);
	ctx.fillStyle = "yellow";
	ctx.width = 20;
	ctx.strokeStyle = "yellow";
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(ball.x,ball.y,ball.R,ball.angle[1]*Math.PI,ball.angle[2]*Math.PI);
	ctx.arc(ball.x,ball.y,ball.r,ball.angle[1]*Math.PI,ball.angle[2]*Math.PI);
	ctx.fillStyle = "blue";
	ctx.width = 20;
	ctx.strokeStyle = "blue";
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(ball.x,ball.y,ball.R,ball.angle[2]*Math.PI,ball.angle[3]*Math.PI);
	ctx.arc(ball.x,ball.y,ball.r,ball.angle[2]*Math.PI,ball.angle[3]*Math.PI);
	ctx.fillStyle = "red";
	ctx.width = 20;
	ctx.strokeStyle = "red";
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(ball.x,ball.y,ball.R,ball.angle[3]*Math.PI,ball.angle[0]*Math.PI);
	ctx.arc(ball.x,ball.y,ball.r,ball.angle[3]*Math.PI,ball.angle[0]*Math.PI);
	ctx.fillStyle = "purple";
	ctx.width = 20;
	ctx.strokeStyle = "purple";
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
	ctx.fillStyle = "gray";
	ctx.width = 20;
	ctx.strokeStyle = "black";
	ctx.fill();
	ctx.stroke();
}