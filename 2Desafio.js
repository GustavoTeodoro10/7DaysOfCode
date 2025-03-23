function desafio2(){   

    let nome = prompt("Qual o seu nome?");
    while (nome == null || nome ==''){
        alert('ERRO!!!')
        nome = prompt("Qual o seu nome?")
    }    
    let idade = prompt("Quantos anos você tem?");
    while (idade == null || idade ==''){
        alert('ERRO!!!')
        idade = prompt("Qual o seu nome?")
    } 
    let linguagem = prompt("Qual linguagem de programação você está estudando?");
    while (linguagem == null || linguagem ==''){
        alert('ERRO!!!')
        linguagem = prompt("Qual o seu nome?")

    alert(`Olá ${nome} , você tem ${idade} anos e já está aprendendo ${linguagem}!`);

    let resposta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para Não`);

    if (resposta ==1){
        alert("Muito bom! Continue estudando e você terá muito sucesso")
        }   
        
    if (resposta ==2){
            alert("Ahh que pena... Já tentou aprender outras lingagens?")
    }
}}