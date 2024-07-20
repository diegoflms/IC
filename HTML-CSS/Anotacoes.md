Cronograma:
até dia 21/07: terminar o curso
até dia 24/07: aprender bootstrap + projeto em bootstrap
até dia 31/07: aprender js e aplicar no projeto

Considerações importantes:
* usar esse site ([W3C](https://validator.w3.org/)) para validar o código HTML.
* inserir CSS através de `<link rel="stylesheet" href="./assets/css/styles.css">`.
* no CSS é aplicado a ultima regra.

Maneiras de colocar cores:
* escrever o nome.
* hexadecimal: #ffffff ou #fff (white) e #000 ou #000000 (black). as duas primeiras são pra red, as do meio green e as ultimas blue.
quando tem todos os pares repetidos, pode encurtar.
* rgb: mesma coisa, porém com números (vai até 255): rgb(255, 0, 0) é vermelho.
* rgba: mesma coisa do de cima, porém agora tem opacidade (alpha, porcentagem de opacidade): rgba(0, 0, 0, 0.7) é uma tela preta opaca.
* hsl (hue saturation lightness): hsl (0, 100%, 50%) é red.
* hsla: msm coisa do de cima, mas com opacidade.

Unidades de medida:
* px: unidade absoluta.
* em: multiplicação, se baseando no elemento pai mais próximo.
* rem: multiplicação, se baseando no elemento root do documento.
```HTML
html {
    font-size: 62.5%; /* se o navegador usa 16px como base, para fazer com que o rem se comporte como "px", se coloca 62.5% de font-size
    padrão, assim 1.6rem é igual a 16px e assim vai. Explicação: o rem multiplica pela root, que quando colocada em % representa a % do
    que está sendo usado no navegador (16px). Logo, 1.6 * 0.625 * 16 = 16 */
    /* isso tudo vale a pena pq se fosse com px, ao ajustar o tamanho da fonte do navegador, a fonte da página se manteria igual. Agora,
    fazendo dessa maneira, ela se ajustará junto com o modo que o usuário preferir */
}

p {
    font-size: 1.6rem;
}
```
* vw: largura do viewport. difere da % pq a % é sobre o elemento pai, e não a tela.
* vh: altura do viewport. "     "       "       "       "       "       ". usado para preencher a página em landing pages e usando link
de id para navegar nas seções da landing.
* %: baseada na largura do elemento pai.
* vmax e vmin: relacionado aos menores lados do viewport (quando a tela ta inteira, o menor é o dos lados e o maior o de cima/baixo).
2vmax de uma tela de 1000px é 20px. vmax e vmin vão de 0 a 100 (tipo porcentagem).