// interface UktMahasiswa {
//     jarakrumah : number;
//     penghasilanortu : number;
// }
//let a : string = "OKe" // jangan lupa sama dengan =
var mahasiswa1 = {
    jarak: 85,
    gajiortu: 6000000,
};
var mahasiswa2 = {
    jarak: 125,
    gajiortu: 14000000,
};
var mahasiswa3 = {
    jarak: 8,
    gajiortu: 4000000,
};
// console.log("Mahasiswa 3 jarak rumah lama ",mahasiswa3.jarak)
// mahasiswa3.jarak = 10
// console.log("Mahasiswa 3 jarak rumah baru ",mahasiswa3.jarak)
// console.log(mahasiswa3.gajiortu)
function cekJarak(statusjarak) {
    if (statusjarak >= 0 && statusjarak <= 10) { // jika status jarak lebih dari = 0 maka status jarak le
        return 3;
    }
    else if (statusjarak >= 11 && statusjarak <= 50) {
        return 5;
    }
    else if (statusjarak > 50 && statusjarak <= 100) {
        return 8;
    }
    else if (statusjarak > 100) {
        return 10;
    }
    return 0;
}
// console.log(cekJarak(5));
// console.log(cekJarak(14));
// console.log(cekJarak(67));
// console.log(cekJarak(100));
// console.log(cekJarak(-1));
function cekGajiortu(statusgaji) {
    if (statusgaji >= 0 && statusgaji <= 1000000) {
        return 3;
    }
    else if (statusgaji > 1000000 && statusgaji <= 5000000) {
        return 5;
    }
    else if (statusgaji > 5000000 && statusgaji <= 10000000) {
        return 8;
    }
    else if (statusgaji > 10000000) {
        return 10;
    }
    return 0;
}
function penjumlahan(jarak, gajiortu) {
    var total = cekJarak(jarak) + cekGajiortu(gajiortu);
    if (total <= 0 && total <= 5) {
        return "UKTNYA 5 JUTA";
    }
    if (total > 5) {
        return "UKTNYA 10 JUTA";
    }
    return "Mahasiswa tidak sesuai";
}
console.log(penjumlahan(mahasiswa1.jarak, mahasiswa1.gajiortu));
console.log(penjumlahan(mahasiswa2.jarak, mahasiswa2.gajiortu));
// console.log(cekGajiortu(500));
// console.log(cekGajiortu(2000000));
// console.log(cekGajiortu(5000000));
// console.log(cekGajiortu(123445678));
// console.log(cekGajiortu(-1));
// function cekSuhu(suhu: number) : string{
//     if(suhu >= 0 && suhu <= 10){
//         return "Suhunya dingin"
//     }
//     return "Selimutan dulu gan"
// }
// console.log(cekSuhu(13));
