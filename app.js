function mostrarResultado(resultado) {
    let elemento = document.querySelector(".rectangle-content");
    elemento.innerHTML = resultado;
    elemento.classList.add("resultado");
}

function mostrarBotao() {
    let botao = document.querySelector(".copiar");
    botao.style.display = "block";
}
function criptografar() {
    let texto = document.getElementById("text-area").value;
    let alerta = document.querySelector(".alerta-copiado");
    alerta.style.display = "none";
    if (!/^[a-z ]+$/.test(texto)) {
        alert("O texto deve conter apenas letras minúsculas sem acentos ou caracteres especiais.");
        return
    }

    let textoCriptografado = texto.split('').map(char => {
        switch (char) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return char;
        }
    }).join('');

    mostrarResultado(textoCriptografado);
    mostrarBotao();
}

function descriptografar() {
    let texto = document.getElementById("text-area").value;
    let alerta = document.querySelector(".alerta-copiado");
    alerta.style.display = "none";
    if (!/^[a-z ]+$/.test(texto)) {
        alert("O texto deve conter apenas letras minúsculas sem acentos ou caracteres especiais.");
        return
    }

    let textoDescriptografado = texto.split('enter').join('e')
        .split('imes').join('i')
        .split('ober').join('o')
        .split('ufat').join('u')
        .split('ai').join('a');
    mostrarResultado(textoDescriptografado)
    mostrarBotao();
}

function copiar() {
    let texto = document.querySelector(".resultado").innerText;
    let alerta = document.querySelector(".alerta-copiado");
    navigator.clipboard.writeText(texto);
    alerta.style.display = "inline";
}