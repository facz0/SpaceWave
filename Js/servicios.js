let servicio = document.querySelector(".FO-benef-firewall-title");
let flecha = document.querySelector(".bxs-right-arrow");
servicio.addEventListener('click', () =>{
    flecha.classList.toggle("arrow");
    let height = 0;
    let content = document.querySelector(".FO-benef-firewall-div");
    //console.log(content.clientHeight);
    if(content.clientHeight == 0){
        height = 210;
    }
    content.style.height = `${height}px`;
});

let monitoreo = document.querySelector(".FO-benef--monitoreo-title");
let m_flecha = document.querySelector(".m");
monitoreo.addEventListener('click', () =>{
    m_flecha.classList.toggle("arrow");
    let mon_height = 0;
    let mon_content = document.querySelector(".FO-benef-monitoreo-div");
    if(mon_content.clientHeight == 0){
        mon_height = 180;
    }
    mon_content.style.height = `${mon_height}px`;
});

let velocidad = document.querySelector(".FO-benef-velocidad-title");
let v_flecha = document.querySelector(".i");
velocidad.addEventListener('click', () =>{
    v_flecha.classList.toggle("arrow");
    let v_height = 0;
    let v_content = document.querySelector(".FO-benef-velocidad-div");
    if(v_content.clientHeight == 0){
        v_height = 180;
    }
    v_content.style.height = `${v_height}px`;
})