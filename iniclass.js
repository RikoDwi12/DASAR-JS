var Kendaraan = /** @class */ (function () {
    function Kendaraan(roda) {
        this.roda = roda;
    }
    Kendaraan.prototype.getRoda = function () {
        return this.roda;
    };
    return Kendaraan;
}());
var mobil = new Kendaraan(4);
console.log(mobil.getRoda()); // Output: 4
var x = 10;
var y = 5;
if (x > 5 && y > 2) {
    console.log("Kedua kondisi terpenuhi");
}
if (x > 10 || y > 2) {
    console.log("Salah satu kondisi terpenuhi");
}
if (!(x === y)) {
    console.log("Nilai x tidak sama dengan nilai y");
}
