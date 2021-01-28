class Request {
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // GET REQUEST

    get(url,callback){
        this.xhr.open("GET",url);
        
        this.xhr.onload = () => {
            // callback 2 parametreli olacak statusun başarısız olma ihtimaline karşı
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText); 
            }else {
                // status 200 değilse hata durumundaysa
                callback("Hata oluştu",null);
            }
        }

        this.xhr.send();
    }

}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err === null){
        // status başarılı 200
        console.log(response);
    }else {
        // status başarısız - Hata
        console.log(err);
    }
});