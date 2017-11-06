var move;
var image;
var slot=15;
var start=false;
window.onload=function(){



//puts puzzle pieces on the board
$(document).ready(function(){
    puzlPiece = $("#puzzlearea").children();

    for (k=0; k<puzlPiece.length; k++){
        puzlPiece[k].classList.add("puzzlepiece");

    }
    for (k=0; k<4; k++){
        puzlPiece[k].style.top = "0px";
        puzlPiece[k].style.left = `${100*k}px`;
        puzlPiece[k].style.backgroundPosition= `${-100*k}px 0px`;
    }
    for (k=4; k<8; k++){
        puzlPiece[k].style.top = "100px";
        puzlPiece[k].style.left = `${100*(k%4)}px`;
        puzlPiece[k].style.backgroundPosition=`${-100*(k%4)}px -100px`;
    }
    for (k=8; k<12; k++){
        puzlPiece[k].style.top = "200px";
        puzlPiece[k].style.left = `${100*(k%4)}px`;
        puzlPiece[k].style.backgroundPosition=`${-100*(k%4)}px -200px`;
    }
    for (k=12; k<15; k++){
        puzlPiece[k].style.top = "300px";
        puzlPiece[k].style.left = `${100*(k%4)}px`;
        puzlPiece[k].style.backgroundPosition=`${-100*(k%4)}px -300px`;
    }
})

var shuffleb=document.getElementById("shufflebutton");
shuffleb.addEventListener("click", shuffle);

//shuffle pieces
function shuffle() {
  var num=100;
      for(var k =0; k<num; k++){
          var lst = [];
          for(var i =0; i<puzlPiece.length; i++){
              if(canMove(puzlPiece[i])!="none"){
                  lst.push(i);
              }

          }

          if(lst.length!=0){
              var n = lst[Math.floor((Math.random()*lst.length)+0)];
              canMove(puzlPiece[n]);
              moveTile(puzlPiece[n]);
          }
      }
      move="none";

}

//tell if piece can move
function canMove(){
  if(!start){

        if((parseInt(this.style.left)+parseInt(this.offsetWidth)) === parseInt(getX()) && this.style.top===getY()){
        this.className = this.className + " movable";
        move="right";
        }else if(parseInt(this.style.left) === (parseInt(getX())+parseInt(this.offsetWidth)) && this.style.top===getY()){
            this.className = this.className + " movable";
            move= "left";
        }else if((parseInt(this.style.top)+parseInt(this.offsetHeight)) === parseInt(getY()) && this.style.left===getX()){
            this.className = this.className + " movable";
            move= "down";
        }else if(parseInt(this.style.top) === (parseInt(getY())+parseInt(this.offsetHeight)) && this.style.left===getX()){
            this.className = this.className + " movable";
            move= "up";
        }else{
            move= "none";
        }
  }


}

function getX(){
        if(slot>=0 && slot<=3){
            return slot*100+'px';
        }else if(slot>=4 && slot<=7){
            return (slot-4)*100+'px';

        }else if(slot>=8 && slot<=11){
            return (slot-8)*100+'px';

        }else{
            return (slot-12)*100+'px';

        }

}


function getY(){
    if(slot>=0 && slot<=3){
            return '0px';
        }else if(slot>=4 && slot<=7){
            return '100px';

        }else if(slot>=8 && slot<=11){
            return '200px';

        }else{
            return '300px';

        }
}

//moves piece on board
function moveTile(piece){

    switch(move){
        case "right":
          piece.style.left=parseInt(piece.style.left)+100+'px';
          space-=1;
          break;
        case "left":
          piece.style.left=parseInt(piece.style.left)-100+'px';
          space+=1;
          break;
        case "down":
          piece.style.top=parseInt(piece.style.top)+100+'px';
          space-=4;
          break;
        case "up":
          piece.style.top=parseInt(piece.style.top)-100+'px';
          space+=4;
          break;
        default:


    }
/*
//used to switch through the four images.

function choosePic(){
var puzlPiece=document.getElementById('puzzlearea').getElementsByTagName('puzlPiece');
var response=prompt("Choose an image. Enter 1-Tsuna,2-Arcobaleno,3-Tsuna sitting,4-Angel.");
  switch(puzlPiece) {
    case "1":
        puzlPiece[k].style.backgroundImage="background.jpg";
        break;
    case "2":
        puzlPiece[k].style.backgroundImage="background2.jpg";
        break;
    case "3":
        puzlPiece[k].style.backgroundImage="background3.jpg";
        break;
    case "4":
        puzlPiece[k].style.backgroundImage="background4.jpg";
        break;
    default:
        puzlPiece[k].style.backgroundImage="background1.jpg";
        break;
}
}*/
}
