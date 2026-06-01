---
title: Bubble Sort
subtitile: Algoritmo de ordenação que lembra bolhas em busca da superfície.
tags: [algoritmos, ordenação]
date: 01/06/26
---

# Bubble Sort

Um dos algoritmos de ordenação mais simples. Basicamente, percorre o
conjunto verificando, em cada iteração, se o próximo elemento é menor que o ante
rior. Se for, executa a troca. O algoritmo percore o *array* até não realizar ne
nhuma troca na iteração anterior.

Quanto à eficiência, o *Bubble Sort*, no pior dos casos, é O(n²). No melhor, O(n).

Segue um exemplo de implementação em *Python*:
```
def bubble_sort(array):
    trocou = True
    while (trocou):
        trocou = False
        for i in range(len(array) - 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                trocou = True
```

### Vantagens:
- Visualmente didático;
- Ocupa apenas um espaço extra na memória;

### Desvantagens:
- Alto custo operacional;
- Não é escalável para grandes quantidades de dados;

![GIF de uma implementação gráfica do Buuble Sort organizando pontos pretos sobre um fundo branco](https://upload.wikimedia.org/wikipedia/commons/3/37/Bubble_sort_animation.gif)
