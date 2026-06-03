---
title: Merge Sort
subtitle: Dividir e conquistar
tags: [ordenação, algoritmos]
date: 02/06/26
---
# Merge Sort

O Merge Sort é um algoritmo de ordenação baseado na estratégia **Dividir para Conquistar**.

A ideia é simples: Dividir o array em duas metades, ordenar cada metade recursivamente, combinar (merge) as duas metades ordenadas. Apesar de consumir uma grande quantidade de memória, o *Merge Sort* é bem eficiente, pois, diferentemente de algoritmos como Bubble Sort e Insertion Sort, o Merge Sort mantém um desempenho consistente independentemente da disposição inicial dos elementos. O Merge Sort mantém complexidade O(n log n) em todos os casos porque sempre divide o problema em duas partes e realiza a etapa de merge em tempo linear.

Segue uma implementação em *Python*:
```
def merge_sort(array):
    if len(array) <= 1:
        return array

    middle = len(array) // 2
    
    left = merge_sort(array[:middle])
    right = merge_sort(array[middle:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])

    return result
```

## Vantagens
- Desempenho previsível.
- Algoritmo estável.
- Excelente para grandes volumes de dados.
- Muito utilizado em processamento externo e sistemas distribuídos.

## Desvantagens
- Necessita memória auxiliar O(n).
- Geralmente possui maior custo de memória que Quick Sort.
- Para listas muito pequenas costuma ser mais lento que Insertion Sort.

