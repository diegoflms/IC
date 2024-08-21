## Operadores
  #### Arithmetic Operators
  * '+'
  * '-'
  * '*'
  * '**'
  * /
  * %
  * ++
  * -- 
  * igual C, etc

  #### Assignment Operators
  * =
  * +=
  * -=
  * *=
  * /=
  * %=
  * **=
  * <<=
  * '>>='
  * '>>>='
  * &=
  * |=
  * ^=
  * &&= (x &&= y / x = x && (x = y) / if o primeiro valor é true, então o segundo é assigned, senão retorna o primeiro).
  * ||= (msm vibe / if o primeiro valor é false, então o segundo é assigned, senão retorna o primeiro).
  * ??= (msm vibe / if o primeiro valor é undefined/null, então o segundo é assigned, senão retorna o primeiro).

  #### Comparison Operators
  * ==
  * === (a diferença de == e === é que o `5 == '5'` resulta em True. O igual triplo diz que tem que ser VALOR e TIPO iguais - mesmo aplica para o diferente)
  * !=
  * !==
  * '>'
  * <
  * '>='
  * <=
  * Comparar dois objetos sempre retorna false.
  * Ao comparar tipos diferentes, o resultado pode ser inesperado. Quando for string-number, vai converter a string pra number. Uma string vazia converte para 0 e uma string não numérica converte para NaN, que é sempre falso.
  * Para corrigir esse erro, sempre converta o tipo antes de comparar (funções como `Number()`, etc).
  * ?. (retorna undefined se um objeto é undefined ou null, sem lançar um erro, assim permitindo acessar as propriedades de forma segura; também facilita o acesso em objetos aninhados onde nem todos os níveis são seguros).
  
  #### String Operators
  Todos os operadores de comparação funcionam com strings (são comparadas alfabeticamente). O '+' e '+=' serve para concatenar strings (se adicionar um número e uma string, o resultado é uma string).

  #### Logical Operators
  &&, || e !

  #### Bitwise Operators
  * &
  * |
  * ~
  * ^ (XOR)
  * << (left shift)
  * '>>' (right shift)
  * '>>>' (unsigned right shift)
  * Tem uma tabela boa resumindo isso [aqui](https://www.w3schools.com/js/js_operators.asp "W3S") melhor.

  #### Ternary Operators: ? (exemplo abaixo)
  ```Javascript
    let result;
    if (age >= 18) {
      result = "Maior de idade";
    } else {
      result = "Menor de idade";
    }
    console.log(result);
    // é a mesma coisa que:
    let result = (age >= 18) ? "Maior de idade" : "Menor de idade";
    console.log(result);
  ```

  #### Type Operators
  typeof (retorna o tipo da variável) e instanceof (retorna true se o objeto for instância de um tipo objeto)

  #### Precedência de operadores
  [Aqui](https://www.w3schools.com/js/js_precedence.asp "W3S") tá bem resumido.