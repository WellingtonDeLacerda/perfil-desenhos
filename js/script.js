let caixa = document.querySelector("picture#caixa")

const lista = [
    "images/megumi.jpg",
    "images/nobara.jpg",
    "images/goku.jpg",
    "images/yonkous.jpg",
    "images/slime.jpg",
    "images/gear5.jpg"
]

// Cria as imagens dinamicamente
let fotos = [] // lista das imagens criadas

lista.forEach((src, index) => {
    let img = document.createElement("img")
    img.id = `foto${index}`
    img.src = src
    img.alt = src
    img.style.display = index === 0 ? "block" : "none"  // só a primeira aparece
    caixa.appendChild(img)
    fotos.push(img)
})

let atual = 0 // índice da foto atual

function next() {
    fotos[atual].style.display = "none"
    atual = (atual + 1) % fotos.length   // passa para a próxima
    fotos[atual].style.display = "block"
}

function prev() {
    fotos[atual].style.display = "none"
    atual = (atual - 1 + fotos.length) % fotos.length
    fotos[atual].style.display = "block"
}