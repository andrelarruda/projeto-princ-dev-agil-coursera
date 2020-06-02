function calculaPontos(numPaginas) {
   let totalPontos = 1;
   totalPontos += Math.floor(numPaginas / 100);
   return totalPontos;
}

module.exports = calculaPontos;
// Cada livro que leram eles ganham 1 ponto, sendo que a cada 100 páginas que o livro tiver ele vale um ponto adicional (exemplos: 72 páginas vale 1 ponto, 124 páginas vale 2 pontos, 350 páginas vale 4 pontos).
