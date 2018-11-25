/*
Aufgabe:5
Name: Julia Herr
Matrikel: 259568
Datum: 22.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/





namespace Aufgabe5 {

    export interface Products {
        typ: string;
        price: number;
    }
    export let trees: Products[] = [
        { typ: "", price: 0.00 },
        { typ: "Plastikbaum natuerliches gruen", price: 11.99 },
        { typ: "Plastikbaum pink Party", price: 22.00 },
        { typ: "Nordmanntanne", price: 35.56 },
        { typ: "Blaufichte", price: 40.00 },
    ];

    export let treeStands: Products[] = [
       { typ: "", price: 0.00 },
        { typ: "gruen", price: 12.59 },
        { typ: "rot", price: 12.59 },
    ];

    export let candles: Products[] = [
        { typ: "rot", price: 1.00 },
        { typ: "blau", price: 1.00 },
        { typ: "orange", price: 1.00 },
        { typ: "porzelanweiss", price: 1.00 }
    ];

    export let christmasOrnaments: Products[] = [
        { typ: "rot", price: 1.00 },
        { typ: "silber", price: 1.00 },
        { typ: "lila", price: 1.00 },
    ]

    export let tinsel: Products[] = [
        { typ: "rot", price: 1.50 },
        { typ: "gold", price: 1.50 },
    ]

    export let options: Products[] = [
        { typ: "Hermes", price: 8.99 },
        { typ: "UPS", price: 4.59 },
        { typ: "DPD", price: 4.11 },
        { typ: "DHL", price: 8.00 },
    ]
}