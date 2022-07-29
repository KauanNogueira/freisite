document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
    const cabecalho = document.querySelector('.cabecalho')

    cabecalho.style.animation.toggle('cabecalho-claro 2s step-end alternate')
})
