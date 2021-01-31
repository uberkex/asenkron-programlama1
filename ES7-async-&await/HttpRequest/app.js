// FETCH HTTP İSTEKLERİNDE YAPTIKLARIMIZI ASYNC AWAİT İLE NASIL YAPABİLİRİZ ONA BAKICAZ

class Request {



    async get(url){
        /* 
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        }); 
        */

        const response = await fetch(url); // Response Object
        const result = await response.json(); // JSON Object
        return result;

    }



    async post(url,data){
        /* 
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
        });
        */

        const response = await fetch(url,
            {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }); // Response Object
        
        const result = await response.json(); // JSON Object
        return result;
    }



    async put(url,data){

       const response = await fetch(url,
            {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }); // Response Object
    
        const result = await response.json(); // JSON Object
        return result;
    }


    async delete(url){

        const response = await fetch(url,
            {
               method: 'DELETE' 
            }); // Response Object

        // delete işlemi bize hiçbir şey dönmeyeceği için bunları yapmak yerine bir mesaj yazabiliriz
        // const result = await response.json();
        // return result;

        return "Veri silme işlemi başarılı.";
    }


}

const request = new Request();

let jsondata = {
    userId:1,
    title:"Başlık eklendi"
}

// GET REQUEST
request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums);
})
.catch(err => console.error(err));

// POST REQUEST
request.post("https://jsonplaceholder.typicode.com/albums",jsondata)
.then(newAlbum => console.log(newAlbum))
.catch(err => console.error(err));

// PUT REQUEST
request.put("https://jsonplaceholder.typicode.com/albums/10",jsondata)
.then(album => console.log(album))
.catch(err => console.error(err));

// DELETE REQUEST
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.error(err));

