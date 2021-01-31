// Promise objesi döndüren fonksiyon
function getData(data){

    return new Promise(function(resolve,reject){
        setTimeout(function(){

            if (typeof data === "string"){
                resolve(data); // Olumlu
            }else {
                reject(new Error("Lütfen string bir değer girin"));
            }

        },3000);
    });
    

}


getData(24)
.then(response => console.log(response))
.catch(err => console.error(err));


//////////////////////////////////////////////////////////////////

function addTwo(number){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof number === "number"){
                resolve(number+2);
            }else {
                reject(new Error("Lütfen bir sayı girin"));
            }
        },5000);
    });
}


// then içinde return kullandıktan sonra yine promise döner, promiseleri artarda ekleyerek çalıştırabilir
// promise chain ve bu sayede yine then ile yakalarız
// birden çok catch kullanılmaz
addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;
}).then(response => console.log(response))
.catch(err => console.error(err));