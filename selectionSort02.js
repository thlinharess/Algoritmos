const livros = require('./listaLivros02');
const menorValor = require('./menorValor02');

for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log('Livro Atual : ',livros[atual])
    let livrosMenorPreco = livros[menor];
    console.log('Livro mais Barato : ',livros[menor])
    
    livros[atual] = livrosMenorPreco;
    livros[menor] = livroAtual;

}

console.log(livros)
 