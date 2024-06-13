const btnleft = document.querySelector(".btn-left")
const btnright = document.querySelector(".btn-right")
const slider = document.querySelector("#slider")
const sliderSection = document.querySelectorAll(".slider-section")

//le damos el evento click a los íconos
btnleft.addEventListener("click", e => moveToLeft())
btnright.addEventListener("click", e => moveToRight())

let operacion = 0
let counter = 0
let widthImg = 100 / sliderSection.length

//crear las funciones que se ejecutarán al usar el evento click
function moveToRight (){
    if (counter >= sliderSection.length-1){
        counter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
    } else{
        counter++
        operacion = operacion + widthImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    }
    
}

function moveToLeft() {
    counter--
    if(counter < 0 ){
        counter = sliderSection.length-1
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
    } else{
        operacion = operacion - widthImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    }
}