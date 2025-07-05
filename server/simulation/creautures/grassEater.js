import { random,findNeighbourPositions,updateCreaturePosition } from '../utils.js';


export default class GrassEater {

    constructor() {
        this.stepCount = frameCount + 1; // Jede Kreatur braucht diese Zeile
        this.color = "yellow";            // Jede Kreatur braucht eine Farbe
        this.energy = 5

    }



    // Die step() Methode wird in jedem Frame aufgerufen
    // Jede Kreatur braucht eine solche step() Methode!
    step() {


        let GrassNachbar = findNeighbourPositions(this.row, this.col, 1, Grass)
        if (GrassNachbar.length > 0) {
            let RandomNachbar = random(GrassNachbar)
            updateCreaturePosition(this, RandomNachbar)
            this.energy += 1
        }
        else {
            let leereNachbar = findNeighbourPositions(this.row, this.col, 1, Empty)
            if (leereNachbar.length > 0) {
                let RandomNachbar = random(leereNachbar)
                updateCreaturePosition(this, RandomNachbar)
            }
            this.energy -= 1
        }

        if (this.energy < 1) {
            matrix[this.row][this.col] = new Empty()
        }
        if (this.energy > 9) {
            let leereNachbar = findNeighbourPositions(this.row, this.col, 1, Empty)

            if (leereNachbar.length > 0) {
                let RandomNachbar = random(leereNachbar)
                matrix[RandomNachbar[0]][RandomNachbar[1]] = new GrassEater()
                this.energy -= 5
            }
        }
    }
}