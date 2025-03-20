# BuzzFeed: Herói ou Vilão? 🦸‍♀️🦹‍♂️

## 📜 O que é?

O **Clone do BuzzFeed** é um projeto desenvolvido durante o curso *"Criando um Clone do BuzzFeed com Angular"* da Avanade + DIO. Nele, o usuário pode responder ao quizz de forma interativa e descobrir se seria um herói ou vilão com base nas respostas.

![Imagem do Layout](/public/layoutroxo.png)

## 🛠️ Tecnologias usadas:

- **Angular**: A base sólida para dar vida à aplicação.
- **TypeScript**: Para uma lógica bem estruturada e sem bugs.
- **HTML5 e CSS3**: Responsáveis pela estrutura e aquele visual incrível.
- **JSON**: Onde ficam armazenadas as perguntas e respostas dos quizzes.

## ⚙️ Funcionalidades

- **Quizz interativo**: Perguntas e opções.
- **Resultados personalizados**: No final do quiz, verá seu resultado com base nas escolhas, seja herói ou vilão.

## 🌐 Visualize o Site

Quer ver o projeto em ação? Acesse o site clicando no link abaixo:

[Site do Clone do BuzzFeed](https://buzzfeed-quiz-zeta.vercel.app/)

## 🔍 Lógica de Interação

Este projeto utiliza uma lógica simples para determinar o "lado" do usuário(herói ou vilão) com base nas respostas. Aqui está como funciona:

1. O quiz é composto por várias perguntas, e cada uma tem opções de resposta com um alias associado (A ou B).
2. Cada vez que o usuário escolhe uma opção, o alias correspondente é registrado.
3. No final, se a maioria das respostas forem do alias "A", o usuário recebe o resultado "Você muito provavelmente seria um super vilão!". Caso contrário, se as respostas forem majoritariamente "B", o resultado é "Você muito provavelmente seria um super herói!".

Exemplo de perguntas e opções:

```json
{
  "title": "Você seria um HÉROI ou um VILÃO?",
  "questions": [
    {
      "id": 1,
      "question": "Qual super poder você escolheria?",
      "options": [
        { "id": 1, "name": "Raios-Lasers", "alias": "A" },
        { "id": 2, "name": "Voar", "alias": "B" }
      ]
    },
    {
      "id": 2,
      "question": "Quem você salvaria primeiro?",
      "options": [
        { "id": 1, "name": "Crianças", "alias": "A" },
        { "id": 2, "name": "Idosos", "alias": "B" }
      ]
    }
  ],
  "results": {
    "A": "Você muito provavelmente seria um SUPER VILÃO!",
    "B": "Você muito provavelmente seria um SUPER HERÓI!"
  }
}
```

## 📱 Como usar?

1. Clone o repositório:

   ```bash
   git clone git@github.com:Claudiannyy/buzzfeed.git
   ```

2. Vá até o diretório do projeto:

   ```bash
   cd buzzfeed
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Rode o projeto:

   ```bash
   ng serve
   ```

5. Abra seu navegador e vá para
 [http://localhost:4200](http://localhost:4200).

---

## 🔧 Personalização


Este projeto é fácil de personalizar para se adaptar a diferentes perguntas. Caso queira personalizar, aqui estão algumas ideias para você modificar o código:

- **Alterar as perguntas do quizz**: Substitua as perguntas no diretório `src/assets/data/quizz_questions.json` por outras perguntas da sua preferência.
- **Alterar as respostas do quizz**: Substitua as respostas no diretório `src/assets/data/quizz_questions.json` por outras respostas da sua preferência.
- **Modificar o botão**: Você pode mudar o texto ou até mesmo o estilo do botão alterando o componente de botão `btn-option`.

---


Este projeto foi desenvolvido com o apoio das aulas do professor [Felipe Aguiar](https://github.com/felipeAguiarCode). 

