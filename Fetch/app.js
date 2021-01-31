// Bize promise dönüyor ve bunu çağırdığımız zaman then ile alıyoruz.

function ExchangeAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log(`1 Euro ${data.rates.TRY} TL`);
    })
    .catch(err => console.error(err));
}

ExchangeAPI();
// --> 1 Euro 8.8772 TL