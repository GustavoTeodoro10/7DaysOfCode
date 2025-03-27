function desafio6() {

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

    if (pergunta == 'sim'){
        pergunta = 1
    } else{
        return
    }

    while (pergunta == 1){
        comida = prompt('Qual comida você deseja inserir?\n Digite o nome dela.');
        categoria = prompt('Qual categoria essa comida se encaixa? \n fruta | laticínios | congelados | doces');

        if (listaDeCompras[categoria]) {
            listaDeCompras[categoria].push(comida);
            alert(`${comida} foi adicionado à categoria ${categoria}.`);
        } else {
            alert("Categoria inválida! Escolha entre: frutas, laticinios, congelados ou doces.");
        }

        pergunta = prompt ('Você deseja adicionar uma comida na sua lista de compras ou remover?\n Digite 1 para adicionar \n Digite 2 para remover \n Digite 3 para sair');

        if (pergunta==2){

            for (let categoria in listaDeCompras) {
                mensagem += `    ${categoria}: `;
                mensagem += listaDeCompras[categoria].length > 0 ? listaDeCompras[categoria].join(", ") : "";
                mensagem += "\n";}

            let remover = prompt (`${mensagem}\n Qual comida você quer remover? `);
            for (let categoria in listaDeCompras) {
                let indice = listaDeCompras[categoria].indexOf(remover);
                if (indice !== -1) {
                    listaDeCompras[categoria].splice(indice, 1);
                }
            }
            alert(`${remover} removido com sucesso!`);
        }
        else{
            for (let categoria in listaDeCompras) {
                mensagem += `    ${categoria}: `;
                mensagem += listaDeCompras[categoria].length > 0 ? listaDeCompras[categoria].join(", ") : "";
                mensagem += "\n";}
            alert(mensagem)
        }
        
    }
}