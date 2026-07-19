---
title: SQL Injection
subtitle: 
tags: [redes]
date: 16/07/26
---

# SQL Injection (SQLi)

Um ataque popular que se aproveita de uma má sanitização dos campos de input em formulários. Ao invés de enviar um texto comum, o invasor envia uma *SQL Query* adulterada, esperando que o banco de dados execute essa entrada e exponha dados sensíveis.

## Tipos de SQLi

* **In-Band SQLi**: É a forma mais comum e simples de SQLi. O invasor envia a query pelo próprio canal de comunicação da  aplicação web e recebe a resposta pela mesma página. 
  * **Error-Based SQLi**: Força o banco de dados a gerar um erro, mostrando uma mensagem que pode expor informações sensíveis.\
  `' OR 1=1--`
  * **Union-Based SQLi**: Se aproveita do operador UNION, que une queries maliciosas com queries legítimas. Permite extrair dados adicionais.\
   `' UNION SELECT username, password FROM users --`

* **Blind SQLi**: Em alguns casos, a resposta da injeção não é retornada, então, o invasor usa técinicas para detectar se foi bem sucedido ou não.
  * **Boolean-Based SQLi**: Força o banco de dados a gerar um erro, mostrando uma mensagem que pode expor informações sensíveis.\
  `' OR 1=1--`

## Detectando a vulnerabilidade
Uma boa forma de verificar se uma aplicação é vulnerável a SQLi, por mais raras que sejam atualmente, é verificar a resposta do servidor com um parâmetro comum em com um parâmetro adulterado. Se o segundo caso exceder o tempo limite ou retornar algum erro diferente, significa que a aplicação está se comportanto de forma extraordinária frente a uma query modificada, indicando uma possível falha de segurança.