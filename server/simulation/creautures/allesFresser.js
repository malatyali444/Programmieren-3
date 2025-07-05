import { random,findNeighbourPositions,updateCreaturePosition } from '../utils.js';


export default class Allesfresser {

    constructor() {
        this.stepCount = frameCount + 1; // Jede Kreatur braucht diese Zeile
        this.color = "black";            // Jede Kreatur braucht eine Farbe
        this.energy = 1000

    }



    // Die step() Methode wird in jedem Frame aufgerufen
    // Jede Kreatur braucht eine solche step() Methode!
    step() {


        let GrassNachbar = findNeighbourPositions(this.row, this.col, 1, Grass)
        let MeatNachbar = findNeighbourPositions(this.row, this.col, 1, MeatEater)
        let GrassEaterNachbar = findNeighbourPositions(this.row, this.col, 1, GrassEater)

        if (GrassNachbar.length > 0 || GrassEaterNachbar.length > 0 || MeatNachbar.length > 0) {
            if (GrassNachbar.length > 0) {
                let RandomNachbar = random(GrassNachbar)
                updateCreaturePosition(this, RandomNachbar)
                this.energy -= 50
            }
            if (MeatNachbar.length > 0) {
                let RandomNachbar1 = random(MeatNachbar)
                updateCreaturePosition(this, RandomNachbar1)
                this.energy += 600
            }
            if (GrassEaterNachbar.length > 0) {
                let RandomNachbar2 = random(GrassEaterNachbar)
                updateCreaturePosition(this, RandomNachbar2)
                this.energy += 500
            }

        }
        else {
            let leereNachbar = findNeighbourPositions(this.row, this.col, 1, Empty)
            if (leereNachbar.length > 0) {
                let RandomNachbar4 = random(leereNachbar)
                updateCreaturePosition(this, RandomNachbar4)
            }
            this.energy -= 300
        }

        if (this.energy < 1) {
            matrix[this.row][this.col] = new Empty()
        }
        if (this.energy > 3000) {
            let leereNachbar = findNeighbourPositions(this.row, this.col, 1, Empty)

            if (leereNachbar.length > 0) {
                let RandomNachbar = random(leereNachbar)
                matrix[RandomNachbar[0]][RandomNachbar[1]] = new Allesfresser()
                this.energy -= 100
            }
        }
    }
}