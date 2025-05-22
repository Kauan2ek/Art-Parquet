// console.log("Produtos.js carregou!");

// URL
const URL = window.location.href;
// console.log(URL);
if (URL.includes("mais=true")) {
    setTimeout(() => {
        atualizarItens();
        carregarItens();
    }, 1000);
}

// Parte de exibir novas divs de itens
const blocoItens = document.querySelector(".bloco-itens");
const verMaisP = document.querySelector(".verMais");
let itensExistentes = document.querySelectorAll(".item");
let novosItens = [];
atualizarItens();

// Parte do JSON
let produtos;
carregarJSON();


// Essa função atualiza a quantidade de itens aparecendo
function atualizarItens() {
    itensExistentes = document.querySelectorAll(".item");
    itens = itensExistentes;
    novosItens = [];
}



function carregarItens() {
    // console.log(produtos);
    qtdNovosItens = 6;

    /// produtos.length < itensExistentes.length + 6 && itensExistentes.length > 6
    // Caso possua menos de 6 imagens novas para exibir, apresenta somente a quantidade existente
    if (itensExistentes.length + 6 > produtos.length) { 
        qtdNovosItens = produtos.length - itensExistentes.length;
        verMaisP.style.display = 'none'; // O botão de ver mais some
        blocoItens.style.marginBottom = '8vw'; // Dá um espaçamento no bloco de itens
    }
    // console.log(itensExistentes.length + 6 ,qtdNovosItens, produtos.length);

    for (let i = 0; i < qtdNovosItens; i++) {
        // console.log(produtos);
        // console.log("Itens: " + qtdNovosItens);
        // console.log("Index:" + i)
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.backgroundImage = `url('${produtos[itensExistentes.length + i].img}')`;
        // console.log(produtos[itensExistentes.length - 6 + i].id + "" + produtos[itensExistentes.length - 6 + i].img);

        const aEscurecer = document.createElement("a");
        aEscurecer.href = `produto.html?id=${produtos[i].id}`;

        const escurecer = document.createElement("div");
        escurecer.classList.add('escurecer');

        const pEscurecer = document.createElement("p");
        pEscurecer.textContent = "AAAAAA";

        item.append(aEscurecer);
        aEscurecer.append(escurecer);
        escurecer.append(pEscurecer);


        // Apresenta um item novo
        novosItens.push(item);
        blocoItens.append(novosItens[i]);
    }
}



verMaisP.addEventListener('click', () => {
    atualizarItens();
    carregarItens();
});







async function carregarJSON() {
    const response = await fetch('../assets/json/produtos.json');
    const data = await response.json();
    produtos = data.produtos;

    // console.log(produtos);
    // Executando os primeiros 6 itens
    carregarItens();
}