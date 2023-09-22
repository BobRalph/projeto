function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assents/avatar.png")
  } else {
    // se tiver sem light mode, manter imagem norma
    img.setAttribute("src", "./assents/avatar-light.png")
  }

  // se tiver sem light mode, manter imagem normal
}
