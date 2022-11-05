const {edFolha, edGalho} = require('./Arreys');

function juntaListas (lista01, lista02){
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let listaFinal = [];
    let atual = 0;
         
    while(posicaoAtualLista1 < lista01.length && posicaoAtualLista2 < lista02.length){
        let produtoAtualLista1 = lista01[posicaoAtualLista1];
        let produtoAtualLista2 = lista02[posicaoAtualLista2];

        console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
          listaFinal[atual] = produtoAtualLista1; 
          posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
          posicaoAtualLista2++;
        }
        
        atual++;
    }
        while(posicaoAtualLista1 < lista01.length){
            listaFinal[atual] = lista01[posicaoAtualLista1]
            posicaoAtualLista1++;
            atual++;
        }
        while(posicaoAtualLista2 < lista02.length){
            listaFinal[atual] = lista02[posicaoAtualLista2]
            posicaoAtualLista2++;
            atual++;
        }
        

    return listaFinal;
} 

console.log(juntaListas(edFolha, edGalho));