Jogo de Pixels
Descrição
Este é um jogo simples de dois jogadores desenvolvido em JavaScript e HTML5. O objetivo é controlar dois jogadores (Player 01 e Player 02), movendo-os pelo canvas para pegar os "pixels de comida". Cada vez que um jogador coleta um pixel, ele marca um ponto no placar.

Funcionalidades:
Dois jogadores controlados por teclas diferentes:

Player 01: ArrowUp, ArrowDown, ArrowLeft, ArrowRight

Player 02: W, A, S, D

Placar que exibe a pontuação de ambos os jogadores.

Pixels de comida que os jogadores devem coletar, aparecendo aleatoriamente no canvas.

Limites de movimento para os jogadores dentro do canvas.

Como Rodar o Jogo
Clone ou baixe o repositório.

Instale as dependências. Antes de rodar o jogo, você deve rodar o comando abaixo para instalar as dependências do projeto:

bash
Copiar
Editar
npm install
Abra o arquivo HTML no seu navegador. Após instalar as dependências, abra o arquivo index.html no seu navegador.

Jogar: Use as teclas para mover os jogadores:

Player 01: Use as teclas ArrowUp, ArrowDown, ArrowLeft, ArrowRight.

Player 02: Use as teclas W, A, S, D.

O objetivo é mover os jogadores para coletar os pixels de comida (representados pela cor amarela). Cada vez que um jogador coleta o alimento, ele ganha um ponto.

A pontuação de cada jogador será atualizada no placar.

Estrutura do Código
1. Modelos (Models)
Player: Representa cada jogador, contendo propriedades como a posição no canvas, tamanho dos pixels, e a pontuação.

Keydown: Contém as teclas associadas aos controles dos jogadores.

SizeJogo: Define os limites do jogo (canvas), incluindo os limites mínimo e máximo para o movimento dos jogadores.

Food: Representa o alimento que os jogadores devem coletar, contendo suas propriedades como a posição e tamanho no canvas.

2. Funções Principais
init(): Inicializa os jogadores, o alimento e o canvas. Configura o tamanho e a posição inicial dos jogadores e do alimento.

initFillRect(): Função para desenhar os jogadores e o alimento no canvas.

initPlayer(): Manipula os movimentos dos jogadores com base nas teclas pressionadas. Verifica se o jogador coletou o alimento e atualiza o placar.

verificLimitCanvas(): Verifica se o jogador está dentro dos limites do canvas antes de permitir o movimento.

initFoodPixels(): Gera uma nova posição aleatória para o alimento no canvas.

verificPlayerEatPixels(): Verifica se o jogador colidiu com o alimento e, em caso afirmativo, incrementa a pontuação.

generatePositionCanvas(): Gera uma posição aleatória dentro dos limites do canvas para os jogadores ou o alimento.

Tecnologias Utilizadas
HTML5: Para criar a estrutura do jogo e o canvas.

CSS: Para estilizar a página e o layout do jogo.

JavaScript (ES6): Para a lógica do jogo, interatividade e manipulação do canvas.

Licença
Este projeto está licenciado sob a MIT License.
