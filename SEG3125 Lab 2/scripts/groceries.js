// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		lactoseFree: true,
		price: 1.49
	},
	{
		name: "organic brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		lactoseFree: true,
		price: 1.89
	},
	{
		name: "organic carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: false,
		lactoseFree: true,
		price: 1.99
	},
	{
		name: "non-organic cauliflower",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		nonOrganic: true,
		lactoseFree: true,
		price: 2.35
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 2.39
	},
	{
		name: "non-organic apple",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonOrganic: true,
		lactoseFree: true,
		price: 2.35
	},
	{
		name: "can of tomato soup",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 3.99
	},
	{
		name: "carton of 12 eggs",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 4.99
	},
	{
		name: "ice cream",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: false,
		price: 5.21
	},
	{
		name: "frozen peperoni pizza",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		nonOrganic: true,
		lactoseFree: false,
		price: 5.99
	},
	{
		name: "shredded wheat cereal",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 6.49
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: false,
		price: 6.99
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		nonOrganic: true,
		lactoseFree: true,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NonOrganic") && (prods[i].nonOrganic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListPrices(prods, restriction) {
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "NonOrganic") && (prods[i].nonOrganic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_prices.push(prods[i].price);
		}
	}
	return product_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return "$" + totalPrice;
}