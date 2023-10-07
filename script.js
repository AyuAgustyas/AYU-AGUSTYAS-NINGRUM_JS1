//if,else
let nilai = prompt('masukkan nilai anda : ');

if (nilai >= 85) {
    console.log("Nilai Cukup Untuk Dinyatakan Lulus");
}
else {
  console.log("Maaf, Nilai Dinyatakan Belum Cukup Untuk Lulus");
}

//nested if
let nilai1 = prompt('masukkan nilai anda : ');

if (nilai1 >= 75) {
    alert('Nilai Anda Mencukupi Untuk Lulus');
    
    if (nilai1 >= 95) {
        alert('Prestasi Anda Luar Biasa');
    }
    else if (nilai1 >= 85) {
        alert('Prestasi Anda Baik');
    }
    else  {
        alert('Prestasi Anda Memadai');
    }
}
else {
    alert('Maaf, Anda Belum Mencapai Nilai Yang Cukup Untuk lulus')
}

//switch case
var angka = prompt('masukkan angka pilihan anda : ');

switch ( angka ) {
    case '1' :
        alert ('anda memasukkan angka 1');
        break;
    case '2' :
        alert ('anda memasukkan angka 2');
        break;
    case '3' :
        alert ('anda memasukkan angka 3');
        break;
    case '4' :
        alert ('anda memasukkan angka 4');
        break;
    case '5' :
        alert ('anda memasukkan angka 5');
        break;
    case '6' :
        alert ('anda memasukkan angka 6');
        break;
    case '7' :
        alert ('anda memasukkan angka 7');
        break;
    case '8' :
        alert ('anda memasukkan angka 8');
        break;
    case '9' :
        alert ('anda memasukkan angka 9');
        break;
    case '10' :
        alert ('anda memasukkan angka 10');
        break;
    default :
        alert ('angka yang anda masukkan salah');
        break;
}

//for statement
const hewan = ['Beruang', 'Musang', 'Singa', 'Harimau', 'Panda'];

for (let i = 0; i < hewan.length; i++) {
  console.log("Ini adalah nama hewan " + hewan[i]);
}

//while
var loop = true;

while(loop) {
    console.log('HALLO, KAKAK MENTOR INFINITE LEARNING');
    loop = confirm('Mau Lagi?');
}

//do-while
let x = 1
do {
    if (x % 2 !== 0){
        console.log('Ini Data ke-', x);
    }
    x++
}while (x <= 10)

//function
function greet(x, y, z) {
    alert("Hello " + x + " " + y + " "+z);
}

greet("Kakak", "Mentor", "Salam kenal");