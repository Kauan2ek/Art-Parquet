/* 
<a>
    <img src="../assets/img/inspiracoes/ProjetoChicoPorto1 - alta.jpg" alt="" class="primeira-imagem" loading="lazy">
    <div class="escurecer">
        <p>Cumaru</p>
    </div>
</a>
*/
console.log("Carregou!");
const blocoItens = document.querySelector(".bloco-itens");

let inspiracoes;
carregarJSON();


function exibirInspiracoes() {
    inspiracoes.forEach(inspiracao => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.dataset.id = inspiracao.id;
        item.dataset.produto = inspiracao.produto;
        item.dataset.ambiente = inspiracao.ambiente;

        item.innerHTML = `
        <a href='../produtos/produto.html?id=${inspiracao.idProduto}'>
            <img src="${inspiracao.img}" alt="" class="primeira-imagem" loading="lazy">
            <div class="escurecer">
            <p>${inspiracao.produto}</p>
            </div>
        </a>
        `;

        blocoItens.appendChild(item);
    });
}





// Pesquisa de inspirações
const allBtns = document.querySelectorAll(".filtro-btn");
const barraPesquisa = document.querySelector("input[type=text]");
const divSemResultados = document.querySelector(".sem-resultados");
// console.log(divSemResultados);
let pesquisa = "", btnSelecionado = document.querySelector(".filtro-btn");

let ambiente, produto, marca, infoItem;

allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Tirar a seleção de todos os outros botões
        allBtns.forEach(btnSelecionados => {
            btnSelecionados.classList.remove("selecionado");
        });

        btn.classList.add("selecionado");

        btnSelecionado = btn;
        
        atualizarFiltro();
    });


});

barraPesquisa.addEventListener("keyup", () => {
    pesquisa = barraPesquisa.value;
    // console.log(pesquisa);

    atualizarFiltro();
});

function atualizarFiltro() {
    console.log("Botão selecionado: ", btnSelecionado.id);
    console.log("Texto pesquisado: " + pesquisa);
    console.log("---------------------------------------------");

    const itens = document.querySelectorAll(".item");

    let resultados = 0;
    itens.forEach(item => {

        id = item.dataset.id;
        ambiente = item.dataset.ambiente.toLowerCase();
        produto = item.dataset.produto.toLowerCase();

        console.log(`Pesquisa: ${pesquisa} \nid: ${id}   \nambiente: ${ambiente}   \nproduto: ${produto}`);

        if ((id.includes(pesquisa) || ambiente.includes(pesquisa) || produto.includes(pesquisa)) && (ambiente == btnSelecionado.id || btnSelecionado.id == 'todos')) {
            item.style.display = 'inline-block';
            resultados++;
        } else {
            item.style.display = 'none';
        }

    });
    if (resultados > 0) {
        divSemResultados.style.display = "none";
    } else {
        divSemResultados.style.display = "block"
    }

}







async function carregarJSON() {
    urlJSON = '../assets/json/inspiracoes.json';

    const response = await fetch(urlJSON);
    const data = await response.json();
    inspiracoes = data.inspiracoes;
    
    exibirInspiracoes();
}