
const sliderPartner = document.querySelector("#slider-partners")
const partnerSection = document.querySelectorAll(".partners-carusel-item")


let operacionPartners = 0
let counterPartners = 0
let widthImgPartenrs = 100 / partnerSection.length

setInterval(() => {
    moveToRight_partners()
}, 2000)

function moveToRight_partners(){
    if(counterPartners >= partnerSection.length-4){
        counterPartners = 0
        operacionPartners = 0
        sliderPartner.style.transform = `translate(-${operacionPartners}%)`
        sliderPartner.style.transition = "none"
    }else{
        counterPartners++
        operacionPartners = operacionPartners + widthImgPartenrs
        sliderPartner.style.transform = `translate(-${operacionPartners}%)`
        sliderPartner.style.transition = "all ease 1s"
    }
}