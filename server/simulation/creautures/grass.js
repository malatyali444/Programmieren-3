import { random,findNeighbourPositions } from '../utils.js';

export default class Grass {

    // Jede Klasse braucht einen Konstruktor
    // Hier werden die Anfangswerte der Kreatur gesetzt
    constructor() {
        this.stepCount = frameCount + 1; // Jede Kreatur braucht diese Zeile
        this.color = "green";            // Jede Kreatur braucht eine Farbe
        this.energy = random(0, 2)

    }
    multiply() {
        let x = findNeighbourPositions(this.row, this.col, 1, Empty)


        if (x.length != 0) {
            let xx = random(x);
            matrix[xx[0]][xx[1]] = new Grass()
            this.energy = 0

        }
    }


    // Die step() Methode wird in jedem Frame aufgerufen
    // Jede Kreatur braucht eine solche step() Methode!
    step() {
        this.energy += 1;
        if (this.energy > 7) {
            this.multiply()
        }
    }
}
