

const products = [
 { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
 { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
 { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
 { name: "Book", category: "Stationery", price: 15, stock: 20 },
 { name: "Air Cooler", category: "Appliances", price: 500, stock: 6 },
 { name: "Mobiles", category: "Electronics", price: 15, stock: 20 },
 { name: "News Paper", category: "Stationery", price: 1, stock: 0 },
 { name: "TV", category: "Electronics", price: 450, stock: 0 }
 
 ]


let filteredCatProducts= products.filter(
	(product)=>product.category =="Electronics"
);
console.log('Filtere by Product Category');
console.log(filteredCatProducts);

let filteredPriceProducts= products.filter(
	(product)=>product.price <=150 && product.price >=10
);
console.log('Filtere by Product Price between 10 to 150');
console.log(filteredPriceProducts);

let filteredOSProducts= products.filter(
	(product)=>product.stock ==0
);
console.log('Filtere by Product which are out of stock');
console.log(filteredOSProducts);