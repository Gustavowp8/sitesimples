'use strict'

const switcher = document.querySelector('.btn');//este codigo seleciona o botão.

switcher.addEventListener('click', function(){ //Aqui você da a função do botão
    document.body.classList.toggle('dark-theme') //toggle ajuda a aplicar o tema da funcçao 

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro"
    }
});