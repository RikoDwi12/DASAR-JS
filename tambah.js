function tambah(a, b) {
    return a + b;
}
console.log(tambah(1, 2));
function kurang(c, d) {
    return c - d;
}
console.log(kurang(3, 1));
function persegiPanjang(p, l) {
    return 2 * (p + l);
}
console.log(persegiPanjang(2, 1));
//Buatkan fucntion konversi IPK, jika IPK diatas sama dengan 3,5 maka cumlaude, jika dibawah 3.5 maka teladan, jika dibawah 2 maka mengulang
// function konversiIpk ( ipk:number ) {
//     if (ipk <= 3.5) {
//         return = 'cumlaud e'
//     }
//     if else (ipk > 3.5) {
//         return = 'teladan'
//     }
// }
//LEVEL 2
function konveriTanda(tanda) {
    // * = ini lambang bintang
    // # ini pagar
    // @ 
    // &
    // %
    // ^ lambang pangkat
    // a-z ini adalah huruf
    // 0-9 ini adalah angka
    // = definisi variabel
    // == perbandingan value / nilai suatu variabel
    // === perbandingan tipe data & perbandingan value
    // != negasi
    // 1 == "1" true;
    // 1 == 1 true;
    // 1 === "1" false
    // 1 === 1 true
    // 2 === "2" false;
    // 2 == "2" true;
    // 4 == "1" false;
    // 4 === "1" false;
    // "4" === "1" false;
    // "4" === "4" true;
    // 1 === 4 false;
    // 1 != 1 false
    // 1 != 2 true;
    // "1" !== "2" false;
    // 1 !== 1 false;
    //1 === "1"  false => !== true
    // // if jika
    // // else-if dan jika
    // // else kecuali 
    if (tanda == "*") {
        return "Ini lambang bintang";
    }
    if (tanda == "#") {
        return "ini lambang pagar";
    }
    if (tanda == "@") {
        return "ini lambang add";
    }
    if (tanda == "&") {
        return "ini lambang dan";
    }
    if (tanda == "%") {
        return "ini lambang persen";
    }
    if (tanda == "^") {
        return "ini lambang pangkat";
    }
    if (typeof (tanda) === typeof ("1")) {
        return "ini adalah angka";
    }
    else {
        return "ini huruf ";
    }
}
console.log(konveriTanda("1"));
console.log(typeof (1)); // number
console.log(typeof ("1")); // string
console.log(typeof (true), "\n\n\n\n\n\n\n\n"); // bool
//Jika TV mati maka TV false, maka print hidupkan TV, Jika TV Hidup maka TV true, maka print matikan tv
var tv;
// let bisa dirubah mutable
// const tetap tidak bisa dirubah imutable
function remoteTv(status) {
    tv = !status; // true
    if (tv != false) { //
        console.log(typeof (tv));
        console.log("Hidukan Hidupkan TV");
        console.log("TV status false");
    }
    if (tv == true) {
        console.log("Matikan TV");
        console.log("Status TV true");
    }
}
remoteTv(!true); // false
var kipas;
function remotKipas(status) {
    kipas = status;
    if (kipas == true) {
        console.log("Status kipas hidup");
        console.log("Matikan kipas");
        console.log("kipas itu true");
    }
    if (kipas == false) {
        console.log("Status kipas mati");
        console.log("hidupakan kipas");
        console.log(("kipas itu false"));
    }
}
remotKipas(false);
// Jika tv mati maka hidupkan tv, jika tv hidup maka tampilkan tv saat ini, jika tv hidup dan jika volumenya kurang dari 10 tambahkan 2 volume jadi 12 , jika volumenya lebih dari 15 maka kurangi 2 jadi 13
function remoteTvNested(parameterStatusTv, parameterVolumeTv) {
    var statusTv = parameterStatusTv;
    var volumeTv = parameterVolumeTv;
    if (statusTv == false) {
        console.log("Hidupkan TV");
    }
    if (statusTv == true) {
        console.log("Status tv saat ini", statusTv);
        if (statusTv == true && volumeTv <= 10) {
            volumeTv += 2;
            console.log("Volume TV sudah jadi", volumeTv);
        }
        if (statusTv == true && volumeTv >= 15) {
            volumeTv -= 2;
            console.log("Volume TV sudah jadi", volumeTv);
        }
    }
}
remoteTvNested(true, 20);
// Jika motor mati maka "nyalakan motor", jika motor hidup maka "motor sudah hidup", jika motor hidup maka "Motor harus dipanasi terlebih dahulu", jika motor sudah dipanasi maka porseneling tambahkan satu dan "motor berjalan", jika motor berhenti "matikan motor"
function mesinMotorNested(parameterStatusMesin, parameterStatusPanas, porseneling) {
    var statusMotor = parameterStatusMesin;
    var statusPanasMotor = parameterStatusPanas;
    var statusPorseneling = porseneling;
    var statusBerjalan = true;
    // if(statusMotor == false) {
    //     console.log("motor dinyalakan");
    // }
    // if(statusMotor == true) {
    //     console.log("motor benar hidup");
    // }
    // if(statusMotor == true && statusPanasMotor == true) {
    //     console.log("jika motor hidup siap dipanasi");
    // }
    // if(statusPanasMotor == true && porseneling == 0) {
    //     // statusPorseneling = statusPorseneling + 1 
    //     statusPorseneling += 1
    //     console.log("Porseneling motor saat ini ",statusPorseneling);
    //     console.log("motor berjalan");
    // }
    // if(statusBerjalan == true) {
    //     console.log("berhentikan motor");
    //     statusMotor = false
    // }
    // if (statusMotor == false) {
    //     console.log("matikan motor");
    // }
    if (statusMotor == false) {
        console.log("motor dinyalakan");
    }
    if (statusMotor == true) {
        console.log("motor benar hidup");
        if (statusPanasMotor == true && porseneling == 0) {
            console.log("jika motor hidup siap dipanasi");
            statusPorseneling += 1;
            console.log("Porseneling motor saat ini ", statusPorseneling);
            console.log("motor berjalan");
        }
        if (statusBerjalan == true) {
            console.log("berhentikan motor");
            statusMotor = false;
            if (statusMotor == false) {
                console.log("matikan motor");
            }
        }
    }
}
console.log("\n\n\n\n");
mesinMotorNested(true, true, 0);
// Motor Nyala
// Motor sudah hidup dan dipanasi
// porseneling 0 + 1 => 1
// motor berjalan
