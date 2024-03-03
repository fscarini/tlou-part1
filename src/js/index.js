const botaoTrailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const botaoX = document.querySelector('.fechar-modal')
const video = document.getElementById("video")
const videoLink = video.src

/* OBJETIVO 1 - Quando o usuário clicar no botão para ver o trailer, devemos abrir a modal
com o vídeo do trailer */
botaoTrailer.addEventListener("click", ()=>{
    modal.classList.add("aberto")
    video.setAttribute("src", videoLink)
})

/* OBJETIVO 2 - Quando o usuário clicar no X, devemos fechar a modal */
botaoX.addEventListener("click", () =>{
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})

