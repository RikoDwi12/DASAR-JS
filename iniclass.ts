class Kendaraan {
    roda: number;

    constructor(roda: number) {
        this.roda = roda;
    }

    getRoda(): number {
        return this.roda;
    }
}

let mobil = new Kendaraan(4);
console.log(mobil.getRoda()); // Output: 4


let x = 10;
let y = 5;

if (x > 5 && y > 2) {
  console.log("Kedua kondisi terpenuhi");
}

if (x > 10 || y > 2) {
  console.log("Salah satu kondisi terpenuhi");
}

if (!(x === y)) {
  console.log("Nilai x tidak sama dengan nilai y");
}
