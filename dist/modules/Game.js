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
import { Food } from "./models/food.js";
export function Game() {
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
        let food = new Food();
        const canvas = document.querySelector("#gameCanvas");
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
            yield initFoodPixels();
            //player 01
            player01.tamanhoPixelsWidht = pixels;
            player01.tamanhoPixelsHeight = pixels;
            player01.positionX = generatePositionCanvas();
            player01.positionY = generatePositionCanvas();
            yield initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");
            //player 02
            player02.tamanhoPixelsHeight = pixels;
            player02.tamanhoPixelsWidht = pixels;
            player02.positionX = generatePositionCanvas();
            player02.positionY = generatePositionCanvas();
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
                player01.positionAnteriorX = player01.positionX;
                player01.positionAnteriorY = player01.positionY;
                player02.positionAnteriorX = player02.positionX;
                player02.positionAnteriorY = player02.positionY;
                switch (event.key) {
                    case keydownClick.ARROW_DOWN:
                        if (yield verificLimitCanvas(player01, player01.direction.DOWN))
                            player01.positionY += pixels;
                        break;
                    case keydownClick.ARROW_UP:
                        if (yield verificLimitCanvas(player01, player01.direction.UP))
                            player01.positionY -= pixels;
                        break;
                    case keydownClick.ARROW_LEFT:
                        if (yield verificLimitCanvas(player01, player01.direction.LEFT))
                            player01.positionX -= pixels;
                        break;
                    case keydownClick.ARROW_RIGHT:
                        if (yield verificLimitCanvas(player01, player01.direction.RIGHT))
                            player01.positionX += pixels;
                        break;
                    case keydownClick.W:
                        if (yield verificLimitCanvas(player02, player02.direction.UP))
                            player02.positionY -= pixels;
                        break;
                    case keydownClick.S:
                        if (yield verificLimitCanvas(player02, player02.direction.DOWN))
                            player02.positionY += pixels;
                        break;
                    case keydownClick.A:
                        if (yield verificLimitCanvas(player02, player02.direction.LEFT))
                            player02.positionX -= pixels;
                        break;
                    case keydownClick.D:
                        if (yield verificLimitCanvas(player02, player02.direction.RIGHT))
                            player02.positionX += pixels;
                        break;
                }
                // player 01
                yield initFillRect(player01.positionAnteriorX, player01.positionAnteriorY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "#222");
                yield initFillRect(player01.positionX, player01.positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");
                // player 02
                yield initFillRect(player02.positionAnteriorX, player02.positionAnteriorY, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "#222");
                yield initFillRect(player02.positionX, player02.positionY, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "green");
                if (verificPlayerEatPixels(player01)) {
                    yield initFoodPixels();
                }
                if (verificPlayerEatPixels(player02)) {
                    yield initFoodPixels();
                }
            });
        }
        let verificLimitCanvas = (player, direcao) => __awaiter(this, void 0, void 0, function* () {
            return {
                up: player.positionY > limitJogo.yMin,
                down: player.positionY < limitJogo.yMax,
                left: player.positionX > limitJogo.xMin,
                right: player.positionX < limitJogo.xMax
            }[direcao];
        });
        let initFoodPixels = () => __awaiter(this, void 0, void 0, function* () {
            food.tamanhoPixelsWidht = pixels;
            food.tamanhoPixelsHeight = pixels;
            food.positionX = generatePositionCanvas();
            food.positionY = generatePositionCanvas();
            yield initFillRect(food.positionX, food.positionY, food.tamanhoPixelsWidht, food.tamanhoPixelsHeight, "yellow");
        });
        let verificPlayerEatPixels = (player) => {
            return (player.positionX === food.positionX && player.positionY === food.positionY);
        };
        let generatePositionCanvas = () => {
            return Math.floor(Math.random() * ((limitJogo.xMax / pixels) + 1)) * pixels;
        };
        yield init();
    });
}
