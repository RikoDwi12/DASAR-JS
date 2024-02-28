var namaHewan = ["kuda", "sapi", "kambing", "kerbau"];
var hewanFilter = [];
function searchHewan() {
    for (var i = 0; i < namaHewan.length; i++) {
        if (namaHewan[i].charAt(0) == "k") {
            hewanFilter.push(namaHewan[i]);
        }
    }
    return "Hewan tidak ditemukan";
}
console.log(namaHewan);
searchHewan();
console.log("Hewan berawalan huruf K ", hewanFilter);
