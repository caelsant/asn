const ancoraSobre= document.querySelector("#sobre-info").offsetTop;
const aSobre = document.querySelectorAll("[data-sobre]");
const ancoraUs = document.querySelector(".sobre-title-section").offsetTop;
const aUs = document.querySelectorAll("[data-ancoraUs]");
const aNf = document.querySelectorAll("[data-ancoraNF]");

const animateClass = "animate";

function animeSobre(){
    const windowTop = window.pageYOffset + -125;
    if(parseInt(windowTop) > parseInt(ancoraSobre)){
        aSobre.forEach(element => {
            element.classList.add(animateClass);
        });
    }else{
        aSobre.forEach(element => {

        });
    }
}

function animeUs(){
    const windowTop = window.pageYOffset + -800;
    aUs.forEach(element => {
        if((windowTop) > element.offsetTop){
            element.classList.add(animateClass);
        }else{
        }
    });
}

function animeNf(){
    const windowTop = window.pageYOffset + -3000;
    aNf.forEach(element => {
        if((windowTop) > element.offsetTop){
            //console.log("Entrou " + windowTop + " | icon: " + element.offsetTop)
            element.classList.add(animateClass);
        }else{
            //console.log("saiu")
        }

    });
}

window.addEventListener("scroll", function(){
    animeSobre();
    animeUs();
    animeNf();
})
