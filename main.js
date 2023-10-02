function Desafio03(){
    const texto = document.querySelector("h1");
    const valor = document.querySelector('#valor').value;
   
    if((valor=="1,1,0") || (valor=="1, 1, 0")){
        texto.innerHTML = "Ganhaor C";
    }

    else if((valor=="1,0,1") || (valor=="1, 0, 1")){
        texto.innerHTML = "Ganhador B"; 
    }
    
    else if((valor=="0,1,1") || (valor=="0, 1, 1")){
        texto.innerHTML = "Ganhador A"; 
    }
    else if((valor=="0,0,1") || (valor=="0, 0, 1")){
         texto.innerHTML = "Ganhador C";
    }
    else if((valor=="0,1,0") || (valor=="0, 1, 0")){
        texto.innerHTML = "Ganhador B";
    }
    else if((valor=="1,0,0") || (valor=="1, 0, 0")){
        texto.innerHTML = "Ganhador A";
    }
    else if((valor=="1,1,1") || (valor=="1, 1, 1")){
        texto.innerHTML = "*";
    }
    else if((valor=="0,0,0") || (valor=="0, 0, 0")){
        texto.innerHTML = "*"
    }
    
    else{
        texto.innerHTML = "Resultado não encontrado... =(";
      
    }

}

function ViceLider(){
    var texto = document.querySelector("h1");
    var valor = document.getElementById('valor').value;
    var[n1, n2, n3] = valor.split(',');


    if(n1 == n2 || n2 == n1 || n3 == n1 || n3 == n2 || n1 <= 0 || n2 <= 0 || n3 <= 0){
        texto.innerHTML = "Algo deu errado :(";
    }
    else if(n1 > n2 && n1 < n3 || n1 < n2 && n1 > n3){
        texto.innerHTML = "O vice-campeão é o jogador A";
    }
    else if( n2 > n1 && n2 < n3 || n2 < n1 && n2 > n3){
        texto.innerHTML = "O vice-campeão é o jogador B";
    }
    else if(n3 > n1 && n3 < n2 || n3 < n1 && n3 > n2){
        texto.innerHTML = "O vice-campeão é o jogador C";
    }
}
document.getElementById('verificarBtn').addEventListener('click', function() {
    var coordenadas = document.getElementById('coordenadas').value;
    var resultado = verificarBolaNaQuadra(coordenadas);
    document.getElementById('resultado').textContent = resultado;
});

function verificarBolaNaQuadra(coordenadas) {
    var valores = coordenadas.split(' ');
    var x = parseInt(valores[0]);
    var y = parseInt(valores[1]);

    if (x >= -500 && x <= 500 && y >= 0 && y <= 500) {
        return 'Dentro da semi-quadra';
    } else {
        return 'Fora da semi-quadra';
    }
}