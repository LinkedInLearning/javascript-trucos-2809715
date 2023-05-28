function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createBall(){
  let ball = document.createElement("div");
  ball.className = "ball";
  ball.style.backgroundColor = "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")";
  ball.style.top = randomNum(350) + "px";
  ball.style.left = randomNum(1550) + "px";
  ball.addEventListener("animationend", function(event){
    document.body.removeChild(event.target);
  });
  document.body.appendChild(ball);
}

setInterval(createBall, 2);
setInterval(createBall, 2);
setInterval(createBall, 2);
setInterval(createBall, 2);
setInterval(createBall, 2);

