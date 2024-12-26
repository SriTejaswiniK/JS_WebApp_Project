function mouseover(x) {
  x.style.border = "14px solid black";
}
function mouseout(x) {
  x.style.border = "10px solid black";
}
function pick(n) {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) {
    let img = document.createElement("img");
    img.src = "../images/r2.png";
    img.className = "output";
    document.body.appendChild(img);
    if (x == n) {
      document.getElementById("final").innerText = "Draw!";
    } else if (n == 1) {
      document.getElementById("final").innerText = "You won!!";
    } else {
      document.getElementById("final").innerText = "You lost!";
    }
  } else if (x == 1) {
    let img = document.createElement("img");
    img.src = "../images/p2.png";
    img.className = "output";
    document.body.appendChild(img);
    if (x == n) {
      document.getElementById("final").innerText = "Draw!";
    } else if (n == 2) {
      document.getElementById("final").innerText = "You won!!";
    } else {
      document.getElementById("final").innerText = "You lost!";
    }
  } else if (x == 2) {
    let img = document.createElement("img");
    img.src = "../images/s2.png";
    img.className = "output";
    document.body.appendChild(img);
    if (x == n) {
      document.getElementById("final").innerText = "Draw!";
    } else if (n == 0) {
      document.getElementById("final").innerText = "You won!!";
    } else {
      document.getElementById("final").innerText = "You lost!";
    }
  }
}
