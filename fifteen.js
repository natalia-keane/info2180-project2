var link=document.body.getElementsByTagName('pic')[0];
console.log(link.href);

$(document).ready(function(){
    puzlPiece = $("#puzzlearea").children();

    for (i=0;i<puzzlePieces.length;i++){
        puzlPiece[i].classList.add("puzzlepiece");
    }
    for (i=0;i<4;i++){
        puzlPiece[i].style.top = "0px";
        puzlPiece[i].style.left = `${100*i}px`;
    }
    for (i=4;i<8;i++){
        puzlPiece[i].style.top = "100px";
        puzlPiece[i].style.left = `${100*(i%4)}px`;
    }
    for (i=8;i<12;i++){
        puzlPiece[i].style.top = "200px";
        puzlPiece[i].style.left = `${100*(i%4)}px`;
    }
    for (i=12;i<15;i++){
        puzlPiece[i].style.top = "300px";
        puzlPiece[i].style.left = `${100*(i%4)}px`;
    }
})
