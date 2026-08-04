---
title: SQL Injection
subtitle: 
tags: [vulnerabilidades]
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
Para mapear uma aplicação em busca dessa vulnerabilidade, deve-se entender que dividimos de duas formas:

1. **Black Box**: Quando não se tem acesso ao código-fonte;
2. **White Box**: Quando se tem acesso ao código-fonte;

### Black Box
**1. Mapeamento de Pontos de Entrada (Superfície de Ataque):**

  O primeiro passo é mapear todos os parâmetros de entrada que enviam dados para o backend:

  * Parâmetros HTTP GET e POST: Campos de formulários (login, busca, cadastro), parâmetros de URL (?id=1, ?category=books).

  * Headers HTTP: Cabeçalhos frequentemente armazenados em banco de dados para logs ou métricas, como User-Agent, Referer, X-Forwarded-For e cookies de sessão.

  * APIs (REST/GraphQL): Payloads JSON ou XML enviados via POST, PUT ou PATCH.

**2. Análise Dinâmica e Testes de Comportamento (DAST)**

  Na análise dinâmica em ambientes de teste autorizados, avalia-se como o servidor responde a caracteres especiais e estruturas sintáticas de banco de dados:

   * Injeção de Caracteres de Controle: Envio de caracteres como ', ", ;, -- ou /* para verificar se a aplicação retorna erros de sintaxe de banco de dados (SQLi Baseado em Erro).

   * Testes Lógicos (Boolean-based): Envio de condições verdadeiras e falsas (ex: ' OR '1'='1 vs ' OR '1'='2) para observar alterações no tempo de resposta ou no conteúdo retornado pela página.

   * Testes de Tempo (Time-based): Injeção de funções de atraso específicas do SGBD (ex: SLEEP() no MySQL, pg_sleep() no PostgreSQL) para identificar execuções assíncronas ou cegas (Blind SQLi).