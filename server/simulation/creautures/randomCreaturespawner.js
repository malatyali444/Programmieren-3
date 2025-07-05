import { random,findNeighbourPositions,getRandomCreature } from '../utils.js';



export default class Randomcreauturespawner {

    constructor() {

        this.stepCount = frameCount + 1; // Jede Kreatur braucht diese Zeile
        this.color = "blue";            // Jede Kreatur braucht eine Farbe


    }

    step() {
        let x = int(random(0, 10))

        let fields = findNeighbourPositions(this.row, this.col, x, Empty)
        if (fields.length > random(200, 500)) { for (let i = 0; i < fields.length; i++) {
            let row = fields[i][0]
            let col = fields[i][1]
            let creture = getRandomCreature()
            if(creture instanceof Randomcreauturespawner||creture instanceof Aufraeumer)continue
            matrix[row][col] = creture

        }
    }

    }

}