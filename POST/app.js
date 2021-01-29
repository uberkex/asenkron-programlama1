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

    // POST REQUEST

    post(url,data,callback){
        
        this.xhr.open("POST",url);

        // apilerimize form verisi veya json verisi gönderebiliriz
        // bunu header olarak belirtmemiz gerekiyor
        this.xhr.setRequestHeader("Content-type","application/json"); //JSON

        this.xhr.onload = () => {
            // HTTP Status Code --> 201 Created
            if(this.xhr.status === 201){
                // Başarılı
                callback(null,this.xhr.responseText);
            }else {
                callback("Hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));

    }

}

const request = new Request();
request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Başlığımız"},function(err,album){
    if(err === null){
        console.log(album);
    }else {
        console.log(err);
    }
})
