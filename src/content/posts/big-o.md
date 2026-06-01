---
title: Big O Notation - Fundamentos e Teoria
subtitle: Como mensurar a escalabilidade e eficiência de algoritmos.
tags: [algoritmos]
date: 27/05/26
---

# Big O Notation
## O que é?
Basicamente, uma forma de medir o quão eficiente são algoritmos. Diferentemenete de um possível pensamento inicial, o Big O não se baseia no tempo de execução, pois isso é relativizado pela potência da máquina, mas na quantidade de operações realizadas pelo algoritmo.

## Principais tipos de ordens:
- O(1)
- O(n)
- O(n²)
- O(log(n))

## Explicando as ordens:
Dados que as três primeiras são bem intuitivas, resta explicar pelor a O(log(n)).

Um bom exemplo é o algoritmo de busca binária, no qual a busca por um valor específico em um array ordenado não é feita de um em um, mas sempre checando o valor intermediário. Isso faz com que, a cada repetição, a quantidade de elemntos seja dividida pela metade. Daí, se temos *n* elementos e *k* repetições máximas:
```n = 2^k -> k = log(n)/log(2)```
Isso deixa o algoritmo matematicamente mais eficiente, escalando melhor em uma grande quantidade de dados.

## Determinando a ordem de um algoritmo
Note que o mesmo algoritmo pode ter ordens diferentes, havendo uma melhor e uma maior. Tomemos o exemplo do *Linear Search*:
```
def linear_search(array, value):
    for i in array:
        if i == value:
            return True
    return False
```
No melhor cenário, o valor é o primeiro elemento do array, conferindo O(1) à execução. No pior, o valor é o último elemento, conferindo ordem O(n). Assim, sempre devemos escolher a ordem do pior cenário para representar a ordem geral do algoritmo.

Para determinar a ordem lendo o código, veja quantas vezes o ciclo é execudado. Em loops aninhados, multiplique os valores. Lembre-se de que recursões geralmente criam exponenciais e divisões tendem a gerar logarítmicas.