function desafio4() {

    let numeroSecreto = parseInt(Math.random()*10+1);
    let chute = '';
    let tentativa = 3;
    console.log(numeroSecreto);

    while (tentativa > 0) {
        chute = prompt('Escolha um número entre 1 e 10')
        if (chute == numeroSecreto) {
            alert(`Parabéns!\nVocê acertou!\nO numero secreto é ${chute} !`);
            return
        }
        else if(tentativa > 0) {
            tentativa --;
            if (tentativa == 1){
            alert(`Você errou!\n Ainda tem ${tentativa} tentativa! `);
        }
            else{
                alert(`Você errou!\n Ainda tem ${tentativa} tentativas! `);
            }
        }
    }
    alert('Tente outra vez!');
}