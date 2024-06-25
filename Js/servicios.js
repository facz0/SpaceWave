let servicio = document.querySelector(".FO-benef-firewall-title");
servicio.addEventListener('click', () =>{
    let height = 0;
    let content = document.querySelector(".FO-benef-firewall-div");
    //console.log(content.clientHeight);
    if(content.clientHeight == 0){
        height = content.scrollHeight;
    }
    content.style.height = `${height}px`
});