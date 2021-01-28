const person = {
    age:24,
    name:"Berke",


    sayMyName: function(){

        // this anahtar kelimesi personı gösteriyor
        console.log(this);
        console.log(this.age);
        console.log(this.name);
    },


    /* 
    sayMyName: function(){

        // this anahtar kelimesi personı gösteriyor
        console.log(this);
        console.log(this.age);
        console.log(this.name);
    }.bind(this), 
    */
    //.bind(this)
    // bind(this) diye eklersek window objemizi gösterir


    // arrow function ile kullanıldığında this anahtar kelimesi windowu gösteriyor
    // arka planda bind'lı haline döndürülüyor
    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }


    // objemizin fonksiyonları dışındaki this kullanımları
    // window objemizi gösterir
}

person.sayMyName();
// buradan gelen undefined --> this.age çünkü window objemizin age diye bir özelliği bulunmuyor
// name özelliği bulunuyor ama boş string

person.tellAge();
// window objemizin age diye bir özelliği bulunmadığı için undefined 