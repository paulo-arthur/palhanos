---
title: Modelo OSI - Padronização do envio de dados
subtitle: Como o compartilhamento de dados é implementado nas redes atuais.
tags: [redes]
date: 15/07/26
---

# Modelo OSI
O Modelo OSI (Open Systems Interconnection) é um padrão de organização teórico em camadas, ou *layers*, que norteia as transmissões de dados entre redes. O modelo divide a comunicação em 7 camadas com funcionalidades próprias, garantindo que sistemas diferentes possam comunicar-se de forma portátil, escalável e compatível.

## As 7 Camadas
Para facilitar a compreensão, vamos fazer uma analogia à entrega de uma carta para um colega estrangeiro, além de exemplificar com um processo de envio de e-mail. O sistema é divido nas seguintes camadas:

- **7. Aplicação**
É a camada com a qual o usuário interage diretamente. É seu navegador de internet ou aplicação de e-mail. Também define o protocolo a ser utilizado para a comunicação. Na analogia, é o momento em que você escreve a carta, escolhendo o tipo do papel, conteúdo, grafia e caneta utilizadas. No exemplo, seria a aplicação que permite você escrever e enviar o e-mail (Thunderbird, Gmail, Outlook, ...) e o protocolo utilizado (SMTP).

- **6. Apresentação**
É a camada que garante que o destinatário será capaz de ler os dados enviados. Formata e criptografa as informações, além de comprimir a informação, garantido uma transferência rápida e segura. Seria um tradutor que traduz sua carta para o idioma do amigo ou o formato MIME ou Base64 (formatação) e TLS (criptografia) no envo do e-mail.

- **5. Sessão**
Abre, gerencia e fecha a comunicação entre dois computadores. Ela garante que eles fiquem sintonizados e, caso haja uma quebra na comunicação, que voltem do último *checkpoint*. Você liga para o seu amigo e diz que vai enviá-lo uma carta. No e-mail, seria o computador dizendo: *"Olá, sou o computador tal e quero enviar um e-mail."*. Daí, o servidor responde: *"Pois não, sou o servidor tal. Estou pronto para receber o e-mail"*.

- **4. Transporte**
Basicamente, segmenta o envio de dados em pequenos pacotes chamados *segmentos*. Isso garante que a rede não fique sobrecarregada com o envio de apenas um pacote gigantesco. Seria como escolher enviar a carta com *aviso de recebimento*, garantindo que nenhuma folha da carta foi perdida no meio do caminho. No envio do e-mail, é o protocolo TCP que, além de segmentar o envio, ordena os *segmentos* e garante que nenhum se perdeu no meio do caminho.

- **3. Rede**
Cada *segmento* TCP é transformado em um *Pacote IP*, recebendo o endereço de IP do remetente e do destinatário. Ele garante que os algoritmos de roteamento terão informações para traçar a rota mais eficaz para a entrega de cada pacote. Você coloca na caixa o endereço completo de quem vai receber e os centros de distribuição dos Correios decidem se a caixa vai de avião ou caminhão. 

- **2. Enlace**
Nesta camada, o pacote IP recebe uma "roupa" física para conseguir caminhar pelos cabos ou pelo ar até o próximo dispositivo físico da rede. É a van dos Correios local pegando a sua caixa e levando até a agência mais próxima. Ela não olha o endereço final do país destino, só olha o próximo ponto da rota.

- **1. Camada Física**
Aqui, o dados já não são mais virtuais, mas puramente uma sequência de pulsos eletromagnéticos. Podem ser enviados por cabos ethernet, fibra óptica, Wi-Fi, bluetooth e etc... Seria a van, avião o caminhão que carrega os dados até o destino. No e-mail, a conexão que você usa em sua casa.