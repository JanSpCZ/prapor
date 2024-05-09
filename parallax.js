//SKRIPT PRO 3D EFEKT POZADÍ NA ZAČÁTKU STRÁNKY
let background = document.getElementById("background")
let h1 = document.getElementById("h1")
let jet = document.getElementById("jet")
let front = document.getElementById("front")
let header = document.getElementById("header")

window.addEventListener("scroll", function() {
    let value = window.scrollY
    jet.style.left = value * 2 + "px"
    h1.style.marginTop = value * 1.05 + "px"
    background.style.top = value * 0.8 + "px"
    header.style.top = value * 0.5 + "px"
})