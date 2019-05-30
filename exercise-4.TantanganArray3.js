var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 
console.log('Input Awal');
console.log(input);

function dataHandling2(input) {
    // Nambahin El sharawy, provinsi, pria, SMA 
    input.splice(1, 2, "Roman Alamsyah El Sharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA international Metro")
console.log('\n==========\n1. Input Baru')
    console.log(input)
    var bulan = input[3].split("/")
    
    var bulanHuruf = Number(bulan[1])
    //console.log(bulan) // ["21", "05", "1989"]
    //console.log(bulanHuruf) // 05

console.log('\n==========\n2. Ubah Jadi Bulan(bulanHuruf)')
    // jadiin 05 -> May
    switch (bulanHuruf) {
        case 1: bulanHuruf = "January"; break;
        case 2: bulanHuruf = "February"; break;
        case 3: bulanHuruf = "March"; break;
        case 4: bulanHuruf = "April"; break;
        case 5: bulanHuruf = "May"; break;
        case 6: bulanHuruf = "June"; break;
        case 7: bulanHuruf = "July"; break;
        case 8: bulanHuruf = "August"; break;
        case 9: bulanHuruf = "September"; break;
        case 10: bulanHuruf = "October"; break;
        case 11: bulanHuruf = "November"; break;
        case 12: bulanHuruf = "December"; break;
        default: { console.log("Invalid Month number\nPlease try again ...."); break; }
    }
    console.log(bulanHuruf)

console.log('\n=========\n3. Urut Tanggal (bulan) dari Besar-Kecil')
//dari ini ["21", "05", "1989"]
//jadi gini ["1989", "21", "05"]
    console.log("ubah ini: " + bulan)
    bulan.sort(function(value1, value2){
        return value1[1] < value2[2]
    })
   
    console.log(bulan)

console.log('\n=========\n4. Tanggal dengan (-) sebagai pemisah')
    var bulanStrip = bulan.join('-')
    console.log(bulanStrip)

console.log('\n=========\n5. Elemen ke 2 > 15(length-nya)')
    if (input[2].length> 15){
    var Alamsyah = input[1].split(" ").slice(0,2).join(" ")
    console.log(Alamsyah)
    }
}
dataHandling2(input)