var inputs = document.querySelectorAll(".inputs");
var inputOn = 0;

function click(){
    inputs.forEach(click => {
        click.addEventListener("click", () => {
            inputOn = click.value -1;
            ativar();
        })
    })
}



function ativar(){
     inputs[inputOn].checked = true;

     inputs.forEach(element => {
        if(element.checked == true){
            var inputOn = element.value;
            console.log(inputOn);
        }else{
            
        }
    });
}
  
click();

module.exports = inputOn;







