let isim=prompt("İsim Giriniz!")
let isim2 = document.querySelector("#isim")
isim2.innerHTML=`${isim2.innerHTML}<span style="font-size:25px;color:gold">${isim}</span>`

let saat = document.querySelector("#saat")
let tarih = new Date()
let tarih2 = (tarih.toLocaleString())

saat.innerHTML=`${saat.innerHTML}<span style="color:orange">${tarih2}</span>`