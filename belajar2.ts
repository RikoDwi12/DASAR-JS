// Contoh objek dengan properti array
interface MyObject {
    nama: string;
    umur: number;
    nilai: number[];
  }
  
  // Membuat objek dengan properti array
  const student: MyObject = {
    nama: "Alice",
    umur: 20,
    nilai: [85, 90, 78, 95]
  };
  
  // Menggunakan map untuk membuat array baru dengan setiap nilai dinaikkan 5 poin
  const updatedNilai: number[] = student.nilai.map((nilai) => nilai + 7);

  console.log(updatedNilai); // Output: [90, 95, 83, 100]
  




  // Contoh array awal
const numbers: number[] = [1, 2, 3, 4, 5];

// Menggunakan map untuk membuat array baru dengan setiap elemen dikuadratkan
const squaredNumbers: number[] = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
