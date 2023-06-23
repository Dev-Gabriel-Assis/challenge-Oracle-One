const textArea = document.querySelector('.text-area')
const mensagem = document.querySelector('.mensagem')

function btnEncrip(){
    const textoEncrip = encriptar(textArea.value);
    mensagem.value = textoEncrip;
    textArea.value = "";
}

function encriptar(stringEncrip){
    let matrizCod = [["e", "enter"],["i", "imes"],["a", "ai"],["u", "ufat"],["o", "ober"]]
    stringEncrip = stringEncrip.toLowerCase()

    for(let i = 0; i < matrizCod.length; i++){
        if(stringEncrip.includes(matrizCod[i][0])){
            stringEncrip = stringEncrip.replaceAll(matrizCod[i][0],matrizCod[i][1])
        }
    }
    return stringEncrip;
}

function btnDesencrip(){
        const textoDesencrip = desencrip(textArea.value);
        mensagem.value = textoDesencrip;
        textArea.value = "";
    }

function desencrip(stringDesencrip){
    let matrizCod = [["e", "enter"],["i", "imes"],["a", "ai"],["u", "ufat"],["o", "ober"]];
    stringDesencrip = stringDesencrip.toLowerCase();

    for(let i = 0; i < matrizCod.length; i++) {
        if(stringDesencrip.includes(matrizCod[i][1])){
            stringDesencrip = stringDesencrip.replaceAll(matrizCod[i][1], matrizCod[i][0]);
        }
    }

    return stringDesencrip;
}

function btnCopiar() {
    mensagem.select();
    document.execCommand("copy");
  }    
