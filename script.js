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



escrevendoLetra();

function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}

function sobreMim() {

    const divExperiencia = document.querySelectorAll('.experience-content div');
    const liExperiencia = document.querySelector('.experience-content ul li');
    const divEducation = document.querySelectorAll('.education-content div');
    const liEducation = document.querySelector('.education-content ul li');

    divExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow1(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', ()=>{
            slideShow1(index);
        })
    })

    liEducation.forEach((event, index) => {
        event.addEventListener('click', ()=>{
            slideShow2(index);
        })
    })

}

sobreMim();
