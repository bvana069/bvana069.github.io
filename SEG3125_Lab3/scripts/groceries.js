var products = [
  {
	  name: "Strawberry",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 6.99,
    src: './assets/strawberry.png',
    category: 'Produce'
  },
  {
	  name: "Raspberry",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 4.99,
    src: './assets/raspberry.jpg',
    category: 'Produce'
  },
  {
	  name: "Kiwi",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 1.99,
    src: './assets/kiwi.jpg',
    category: 'Produce'
  },
  {
	  name: "Orange",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 2.99,
    src: './assets/orange.jpg',
    category: 'Produce'
  },
  {
    name: "Banana",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 0.99,
    src: './assets/banana.jpg',
    category: 'Produce'
  },
  {
    name: "Apple",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 1.99,
    src: './assets/apple.jpg',
    category: 'Produce'
  },
  {
    name: "Peanut",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: true,
		price: 2.99,
    src: './assets/peanut.jpg',
    category: 'Nuts'
  },
  {
    name: "Peanut Butter",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: true,
		price: 4.99,
    src: './assets/pbutter.jpg',
    category: 'Nuts'
  },
  {
    name: "Almond",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: true,
		price: 5.99,
    src: './assets/almond.jpg',
    category: 'Nuts'
  },
  {
    name: "Almond Butter",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: true,
		price: 7.99,
    src: './assets/abutter.jpg',
    category: 'Nuts'
  },
  {
    name: "Nutella",
		lactoseIntolerant: false,
		nutAllergies: false,
		isOrganic: false,
		price: 6.99,
    src: './assets/nutella.jpg',
    category: 'Nuts'
  },
  {
    name: "Walnut",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: true,
		price: 4.99,
    src: './assets/walnut.jpg',
    category: 'Nuts'
  },
  {
    name: "Mozzarella",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: true,
		price: 5.99,
    src: './assets/mozzarella.jpg',
    category: 'Dairy'
  },
  {
    name: "Cheddar",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: true,
		price: 6.99,
    src: './assets/cheddar.jpg',
    category: 'Dairy'
  },
  {
    name: "Ice Cream",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 7.99,
    src: './assets/icecream.jpg',
    category: 'Dairy'
  },
  {
    name: "Milk",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: true,
		price: 4.99,
    src: './assets/milk.jpg',
    category: 'Dairy'
  },
  {
    name: "Yogurt",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 4.99,
    src: './assets/yogurt.jpg',
    category: 'Dairy'
  },
  {
    name: "Cream",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: true,
		price: 4.99,
    src: './assets/cream.jpg',
    category: 'Dairy'
  },
  {
    name: "Ruffles",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.99,
    src: './assets/ruffles.jpg',
    category: 'Chips'
  },
  {
    name: "Doritos",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.99,
    src: './assets/doritos.jpg',
    category: 'Chips'
  },
  {
    name: "Lays",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.99,
    src: './assets/lays.jpg',
    category: 'Chips'
  },
  {
    name: "Cheetos",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.99,
    src: './assets/cheetos.png',
    category: 'Chips'
  }, 
];

function restrictListProducts(prods) {
  let filteredProducts = [];
  for (let i = 0; i < prods.length; i += 1) {
    if ((selectedRestrictions.has("LactoseIntolerant")) && (prods[i].lactoseIntolerant == false)){
      continue;
    }
    if ((selectedRestrictions.has("NutAllergies")) && (prods[i].nutAllergies == false)){
      continue;
    }
    if ((selectedRestrictions.has("Organic")) && (prods[i].isOrganic == false)){
      continue;
    }
    filteredProducts.push(prods[i]);
  }
  return filteredProducts;
}

function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < chosenProducts.length; i += 1) {
    totalPrice += chosenProducts[i]
  }
  const formattedPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
  return formattedPrice;
}

const selectedRestrictions = new Set()