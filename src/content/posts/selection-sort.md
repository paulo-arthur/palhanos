---
title: Selection Sort
subtitle: Algoritmo de ordenação simples.
tags: [algoritmos, ordenação]
date: 01/06/2026
---

# Selection Sort

O *Selection Sort* é um algoritmo que opera sobre um conjunto de elementos comparáveis e organiza-os. Para isso, ele seleciona o menor elemento e o troca com o primeiro elemento. Daí, do grupo resultante da exclusão do novo primeiro elemento (o menor de todos que acabou de ser trocado), seleciona-se o novo menor e repete-se a operação. Ao final, o *array* estará ordenado.

Naturalmente, o independentemente do caso para esse algoritmo, ele deverá fazer `n * n` operações, resultando em uma ordem de `O(n²)`.

Segue um exemplo em *Python*:

```
def selection_sort(array):
    for i in range(len(array)):
        index_menor = i
        for j in range(i, len(array)):
            if array[j] < array[index_menor]:
                index_menor = j
        array[i], array[index_menor] = array[index_menor], array[i]
```

### Vantagens:
- Fácil de entender;
- Requer apenas um espaço de memória extra;

### Desvantagens:
- Ordem altíssima. Péssimo para organizar uma grande quantidade de dados;
- Não mantém a ordem relativa dos elementos iguais, logo, é instável;
