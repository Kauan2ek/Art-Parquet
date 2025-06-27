const allBtns = document.querySelectorAll(".filtro-btn");
const barraPesquisa = document.querySelector("input[type=text]");
const divSemResultados = document.querySelector(".sem-resultados");
// console.log(divSemResultados);
let pesquisa = "", btnSelecionado = document.querySelector(".filtro-btn");

let tipo, nome, marca, infoItem;

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
        // console.log(item.title);
        infoItem = item.title;

        // id = infoItem.slice(infoItem.indexOf("id") + 3, infoItem.indexOf("tipo") - 2);
        id = item.dataset.id;
        // tipo = infoItem.slice(infoItem.indexOf("tipo") + 5, infoItem.indexOf("nome") - 2);
        tipo = item.dataset.tipo.toLowerCase();
        // nome = infoItem.slice(infoItem.indexOf("nome") + 5);
        nome = item.dataset.nome.toLowerCase();
        marca = item.dataset.marca.toLowerCase();

        // console.log(`Pesquisa: ${pesquisa} \nid: ${id}   \ntipo: ${tipo}   \nnome: ${nome}`);

        if ((id.includes(pesquisa) || tipo.includes(pesquisa) || nome.includes(pesquisa)) && (tipo == btnSelecionado.id || btnSelecionado.id == 'todos')) {
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