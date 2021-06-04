
// From https://www.w3schools.com/howto/howto_js_tabs.asp
const allItems = restrictListProducts(products)
const activeCategory = new Set()
let restrictedItems = []

function openInfo(evt, tabName) {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function toggleCategory(evt, category) {
  if (activeCategory.has(category)) {
    activeCategory.delete(category)
    evt.currentTarget.className += "tablinks";
  } else {
    activeCategory.add(category)
    evt.currentTarget.className += " active";
  }
  const newItems = []
  const items = restrictedItems.length === 0 ? products : restrictedItems 
  for (let i = 0 ; i < items.length; i+=1) {
    if (activeCategory.has(items[i].category)) {
      newItems.push(items[i])
    }
  }
  renderProductList(newItems)
}

function populateListProductChoices(slct1) {
  var s1 = document.getElementById(slct1);
  var s2 = document.getElementById('displayProduct');

  s2.innerHTML = "";

  if (selectedRestrictions.has(s1.value)) {
    selectedRestrictions.delete(s1.value)
  } else {
    selectedRestrictions.add(s1.value)
  }

  var optionArray = restrictListProducts(products, s1.value);

  restrictedItems = optionArray
}

function selectedItems() {

  var ele = document.getElementsByName("product");
  var chosenProducts = [];

  var c = document.getElementById('displayCart');
  c.innerHTML = "";

  // build list of selected item
  var para = document.createElement("P");
  para.appendChild(document.createElement("br"));
  for (i = 0; i < ele.length; i++) {
    if (ele[i].value > 0) {
      const total = ele[i].price * parseInt(ele[i].value)
      const formattedPrice = (Math.round(total * 100) / 100).toFixed(2);
      para.appendChild(document.createTextNode(`${ele[i].id} (x${ele[i].value}) - $${formattedPrice}`));
      para.appendChild(document.createElement("br"));
      chosenProducts.push(total);
    }
  }
  c.appendChild(para);
  c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
}

function priceComparator(a, b) {
  return a.price > b.price ? 1 : -1
}

function categoryComparator(a, b) {
  return a.category > b.category ? 1 : -1
}

function renderProductList(optionArray) {
  var s2 = document.getElementById('displayProduct');
  s2.innerHTML = "";
  const priceSortedOptionArray = optionArray.sort(priceComparator);
  const sortedOptionArray = priceSortedOptionArray.sort(categoryComparator);

  prevCategory = ""

  for (i = 0; i < sortedOptionArray.length; i++) {

    var productName = sortedOptionArray[i].name;
    var productPrice = sortedOptionArray[i].price;
    var productImage = sortedOptionArray[i].src;
    var productCategory = sortedOptionArray[i].category;

    if (productCategory !== prevCategory) {
      var heading = document.createElement("h2");
      heading.innerHTML = productCategory
      s2.appendChild(heading)
      prevCategory = productCategory
    }

    var quantity = document.createElement("input");
    quantity.type = "number";
    quantity.name = "product";
    quantity.value = "0";
    quantity.id = productName;
    quantity.price = productPrice;
    quantity.min = 0;
    quantity.max = 10;
    s2.appendChild(quantity);

    var image = document.createElement('img');
    image.src = productImage;
    s2.appendChild(image);

    formattedPrice = (Math.round(productPrice * 100) / 100).toFixed(2);

    var label = document.createElement('label')
    label.htmlFor = productName;
    label.appendChild(document.createTextNode(`${productName} - $${formattedPrice}/each`));
    s2.appendChild(label);

    s2.appendChild(document.createElement("br"));
  }
}

var customer_modal = document.getElementById("clientModal");
var customer_btn = document.getElementById("clientButton");
var customer_span = document.getElementsByClassName("close")[0];
var cart_modal = document.getElementById("cartModal");
var cart_btn = document.getElementById("cartButton");
var cart_span = document.getElementsByClassName("close")[1];


customer_btn.onclick = function() {
  customer_modal.style.display = "block";
}

customer_span.onclick = function() {
  customer_modal.style.display = "none";
}

cart_btn.onclick = function() {
  cart_modal.style.display = "block";
}

cart_span.onclick = function() {
  cart_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == customer_modal) {
    customer_modal.style.display = "none";
  }
  if (event.target == cart_modal) {
    cart_modal.style.display = "none";
  }
}