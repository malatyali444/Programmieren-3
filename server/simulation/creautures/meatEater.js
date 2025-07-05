import { random,findNeighbourPositions,updateCreaturePosition } from '../utils.js';


export default class MeatEater {
    constructor() {
        this.stepCount = frameCount + 1; // Jede Kreatur braucht diese Zeile
        this.color = "red";            // Jede Kreatur braucht eine Farbe
        this.energy = 100

    }

    // Die step() Methode wird in jedem Frame aufgerufen
    // Jede Kreatur braucht eine solche step() Methode!
    step() {

        let MeatNachbar = findNeighbourPositions(this.row, this.col, 1, GrassEater)
        if (MeatNachbar.length > 0) {
            let RandomNachbar = random(MeatNachbar)
            updateCreaturePosition(this, RandomNachbar)
            this.energy += 10
        }
        else {

            this.energy -= 1
        }

        if (this.energy < 1) {
            matrix[this.row][this.col] = new Empty()
        }
        if (this.energy > 120) {
            let leereNachbar = findNeighbourPositions(this.row, this.col, 1, Empty)

            if (leereNachbar.length > 0) {
                let RandomNachbar = random(leereNachbar)
                matrix[RandomNachbar[0]][RandomNachbar[1]] = new MeatEater()
                this.energy -= 100
            }
        }
    }
}