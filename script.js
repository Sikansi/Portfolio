
function ativaLetra(element){
    const arrTexto = element.innerHTML.split('');
    element.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');

ativaLetra(titulo);