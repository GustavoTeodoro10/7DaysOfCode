function desafio5() {

    let listaDeCompras = {
        fruta:[],
        laticínios:[],
        congelados:[],
        doces:[]
    }
    let pergunta = prompt ('Você deseja adicionar uma comida na sua lista de compras?\n sim ou não');
    let comida = [];
    let categoria = []
    let mensagem = 'Lista de compras: \n'

    while (pergunta == 'sim'){
        comida = prompt('Qual comida você deseja inserir?\n Digite o nome dela.');
        categoria = prompt('Qual categoria essa comida se encaixa? \n fruta | laticínios | congelados | doces');

        if (listaDeCompras[categoria]) {
            listaDeCompras[categoria].push(comida);
            alert(`${comida} foi adicionado à categoria ${categoria}.`);
        } else {
            alert("Categoria inválida! Escolha entre: frutas, laticinios, congelados ou doces.");
        }
        pergunta = prompt ('Você deseja adicionar uma comida na sua lista de compras?\n SIM ou NÃO');
    }

    for (let categoria in listaDeCompras) {
        mensagem += `    ${categoria}: `;
        mensagem += listaDeCompras[categoria].length > 0 ? listaDeCompras[categoria].join(", ") : "";
        mensagem += "\n";
    }
    alert(mensagem);
}