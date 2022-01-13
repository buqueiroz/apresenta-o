const cafe = document.querySelector(".cafe");

let cor;
function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      cafe.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao("MUITO CAFÉ E NOITES ACORDADO", 0);



