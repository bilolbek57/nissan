const vehilseModal = document.querySelector(".vehilse__modal")
const shopModal = document.querySelector(".shop__modal")
const til = document.querySelector(".til")
const seachr = document.querySelector(".seachr")


function showHome() {
    shopModal.classList.remove("shop__shop")
    til.classList.remove("til_shop")
    seachr.classList.remove("seachr_shop")
    

    vehilseModal.classList.toggle("vehilse__shop")
    
}
function showAbout() {
    vehilseModal.classList.remove("vehilse__shop")
    til.classList.remove("til_shop")
    seachr.classList.remove("seachr_shop")


    shopModal.classList.toggle("shop__shop")
}
function tilEngRusisan() {
    vehilseModal.classList.remove("vehilse__shop")
    shopModal.classList.remove("shop__shop")
    seachr.classList.remove("seachr_shop")

    
    til.classList.toggle("til_shop")
}
function search() {
    til.classList.remove("til_shop")
    vehilseModal.classList.remove("vehilse__shop")
    shopModal.classList.remove("shop__shop")

    seachr.classList.toggle("seachr_shop")
}