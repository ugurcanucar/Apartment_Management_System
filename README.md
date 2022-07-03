# Apartment Management System / Uğurcan Uçar

## Projenin Amacı

Dairelerin aidat, elektrik, su gibi faturalarının ödenmesi ve takibini sağlayan, apartmanın düzenini kontrol edebileceğimiz bir sistemdir.

## Kullanılan Teknolojiler

| ![ReactJS](https://external-content.duckduckgo.com/iu/?u=https://www.brainpulse.com/wp-content/uploads/2019/01/react.png&f=1&nofb=1)                                                 | ![enter image description here](https://external-content.duckduckgo.com/iu/?u=https://alexion.nl/wp-content/uploads/2020/10/mssql-180x180.png&f=1&nofb=1)                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://external-content.duckduckgo.com/iu/?u=https://www.ambient-it.net/wp-content/uploads/2016/08/NET-Core-2-Logo-150x150.jpg&f=1&nofb=1)          | ![enter image description here](https://external-content.duckduckgo.com/iu/?u=https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/180px-Redux.png&f=1&nofb=1) |
| ![enter image description here](https://external-content.duckduckgo.com/iu/?u=https://archive.org/services/img/github.com-tailwindlabs-tailwindcss_-_2020-10-19_01-01-45&f=1&nofb=1) | ![enter image description here](https://external-content.duckduckgo.com/iu/?u=https://cdn.freebiesupply.com/logos/thumbs/1x/redux-saga-logo.png&f=1&nofb=1)                   |

- ReactJs
- Microsoft Sql Server
- .Net Core 5
- React Redux
- TailwindCss
- Saga

## Başlangıçta

Öncelikle projenin içinde bulunan

> Database-Backup-Diagram

klasörüne girip yedeğini verdiğim database örneğini mssqle dahil ediyoruz.
Daha sonra WebApi içinde bulunan appsettings.json içindeki "SqlServer" kısmını kendi database'inize göre düzeltiyoruz ve projeyi başlatıyoruz.

> ApartmentManagementSystem.WebUI

klasörünü Visual Studio Code ile açıp `npm install` komutu ile kullanılan paketleri indiriyoruz ve `npm start` komutu ile projeyi başlatıyoruz.

## Uygulama Hakkında

Projeyi başlattığımıza karşımıza Login ekranı çıkıyor.
![enter image description here](https://i.hizliresim.com/3vk8guv.png)

Girdiğimiz üyeliğe göre gelecek olan ekran değişecektir. Yönetici ile Kullanıcıların ekranları farklıdır. Örneğin : Yönetici giriş yaptığı zaman :
![enter image description here](https://i.hizliresim.com/ktv9mku.png)
Bu şekilde yönetebileceği çok daha fazla alan bulunuyor. Fakat kullanıcı giriş yaptığı zaman :
![enter image description here](https://i.hizliresim.com/avjntnp.jpg)
Faturasını görüp - ödeyebileceği , yöneticiye mesaj atabileceği bir alan açılıyor.
Yönetici ekranına dönecek olursak genel olarak şu şekilde bir tasarım var.

![enter image description here](https://i.hizliresim.com/gxnwo6s.jpg)
Verileri görüp düzenleyip,silebiledildiği bir ekran ve yeni veri eklemesi yapabilmesi için 2. bir ekran mevcut.

![enter image description here](https://i.hizliresim.com/jwx8ta4.jpg)

Biraz da backend kısmından bahsetmek gerekirse;
![enter image description here](https://i.hizliresim.com/6twu6zw.jpg)
Toplam 5 katmandan oluşan bir yapımız mevcut.

Ayrıca rol sistemi için bir attribute yazdım.
![enter image description here](https://i.hizliresim.com/je3qyap.jpg)
![enter image description here](https://i.hizliresim.com/m190ne9.jpg)

Bu Custom Attribute sayesinde Controller işlevini yerine getirmeden önce Rol kontrolu yapıp kontrolden sonra işlevini yerine getiriyor.

## Bilinen Hatalar - Eksiklikler

- Ödeme servisini ayırıp dataları mongodb de saklama işlemi
- Toplu fatura ekleme özelliği
- UI kısmında projenin bazı kısımlarında kullandığım kontrollerde (Yönetici mi kullanıcı mı kontrolü) direkt Id ye göre if-else yapısı kurduğum için ( if(id===1)... gibi ) Databasedeki AccountType Id'si değiştiği zaman projede sıkıntılar olacaktır. Projenin esnekliğini kısıtlayan bir eksik. Databasedeki AccountType kısmına isAdmin tarzında bir bool değer tutan column eklemiş olsam bu sorunu çözebilirdim fakat yetiştiremedim :) .
- UI kısmını responsive yapmaya zamanım yetmedi.
