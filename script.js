let playerName1 = document.querySelector(".player1");
let playerName2 = document.querySelector(".player2");
let turn = "X";
let draw = 0;
let reset = document.querySelector(".result");
let mode = document.querySelector(".game-mode").value;

// let cTurn = "man";
let ran = 0;

let win = document.getElementById("win");

function gameMode() {
    mode = document.querySelector(".game-mode").value;
    if(mode == "manual"){
        playerName1.value = "";
        playerName2.value = "";
    }
    else{
        playerName2.value = "Computer";
    }
}


let startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", ()=>{
    player_1 = playerName1.value;
    player_2 = playerName2.value;
    
    if(player_1 != "" && player_2 != ""){
        document.querySelector(".welcome").remove();
        document.querySelector(".game-screen").style.display = "flex";
    }
    document.querySelector(".names").innerHTML = `<span>Player 1: ${player_1}</span> <br>
    <span>Player 2: ${player_2} </span>`
})

let box = document.querySelectorAll(".btn");

box.forEach((btn) => {
    btn.addEventListener("click", () => {
        draw++;
        if(mode == "manual") {
            btn.innerText = turn;
            winner();
        }
        else {
            btn.innerText = turn;
            winner();
            turn = turn == "X" ? "O" : "X";
            if(!checkWin()) {
                autoPlay();
                turn = turn == "X" ? "O" : "X";
                winner();
            }
        }
        btn.disabled = true;
    })
})

function winner() {
    if(checkWin()){
        reset.innerHTML = `<h2>Winner is Name: ${turn}</h2> <button class="new-game" onclick="resetBtn()">New Game</button>`;
        box.forEach((btn) => {
            btn.disabled = true;
        })
    }
    else{
        if(draw > 8) {
            reset.innerHTML = `<h2>Game has Draw!</h2>
            <button class="new-game" onclick="resetBtn()">New Game</button>`;
        }
    }
    turn = turn == "X" ? "O" : "X";
}

function checkWin () {
    if(box[0].innerText == turn && box[1].innerText == turn && box[2].innerText == turn){
        win.classList.add("win1");
        return true;
    }
    if(box[3].innerText == turn && box[4].innerText == turn && box[5].innerText == turn){
        win.classList.add("win2");
        return true; 
    }
    if(box[6].innerText == turn && box[7].innerText == turn && box[8].innerText == turn){ 
        win.classList.add("win3");
        return true;}
    if(box[0].innerText == turn && box[3].innerText == turn && box[6].innerText == turn) {
        win.classList.add("win4");
        return true;}
    if(box[1].innerText == turn && box[4].innerText == turn && box[7].innerText == turn) {
        win.classList.add("win5");
        return true;}
    if(box[2].innerText == turn && box[5].innerText == turn && box[8].innerText == turn) {
        win.classList.add("win6");
        return true;}
    if(box[0].innerText == turn && box[4].innerText == turn && box[8].innerText == turn) {
        win.classList.add("win7");
        return true;}
    if(box[2].innerText == turn && box[4].innerText == turn && box[6].innerText == turn) {
        win.classList.add("win8");
        return true;}
    return false;
}

function resetBtn() {
    draw = 0;
    box.forEach((btn) => {
        btn.disabled = false;
    })
    for(let i = 0; i < 9; i++) {
        box[i].innerText = "";

    }
    reset.innerHTML = "";

    win.classList.remove("win1");
    win.classList.remove("win2");
    win.classList.remove("win3");
    win.classList.remove("win4");
    win.classList.remove("win5");
    win.classList.remove("win6");
    win.classList.remove("win7");
    win.classList.remove("win8");

}

function autoPlay () {
    ran = Math.floor(Math.random() * 8);
    console.log(ran);
    console.log(box[ran].innerText);
        if(box[ran].innerText == "X" || box[ran].innerText == "O") {
            autoPlay();
        }
        else {
            turn = turn == "X" ? "O" : "X";
            box[ran].innerText = turn;
            box[ran].disabled = true;
            draw++;
            turn = turn == "X" ? "O" : "X";
        }
}