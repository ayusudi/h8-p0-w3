/**
Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E
 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.
NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/

//Pseudocode
STORE "nama siswa" with any word 
STORE "nilai" with any value
IF "nilai">=0 && "nilai" < 35
    DISPLAY "nama siswa" + "\n nilai :E"
ELSE IF "nilai" > 34  && "nilai < 50
    DISPLAY "nama siswa" + "\n nilai :D"
ELSE IF "nilai" > 49  && "nilai < 65
DISPLAY "nama siswa" + "\n nilai :C"
ELSE IF "nilai" > 64 && "nilai" < 80
    DISPLAY "nama siswa" + "\n nilai :B"
ELSE IF "nilai" > 79 && "nilai" <=100
    DISPLAY "nama siswa" + "\n nilai =A"
ELSE 
    DISPLAY "Nilai Invalid"
END IF

//Algorithm
1. baca nama siswa 
2. periksa nilai ujian siswa
3. jika nilai ujiannya 80-100 maka nilainya A 
4. jika nilai ujiannya 65-79 maka nilainya B
5. jika nilai ujiannya 50-64 maka nilainya C
6. jika nilai ujiannya 35-49 maka nilainya D 
7. jika nilai ujiannya 0-34 maka nilainya E 
8. jika nilai ujiannya kurang dari 0 atau lebih dari 100 maka nilai invalid
9. tulis nama siswa dan hasil pemeriksaan nilai ujian 

