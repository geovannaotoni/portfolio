import trybetunes from './images/TrybeTunes.png';
import recipesApp from './images/RecipesApp.png';
import triviaGame from './images/TriviaGame.png';

const projects = [
  {
    id: 1,
    title: 'App de Músicas',
    src: 'https://github.com/geovannaotoni/trybe-project-trybetunes',
    img: trybetunes,
    deploy: 'https://geovannaotoni-trybetunes.surge.sh/',
    tecnologies: ['CSS', 'HTML', 'JavaScript', 'JSX', 'React', 'React Router Dom', 'Componentes de Classe', 'PropTypes', 'NPM', 'Requisições via API'],
    description: 'Projeto em React de um site de músicas. Ao utilizar essa aplicação, a pessoa usuária é capaz de pesquisar albuns de artistas/bandas, visualizar e reproduzir as músicas de cada album, criar uma lista de músicas favoritas e editar o perfil logado no site.'
  },
  {
    id: 2,
    title: 'Jogo Trivia',
    src: 'https://github.com/geovannaotoni/trybe-project-trivia',
    img: triviaGame,
    deploy: 'https://geovannaotoni-trivia-game.surge.sh/',
    tecnologies: ['CSS', 'HTML', 'JavaScript', 'JSX', 'React', 'React Router Dom', 'Redux', 'Testes com React-Testing-Library', 'Componentes de Classe', 'PropTypes', 'NPM', 'Requisições via API'],
    description: 'Projeto que consiste em um jogo de perguntas e respostas baseado no jogo Trivia. A aplicação permite que a pessoa usuária possa logar no jogo e escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero. Ao final de cada jogo, pode-se visualizar o ranking.'
  },
  {
    id: 3,
    title: 'App de Receita',
    src: 'https://github.com/geovannaotoni/trybe-project-recipes-app',
    img: recipesApp,
    deploy: 'https://recipes-app-group-1.surge.sh/',
    tecnologies: ['CSS', 'JavaScript', 'HTML', 'React', 'React Router Dom', 'Context API', 'React Hooks', 'Testes com React-Testing-Library', 'Componentes Funcionais', 'PropTypes', 'NPM', 'Requisições via API'],
    description: 'Projeto que consiste em um app de receitas, criado utilizando Hooks e Context API. Nessa aplicação é possível ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas. A base de dados foram 2 APIs distintas, uma para comidas e outra para bebidas. Também foram utilizadas ferramentas de metodologias ágeis, como Kanban e SCRUM.'
  }
]

export default projects;
