---
title: Algoritmos de Bruteforce - A Fácil Ineficiência
subtitle: Talvez o mais intuitivo e ineficaz dos algoritmos.
tags: [algoritmos]
date: 30/05/26
---

# Algoritmos de Bruteforce
Algoritmos de força bruta são basicamente métodos instrucionais que buscam uma resposta desejada buscando ou testando excessivamente todas as combinações possíveis de um conjunto de entrada.

Imagine que você esqueceu a combinação do PIN do seu celular. Usar um Bruteforce é basicamente testar *0001*, *0002*, *0003*, ... até ter sucesso. Claro, se o padrão for *0006*, por exemplo, você fará poucas tentativas, mas, se o padrão for *9999*, você terá de testar 9999 vezes.

Por isso esse algoritmo é fácil de entender, mas bem ineficaz, tendo ordem O(mn).

Um exemplo de código que implementa um *Bruteforce* com o objetivo de achar uma *substring* em uma *string*.

```
def find_substring(str, tar):
    for m in range(len(str) - len(tar) + 1):
        found = True
        for n in range(len(tar)):
            if str[m + n] != tar[n]:
                found = False
                break

        if found:
            return m
        
    return None
```

Esse código testa todas as combinações de substrings de uma string e verifica se o trecho obtido é igual ao buscado. No pior dos casos, ele realiza m * n operações.