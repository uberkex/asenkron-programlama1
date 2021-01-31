class Request {

    get(url){
        // veriyi çağırıp kullanabilmek için;
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }



    post(url,data){

        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        })
    }


}

const request = new Request();

let data = {
    userId:1,
    title:"Berke Karataş"
}

request.post("https://jsonplaceholder.typicode.com/albums",data)
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));
// ---> {userId: 1, title: "Berke Karataş", id: 101}

