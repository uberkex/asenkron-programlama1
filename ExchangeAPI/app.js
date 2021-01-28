document.getElementById("change").addEventListener("click", change);
// idsi change olan butona tıklanıldığında change adlı fonksiyonu çağırıyoruz



function change(){
    // XMLHttpRequest objesi oluşturuyoruz
    const xhr = new XMLHttpRequest();

    // default olarak tru parametresini aldığı için eklememize gerek yok
    // xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    // responsemuz hazır olduğunda çalışacak fonksiyonumuz
    xhr.onload = function(){
        // status === 200 ise OK kontrolü yapıyoruz
        if(this.status){
            // console.log(this.responseText); --> JSON objesi string olarak gelir
            const response = JSON.parse(this.responseText);
            // console.log(response); --> JSON olarak consoleda görürüz
            // console.log(response.rates); --> rates kısmını consoleda görürüz
            // console.log(response.rates.TRY); --> 1 Euronun Kaç TL olduğunu görürürz
            
            const rate = response.rates.TRY
            // console.log(typeof rate); --> number

            // girilen Euro miktarını almak istiyoruz
            const amount = document.getElementById("amount").value;
            // console.log(typeof amount); --> string
            
            // string değerini numbera çevirmeliyiz
            const amount_n = Number(document.getElementById("amount").value);
            // console.log(typeof amount_n); --> number

            const result = amount_n * rate;
            // console.log(result); --> euroya 10 gir 

            document.getElementById("tl").value = result.toFixed(5);




        }
    }

    xhr.send();
}