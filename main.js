console.log("welcom to my game tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn  = "X" ; 
let isGameOver = false ;

// Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Funtion to check for win 
const checkWin = () => {
    let boxtext = document.querySelectorAll('.boxText');
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
   
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText !== "") ){ 
            document.getElementById("info").innerText = boxtext[e[0]].innerText + "  win" ;
            isGameOver = true;
            document.querySelector(".imgbox img").style.width = "200px";
          
        }
    })
}


//game logic 
music.play();
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === "" && !isGameOver){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            
            if(!isGameOver){
                document.getElementById("info").innerText =  "Turn for  " + turn ;
            }
        }
    })
})


//add event listner to the reset button 

reset.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll('.boxText');

    Array.from(boxtext).forEach( (element) =>{
        element.innerText = "";
    })
    turn = "X";
    document.querySelector(".imgbox img").style.width = "0px";
    document.getElementById("info").innerText =  "Turn for  " + turn ;
    isGameOver = false;

})