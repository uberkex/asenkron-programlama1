/* 
callback fonksiyonlar aslında normal bir fonksiyon ama biz bu fonksiyonlarımızı başka bir 
fonksiyona parametre olarak gönderiyoruz
aynı zamanda callback fonksiyonlar sayesinde asycn işlemlerimizi yönetebiliyoruz. */

// addEventListenerlarda callback fonksiyon
/* 
document.getElementById("btn").addEventListener("click",function(){
    console.log("Tıklandı");
}); 
*/






// senkron bir şekilde çalışıyor olarak gözüküyorlar
/* 
function process1(){
    console.log("İşlem 1 çalıştı");
}

function process2(){
    console.log("İşlem 2 çalıştı");
}

process1();
process2();
 */









// asenkron çalışma : bir fonksiyonun çalışması başka işlemleri beklemez
/* 
function process1(){
    setTimeout(function(){
        console.log("İşlem 1 çalıştı");
    },3000);
}

function process2(){
    setTimeout(function(){
        console.log("İşlem 2 çalıştı");
    },2000);
}

process1();
process2();
console.log("deneme yazısı"); 
*/
// buradaki işlemler kesinlikle birbirlerini beklemiyorlar.






// PROCESS2'NİN PROCESS1'DEN SONRA ÇALIŞMASINI İSTERSEK NE YAPACAĞIZ?
// process2'yi process1'e callback fonksiyon olarak göndereceğiz
// ismi genelde callback diye verilir ama isterseniz buraya istediğiniz birşeyi yazabilirsiniz
// başkalarının kodlarını incelediğinizde callback veya cb diye görebilirsiniz

/* 
function process1(callback){
    setTimeout(function(){
        console.log("İşlem 1 Çalıştı");
        callback();
    },3000);
}

function process2(){
    setTimeout(function(){
        console.log("İşlem 2 Çalıştı")
    },2000);
}

process1(process2); 
*/







// SON DENEME
const cities = ["İstanbul","İzmir","Edirne"];

function addCity(city, callback){

    setTimeout(function(){
        cities.push(city);
        console.log(`${city} şehirlere eklendi..`);
        callback();
    },2000);
}


function getCities(){
    
    setTimeout(function(){
        console.log("**** Şehir Listesi ****");
        cities.forEach(function(city){
            console.log(city);
        });
    },1000);
}


addCity("Bursa",getCities);


