	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli ($1.99/ea)",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread ($2.35/ea)",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon ($10.00/kg)",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 10.00
	},
	{
		name: "100% peanut butter ($5.99/ea)",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: true,
		price: 5.99
	},
	{
		name: "milk ($4.99/container)",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: true,
		price: 4.99
	},
	{
		name: "apple ($0.50/ea)",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 0.50
	},
	{
		name: "almonds ($8.99/kg)",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: true,
		price: 8.99
	},
	{
		name: "candy ($13.99/kg)",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 13.99
	},
	{
		name: "soy milk ($6.99/container)",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 6.99
	},
	{
		name: "cheese ($11.00/kg)",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 11.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	lactoseChecked = document.getElementById('LactoseIntolerant').checked;
	nutChecked = document.getElementById('NutAllergy').checked;
	organicChecked = document.getElementById('Organic').checked;

	for (let i=0; i<prods.length; i+=1) {
		let itemAdd = true;
		
		if ((prods[i].lactoseIntolerant == false) && (lactoseChecked)) {
			itemAdd = false;
		}
		if ((prods[i].nutAllergy == false) && (nutChecked)) {
			itemAdd = false;
		}
		if ((prods[i].organic == false) && (organicChecked)) {
			itemAdd = false;
		}

		if (itemAdd) {
			product_names.push({name: prods[i].name, price: prods[i].price});
		}
	}
	product_names.sort(
		function(a,b){
			return a.price - b.price;
		}
	);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
