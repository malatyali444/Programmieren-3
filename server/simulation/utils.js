
import {  } from '';

export function int(value) {
    if (Array.isArray(value)) {
    return value.map(int);
    } else {
    return Math.floor(value);
    }
    }


export function random(...args) {
        if (args.length === 0) {
        return Math.random();
        } else if (args.length === 1 && Array.isArray(args[0])) {
        return args[0][Math.floor(Math.random() * args[0].length)];
        } else if (args.length === 1 && typeof args[0] === 'number') {
        return Math.floor(Math.random() * args[0]);
        } else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
        return Math.floor(Math.random() * (args[1] - args[0] + 1) - args[0]);
        } else {
        console.log(args);
        throw new Error('Invalid arguments');
        }
        }




export function updateCreaturePosition(creature, newPos) {
    let newRow = newPos[0];
    let newCol = newPos[1];
    matrix[newRow][newCol] = creature;
    matrix[creature.row][creature.col] = new Empty();
    creature.row = newRow;
    creature.col = newCol;
}
// Liste von Listen. Enthält alle Kreaturen.
let matrix = [];
// Größe der Matrix, Anzahl der Zellen in Breite und Höhe
let matrixSize = 200;
// Anzeigengröße in Pixeln für jede Zelle
let blockSize = 5;

// Wahrscheinlichkeit, mit der jede Kreatur erstellt wird
let creatureProbabilities = [
    [Grass, 0.25],       // Gras: 25% Wahrscheinlichkeit
    [GrassEater, 0.05],  // Grasfresser: 5% Wahrscheinlichkeit
    [MeatEater, 0.02],
    [Allesfresser, 0.002],  // Fleischfresser: 2% Wahrscheinlichkeit
    [Aufraeumer, 0.0005],
    [Randomcreauturespawner, 0.0005]


];

function fillRandomMatrix() {

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {

            matrix[i].push(getRandomCreature())


        }
    }
}

export function findNeighbourPositions(row, col, distance, creatureType) {
    let positions = [];
    let x = 0;
    for (let i = row - distance; i <= row + distance; i++) {
        for (let j = col - distance; j <= col + distance; j++) {
            if (i == row && j == col || i < 0 || i > matrixSize - 1 || j < 0 || j > matrixSize - 1) {

            }
            else if (matrix[i][j] instanceof creatureType) {
                positions[x] = [i, j]
                x++
            }
        }


    }


    return positions;
}


export function getRandomCreature() {
    let rand = random(); // Zufallszahl zwischen 0 und 1
    let sum = 0;
    for (let i = 0; i < creatureProbabilities.length; i++) {
        let creatureClass = creatureProbabilities[i][0];
        let probability = creatureProbabilities[i][1];
        sum += probability; // Summiert die Wahrscheinlichkeiten
        if (rand < sum) {   // Wenn die Zufallszahl kleiner ist, wähle diese Kreatur
            return new creatureClass();
        }
    }
    return new Empty(); // Wenn keine andere Bedingung zutrifft, wird ein leeres Feld zurückgegeben
}

