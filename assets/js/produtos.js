console.log("Produtos.js carregou!");

// URL
const URL = window.location.href;
let index;
// console.log(URL);
if (URL.includes("index")) {
    index = true;
}

let id = -1; // No caso de o ID não existir
if (URL.includes("produto.html?id=")) {
    id = URL.slice(URL.indexOf("id") + 3) - 1;
    console.log(id);
}


const blocoItens = document.querySelector(".bloco-itens");
const verMaisP = document.querySelector(".verMais");

// Parte do JSON
let produtos;
carregarJSON();


// Essa função atualiza a quantidade de itens aparecendo
// function atualizarItens() {
//     itensExistentes = document.querySelectorAll(".item");
//     itens = itensExistentes;
//     novosItens = [];
// }

function exibirProdutos() {

    if (index) {
        for (let i = 0; i < 6; i++) {
            const item = document.createElement("div");
            item.classList.add("item");
            item.dataset.id = produtos[i].id;
            item.dataset.nome = produtos[i].nome;
            item.dataset.marca = produtos[i].marca;
            item.dataset.tipo = produtos[i].tipo;

            item.innerHTML = `
            <a href="produtos/produto.html?id=${produtos[i].id}">
                <img src="${produtos[i].imgProduto}" alt="" class="primeira-imagem" loading="lazy">    
                <img src="${produtos[i].img}" alt="" class="segunda-imagem" loading="lazy">
                
                <div class="escurecer">
                    <p>${produtos[i].nome}</p>
                </div>
            </a>
        `;
            console.log(item);

            blocoItens.appendChild(item);
        }
    } else {
        produtos.forEach(produto => {
            const item = document.createElement("div");
            item.classList.add("item");
            item.dataset.id = produto.id;
            item.dataset.nome = produto.nome;
            item.dataset.marca = produto.marca;
            item.dataset.tipo = produto.tipo;

            item.innerHTML = `
                <a href="produto.html?id=${produto.id}">
                    <img src="../${produto.imgProduto}" alt="" class="primeira-imagem" loading="lazy">
                    <div class="escurecer">
                        <p>${produto.nome}</p>
                    </div>
                </a>
             `;
            console.log(item);

            blocoItens.appendChild(item);
        });
    }
}


function exibirInfoProduto() {
    if (id > -1) {
        // Página de produtos
        const imgProduto = document.querySelector(".imagens-produto");
        const nomeProdutoH2 = document.querySelector(".nome-produto");
        const marcaP = document.querySelector(".marca");
        const descricaoP = document.querySelector("#descricao");
        const tipoP = document.querySelector("#tipo");
        const especieP = document.querySelector("#especie");
        const tamanhosP = document.querySelector("#tamanhos");

        imgProduto.style.background = `url(../${produtos[id].imgProduto})`;
        nomeProdutoH2.textContent = produtos[id].nome;
        marcaP.textContent = produtos[id].marca;
        descricaoP.innerHTML = produtos[id].descricao;
        tipoP.innerHTML = produtos[id].tipo;
        especieP.innerHTML = `<strong>Espécie: </strong> ${produtos[id].especie}`;
        tamanhosP.innerHTML = produtos[id].tamanhos;
        console.log(produtos[id])
    }
}





async function carregarJSON() {
    if (index) {
        urlJSON = 'assets/json/produtos.json';
    } else {
        urlJSON = '../assets/json/produtos.json';
    }
    const response = await fetch(urlJSON);
    const data = await response.json();
    produtos = data.produtos;

    // console.log(produtos);
    // Executando os primeiros 6 itens
    // exibirNovosItens();
    exibirProdutos();

    if (id > -1) {
        exibirInfoProduto();
    }

}
