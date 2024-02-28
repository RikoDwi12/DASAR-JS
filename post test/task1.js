// angka1,angka2,lambang ( + - / *)
// kalkulator(1,1,"+")
// => 2
// function kalkulator(angka1:number,angka2:number,lambang:string) {
//     if (angka1)    
// }
// Jika ada angka 1, angka 2 dan ada lambang juga, maka angka1 dioperasikan oleh lambang dengan angka 2
// let ok = 1
// let ok1 = 1
// console.log(`${ok+ok1}`)
function kalkulator(angka1, angka2, lambang) {
    if (lambang == "+") {
        return "hasil ".concat(angka1, " + ").concat(angka2, " = ").concat(angka1 + angka2);
    }
    if (lambang == "-") {
        return "hasil ".concat(angka1, " - ").concat(angka2, " = ").concat(angka1 - angka2);
    }
    if (lambang == "/") {
        return "hasil ".concat(angka1, " / ").concat(angka2, " = ").concat(angka1 / angka2);
    }
    if (lambang == "*") {
        return "hasil ".concat(angka1, " * ").concat(angka2, " = ").concat(angka1 * angka2);
    }
    return "OKE";
}
// console.log(kalkulator(1,1,"+"))
console.log(kalkulator(1, 1, "+"));
console.log(kalkulator(1, 3, "+"));
console.log(kalkulator(1, 5, "+"));
console.log(kalkulator(1, 5, "-"));
console.log(kalkulator(2, 1, "/"));
console.log(kalkulator(2, 7, "*"));
// Hasil 1 + 1 = 2
console.log();
