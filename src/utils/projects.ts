import trybetunes from './images/TrybeTunes.png';
import recipesApp from './images/RecipesApp.png';
import triviaGame from './images/TriviaGame.png';
import wallet from './images/trybewallet-gif.gif'
import starwars from './images/starwars-gif.gif';
import frontend from './images/frontend-online-store-gif.gif';

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
  },
  {
    id: 4,
    title: 'Controle de Gastos',
    src: 'https://github.com/geovannaotoni/trybe-project-trybewallet',
    img: wallet,
    deploy: 'https://geovannaotoni-trybewallet.surge.sh/',
    tecnologies: ['CSS', 'JavaScript', 'HTML', 'React', 'React Router Dom', 'Redux', 'Redux-Thunk', 'Testes com React-Testing-Library', 'Componentes de Classe', 'PropTypes', 'NPM', 'Requisições via API'],
    description: 'Projeto em React de uma carteira de controle de gastos com conversor de moeda, utilizando a API Economia. Ao utilizar essa aplicação, a pessoa usuária é capaz de adicionar, remover e editar um gasto, visualizar uma tabelas com seus gastos e visualizar o total de gastos convertidos para uma moeda de escolha. Para a estilização do projeto, foi utilizado o framework do Bootstrap.'
  },
  {
    id: 5,
    title: 'StarWars Planets',
    src: 'https://github.com/geovannaotoni/trybe-project-starwars',
    img: starwars,
    deploy: 'https://geovannaotoni-starwars-planets.surge.sh/',
    tecnologies: ['CSS', 'JavaScript', 'HTML', 'React', 'React Router Dom', 'Context API', 'React Hooks', 'Testes com React-Testing-Library', 'Componentes Funcionais', 'PropTypes', 'NPM', 'Requisições via API'],
    description: 'Projeto que exibe uma lista com filtros dos planetas do universo de Star Wars. Foram utilizados Context API e Hooks para controlar os estados globais e a base de dados foi a API swapi.dev/api/planets. Além disso, foram escritos testes com a React Testing Library para garantir que a aplicação possua uma boa cobertura de testes.'
  },
  {
    id: 6,
    title: 'Loja Online',
    src: 'https://github.com/geovannaotoni/trybe-project-frontend-online-store',
    img: frontend,
    deploy: 'https://geovannaotoni-online-store.surge.sh/',
    tecnologies: ['CSS', 'JavaScript', 'HTML', 'React', 'React Router Dom', 'Componentes de Classe', 'PropTypes', 'NPM', 'Requisições via API'],
    description: 'Projeto em React feito em grupo de uma versão simplificada de um ecommerce. Ao utilizar essa aplicação, a pessoa usuária é capaz de buscar produtos por termos e categorias a partir da API do Mercado Livre, interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades, visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações, além de simular a finalização da compra dos itens selecionados.'
  }
]

export default projects;
