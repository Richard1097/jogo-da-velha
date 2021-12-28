// e executado quando a pagina HTML for carregada
document.addEventListener('DOMContentLoaded',() =>{

// pega todos os quadrados do HTML
    let quadrados = document.querySelectorAll(".quadrado");

// evento de click no quadrado
    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click',handleClick);
    })

})
function handleClick(event){
// target e o elemento que recebeu o evento
    let quadrado = event.target;
    let position = quadrado.id;

   if(handleMove(position)){
       setTimeout(() => {
           alert("O jogo acabou - o vencedor foi o jogador " +  (playerTime + 1))
       }, 10)
   };
    atualizarQuadrado(position);


}
// atualiza o tabuleiro colocando os simbolos
function atualizarQuadrado(position){
// atualiza o tabuleiro colocando os simbolos
    let quadrado = document.getElementById(position.toString());
    let simbolo = tabuleiro[position];
    quadrado.innerHTML = `<div class = '${simbolo}'></div>`

}


function restart(){
    

    tabuleiro = ['' , '' , '' ,'' ,'' ,'' ,'' ,'' ,'' ,];
    playerTime = 0;
    gameOver = false;
    for(let i = 0; i <=8; i++ ){
        let quadrado = document.getElementById(i.toString());
        quadrado.innerHTML = "";
    }

}

// função para atualizar os quadrados ao reiniciar o game
function atualizarQuadrados(){

    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado)=>{
        let position = quadrado.id;
        let simbolo = tabuleiro[position];
        if(simbolo != ''){
            quadrado.innerHTML = `<div class = '${simbolo}'></div>`
        }
    })
}

