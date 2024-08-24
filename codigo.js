
function criptografar() {
    const text = document.getElementById('textInput').value;
    const shift = 3;
    const resultado = caesarCipher(text, shift);
    document.getElementById('outputText').innerHTML = resultado;
    replaceContent(outputText);
    
}

function descriptografar() {    
    const text = document.getElementById('textInput').value;
    const shift = 3;
    const resultado = caesarCipher(text, -shift);
    document.getElementById('outputText').innerHTML = resultado;
    replaceContent(outputText);
    
}

function caesarCipher(str, shift) {
    return str.split('')
        .map (char => {const code = char.charCodeAt(0);
           
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            } else if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            } else {
                return char; }
            
            }
            )
        .join('');
}

function replaceContent() {
   
    document.querySelector('.home__page__box__img').classList.add('hidden');
    document.querySelector('.home__page__box__text').classList.add('hidden');
    document.querySelector('.home__page__box__text2').classList.add('hidden');

   
    document.getElementById('outputText').classList.remove('hidden');
    document.getElementById('outputText').classList.add('visible');
    document.getElementById('copiarBotao').classList.remove('hidden');
    document.getElementById('copiarBotao').classList.add('visible');
}

function copiar()  {
    const outputText = document.getElementById('outputText').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = outputText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Texto copiado para a área de transferência!');
}
   