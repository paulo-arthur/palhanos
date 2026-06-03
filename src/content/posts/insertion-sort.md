---
title: Insertion Sort
subtitle: Algoritmo de ordenação do Paciência
tags: [algoritmos, ordenação]
date: 01/06/26
---

# Insertion Sort

O *Insertion Sort* age sobre um conjunto de dados, organizando em ordem crescente ou decrescente. Ele funciona repartindo a lista em duas pseudolistas, sendo uma ordenada e outra caótica. Ele pegao primeiro elemento da lista caótica e o coloca na posição correta da lista ordenada. A repetição acaba quando a lista caótica estiver vazia.

No pior caso, realiza `n²` operações, o que o dá ordem O(n²), mas na melhor das hipósteses, O(n).

Exemplo implementado em *Python*:
```
def insertion_sort(array):
    for sorted_index in range(0, len(array) - 1):
        value = array[sorted_index + 1]
        pivot = sorted_index
        while (value < array[pivot] and pivot >= 0):
            array[pivot + 1], array[pivot] = array[pivot], array[pivot + 1]
            pivot -= 1
```

### Vantagens:
- Implementação simples;
- Pode ser mais eficiente que algoritmos quadráticos simples;
- Estável (Mantém a ordem relativa de elementos iguais);

### Desvantagens
- Ineficiente para grandes conjuntos de dados (O(n²));
