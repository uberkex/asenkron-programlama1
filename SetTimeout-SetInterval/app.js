/* 
console.log(window) yapıyoruz ve 
setTimeout - setInterval methodlarını gösteriyoruz 

*/


// setTimeout sayesinde belli bir işlemimizi belli bir saniye sonra kullanabiliyoruz
// içerisine fonksiyon gönderiyoruz bu bir callback function

/* 
İlk bunu göster
setTimeout(function(){
    console.log("İki saniye bekledim");
}, 4000) 
*/


// setInterval saniyede belirttiğimiz aralıklarla içerideki fonksiyonu sürekli çalıştırıyor

/* İlk bunu yap sonra clear göster
let i=0;
setInterval(function(){
    i++;
    console.log("Sayı:",i);
},4000); 
*/


// clearInterval
/* 
let i=0;
let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);
},2000);

document.getElementById("stop").addEventListener("click",function(){
    clearInterval(value);
});
*/



// Modern yöntem Arrow Functionlı
let i=0;
let value = setInterval(() => {
    i++;
    console.log(`Sayı = ${i}`);
},2000);

document.getElementById("stop").addEventListener("click",() => {
    clearInterval(value);
});