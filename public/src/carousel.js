//const slider = document.querySelector("#carousel_wrapp");
//const itemToSlide = document.querySelectorAll(".sgi-carousel");

//let counter = 1;
//const tamanhoItem = itemToSlide[0].clientWidth;

//function passar(){
   // slider.getElementsByClassName.trasition = "transform 0.4s ease-in-out";
    //counter++
   // slider.getElementsByClassName.transform = "translateX(" + (size * couter) + "px)";
 //  console.log("f");
//}


const slider = document.querySelector("#carousel_wrapp");
const items = document.querySelectorAll(".sgi-carousel")
const todosRadios = document.querySelectorAll('input[name="carousel"]');
var rolar = true;
let posicao = 0;
const size = items[0].clientWidth;

function clicar(){
    // var radio = document.querySelector('input[name="slide"]:checked').value;
    //counter = radio;
    // console.log("Estamos no radio: " + radio + " | Com size: " + (-size * radio))
    //slider.style.transition = "transform 0.4s ease-in-out";
    //slider.style.transform = "translateX(" + (-size * radio) + "px)";
    verificarRadio();
    rolar == false;
}

setInterval(() => {
    if(rolar){
        animar();
    }else{
        rolar == true
    }
}, 3000);

function animar(){
    if(posicao == 1){
        posicao = 0;
    }else{
        posicao++
    }
    
    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = "translateX(" + (-size * posicao) + "px)";

    if(posicao == 0){
        todosRadios[0].checked ="true";
        slider.style.transform = 'none';
    }else if(posicao == 1){
        todosRadios[1].checked ="true";
    }else{
        console.log("Nenhum Radio Ativo")
    }
}


function verificarRadio(){
    if(todosRadios[0].checked){
        posicao = -1;
        animar();
    }else if(todosRadios[1].checked){
        posicao = 0;
        animar();
    }else{
        console.log("Nenhum Radio Ativo")
    }
}


