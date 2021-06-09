let form = document.querySelector('.form-register');
let progressOptions = document.querySelectorAll('.progressbar__option')

form.addEventListener('click', (e) =>{
    let element = e.target;
    let isButtonNext= element.classList.contains('step__button--next');
    let isButtonBack= element.classList.contains('step__button--back');
    if(isButtonNext || isButtonBack){
        let pasoActual = document.getElementById('step-'+element.dataset.step);
        let  pasoaSaltar= document.getElementById('step-'+element.dataset.to_step);
        
        pasoActual.addEventListener('animationend', function callback() {
            
            pasoActual.classList.remove('active');
            pasoaSaltar.classList.add('active');
            if(isButtonNext){
                pasoActual.classList.add('to-left');
                progressOptions[element.dataset.to_step-1].classList.add('active');
            }else{
                pasoaSaltar.classList.remove('to-left');
                progressOptions[element.dataset.step-1].classList.remove('active');
            }
            pasoActual.removeEventListener('animationend',callback);
        })


        pasoActual.classList.add('inactive');
        pasoaSaltar.classList.remove('inactive');
    }
})