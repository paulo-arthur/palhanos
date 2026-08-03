---
title: Decorators - Python
subtitle: Função de funções.
tags: [python]
date: 03/08/26
---

# Decorators em Python
*Decorators* são basicamente funções que recebem outras funções como parâmetro, adicionando a elas funcionalidades extras sem modifcar seus códigos.

## Entendendo Decorators didaticamente
Digamos que temos a função `cumprimentar()`. Ela recebe um *nome* como argumento e retorna um `"Olá, {nome}."`

```
cumprimentar(nome):
    return f"Olá, {nome}!"
```

Mas o que acontece se eu quiser fazer alterações nessa função sem ter que alterar o corpo dela diretamente? Isto é, e se eu quiser adicionar funcionalidades extras a ela sem alterar o código fundamental da função? É justamente para resolver isso que existem os *decorators*.

Um *decorator* nada mais é que uma função que recebe outra como parâmetro e retorna mais uma como resultado. Vamos tentar construir isso de forma natural.
```
gritar(func):
```
Agora, não podemos alterar diretamente func, pois, além de ser inviável, alteraria o código original dela, e não é isso que queremos. Para resolver o problema, vamos criar uma outra função interior que imita `func`, mas altera seu comportamento.
```
gritar(func):
    def interior(nome):
        return func(nome).upper()
    return interior
```
Naturalmente, é notável que a função só está recebendo um parâmetro dessa forma. Se quisermos múltiplos parâmetros, usamos o *.
```
gritar(func):
    def interior(*args):
        return func(*args).upper()
    return interior
```

Agora, um exemplo de aplicação real de um decorator: um dos usos reais mais comuns de decorators em desenvolvimento de software é medir quanto tempo uma função demora para rodar (ótimo para encontrar gargalos e otimizar código).
```
import time

def timer(func):
    def wrapper(*args):
        tempo_inicial = time.time()
        result = func(*args)
        tempo_final = time.time()

        print(f"[LOG] A função {func.__name__} levou {tempo_final - tempo_inicial} segundos para rodar.")
        return result
    return wrapper

@timer
funcao_demorada(args, ...) 
```

Enfim, vale destacar que o poder de encapsulamento e a reciclagem dos *decorators* são importantíssimas para o desenvolvimento de funções mais complexas, reiterando a importância desse conceito.