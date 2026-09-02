const $ = id => document.getElementById(id);

const code = $("codigo");
const result = $("resultado");

function criarElemento(codigo) {
    let tag, id, content, gtr, e;
    let wd, hg, bg;
    let borderRadius, body, el;



    try { tag = codigo.split("[tag:")[1].split("]")[0]; } catch (e) { };
    try { css = codigo.split("[css:")[1].split("]")[0]; } catch (e) { };
    try { id = codigo.split("[id:")[1].split("]")[0]; } catch (e) { };
    try { content = codigo.split("[text:")[1].split("]")[0]; } catch (e) { };
    try { content = codigo.split("[text:")[1].split("]")[0]; } catch (e) { };
    try { gtr = $(`${codigo.split("[gtr:")[1].split("]")[0]}`) } catch (e) { };
    try { wd = codigo.split("[wd:")[1].split("]")[0] } catch (e) { };
    try { hg = codigo.split("[hg:")[1].split("]")[0] } catch (e) { };
    try { bg = codigo.split("[bg:")[1].split("]")[0] } catch (e) { };
    try { borderRadius = codigo.split("[bRadius:")[1].split("]")[0] } catch (e) { };

    if (!tag) {
        console.error("Tag inválida!");
        return
    }

    if (tag == "body") {
        console.log("Tag body detectada, CSS: " + css);
        document.body.style.cssText = css;
        return;
    } else {
        el = document.createElement(tag);
    }

    if (!el) {
        return;
    }

    if (id) {
        el.id = id;
    }

    if (content) {
        el.innerHTML = content;
    }

    if (wd) {
        el.style.width = wd;
    }

    if (hg) {
        el.style.heigth = hg;
    }

    if (bg) {
        el.style.backgroundColor = bg;
    }

    if (borderRadius) {
        el.style.borderRadius = borderRadius;
    }


    if (gtr) {
        gtr.appendChild(el);
    }
    else {
        result.appendChild(el);
    }

}

code.addEventListener("input", () => {

    result.innerHTML = "";

    const linhas = code.value.split("\n");

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
