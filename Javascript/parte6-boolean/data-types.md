## Data types
* String: string de char, ok.
* Number: com ou sem ponto flutuante. Os números de JS são sempre double (64bit). Para fazer notação de exponencial, basta usar o `e`: `let y = 123e5; // 12300000`.
* BigInt: armazenar inteiros que não cabem no double. `let x = BigInt("123456789012345678901234567890")`.
* Boolean: true ou false normal. Tudo que tem um valor é considero true (truthy). O que não tem um valor (0, -0, "", undefined, null, false, NaN) é considerado false (falsy).
* Undefined: uma variável que só foi declarada e não inicializada tem como valor e tipo `undefined`. Esse valor pode ser atribuído também.
* Null: ausência intencional de algum valor. É atribuído.
* Symbol: usado para criar identificadores únicos e imutáveis para propriedades de objetos. Mais complexo, não vou aprofundar aqui agora.
* Array (object): array padrão, index zero-based, separado por vírgulas e com colchetes.
* Objects: objeto é escrito com chaves e suas propriedades na seguinte maneira nome:valor, além de serem separados por vírgula. Exemplo: `const pessoa = {nome:"Diego", idade:19};`. Além de string, existem vários outros tipos derivados do objeto.

#### Outras info
* Ainda, JS tem tipagem dinâmica.
* `16 + "oi" == "16oi"`
* `4 + 16 + "oi" = "20oi"`
* `"oi" + 4 + 16 == "oi416"`


11h50