---
title: Metadados e Magic Bytes
subtitle: I call it m4g1c - Como arquivos guardam informações ocultas
tags: [forense]
date: 20/06/26
---

# Metadados e Magic Bytes

## Introdução
Arquivos são a base de qualquer sistema operacional comum, e por isso amplamente utilizados. Nesse contexto, é natural que os SOs sejam capazes de detectar informações básicas sobre os arquivos, como o nome, extensão, tamanho, origem, método de construção e etc... Essas informações ficam ocultas dentro dos arquivos e são chamadas de **Metadados**. Nos sistemas baseados em Linux, é possível usar a ferramenta `exiftool` para extrair os metadados. Além disso, o início do arquivo cru, (*raw*), também oferece dicas importantes e mais confiáveis do tipo do arquivo. Essa assinatura é chamada de *Magic Bytes* e serve como uma identificação para o SO, então, ainda que você mude manualmente a extensão do arquivo, o sistema ainda saberá a extensão original.

## Ferramentas
- `exiftool`: Extrai e mostra os metadados. Bem legível e intuitiva;
- `xxd`: Mostra o *rawdata* do arquivo, isto é, os bytes crus. Com isso, é possível detectar a assinatura da tipagem do arquivo;

## Exemplos Práticos
Veja o *header* de alguns tipos comuns de arquivos:
- **JPEG**  
    ```ffd8 ffe0 0010 4a46 4946 0001 0001 0048```  
    O `ffd8` é uma assinatura clássica de JPEGs.

- **PNG**  
    ```8950 4e47 0d0a 1a0a 0000 000d 4948 4452```  
    O `50 4e 47` significa literalmente PNG.

- **PDF**  
    ```2550 4446 2d31 2e35 0d0a 25b5 b5b5 b50d```  
    PDFs iniciam com `25 50 44 46`.

## Aplicações
Com essa leitura direta dos *bytes* do arquivo, é possível detectar executáveis mal intencionado dentro de arquivos de alto compartilhamento, como PDFs, planilhas e *PowerPoints*. Também é possível analisar se um arquivo foi corrompido ou não utilizando ferramentas que analisam a integridade nos padrões dos dados crus. Aplicações substanciais para a cibersegurança.

## Princípios da Análise Forense
Quando estamos trabalhando com arquivos suspeitos, existem algumas regras importantes a fim de garantir um processo eficaz e seguro:
- Cópia de Segurança: Deve-se sempre criar uma cópia do arquivo original a fim de preservar sua integridade e poder trabalhar livremente em cima da cópia criada.
- Ambiente Virtual: Naturalmente, não faz sentido abrir um arquivo com suspeitas de conter scripts maliciosos embutidos no seu computador pessoal. Um ambiente virtual seguro e controlado é o ideal.
