let hp : boolean;
function oprasiHp(status:boolean) {
    hp = status 
    if (hp == true) {
        console.log("maka hp ini hidup");
    }
    if (hp == false) {
        console.log("maka hp ini mati");
    }
}
oprasiHp(false)

let laptop : boolean;
function oprasiLaptop(statusLaptop:boolean) {
    laptop = statusLaptop
    if (statusLaptop == true) {
        console.log("maka laptop hidup");
    }
    if (statusLaptop == false) {
        console.log("maka laptop mati");
    }
}
oprasiLaptop(true)

let lampu : boolean;
function posisiLampu(statusLampu:boolean) {
    if (statusLampu == true) {
        console.log("maka lampu itu hidup");
    }
    if (statusLampu == false) {
        console.log("maka lampu itu mati");
    }
    
}

posisiLampu(false)

let Hp : boolean;
function posisiHp(status:boolean) {
    if (status == true) {
        console.log('maka hp nyala');
    }
    else if (status == false) {
        console.log('maka hp mati');
    }
}

posisiHp(true)