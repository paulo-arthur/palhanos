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

## Assinaturas
| Extensão | Tipo de Arquivo | Magic Bytes (Hexadecimal) | Representação ASCII / Descrição |
| :--- | :--- | :--- | :--- |
| `.exe`, `.dll`, `.sys` | Executável Windows (PE) | `4D 5A` | `MZ` (Mark Zbikowski) |
| `.elf` | Executável Linux / Unix | `7F 45 4C 46` | `.ELF` |
| `.png` | Imagem PNG | `89 50 4E 47 0D 0A 1A 0A` | `.PNG....` |
| `.jpg`, `.jpeg` | Imagem JPEG | `FF D8 FF` | Início de imagem (SOI) |
| `.gif` | Imagem GIF | `47 49 46 38 37 61` ou `47 49 46 38 39 61` | `GIF87a` ou `GIF89a` |
| `.pdf` | Documento PDF | `25 50 44 46` | `%PDF` |
| `.zip` | Arquivo Compactado ZIP | `50 4B 03 04` | `PK..` (Phil Katz) |
| `.rar` | Arquivo Compactado RAR | `52 61 72 21 1A 07 00` ou `52 61 72 21 1A 07 01 00` | `Rar!` |
| `.docx`, `.xlsx`, `.pptx` | Documentos Office Modernos | `50 4B 03 04` | `PK..` (Mesma assinatura do ZIP corporativo) |
| `.doc`, `.xls`, `.ppt` | Documentos Office Antigos (97-2003) | `D0 CF 11 E0 A1 B1 1A E1` | Arquivo Composto OLE (Microsoft Office) |
| `.mp3` | Áudio MP3 (com tag ID3v2) | `49 44 33` | `ID3` |
| `.mp4` | Vídeo MP4 | `00 00 00 18 66 74 79 70 6D 70 34 32` | `....ftypmp42` |
| `.7z` | Arquivo Compactado 7-Zip | `37 7A BC AF 27 1C` | `7z¼¯'.` |
| `.tar.gz` | Arquivo Gzip | `1F 8B` | Identificador de compressão Gzip |
| `.bmp` | Imagem Bitmap | `42 4D` | `BM` |
| `.class` | Bytecode Java compiled | `CA FE BA BE` | `CAFEBABE` (Assinatura clássica) |
Fonte: Gemini Pro
