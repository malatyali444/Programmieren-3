import { random,findNeighbourPositions } from '../utils.js';



export default class Aufraeumer {

    constructor() {

        this.stepCount = frameCount + 1; // Jede Kreatur braucht diese Zeile
        this.color = "purple";            // Jede Kreatur braucht eine Farbe


    }

    step() {
        let x = int(random(0, 10))
        let xx = 0;
        xx++
        let fields = findNeighbourPositions(this.row, this.col, x, Object)


        if (fields.length > random(100, 300)) {
            for (let i = 0; i < fields.length; i++) {
                let row = fields[i][0]
                let col = fields[i][1]
                matrix[row][col] = new Empty()
            }
        }
    }

}