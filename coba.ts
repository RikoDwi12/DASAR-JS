interface Barang {
    harga: number;
    lebar: number;
    warna: string;
}

function cekPointHarga(harga:number) {
    if (harga >= 100000 && harga <= 200000) {
        return 3;
    }
    else if (harga > 200000 && harga <= 500000 ) {
        return  5
    }
    else if (harga > 500000 && harga <= 1000000) {
        return 8
    }
    else if (harga > 1000000) {
        return 10
    }
        return 0
}

function cekPointWarna(warna:any) {
    if (warna === 'hitam') {
        return 3
    }
    else if (warna === 'kuning') {
        return 5
    }
    else if (warna === 'merah') {
        return 8
    }
    else if (warna === 'biru') {
        return 10
    }
        return 0

}

function cekPointLebar(lebar:any) {
    if (lebar >= 30 && lebar <= 50 ) {
        return 3
    }
    else if (lebar > 50 && lebar <= 100 ) {
        return 5
    }
    else if (lebar > 100 && lebar <= 500 ) {
        return 8
    }
    else if (lebar > 500 ) {
        return 10
    }
    else {
        return 0
    }
}

const barang1 ={
   harga: 350000,
   lebar: 1200,
   warna: "hitam"
}

const barang2 ={
    harga: 125000,
    lebar: 32,
    warna: "merah"
}

const barang3 ={
    harga: 550000,
    lebar: 130,
    warna: "biru"
}

function jumlahPoint(barang:Barang) {
    let total = cekPointHarga (barang.harga) + cekPointWarna (barang.warna) + cekPointLebar (barang.lebar)
    
    if (total >= 0 && total <= 10) {
        return 'umum'
    }
    else if (total > 10 && total <= 20) {
        return 'khusus'
    }
    else if (total > 20 && total <= 30) {
        return 'Langka'
        
    }
}

console.log(`barang 1 kategori ${jumlahPoint(barang1)}`)
console.log(`barang 2 kategori ${jumlahPoint(barang2)}`)
console.log(`barang 3 kategori ${jumlahPoint(barang3)}`)


 