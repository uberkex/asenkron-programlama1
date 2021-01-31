// başına async koymak, bir fonksiyonun mutlaka ve mutlaka bir promise döneceğini belirtiyor
// return new Promise döneceğini belirtiyoruz
// datayı promise'deki resolve'a koyuyor
/*

return data

otomatik olarak aşağıdakine çevirilecek;

return new Promise(resolve,reject) => {
    resolve(data);
}

*/


async function test(data){
    return data;
}

test("Merhaba")
.then(response => console.log(response));


// await anahtar kelimesi bir promise'in resolve etmesini yani olumlu dönüş yapmasını bekleyen
// await orda beklicek ve alt satırları çalıştırmayacak.. satır orda belirttiğimiz süre kadar bekleyecek
// await sadece async fonksiyonların içinde çalışıyor


async function test2(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("awaite girdim");
        },3000);
    });

    let result = await promise; // 5 saniye bekleyecek
    console.log(result);
    console.log("üç saniye beklendi ve şimdi ben çalıştım");
}

test2();


// GENEL BİR ÖRNEK
async function testData(data){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof data === "string"){
                resolve(data);
            }else{
                reject(new Error("Lütfen string bir değer girin"));
            }
        },5000);
    });

    const result = await promise;
    
    return result;
}

testData("asyn await genel örnek")
.then(data => console.log(data))
.catch(err => console.error(err));

testData(24)
.then(data => console.log(data))
.catch(err => console.error(err));



// Async ve Await en güzel kullanımı fetch() fonksiyonu ile beraber kullanımıdır.
// fetch()

async function getCurrency(url){
    // ilk başta bu bir promise döneceği için, resolve ettiğinde bize response objesi döneceği için
    const response = await fetch(url); // Response Object dönecek burada
    console.log(response);
    
    
    const data = await response.json() // JSON Object
    // promise dönüyoruz yine
    return data;

    //console.log(data);
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(result => console.log(result));