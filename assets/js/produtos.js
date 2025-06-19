console.log("Produtos.js carregou!");

// URL
const URL = window.location.href;
// console.log(URL);
if (URL.includes("mais=true")) {
    setTimeout(() => {
        atualizarItens();
        exibirNovosItens();
    }, 1000);
}

// let id = -1; // No caso de o ID não existir
// if (URL.includes("id")) {
//     id = URL.slice(URL.indexOf("id") + 3) - 1;
//     console.log(id);
// }

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

function exibirProdutos() {

    produtos.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.dataset.id = produto.id;
        item.dataset.nome = produto.nome;
        item.dataset.marca = produto.marca;
        item.dataset.tipo = produto.tipo;

        item.innerHTML = `
            <a href="produto.html?id=${produto.id}">
                <img src="${produto.img}" alt="" class="primeira-imagem" loading="lazy">
                <img src="${produto.imgProduto}" alt="" class="segunda-imagem" loading="lazy">
                <div class="escurecer">
                    <p>${produto.nome}</p>
                </div>
            </a>
        `;
        console.log(item);

        blocoItens.appendChild(item);

    });

}



// function exibirNovosItens() {
//     // console.log(produtos);
//     qtdNovosItens = 6;

//     /// produtos.length < itensExistentes.length + 6 && itensExistentes.length > 6
//     // Caso possua menos de 6 imagens novas para exibir, apresenta somente a quantidade existente
//     if (itensExistentes.length + 6 > produtos.length) {
//         qtdNovosItens = produtos.length - itensExistentes.length;
//         verMaisP.style.display = 'none'; // O botão de ver mais some
//         blocoItens.style.marginBottom = '8vw'; // Dá um espaçamento no bloco de itens
//     }
//     // console.log(itensExistentes.length + 6 ,qtdNovosItens, produtos.length);

//     for (let i = 0; i < qtdNovosItens; i++) {
//         // console.log(produtos);
//         // console.log("Itens: " + qtdNovosItens);
//         // console.log("Index:" + i)
//         const item = document.createElement("div");
//         item.classList.add("item");
//         item.style.backgroundImage = `url('${produtos[itensExistentes.length + i].img}')`;
//         // console.log(produtos[itensExistentes.length - 6 + i].id + "" + produtos[itensExistentes.length - 6 + i].img);

//         const aEscurecer = document.createElement("a");
//         aEscurecer.href = `produto.html?id=${produtos[i].id}`;

//         const escurecer = document.createElement("div");
//         escurecer.classList.add('escurecer');

//         const pEscurecer = document.createElement("p");
//         pEscurecer.textContent = "Testes";

//         item.append(aEscurecer);
//         aEscurecer.append(escurecer);
//         escurecer.append(pEscurecer);


//         // Apresenta um item novo
//         novosItens.push(item);
//         blocoItens.append(novosItens[i]);
//     }
// }



// verMaisP.addEventListener('click', () => {
//     atualizarItens();
//     exibirNovosItens();
// });


function exibirInfoProduto() {
    if (id > -1) {
        // Página de produtos
        const nomeProdutoH2 = document.querySelector(".nome-produto");
        const marcaP = document.querySelector(".marca");
        const descricaoP = document.querySelector(".descricao");

        nomeProdutoH2.textContent = produtos[id].nome;
        marcaP.textContent = produtos[id].marca;
        descricaoP.textContent = produtos[id].descricao;
        console.log(produtos[id])
    }
}





async function carregarJSON() {
    const response = await fetch('../assets/json/produtos.json');
    const data = await response.json();
    produtos = data.produtos;

    // console.log(produtos);
    // Executando os primeiros 6 itens
    // exibirNovosItens();
    exibirProdutos();

    // if (id > -1) {
    //     exibirInfoProduto();
    // }

}