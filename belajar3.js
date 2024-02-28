// Membuat objek dengan properti array
var person = {
    nama: "John",
    umur: 25,
    hobi: ["berenang", "membaca", "memasak"]
};
// Mengakses nilai dalam array di dalam objek
console.log(person.nama); // Output: John
console.log(person.hobi); // Output: ["berenang", "membaca", "memasak"]
console.log(person.hobi[0]); // Output: berenang
console.log(person.hobi.length); // Output: 3
var hp1 = {
    nama: 'samsung',
    ram: 2,
    toko: ['semarang', 'solo', 'surabaya']
};
console.log("ini merupakan hp ".concat(hp1.nama, " mempunyai ram ").concat(hp1.ram, " dan tokonnya di ").concat(hp1.toko));
