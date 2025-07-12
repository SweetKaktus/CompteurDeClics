let compteur = 0
let btnClic = document.querySelector("button")
let zoneNombre = document.getElementById("zoneNombre")


btnClic.addEventListener("click", () => {
    compteur++
    zoneNombre.innerText = compteur
})