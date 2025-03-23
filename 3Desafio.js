function desafio3(){   
   let area = prompt("Você quer seguir para área de Front-End, (digite 1) ou seguir para a área de Back-End, (digite 2) ? ");
    let frontEnd = 0
    let backEnd = 0
    let curso = 0
    let tecnologias = ''

    while (area != 1 && area != 2){
        alert('Digite um número válido!')
        area = prompt("Você quer seguir para área de Front-End, (digite 1) ou seguir para a área de Back-End, (digite 2) ? ")
    }

    if (area ==1){
        frontEnd = prompt("Quer aprender React (digite 1) ou aprender Vue (digite 2)");
        curso = 'Front-End'
    }
    else if (area ==2){
        backEnd = prompt("Quer aprender C# (digite 1) ou aprender Java (digite 2)");
        curso = 'Back-End'
    } 

    curso = prompt(`Você quer seguir em ${curso} (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2) ? `)

    let aux = prompt('“Tem mais alguma tecnologia que você gostaria de aprender? Digite SIM')

    while (aux === 'SIM'){
        tecnologias = prompt('Qual ?')
        alert(`${tecnologias} adicionada com sucesso! `)
        aux = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite SIM')
        console.log(aux);
    }
    alert('FIM')
}