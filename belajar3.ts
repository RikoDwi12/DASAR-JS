// Contoh objek dengan properti bertipe array
interface MyObject {
    nama: string;
    umur: number;
    hobi: string[];
  }

  interface MyObject2 {
    nama: string;
    umur: number;
    hobi: string;
  }
  
  var a : MyObject2[] = 
        [
            { hobi: "ssk",
              nama : "kks",
              umur : 26
            },
            
            
        ]


  // Membuat objek dengan properti array
  const person: MyObject = {
    nama: "John",
    umur: 25,
    hobi: ["berenang", "membaca", "memasak"]
  };
  
  // Mengakses nilai dalam array di dalam objek
  console.log(person.nama); // Output: John
  console.log(person.hobi); // Output: ["berenang", "membaca", "memasak"]
  console.log(person.hobi[0]); // Output: berenang
  console.log(person.hobi.length); // Output: 3

  interface Hp {
    nama : string;
    ram   : number;
    toko : string[];
  }

  const hp1 : Hp = {
    nama : 'samsung' ,
    ram : 2 ,
    toko : ['semarang' , 'solo' , 'surabaya']
  }

  console.log(`ini merupakan hp ${hp1.nama} mempunyai ram ${hp1.ram} dan tokonnya di ${hp1.toko}`);


  
  
