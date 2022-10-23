var posicaoEsquerdaInicial = 0;
        function apertar() {
            var caixa2 = document.getElementById('caixa2');
            console.log(`${posicaoEsquerdaInicial}px`);
            caixa2.style.left = `${posicaoEsquerdaInicial}px`;
            posicaoEsquerdaInicial++;
            posicaoEsquerdaInicial <= 40 && setTimeout(() => apertar(),0.5);
            //caixa2.style.left = '21px';  
            console.log(document.getElementById('caixa2'))                 
        }
    export const posicionar = apertar;