import { Direcao } from "./direcao.js";
export class Player {
    constructor() {
        this.tamanhoPixelsWidht = 0;
        this.tamanhoPixelsHeight = 0;
        this.positionY = 0;
        this.positionX = 0;
        this.positionAnteriorY = 0;
        this.positionAnteriorX = 0;
        this.direction = new Direcao();
        this.score = 0;
    }
}
