## Rodar servidor

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu browser para ver o resultado.

# Participantes:

- Daniel Carlos de Siqueira Santos - RA: 109681
- Gabriel Tadeu Geromel - RA: 108818
- Gustavo Consoni - RA: 110471
- Heduardo Gabriel Costa - RA: 109439
- Lucas Cortez Sanches - RA: 110434
- Matheus Brandão Cazarin - RA: 110312

## Estratégia para Levantamento/Elicitação de Requisitos

Utilizamos a estratégia de Brainstorming. Com isso fizemos o levantamento de requisitos que julgamos importantes para filtrar o que seria viável de realizar no prazo do projeto. Seguindo a ordem de analisar, revisar, organizar as informações e extrair requisitos funcionais e não-funcionais do sistema.

## Definição do Escopo do Projeto

O sistema deve operar em ambiente Web, sendo possível utilizar nos principais navegadores como: Mozilla FireFox, Chrome, Opera. O sistema deve permitir o cadastro das rotas dos ônibus. O sistema deve permitir o cadastro dos diferentes tipos de ônibus. O sistema deve receber os dados do itinerário e quantidade de passageiros em todos os dias e horários da semana. O sistema irá exibir um relatório com a análise de eficiência das rotas cadastradas de acordo com os ônibus. A interface com usuário deve ser interativa, e todas as configurações acessadas em no máximo 3 cliques. O carregamento das páginas não pode passar de 2 segundos. Os ônibus de grande porte não podem circular com menos de 50% da capacidade máxima de passageiros.

## Estratégia para o Desenvolvimento do Projeto

O modelo de ciclo de vida escolhido para o desenvolvimento do projeto foi o cascata, desenvolvido com base nos requisitos fornecidos pelo próprio cliente, em que uma nova etapa do projeto só é iniciada quando a anterior estiver totalmente finalizada. Após a implementação do projeto, a manutenção do sistema é realizada baseando-se no feedback fornecido pelo usuário.

## Casos de uso

ex: Ponto 10 entrou 1 pessoa e ponto 11 entrou pessoas (durante um período x de tempo isso se repete em determinado período). Então removemos o ponto caso a distância entre o 10 e 11 forem razoáveis.

## Telas

- Tela de login do usuário
- Tela de cadastro do usuário
- Tela principal com diversas opções
- Tela de cadastro do veículo
- Tela de cadastro de linha/rota
- Tela de cadastro de pontos


## Requisitos Funcionais, Não-Funcionais e Regras de Negócio

**Requisitos Funcionais:**

- O sistema deve permitir o cadastro e login de usuários(nome, cpf, email, senha).
- O sistema deve permitir recuperar a senha.
- O sistema deve permitir o cadastro de pontos de onibus(localização, id).
- O sistema deve permitir o cadastro de linhas (pontos, ponto_partida, ponto_final, id).
- O sistema deve permitir o cadastro de onibus(marca, numero_passageiros).
- O sistema deve permitir a consulta e exclusão de onibus cadastrados.
- O sistema deve permitir a consulta e exclusão de rotas cadastrados.
- O sistema deve permitir a consulta e exclusão de pontos cadastrados.
<!-- - O sistema deve permitir a exclusão de onibus cadastrados.
- O sistema deve permitir a exclusão de rotas cadastrados.
- O sistema deve permitir a exclusão de pontos cadastrados. -->
- O sistema deve calcular uma melhor rota para a linha, diminuindo quantidade de pontos caso a proximidade seja pequena de um ponto para o outro, variando apenas o horário e dia da semana.
- O sistema deve calcular se a nova rota é mesmo eficiente baseando-se em informações coletadas previamente(ficticias) sobre a quantidade de pessoas(media) que entram e saem em cada ponto em determinados dias da semana, e a distancia dos pontos.
  <!-- - O sistema deve calcular se aquela rota da linha é mesmo eficiente baseada nas informações coletadas previamente(ficticias) sobre a quantidade de pessoas(media) que entram e saem em cada ponto e a distancia dos pontos. -->
  -Baseado no calculo de eficiencia da rota o sistema deve mostrar a rota atual da linha e uma sugestão de rota mais eficiente, juntamente ao onibus indicado.

**Requisitos Não-Funcionais:**

- A interface com usuário deve ser interativa, e todas as configurações acessadas em no máximo 3 cliques.
- O sistema deve funcionar em todos os Web Browsers.
- O carregamento das páginas não pode passar de 2 segundos.
- O sistema deverá ser desenvolvido em um mês.

**Regras de Negócio:**

- A elevação deve influenciar no calculo da eficiencia da rota
- A distancia de um ponto pro outro deve influenciar no calculo da eficiencia da rota

## Features

    Modelo:
        <ação> o <resultado> <por/para/de/a> um <objeto>

    Exemplo:
        Adiciona o produto a um carrinho de compras
        Exibe as especificações técnicas de um produto
        Armazena as informações de remessa para um cliente

- Cadastra a linha para o usuário.
- Cadastra o ponto para o usuário.
- Consulta os pontos para o usuário.
- Consulta as linhas para o usuário.
