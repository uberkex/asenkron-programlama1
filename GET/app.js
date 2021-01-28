

class Request {
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // GET REQUEST

    get(url){
        // bağlantımızı açıyoruz
        this.xhr.open("GET",url);
        
        /* ---- İLKEL YÖNTEM ---- */
        // this.xhr.status de hata almamak için, this ile Requesti göstermek için;
        // geçici olarak bu Requesti yani thisi bir temp değerine atayalım
        // const temp = this;
        
        // response başarılı gelirse çalışıyor

        /* ---- ARROW FUNCTION YÖNTEMİ ---- */
        this.xhr.onload = () => {
            // bind(this) YÖNTEMİNDEN SONRA;
            // console.log(this) --> Request'i gösterir

            // buradaki this anahtar kelimesi xhr'ı gösteriyor
            // console.log(this);
            if(this.xhr.status === 200){
                console.log(this.xhr.responseText);
            }




            /* ---- EN BASİT YÖNTEM ---- */
            // this.xhr.status ile status undefined hatası aldık
            // this --> xhr gösterdiği için bu şekilde kullanarak hata almayız 
            /* 
            if(this.status === 200){
                console.log(this.responseText);
            } 
            */




            /* 
            ---- İLKEL YÖNTEM ---- 
            if(temp.xhr.status === 200){
                console.log(temp.xhr.responseText);
            } 
            */
        }
        /* ---- .bind(this) YÖNTEMİ ---- */
        //.bind(this)
        // get fonksiyonda kullanılan this neyse onu kullan diyoruz
        // get fonksiyonunun kapsama alanında this Requesti gösteriyor



        this.xhr.send();
    }

}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums");