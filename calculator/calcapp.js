let dialogboxEl = document.getElementById('dialogbox')

function cler() {
  dialogboxEl.value = "";
}
function one() {
 dialogboxEl.value += 1;

}
function two() {
 dialogboxEl.value += 2;

}
function three() {
 dialogboxEl.value += 3;

}
function four() {
 dialogboxEl.value += 4;

}
function five() {
dialogboxEl.value += 5;
}
function six() {
 dialogboxEl.value += 6;

}
function seven() {
 dialogboxEl.value += 7;
}
function eight() {
 dialogboxEl.value += 8;

}
function nine() {
 dialogboxEl.value += 9;

}
function zero() {
 dialogboxEl.value += "0";

}
function plusminors() {
 dialogboxEl.value += "±";

}
function  percentage(){
  dialogboxEl.value += "%"
}
function  divide(){
  dialogboxEl.value += "/"
}
function  multiply(){
  dialogboxEl.value += "*"
}
function  sub(){
  dialogboxEl.value += "-"
}
function  add(){
  dialogboxEl.value += "+"
}
function  point(){
  dialogboxEl.value += "."
}
function result() {
dialogboxEl.value = eval(dialogboxEl.value)
}
