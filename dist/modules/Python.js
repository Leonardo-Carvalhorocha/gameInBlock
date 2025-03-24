var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Player } from "./models/player.js";
import { SizeJogo } from "./models/sizeJogo.js";
export function Python() {
    return __awaiter(this, void 0, void 0, function* () {
        let keydownClick = {
            ARROW_UP: "ArrowUp",
            ARROW_LEFT: "ArrowLeft",
            ARROW_RIGHT: "ArrowRight",
            ARROW_DOWN: "ArrowDown",
            W: "w",
            D: "d",
            S: "s",
            A: "a"
        };
        let player01 = new Player();
        let player02 = new Player();
        let limitJogo = new SizeJogo();
        const canvas = document.querySelector("#gameCanvas");
        const rect = canvas.getBoundingClientRect();
        const ctx = canvas.getContext("2d");
        const pixels = 20;
        document.addEventListener('keydown', initPlayer);
        let init = () => __awaiter(this, void 0, void 0, function* () {
            limitJogo = {
                xMin: 0,
                xMax: (canvas.width - 20),
                yMax: (canvas.height - 20),
                yMin: 0
            };
            //player 01
            player01.tamanhoPixelsWidht = pixels;
            player01.tamanhoPixelsHeight = pixels;
            player01.positionX = 140;
            player01.positionY = 140;
            yield initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");
            //player 02
            player02.tamanhoPixelsHeight = pixels;
            player02.tamanhoPixelsWidht = pixels;
            player02.positionX = 120;
            player02.positionY = 120;
            yield initFillRect(player02.positionX, player02.positionY, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "green");
        });
        let initFillRect = (positionX, positionY, tamanhoPixelsWidht, tamanhoPixelsHeight, color) => __awaiter(this, void 0, void 0, function* () {
            if (ctx) {
                ctx.fillStyle = color;
                ctx.fillRect(positionX, positionY, tamanhoPixelsWidht, tamanhoPixelsHeight);
            }
        });
        function initPlayer(event) {
            return __awaiter(this, void 0, void 0, function* () {
                let positionX_anterior_player01 = player01.positionX;
                let positionY_anterior_player01 = player01.positionY;
                let positionX_anterior_player02 = player02.positionX;
                let positionY_anterior_player02 = player02.positionY;
                switch (event.key) {
                    case keydownClick.ARROW_DOWN:
                        if (yield verificLimitCanvas(player01, limitJogo, "down"))
                            player01.positionY += pixels;
                        break;
                    case keydownClick.ARROW_UP:
                        if (yield verificLimitCanvas(player01, limitJogo, "up"))
                            player01.positionY -= pixels;
                        break;
                    case keydownClick.ARROW_LEFT:
                        if (yield verificLimitCanvas(player01, limitJogo, "left"))
                            player01.positionX -= pixels;
                        break;
                    case keydownClick.ARROW_RIGHT:
                        if (yield verificLimitCanvas(player01, limitJogo, "right"))
                            player01.positionX += pixels;
                        break;
                    case keydownClick.W:
                        if (yield verificLimitCanvas(player02, limitJogo, "up"))
                            player02.positionY -= pixels;
                        break;
                    case keydownClick.S:
                        if (yield verificLimitCanvas(player02, limitJogo, "down"))
                            player02.positionY += pixels;
                        break;
                    case keydownClick.A:
                        if (yield verificLimitCanvas(player02, limitJogo, "left"))
                            player02.positionX -= pixels;
                        break;
                    case keydownClick.D:
                        if (yield verificLimitCanvas(player02, limitJogo, "right"))
                            player02.positionX += pixels;
                        break;
                }
                // player 01
                yield initFillRect(positionX_anterior_player01, positionY_anterior_player01, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "#222");
                yield initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");
                // player 02
                yield initFillRect(positionX_anterior_player02, positionY_anterior_player02, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "#222");
                yield initFillRect(player02.positionX, player02.positionY, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "green");
            });
        }
        let verificLimitCanvas = (player, limite, direcao) => __awaiter(this, void 0, void 0, function* () {
            return {
                up: player.positionY > limite.yMin,
                down: player.positionY < limite.yMax,
                left: player.positionX > limite.xMin,
                right: player.positionX < limite.xMax
            }[direcao];
        });
        yield init();
    });
}
