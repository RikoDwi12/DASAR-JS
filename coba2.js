var barang1 = {
    harga: 350000,
    lebar: 1200,
    warna: "hitam"
};
var barang2 = {
    harga: 125000,
    lebar: 32,
    warna: "merah"
};
var barang3 = {
    harga: 550000,
    lebar: 130,
    warna: "biru"
};
function createBarang(barang) {
    console.log("Harga : ".concat(barang.harga, " lebar ").concat(barang.lebar, " warna ").concat(barang.warna));
}
createBarang(barang1);
createBarang(barang2);
createBarang(barang3);
var laptop1 = {
    model: "asus",
    ram: 2,
    prosesor: "intel"
};
var laptop2 = {
    model: "lenovo",
    ram: 3,
    prosesor: "AMD"
};
var laptop3 = {
    model: "colpad",
    ram: 4,
    prosesor: "intel"
};
function spekLaptop(laptop) {
    console.log("model :".concat(laptop.model, " ramnya : ").concat(laptop.ram, " prosesornya : ").concat(laptop.prosesor));
}
console.log("\n");
spekLaptop(laptop1);
spekLaptop(laptop2);
spekLaptop(laptop3);
var hp1 = {
    merek: 'samsung',
    ram: 4,
    toko: 'semarang'
};
var hp2 = {
    merek: 'iphone',
    ram: 2,
    toko: 'solo'
};
function kelengkapanHp(status) {
    console.log("mereknya adalah ".concat(status.merek, " ramnya ada ").concat(status.ram, " tokonya di ").concat(status.toko));
}
kelengkapanHp(hp1);
