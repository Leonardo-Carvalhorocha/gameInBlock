import { Direcao } from "./direcao.js";

export class Player {
    tamanhoPixelsWidht: number = 0;
    tamanhoPixelsHeight: number = 0;
    positionY: number = 0;
    positionX: number = 0;
    positionAnteriorY: number = 0;
    positionAnteriorX: number = 0;
    direction: Direcao = new Direcao();
}
