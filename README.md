# ProjetoBuzzfeedClone

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

Para iniciar o servidor local de desenvolvimento, run:
 
```bash
ng serve
```

O servidor sera inicado na rota `http://localhost:4200/`. 

# Home

A página home do projeto é um clone do Felipe Aguiar da DIO.

![image](https://github.com/user-attachments/assets/20f0e98b-69d3-4647-9d66-bedb1705e575)


Ele replica a funcionalidade de um quizz do BuzzFeed

# Features

A funcionalidade adicionada por mim é a seguinte: `CRIAR UM QUIZ PERSONALIZADO` 🤯

Diferente do projeto do Felipão, este projeto conta com uma página chamada `create`, nela o usuário poderá criar um quiz personalizado para si.

Esta página pode ser acessada pelo botão `Crie seu quiz`

## Página `Create`

![image](https://github.com/user-attachments/assets/f84d2eff-1136-48ca-850b-318bd15cc3f3)


#### A página create permite que o usuário personalize um quiz ao seu gosto.

- Selecionando os possiveis resultados
- Criando perguntas personalizadas
- Atribuindo o valor que culminará no resultado final a cada resposta

## Gerando o quiz personalizado

- Ao final da criação do quiz personalizado o usuário deve clickar no botão `GERAR QUIZ`
- Fazer o download do arquivo `.json` com os parâmetros do seu novo quiz personalizado.

- Subistitua o arquivo `quizz_questions.json` em:
```
  src/assets/data/quizz_questions.json
```
>o arquivo precisa estar nomeado **quizz_questions.json**

- Reinicie o servidor angular se necessário. `> ng serve`

- Agora a página home da aplicação estará mostrando o seu quiz personalizado. 🤩
  
## Considerações Finais

Planejo implementar no futuro uma nova página na aplicação que servirá para testar o quiz feito, sem a necessidade de baixar um arquivo json.

*Obrigado por ler até aqui*

-Vinícius Germano
