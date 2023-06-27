function escrevendoLetra(){
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
}

const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
})

escrevendoLetra();