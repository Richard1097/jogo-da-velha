// tabuleiro, player da vez e simbolos
let tabuleiro = ['' , '' , '' ,'' ,'' ,'' ,'' ,'' ,'' ,];
let playerTime = 0;
let simbolo = ['o', 'x'];
let gameOver = false;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove(position){

    if(gameOver){
        return;
    }
// pega a posição que passamos no tabuleiro e coloca o simbolo do player da vez
    if (tabuleiro[position] == ''){
    tabuleiro[position] = simbolo[playerTime];
    
    gameOver = isWin();
// condição que muda a vez do jogador

    if(gameOver == false) {
        if(playerTime == 0) {
            playerTime = 1;
         } else {
            playerTime = 0;
        }
    }
}
    return gameOver;
}    
// condições de vitoria do game
function isWin(){
    
    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i];
        
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(tabuleiro[pos1] == tabuleiro[pos2]&&
            tabuleiro[pos1] == tabuleiro[pos3]&&
            tabuleiro[pos1] != ''){

                return true;
            }
    }

    return false;
}







