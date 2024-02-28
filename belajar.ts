// interface UktMahasiswa {
//     jarakrumah : number;
//     penghasilanortu : number;
// }

// function cekJarak(jarakrumah:number) {
//     if (jarakrumah >= 0 && jarakrumah <= 10) {
//         return 3;
//     }
//     else if (jarakrumah > 10 && jarakrumah <= 50) {
//         return 5;
//     }
//     else if (jarakrumah > 50 && jarakrumah <= 100) {
//         return 8;
//     }
//     else if (jarakrumah > 100) {
//         return 10;
//     }
//     else {
//         return 0
//     }
// }

// function cekPenghasilanortu(penghasilanortu:number) {
//     if (penghasilanortu >= 0 && penghasilanortu <=1000000) {
//         return 3;
//     }
//     else if (penghasilanortu >= 1000000 && penghasilanortu <=5000000) {
//         return 5;
//     }
//     else if (penghasilanortu >= 5000000 && penghasilanortu <=10000000) {
//         return 8;
//     }
//     else if (penghasilanortu > 10000000) {
//         return 10;
//     }
//     else {
//         return 0
//     }
// }

// const mahasiswa1 ={
//     jarakrumah: 85,
//     penghasilanortu: 600000,
// }

// const mahasiswa2 ={
//     jarakrumah: 125,
//     penghasilanortu: 140000000,
// }
// const mahasiswa3 ={
//     jarakrumah: 8,
//     penghasilanortu: 40000000,
// }

// function Jumlahnya (mahasiswa:UktMahasiswa) {
//     var pentotalan = cekJarak (mahasiswa.jarakrumah) + cekPenghasilanortu (mahasiswa.penghasilanortu)
//      if (pentotalan >= 0 && pentotalan <= 5) {
//         return 'UKT 5jt'
//      }
//      if (pentotalan >= 6 && pentotalan <= 10) {
//         return 'UKT 10jt'
//      }
    
// }
//     console.log(`mahasiswa kategori ukt 1 ${Jumlahnya(mahasiswa1)}`);
//     console.log(`mahasiswa kategori ukt 2 ${Jumlahnya(mahasiswa2)}`);
//     console.log(`mahasiswa kategori ukt 3 ${Jumlahnya(mahasiswa3)}`);


interface SppKuliah {
    jarak : number,
    gajiortu : number,
}


//let a : string = "OKe" // jangan lupa sama dengan =

const mahasiswa1 : SppKuliah = {
    jarak : 85 ,
    gajiortu : 6000000 ,
}

const mahasiswa2 : SppKuliah ={
    jarak : 125 ,
    gajiortu : 14000000 ,
}

const mahasiswa3 : SppKuliah ={
    jarak : 8 ,
    gajiortu : 4000000 ,
}
// console.log("Mahasiswa 3 jarak rumah lama ",mahasiswa3.jarak)
// mahasiswa3.jarak = 10
// console.log("Mahasiswa 3 jarak rumah baru ",mahasiswa3.jarak)

// console.log(mahasiswa3.gajiortu)


function cekJarak(statusjarak:number) : number {
    if (statusjarak >= 0 && statusjarak <= 10) { // jika status jarak lebih dari = 0 maka status jarak le
    return 3
    } 
    else if (statusjarak >= 11 && statusjarak <= 50) {
        return 5
    }
    else if (statusjarak > 50 && statusjarak <= 100) {
        return 8
    }
    else if (statusjarak > 100) {
        return 10
    }
    return 0
}

// console.log(cekJarak(5));
// console.log(cekJarak(14));
// console.log(cekJarak(67));
// console.log(cekJarak(100));
// console.log(cekJarak(-1));

function cekGajiortu(statusgaji:number) : number {
    if(statusgaji >= 0 && statusgaji <=1000000){
        return 3
    }
    else if(statusgaji > 1000000 && statusgaji <=5000000) {
        return 5
    }
    else if(statusgaji > 5000000 && statusgaji <= 10000000) {
        return 8
    }
    else if(statusgaji > 10000000) {
        return 10
    }
    return 0
}

function penjumlahan (jarak:number,gajiortu:number) : string{
    let total = cekJarak (jarak) + cekGajiortu (gajiortu) 
    if (total <= 0 && total <= 5) {
        return `UKTNYA 5 JUTA`
    }
    if (total > 5) {
        return `UKTNYA 10 JUTA`
    }
    return "Mahasiswa tidak sesuai"
}

console.log(penjumlahan(mahasiswa1.jarak,mahasiswa1.gajiortu))




console.log(penjumlahan(mahasiswa2.jarak,mahasiswa2.gajiortu))

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
