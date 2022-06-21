// JavaScript shape code
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = "8";
ctx.strokeStyle = "red";
ctx.rect(5, 5, 150, 150);
ctx.stroke();