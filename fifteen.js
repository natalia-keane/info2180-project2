
window.onload=function(){



//used to switch through the four images.
function choosePic(){
  switch(expression) {
    case n:
        style.backgroundImage="";
        break;
    case n:
        style.backgroundImage="";
        break;
    case n:
        style.backgroundImage="";
        break;
    case n:
        style.backgroundImage="";
        break;
    default:
        style.backgroundImage="";
        break;
}
}

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
        puzlPiece[k].style.backgroundPosition=`${-100*(k%4)}px 100px`;
    }
    for (k=8; k<12; k++){
        puzlPiece[k].style.top = "200px";
        puzlPiece[k].style.left = `${100*(k%4)}px`;
        puzlPiece[k].style.backgroundPosition=`${-100*(k%4)}px 200px`;
    }
    for (k=12; k<15; k++){
        puzlPiece[k].style.top = "300px";
        puzlPiece[k].style.left = `${100*(k%4)}px`;
        puzlPiece[k].style.backgroundPosition=`${-100*(k%4)}px 300px`;
    }
})

}
