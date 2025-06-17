const allBtns = document.querySelectorAll(".filtro-btn");
const barraPesquisa = document.querySelector("input[type=text]");
let pesquisa = "", btnSelecionado = document.querySelector(".filtro-btn");

let id, tipo, nome, infoItem;

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

    itens.forEach(item => {
        // console.log(item.title);
        infoItem = item.title;

        // id = infoItem.slice(infoItem.indexOf("id") + 3, infoItem.indexOf("tipo") - 2);
        id = item.dataset.id;
        // tipo = infoItem.slice(infoItem.indexOf("tipo") + 5, infoItem.indexOf("nome") - 2);
        tipo = item.dataset.tipo.toLowerCase();
        // nome = infoItem.slice(infoItem.indexOf("nome") + 5);
        nome = item.dataset.nome.toLowerCase();

        // console.log(`Pesquisa: ${pesquisa} \nid: ${id}   \ntipo: ${tipo}   \nnome: ${nome}`);

        if ((id.includes(pesquisa) || tipo.includes(pesquisa) || nome.includes(pesquisa)) && (tipo == btnSelecionado.id || btnSelecionado.id == 'todos')) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });

}





// Testes
let str = "nome=Cumaru, id=22, cor=preto";

console.log(str.slice(str.indexOf("id") + 3, str.indexOf("cor") - 2));