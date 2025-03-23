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
        let positionX_player01 = 0;
        let positionY_player01 = 0;
        let positionX_player02 = 0;
        let positionY_player02 = 0;
        // let pixels = 16;
        const pixels = 20;
        document.addEventListener('keydown', initPlayer);
        let init = () => __awaiter(this, void 0, void 0, function* () {
            console.log("CANVAS WIDTH: ", canvas.width);
            console.log("CANVAS HEIGHT: ", canvas.height);
            limitJogo = {
                xMin: 0,
                xMax: (canvas.width - 20),
                yMax: (canvas.height - 20),
                yMin: 0
            };
            //player 01
            player01.tamanhoPixelsWidht = pixels;
            player01.tamanhoPixelsHeight = pixels;
            positionX_player01 = 140;
            positionY_player01 = 140;
            yield initFillRect(positionX_player01, positionY_player01, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");
            //player 02
            player02.tamanhoPixelsHeight = pixels;
            player02.tamanhoPixelsWidht = pixels;
            positionX_player02 = 120;
            positionY_player02 = 120;
            yield initFillRect(positionX_player02, positionY_player02, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "green");
        });
        let initFillRect = (positionX, positionY, tamanhoPixelsWidht, tamanhoPixelsHeight, color) => __awaiter(this, void 0, void 0, function* () {
            if (ctx) {
                ctx.fillStyle = color;
                ctx.fillRect(positionX, positionY, tamanhoPixelsWidht, tamanhoPixelsHeight);
            }
        });
        function initPlayer(event) {
            return __awaiter(this, void 0, void 0, function* () {
                let positionX_anterior_player01 = positionX_player01;
                let positionY_anterior_player01 = positionY_player01;
                let positionX_anterior_player02 = positionX_player02;
                let positionY_anterior_player02 = positionY_player02;
                // coordernadaX =  event.target.clientX - rect.left;
                // coordernadaY = event.target.clientY - rect.top;
                // let coordernadaX = 0;
                // let coordernadaY = 0;
                // console.log("tamanhoPixelsWidht: ", cobra.tamanhoPixelsWidht);
                // console.log("tamanhoPixelsHeight: ", cobra.tamanhoPixelsHeight);
                // console.log(`Coordenadas: x=${coordernadaX}, y=${coordernadaY}`);
                if (positionY_player01 >= limitJogo.yMax) {
                    console.log("ultapassou o mínimo");
                }
                if (positionY_player01 <= limitJogo.yMin) {
                    console.log("ultrapassou os limites de altura");
                }
                if (positionX_player01 >= limitJogo.xMax) {
                    console.log("ultapassou o mínimo da horizontal");
                }
                if (positionX_player01 <= limitJogo.xMin) {
                    console.log("ultrapassou os limites de largura");
                }
                switch (event.key) {
                    //player_01
                    case keydownClick.ARROW_DOWN:
                        if (!(positionY_player01 >= limitJogo.yMax)) {
                            positionY_player01 += pixels;
                        }
                        break;
                    case keydownClick.ARROW_LEFT:
                        if (!(positionX_player01 <= limitJogo.xMin)) {
                            positionX_player01 -= pixels;
                        }
                        break;
                    case keydownClick.ARROW_RIGHT:
                        if (!(positionX_player01 >= limitJogo.xMax)) {
                            positionX_player01 += pixels;
                        }
                        break;
                    case keydownClick.ARROW_UP:
                        if (!(positionY_player01 <= limitJogo.yMin)) {
                            positionY_player01 -= pixels;
                        }
                        break;
                    //player_02
                    case keydownClick.A:
                        if (!(positionX_player02 <= limitJogo.xMin)) {
                            positionX_player02 -= pixels;
                        }
                        break;
                    case keydownClick.D:
                        if (!(positionX_player02 >= limitJogo.xMax)) {
                            positionX_player02 += pixels;
                        }
                        break;
                    case keydownClick.S:
                        if (!(positionY_player02 >= limitJogo.yMax)) {
                            positionY_player02 += pixels;
                        }
                        break;
                    case keydownClick.W:
                        if (!(positionY_player02 <= limitJogo.yMin)) {
                            positionY_player02 -= pixels;
                        }
                        break;
                }
                // player 01
                yield initFillRect(positionX_anterior_player01, positionY_anterior_player01, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "#222");
                yield initFillRect(positionX_player01, positionY_player01, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");
                // player 02
                yield initFillRect(positionX_anterior_player02, positionY_anterior_player02, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "#222");
                yield initFillRect(positionX_player02, positionY_player02, player02.tamanhoPixelsWidht, player02.tamanhoPixelsHeight, "green");
            });
        }
        // let runPython = async () => {
        //     setInterval( async () => {
        //         await initFillRect(positionX, positionY, player01.tamanhoPixelsWidht, player01.tamanhoPixelsHeight, "red");
        //     }, 2000)
        // }
        let playerEatPixels = () => {
        };
        yield init();
    });
}
