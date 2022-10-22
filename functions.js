let products = [
	{unitPrice: 100, productName: "Ürün 1", discount: true, rate: 15},
	{unitPrice: 150, productName: "Ürün 2", discount: false, rate: 0},
	{unitPrice: 200, productName: "Ürün 3", discount: true, rate: 2.5},
];
// 10 farklı yerde productName'e göre ürünleri getirme modülü mevcut

// parametre
// default value
function getProductsByName(productName = "Ürün") {
	let productsResult = products.filter(p =>
		p.productName.includes(productName),
	);
	console.log(`Arama sonucunda ${productsResult.length} adet ürüne ulaşıldı..`);
}
getProductsByName("Ürün");

getProductsByName("1");

getProductsByName("asdasd");

getProductsByName();

// constant => değişken tanımlama keywordu
// değişkenlerin değeri değişmez!

// ARROW FUNCTION

const getProductsByUnitPrice = unitPrice => {};

// products.js
// ürünleri alın

// isme göre filtreleme fonksiyonu
// isme göre ilk bulunan productu getirme fonksiyonu
// unitPrice < PARAMETRE getirme fonksiyonu (array)
// unitPrice > PARAMETRE getirme fonksiyonu (array)
// indirimdeki ürünleri getirme
// ürün ekleme
// verilen isim ile ürün silme
// tüm ürünleri getirme

// FONKSIYON
