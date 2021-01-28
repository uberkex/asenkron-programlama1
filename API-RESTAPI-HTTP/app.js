/*
Application Programing Interface
Uygulama Programlama Arayüzü

Bir uygulamanın birtakım fonksiyonlarının başka uygulamalar tarafından
kullanılmasını sağlayan arayüz- ara katmandır

Kendi uygulamamızdan github API'ye istek atıyoruz ve bunu bize JSON objesi
olarak dönüyor.

APIler her zaman web api olmak zorunda değil. Her uygulamanın kendi içinde apileri olabilir

Uygulamalar neden api oluşturuyor diye soracak olursak, bazı uygulamalar şirketler kendilerini duyurmak,
üzerinden işlem yapılmasını sağlamak için apilerini yayınlıyorlar.

Onların bize sunduğu özellikleri kullanabiliyoruz. Bazı şirketler ücretli kullanıyorlar


Rest API
Representational State Transfer
web applicationlar arası iletişim sağlamak için kullanılır
Oldukça hızlıdır.
Stateless 
Http İstekleri:
GET --> endpointe (url) göre belli verileri alır
POST --> endpointe (url) göre belli bir veriyi gönderir
PUT --> endpointe (url) göre belli bir veriyi günceller
DELETE --> endpointe (url) göre belli bir veriyi siler

*/