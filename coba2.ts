interface Barang {
    harga: number;
    lebar: number;
    warna: string;

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
function createBarang (barang:Barang) {
    console.log(`Harga : ${barang.harga} lebar ${barang.lebar} warna ${barang.warna}`);
    
}
createBarang(barang1)
createBarang(barang2)
createBarang(barang3)

interface Laptop {
    model : string,
    ram : number,
    prosesor : string ,
}

let laptop1 ={
    model: "asus" ,
    ram : 2 ,
    prosesor : "intel"
}
let laptop2 ={
    model: "lenovo" ,
    ram : 3 ,
    prosesor : "AMD"
}
let laptop3 ={
    model: "colpad" ,
    ram : 4 ,
    prosesor : "intel"
}

function spekLaptop(laptop:Laptop) {
    console.log(`model :${laptop.model} ramnya : ${laptop.ram} prosesornya : ${laptop.prosesor}`);
    
}
console.log("\n");

spekLaptop(laptop1)
spekLaptop(laptop2)
spekLaptop(laptop3)

interface Hp {
    merek : string , 
    ram : number , 
    toko : string 
}

let hp1 = {
    merek : 'samsung' ,
    ram : 4 ,
    toko : 'semarang'
}

let hp2 = {
    merek : 'iphone' ,
    ram : 2 ,
    toko : 'solo'
}

function kelengkapanHp(status : Hp) {
    console.log(`mereknya adalah ${status.merek} ramnya ada ${status.ram} tokonya di ${status.toko}`);
    
}

kelengkapanHp(hp1)
