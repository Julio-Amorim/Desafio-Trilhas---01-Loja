# Giro & Passada 🏃‍♂️🚴

Loja fictícia de artigos para corrida de rua e ciclismo, com simulação de compra em JavaScript.

- **Aluno:** Júlio César Amorim da Rocha
- **Trilha:** TRILHA DE DESENVOLVIMENTO MOBILE

---

## Apresentação da loja

A **Giro & Passada** é uma loja especializada em artigos para quem corre e pedala. A identidade visual usa azul no cabeçalho (energia e confiança), verde para os preços e laranja no botão principal, para chamar a atenção.

### Produtos e preços

| Produto | Descrição | Preço |
|---|---|---|
| Camiseta Dry Fit | Ideal para transpiração e conforto nos treinos. | R$ 70,00 |
| Garrafa Térmica 500ml | Mantém sua água gelada durante todo o percurso. | R$ 130,00 |
| Óculos Esportivo | Proteção UV e aerodinâmica para pedalar ou correr. | R$ 560,00 |

### Regra de desconto

Compras com total **acima de R$ 600,00** ganham **10% de desconto**.

---

## Como funciona a simulação

Ao clicar em **Simular compra** (o botão chama `simularCompra()` pelo atributo `onclick`):

1. Um `prompt()` pergunta a quantidade de cada produto.
2. A resposta é convertida em número com `Number()`. Valores inválidos ou negativos geram um aviso e permitem uma nova tentativa. Se a segunda tentativa também for inválida, a simulação é encerrada.
3. Valores decimais não negativos são aceitos; clicar em **Cancelar** equivale a informar 0, pois `Number(null)` resulta em 0.
4. Calcula `preço × quantidade` de cada item e soma o total.
5. Se o total for maior que R$ 600,00, aplica 10% de desconto.
6. Um `alert()` informa o total final da compra, já com o desconto aplicado quando houver.

---

## Tecnologias

- **HTML5**: estrutura da página (`index.html`)
- **CSS3**: layout com Flexbox, cores, sombras, efeito hover e versão para celular (`style.css`)
- **JavaScript**: simulação da compra com `prompt()`, `Number()`, `if/else` e `alert()` (`script.js`)

## Estrutura dos arquivos

```
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── camiseta.jpg
    ├── garrafa.jpg
    ├── oculos.jpg
    └── captura-de-tela.png
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador (Chrome, Edge, Firefox).
3. Clique em **Simular compra** e informe as quantidades.

Não é preciso instalar nada.

---

## Captura de tela

![Página da loja Giro & Passada](assets/captura-de-tela.png)

---

## Testes realizados

| # | Quantidades digitadas (camiseta, garrafa, óculos) | Resultado esperado | Resultado obtido |
|---|---|---|---|
| 1 | 2, 1, 3 | Total final R$ 1.755,00, com desconto | ✅ OK |
| 2 | 1, 1, 1 | Total final R$ 684,00, com desconto | ✅ OK |
| 3 | 0, 0, 3 | Total final R$ 1.512,00, com desconto | ✅ OK |
| 4 | 0, 0, 0 | Total final R$ 0,00 | ✅ OK |
| 5 | abc, depois 2; 1; 0 | Aviso, nova tentativa e total final R$ 270,00 | ✅ OK |
| 6 | Cancelar, 1, 0 | Cancelar conta como 0, total final R$ 130,00 | ✅ OK |
| 7 | -1, depois 2; 1.5; 1 | Aviso, nova tentativa, decimal aceito e total final R$ 805,50 | ✅ OK |
| 8 | Tela de celular | Cards empilhados um embaixo do outro | ✅ OK |
---

## Dificuldade encontrada e aprendizado

A maior dificuldade foi tratar respostas que não são números. Quando o usuário digita um texto, `Number("abc")` resulta em `NaN`, e isso estraga o total. Também descobri que, ao clicar em "Cancelar", o `prompt()` devolve `null`, e `Number(null)` vale `0`. Resolvi usando `isNaN()` e verificando se o número não é negativo antes de fazer as contas.

Aprendi como o `prompt()` sempre devolve texto, por que é preciso converter com `Number()` e como usar `toFixed(2)` com `replace(".", ",")` para mostrar os valores no formato de Reais.

---

## Uso de Inteligência Artificial

Usei IA (Lovable) como apoio para:

- Gera um layout da página
- Gerar as imagens dos produtos que estão na pasta `assets`.

Como verifiquei: executei os casos da tabela de testes acima, conferi as contas manualmente (por exemplo, 2 × 70 + 1 × 130 + 3 × 560 = 1.950,00; com 10% de desconto, o total final é R$ 1.755,00) e testei a página no computador e no celular.
