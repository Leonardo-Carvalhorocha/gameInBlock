### Resumo do Projeto

**Nome do Projeto:** Jogo de Pixels

**Descrição:** 
Este é um jogo simples de dois jogadores desenvolvido em JavaScript e HTML5, onde o objetivo é controlar dois jogadores para coletar "pixels de comida" no canvas. Cada jogador marca pontos ao coletar os pixels.

### Funcionalidades

- **Jogadores Controlados por Teclas Diferentes:**
  - Player 01: Setas do teclado (ArrowUp, ArrowDown, ArrowLeft, ArrowRight)
  - Player 02: Teclas W, A, S, D

- **Placar:** Exibe a pontuação de ambos os jogadores.

- **Pixels de Comida:** Aparecem aleatoriamente no canvas e devem ser coletados pelos jogadores.

- **Limites de Movimento:** Os jogadores são limitados pelo tamanho do canvas.

### Como Rodar o Jogo

1. **Clone ou Baixe o Repositório.**
2. **Instale as Dependências:**
   ```bash
   npm install
   ```
3. **Abra o Arquivo HTML no Navegador:**
   Após instalar as dependências, abra o arquivo `index.html` no seu navegador.

### Jogar

- **Player 01:** Use as teclas ArrowUp, ArrowDown, ArrowLeft, ArrowRight.
- **Player 02:** Use as teclas W, A, S, D.
- **Objetivo:** Mover os jogadores para coletar os pixels de comida (cor amarela). A pontuação será atualizada no placar.

### Estrutura do Código

1. **Modelos (Models):**
   - **Player:** Representa cada jogador com propriedades como posição, tamanho dos pixels, e pontuação.
   - **Keydown:** Contém as teclas associadas aos controles dos jogadores.
   - **SizeJogo:** Define os limites do jogo (canvas).
   - **Food:** Representa o alimento que os jogadores devem coletar.

2. **Funções Principais:**
   - **init():** Inicializa jogadores, alimento e canvas.
   - **initFillRect():** Desenha jogadores e alimento no canvas.
   - **initPlayer():** Manipula movimentos dos jogadores e atualiza o placar.
   - **verificLimitCanvas():** Verifica se o jogador está dentro dos limites do canvas.
   - **initFoodPixels():** Gera nova posição aleatória para o alimento.
   - **verificPlayerEatPixels():** Verifica se o jogador colidiu com o alimento.
   - **generatePositionCanvas():** Gera posição aleatória dentro dos limites do canvas.

### Tecnologias Utilizadas

- **HTML5:** Estrutura do jogo e canvas.
- **CSS:** Estilização da página.
- **TypeScript:** Lógica do jogo, interatividade e manipulação do canvas.
- **JavaScript (ES6):**
  
## Imagens do Game
![image](https://github.com/user-attachments/assets/a1949491-7fd1-473f-8de3-278acf5ae7a1)

