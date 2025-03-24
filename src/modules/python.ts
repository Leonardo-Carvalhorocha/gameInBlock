import { Player } from "./models/player.js";
import { Keydown } from "./models/Keydown.js";
import { SizeJogo } from "./models/sizeJogo.js";

export async function Python() {

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

    const canvas = document.querySelector("#gameCanvas") as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
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

        //player 01
        player01.tamanhoPixelsWidht = pixels;
        player01.tamanhoPixelsHeight = pixels;
        player01.positionX = 140;
        player01.positionY = 140;
        await initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");

        //player 02
        player02.tamanhoPixelsHeight = pixels;
        player02.tamanhoPixelsWidht = pixels;
        player02.positionX = 120;
        player02.positionY = 120;
        await initFillRect(player02.positionX, player02.positionY, player02.tamanhoPixelsWidht,  player02.tamanhoPixelsHeight, "green");
    }

    let initFillRect = async (positionX: number, positionY: number, tamanhoPixelsWidht: number, tamanhoPixelsHeight: number, color: "red" | "#222" | "green") => {
        if(ctx) {
            ctx.fillStyle = color;
            ctx.fillRect(positionX, positionY, tamanhoPixelsWidht, tamanhoPixelsHeight);
        }
    }

    async function initPlayer(event: KeyboardEvent) {
        let positionX_anterior_player01 = player01.positionX;
        let positionY_anterior_player01 = player01.positionY;
        
        let positionX_anterior_player02 = player02.positionX;
        let positionY_anterior_player02 = player02.positionY;

        switch (event.key) {
            case keydownClick.ARROW_DOWN:
                if (await verificLimitCanvas(player01, limitJogo, "down")) player01.positionY += pixels;
                break;
            case keydownClick.ARROW_UP:
                if (await verificLimitCanvas(player01, limitJogo, "up")) player01.positionY -= pixels;
                break;
            case keydownClick.ARROW_LEFT:
                if (await verificLimitCanvas(player01, limitJogo, "left"))  player01.positionX -= pixels;
                break;
            case keydownClick.ARROW_RIGHT:
                if (await verificLimitCanvas(player01, limitJogo, "right")) player01.positionX += pixels;
                break;
        
            case keydownClick.W:
                if (await verificLimitCanvas(player02, limitJogo, "up")) player02.positionY -= pixels;
                break;
            case keydownClick.S:
                if (await verificLimitCanvas(player02, limitJogo, "down")) player02.positionY += pixels;
                break;
            case keydownClick.A:
                if (await verificLimitCanvas(player02, limitJogo, "left")) player02.positionX -= pixels;
                break;
            case keydownClick.D:
                if (await verificLimitCanvas(player02, limitJogo, "right")) player02.positionX += pixels;
                break;
        }
        

         // player 01
        await initFillRect(positionX_anterior_player01, positionY_anterior_player01, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "#222");
        await initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");

        
        // player 02
        await initFillRect(positionX_anterior_player02, positionY_anterior_player02, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "#222");
        await initFillRect(player02.positionX, player02.positionY, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "green");


    }

    let verificLimitCanvas = async (player: Player, limite: SizeJogo, direcao: string) => {
        return {
            up: player.positionY > limite.yMin,
            down: player.positionY < limite.yMax,
            left: player.positionX > limite.xMin,
            right: player.positionX < limite.xMax
        }[direcao];
    }


    await init();
}
    