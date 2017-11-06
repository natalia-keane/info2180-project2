var image;
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
for(var k-0; k< puzlPiece.length; k++){

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

//used to switch through the four images.

function choosePic(){
var puzlPiece=document.getElementById('puzzlearea').getElementsByTagName('puzlPiece');

  switch(prompt("Choose an image. Enter 1-Tsuna,2-Arcobaleno,3-Tsuna sitting,4-Angel.") {
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
}
}
