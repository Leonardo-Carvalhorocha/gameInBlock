import { Player } from "./models/player.js";
import { Keydown } from "./models/Keydown.js";
import { SizeJogo } from "./models/sizeJogo.js";
import { Food } from "./models/food.js";

export async function Game() {

    let keydownClick: Keydown = {
        ARROW_UP: "ArrowUp",
        ARROW_LEFT: "ArrowLeft",
        ARROW_RIGHT: "ArrowRight",
        ARROW_DOWN: "ArrowDown",
        W: "w",
        D: "d",
        S: "s",
        A: "a"
    };

    let player01: Player = new Player();
    let player02: Player = new Player();

    let limitJogo: SizeJogo = new SizeJogo();

    let food: Food = new Food();

    const canvas = document.querySelector("#gameCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const pixels = 20;

    document.addEventListener('keydown', initPlayer);

    let init = async () => {
        limitJogo = {
            xMin: 0,
            xMax: (canvas.width - 20),
            yMax: (canvas.height - 20),
            yMin: 0
        }
        
        await initFoodPixels();

        //player 01
        player01.tamanhoPixelsWidht = pixels;
        player01.tamanhoPixelsHeight = pixels;
        player01.positionX = generatePositionCanvas();
        player01.positionY = generatePositionCanvas();
        await initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");

        //player 02
        player02.tamanhoPixelsHeight = pixels;
        player02.tamanhoPixelsWidht = pixels;
        player02.positionX = generatePositionCanvas();
        player02.positionY = generatePositionCanvas();
        await initFillRect(player02.positionX, player02.positionY, player02.tamanhoPixelsWidht,  player02.tamanhoPixelsHeight, "green");
    }

    let initFillRect = async (positionX: number, positionY: number, tamanhoPixelsWidht: number, tamanhoPixelsHeight: number, color: "red" | "#222" | "green" | "yellow") => {
        if(ctx) {
            ctx.fillStyle = color;
            ctx.fillRect(positionX, positionY, tamanhoPixelsWidht, tamanhoPixelsHeight);
        }
    }

    async function initPlayer(event: KeyboardEvent) {
        player01.positionAnteriorX = player01.positionX;
        player01.positionAnteriorY = player01.positionY;

        player02.positionAnteriorX = player02.positionX;
        player02.positionAnteriorY = player02.positionY;

        switch (event.key) {
            case keydownClick.ARROW_DOWN:
                if (await verificLimitCanvas(player01, player01.direction.DOWN)) player01.positionY += pixels;
                break;
            case keydownClick.ARROW_UP:
                if (await verificLimitCanvas(player01, player01.direction.UP)) player01.positionY -= pixels;
                break;
            case keydownClick.ARROW_LEFT:
                if (await verificLimitCanvas(player01, player01.direction.LEFT))  player01.positionX -= pixels;
                break;
            case keydownClick.ARROW_RIGHT:
                if (await verificLimitCanvas(player01, player01.direction.RIGHT)) player01.positionX += pixels;
                break;
        
            case keydownClick.W:
                if (await verificLimitCanvas(player02, player02.direction.UP)) player02.positionY -= pixels;
                break;
            case keydownClick.S:
                if (await verificLimitCanvas(player02, player02.direction.DOWN)) player02.positionY += pixels;
                break;
            case keydownClick.A:
                if (await verificLimitCanvas(player02, player02.direction.LEFT)) player02.positionX -= pixels;
                break;
            case keydownClick.D:
                if (await verificLimitCanvas(player02, player02.direction.RIGHT)) player02.positionX += pixels;
                break;
        }
        

         // player 01
        await initFillRect(player01.positionAnteriorX, player01.positionAnteriorY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "#222");
        await initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");

        
        // player 02
        await initFillRect(player02.positionAnteriorX, player02.positionAnteriorY, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "#222");
        await initFillRect(player02.positionX, player02.positionY, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "green");

        if(verificPlayerEatPixels(player01)) {
            await initFoodPixels();
        }

        if(verificPlayerEatPixels(player02)) {
            await initFoodPixels();
        }

    }

    let verificLimitCanvas = async (player: Player, direcao: string) => {
        return {
            up: player.positionY > limitJogo.yMin,
            down: player.positionY < limitJogo.yMax,
            left: player.positionX > limitJogo.xMin,
            right: player.positionX < limitJogo.xMax
        }[direcao];
    }

    
    let initFoodPixels = async () => {
        food.tamanhoPixelsWidht = pixels;
        food.tamanhoPixelsHeight = pixels;
        food.positionX = generatePositionCanvas();
        food.positionY = generatePositionCanvas();
        await initFillRect(food.positionX, food.positionY, food.tamanhoPixelsWidht,  food.tamanhoPixelsHeight, "yellow");
    }

    let verificPlayerEatPixels = (player: Player): boolean => {    
        return (player.positionX === food.positionX && player.positionY === food.positionY);
    }

    let generatePositionCanvas = (): number => {
        return Math.floor(Math.random() * ((limitJogo.xMax / pixels) + 1)) * pixels;
    }

    await init();
}
    