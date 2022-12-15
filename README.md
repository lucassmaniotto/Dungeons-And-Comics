# Dungeons & Comics 🎲🐲

Site de Livros e Comics desenvolvido no curso de responsividade com mobile-first da Alura

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Dungeons & Comics**
| :label: Tecnologias | html, css, javascript
| :rocket: URL         | https://dungeons-and-comics.vercel.app/
|  🖥  Cursos     | https://cursos.alura.com.br/formacao-html-e-css
| | https://cursos.alura.com.br/formacao-javascript-front-end

![D&C Logo](https://user-images.githubusercontent.com/101435037/204337677-d3f6cba8-9765-420f-aef0-a38b88de05f4.png#vitrinedev)

## Detalhes do projeto

Dungeons & Comics é um projeto de um site de venda de livros, comicbooks, e coisas de RPG em geral inspirado no site [Casa do Código](https://www.casadocodigo.com.br/), utilizando o template do [Figma](https://www.figma.com/file/sSMbIqKaGBd66Y8roxTk2p/AluraBooks?node-id=37%3A94&t=qgTpN8c9LQ6xyvqa-0) disponibilizado pelo curso da Alura [HTML e CSS: responsividade com mobile-first](https://cursos.alura.com.br/course/html-css-responsividade-mobile-first).
Como no nome do curso, esse projeto foi desenvolvido pelo conceito de Mobile-First, possuindo disposições para telas de 1728px, 1024px e demais telas mobile, utilizando HTML e CSS, além de um pouco de JavaScript.

### Responsividade

O site é 100% responsivo e conta com acessibilidade para qualquer tela que o usuário preferir

| Desktop :desktop_computer: | Tablet :computer: | Mobile :iphone: |
| :---------: | :---------: | :---------: |
| ![image](https://user-images.githubusercontent.com/101435037/207893280-e9bf8f94-d0e8-4920-84c4-8ef5c7aa0c35.png) | ![image](https://user-images.githubusercontent.com/101435037/207893526-6275f232-c891-4b99-aeab-95b33330de11.png) | ![image](https://user-images.githubusercontent.com/101435037/207893610-1c7713f8-f626-4678-a5bd-fa62bae2d2e9.png) |

### Funcionalidades

O site conta com algumas implementações dinâmicas, como carrosséis e um formulário de registro que consome a dados de API

#### Carrossel

Os carrosséis foram feitos com o [SwiperJS](swiperjs.com), e costumizado conforme o estilo do projeto

![ezgif com-gif-maker](https://user-images.githubusercontent.com/101435037/207896227-7d9c78ad-9d4c-4a53-a165-987e2b216d2d.gif)

#### Formulário de cadastro

O formulário de cadastro está disponível na âncora "Meu Perfil" e consome a api [ViaCEP](https://viacep.com.br/) para consultas de CEP.

| Formulário | Tela de sucesso |
| :---------: | :---------: |
| ![image](https://user-images.githubusercontent.com/101435037/207906444-d6a6f08a-4718-4b21-b02c-0597e8f3f9f2.png) | ![image](https://user-images.githubusercontent.com/101435037/207906549-23e2b258-a0d7-4c3c-9d1b-adfcb689e42e.png)|


Com o consumo da API ViaCEP, ao informar um número de CEP válido, vários relacionados do formulário são preenchidos automaticamente. Caso o CEP informado seja inválido, é tratado o erro e o usuário é informado que o CEP não está correto.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/101435037/207904136-e350ddf8-4b6e-4d55-9b55-1c0801a634d4.gif)
