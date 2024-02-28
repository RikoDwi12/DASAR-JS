var hp;
function oprasiHp(status) {
    hp = status;
    if (hp == true) {
        console.log("maka hp ini hidup");
    }
    if (hp == false) {
        console.log("maka hp ini mati");
    }
}
oprasiHp(false);
var laptop;
function oprasiLaptop(statusLaptop) {
    laptop = statusLaptop;
    if (statusLaptop == true) {
        console.log("maka laptop hidup");
    }
    if (statusLaptop == false) {
        console.log("maka laptop mati");
    }
}
oprasiLaptop(true);
var lampu;
function posisiLampu(statusLampu) {
    if (statusLampu == true) {
        console.log("maka lampu itu hidup");
    }
    if (statusLampu == false) {
        console.log("maka lampu itu mati");
    }
}
posisiLampu(false);
var Hp;
function posisiHp(status) {
    if (status == true) {
        console.log('maka hp nyala');
    }
    else if (status == false) {
        console.log('maka hp mati');
    }
}
posisiHp(true);
