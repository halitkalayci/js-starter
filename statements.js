console.log("Statements Start");

// KOŞUL BLOKLARI
// true - false
// 1 eşittir 1
// mantıksal operatör
console.log(1 == 1);
console.log(1 != 1);
console.log(1 >= 1); // > >= || =< <

// == sadece değer kontrolü yap
/// === tip ve değer kontrolü yap
console.log(1 === "1");
console.log(1 !== "1");
// condition true ise bloğunu çalıştırır değilse
// çalıştırmaz..
if (1 != 1) {
	console.log("IF içerisi çalıştı..");
} else if (2 != 2) {
	console.log("Else IF çalıştı..");
} else {
	console.log("ELSE bloğu çalıştı..");
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.76;

// dolarKurBugün daha fazlaysa veya eşitse
// console'a fazla
// daha az ise az yazdır.

if (dolarKurBugun > dolarKurDun) {
	console.log("Dolar kuru dünden fazla");
} else if (dolarKurBugun == dolarKurDun) {
	console.log("Dolar kurunda oynama yok.");
} else {
	console.log("Dolar kuru dünden az");
}

// ternacy operator
// tek satırlık if - one line if statement
// koşul ? kod1 : kod2
// kod1 => koşul true
// kod2 => koşul false
dolarKurBugun >= dolarKurDun
	? console.log("Dolar kuru yükselişte")
	: console.log("Dolar Kuru düşüşte");

//switch-case

let toplamBakiye = 100;
let secilenKur = "EUR";

switch (secilenKur) {
	case "USD":
		toplamBakiye *= 17;
		break;
	case "EUR":
		toplamBakiye *= 20;
		break;
	default:
		console.warn("Bilinmedik kur türü..");
		break;
}

console.log("Toplam Bakiye: ", toplamBakiye);

// seçilenKredi
// krediTutari

// seçilen kredi taşıt ise 2 ile ihtiyaç ise 1.5 ile konut ise 2.5 ile çarp
// hiç biri değilse hata bas
// en son krediTutarini yazdir.

// 0 => taşıt, 1=> ihtiyaç, 2=>konut
let secilenKredi = 3;
let krediTutari = 150000;

switch (secilenKredi) {
	case 0:
		console.log("Taşıt kredisi seçtiniz.. Faiz uygulanıyor x2");
		krediTutari *= 2;
		break;
	case 1:
		console.log("İhtiyaç kredisi seçtiniz.. Faiz uygulanıyor x1.5");
		krediTutari *= 1.5;
		break;
	case 2:
		console.log("Konut kredisi seçtiniz.. Faiz uygulanıyor x2.5");
		krediTutari *= 2.5;
		break;
	default:
		console.error("Bilinmedik kredi türü..");
		break;
}

console.log("Kredi tutarınız: ", krediTutari);

// girilen sayi çift ise "çift" tek ise "tek" yazalım.
// % => MOD operatör

let girilenSayi = 11;

if (girilenSayi % 2 == 0) {
	console.log("Sayı çifttir");
} else {
	console.log("Sayı tektir");
}
