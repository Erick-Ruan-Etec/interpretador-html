const $ = id => document.getElementById(id);

const code = $("codigo");
const result = $("resultado");

function criarElemento(codigo) {

    let tag = codigo.split("[tag:")[1].split("]")[0];

    let id = codigo.split("[id:")[1].split("]")[0];

    let content = codigo.split("[text:")[1].split("]")[0];

    if (!tag) {
        console.error("Tag inválida!");
        return
    }

    if (!content) {
        console.error("Conteúdo inválido!");
        return
    }

    console.log(tag);
    console.log(id);
    console.log(content);

    const el = document.createElement(tag);

    if (id) {
        el.id = id;
    }

    if (content) {
        el.innerHTML = content;
    }

    result.appendChild(el);
}

code.addEventListener("input", () => {

    result.innerHTML = "";

    const linhas = code.value.split("\n");

    console.log(linhas.length);

    for (const linha of linhas) {
        criarElemento(linha);
    }

    localStorage.setItem("code-editor", code.value);
});


const copiar = document.getElementById("copiar");
copiar.addEventListener("click", async () => {

    await navigator.clipboard.writeText(result.innerHTML);

    console.log("Copiado!");
});


function start() {
    code.value = localStorage.getItem("code-editor")

    result.innerHTML = "";

    const linhas = code.value.split("\n");

    console.log(linhas.length);

    for (const linha of linhas) {
        criarElemento(linha);
    }
}

start();