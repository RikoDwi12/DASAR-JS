// Membuat objek dengan properti array
var student = {
    nama: "Alice",
    umur: 20,
    nilai: [85, 90, 78, 95]
};
// Menggunakan map untuk membuat array baru dengan setiap nilai dinaikkan 5 poin
var updatedNilai = student.nilai.map(function (nilai) { return nilai + 7; });
var updatedNama = student.nilai.map(function (nama) { return nama + "a"; });
console.log(updatedNilai); // Output: [90, 95, 83, 100]
console.log(updatedNama);
//   // Contoh array awal
// const numbers: number[] = [1, 2, 3, 4, 5];
// // Menggunakan map untuk membuat array baru dengan setiap elemen dikuadratkan
// const squaredNumbers: number[] = numbers.map((num) => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
