let servicio = document.getElementsByClassName("FO-benef-title");
let flecha = document.getElementsByClassName("bxs-right-arrow");
let content = document.getElementsByClassName("FO-benef-content");
let height = 0
servicio[0].addEventListener('click', () =>{
    flecha[0].classList.toggle("arrow");
    height = 0;
    content[0];
    //console.log(content.clientHeight);
    if(content[0].clientHeight == 0){
        height = 210;
    }
    content[0].style.height = `${height}px`; 
});

servicio[1].addEventListener('click', () =>{
    flecha[1].classList.toggle("arrow");
    height = 0;
    content[1];
    if(content[1].clientHeight == 0){
        height = 180;
    }
    content[1].style.height = `${height}px`;
});

servicio[2].addEventListener('click', () =>{
    flecha[2].classList.toggle("arrow");
    height = 0;
    content[2];
    if(content[2].clientHeight == 0){
        height = 180;
    }
    content[2].style.height = `${height}px`;
})

servicio[3].addEventListener('click', () =>{
    flecha[3].classList.toggle("arrow");
    height = 0;
    content[3];
    if(content[3].clientHeight == 0){
        height = 180;
    }
    content[3].style.height = `${height}px`;
})

servicio[4].addEventListener('click', () =>{
    flecha[4].classList.toggle("arrow");
    height = 0;
    content[4];
    if(content[4].clientHeight == 0){
        height = 190;
    }
    content[4].style.height = `${height}px`;
})

//============================================================//
//                  Slider Starlink                           //
//============================================================//

let ruta = "images/home1starlink.webp";
let img = document.querySelector(".starlink");
img.setAttribute("src", ruta)
let contador = 1;
function carrusel_starlink(){
    contador++;
    if(contador>3){
        contador = 1;
    }
    ruta = `images/home${contador}starlink.webp`;
    img.setAttribute("src", ruta);
}
setInterval(carrusel_starlink, 4000);