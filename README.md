<h4 align="center">
  <img src="docs/images/logo.png" alt="Logo" width="150"/>
</h4>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

<div align="center">
  <img style="border-radius: 10px" width="320px" height="auto" alt="demo" title="demo" src="docs/videos/demo.gif" />

</div>

## 🔖 About

Este projeto é uma solução para o Teste Técnico Mobile da BeTalent, que consiste em construir uma aplicação mobile que exibe uma tabela de funcionários. A aplicação consome dados de uma API simulada e permite a pesquisa dinâmica por nome, cargo e telefone.

### Escolha das tecnologias

- **Expo**: Escolhi o Expo para acelerar o desenvolvimento e por ser uma solução recomendada pela documentação do React Native.
- **React Native**: Framework para desenvolvimento mobile utilizando JavaScript e React.
- **UniStyle**: Biblioteca de estilização escolhida pela sintaxe similar ao StyleSheet do React Native.
- **ESLint e Prettier**: Ferramentas para garantir a qualidade e estilo do código.
- **Lefthook**: Automatiza a execução de testes e verificação de estilo de código a cada commit.
- **Jest e RNTL**: Testes unitários garantir a qualidade do código.

### Destaques do Projeto

- **Otimização de Performance**: Implementei técnicas com _memo_ e _useCallback_ para evitar renderizações desnecessárias e melhorar a performance da aplicação.
- **Código Limpo e Organizado**: A estrutura do projeto e código foram pensados para facilitar a leitura e manutenção.
- **Animações**: Animações nativas para melhorar a usabilidade da aplicação.
- **Casos de erro**: Foi utilizado o tratamento de erros para garantir a melhor experiência do usuário.
- **Testes Automatizados**: A suíte de testes garante a qualidade do código e previne regressões.

### Funcionalidades

- **Listagem de Empregados**: Visualize uma lista de empregados.
- **Busca**: Filtre os empregados por nome, cargo ou telefone.
- **Detalhes**: Visualize as informações do empregado selecionado. com uma animação suave de abertura.

## 🚀 Technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [UniStyles](https://reactnativeunistyles.vercel.app/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [RNTL](https://callstack.github.io/react-native-testing-library/)
- [Lefthook](https://github.com/evilmartians/lefthook)

## 🏁 How to run the project

Pré-requisitos:

- node >= v20.18.0
- yarn || npm

```sh
# Clone the repository
git clone https://github.com/rafinhaa/betalent-challenge
cd betalent-challenge

# Install dependencies
yarn install

# run Api local
yarn api:server

# run Android
yarn android

# run iOS
yarn ios
```

## ℹ️ Info

[Screenshots](docs/SCREENS.md)

## 📄 Changelog

## 📝 License

[MIT](LICENSE.txt)

**Free Software, Hell Yeah!**
