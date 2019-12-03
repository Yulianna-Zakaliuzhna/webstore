const products = [
  {
    id: 1,
    name: `Kaloh Dinnerware Set - Turquoise`,
    code: `DNR01`,
    unitsInStock: 61,
    price: 56,
    discountPercent: 0.85,
    category: `Dinnerware`,
    isNewItem: `null`,
    isSoldInSets: `Sold in sets only`,
    logo: `img/product-1.jpg`,
    color: `solid`
  },
  {
    id: 2,
    name: `Pastel Speckle Salad Plates (Set Of 4)`,
    code: `DNR02`,
    unitsInStock: 180,
    price: 73,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: `New Item`,
    isSoldInSets: `Sold in sets 0f 4 only`,
    logo: `img/product-2.jpg`,
    color: `solid`
  },
  {
    id: 3,
    name: `Reactive Glaze Dinnerware Set - Bronze`,
    code: `DNR03`,
    unitsInStock: 78,
    price: 61,
    discountPercent: 0.85,
    category: `Dinnerware`,
    isNewItem: `New Item`,
    isSoldInSets: `Sold separately`,
    logo: `img/product-3.jpg`,
    color: `solid`
  },
  {
    id: 4,
    name: `40-Piece Gold Tableware Starter Set`,
    code: `DNR04`,
    unitsInStock: 59,
    price: 56,
    discountPercent: 0.85,
    category: `Dinnerware`,
    isNewItem: `null`,
    isSoldInSets: `sold separately`,
    logo: `img/product-4.jpg`,
    color: `solid`
  },
  {
    id: 5,
    name: `Square Dinnerware (Set Of 4)`,
    code: `DNR05`,
    unitsInStock: 93,
    price: 84,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: `New Item`,
    isSoldInSets: `Sold in sets of 4 only`,
    logo: `img/product-5.jpg`,
    color: `solid`
  }
]

//consider 

function getProductsAsHtmlString(products) {


  return `<div class= "wrapper-content" >   
            <a><img class="product-image top" src="${products.logo}" alt="${products.name}"> </a>
              <ul class="product">
                <li class="item-name content-container"> ${products.name} </li>
                <li class="price"><del>${products.price}</del> </li>
                <li class="special">Special<ins >${products.price * products.discountPercent}</ins></li>
                <li class="color">${products.color}</li>
                <li class="set">${products.isSoldInSets}</li>
                <li class="add"><button class="buttons" id="addToCart-${products.id}">Add</button></li>
              </ul>
          
           </div>`;
}







function renderProducts(arr) {

  //* 1. map() Array to a new Array
  const arrOfHtml = arr.map(getProductsAsHtmlString);

  //* 2. join() Array into a String
  const strOfHtml = arrOfHtml.join('\n');

  //* 3. innerHTML String into Elements
  document.getElementById('products').innerHTML = strOfHtml;

}
var numItemsInCart = 0;
// function to add items to the cart
function addItemsToCart(qtyToAdd) {
  if(numItemsInCart != 0) {
    numItemsInCart = parseInt($('#cartNum').html());
  }
  // Add one to numItemsInCart
  numItemsInCart += qtyToAdd; // Add one to numItemsInCart
  $('#cartNum').html(numItemsInCart);
}

function toggleLayoutView() {
  document.getElementById('products').classList.toggle('grid-view'), event => toggleLayoutView()
}
// filtering price slider 
function checkPriceRange(event) {

  const low = document.getElementById('slidePriceLow').value;
  const high = document.getElementById('slidePriceHigh').value;

  console.log(low, high);

  /// Filter by two criteria


}


$(document).ready(function() {
  $(".buttons").click(function(event) {
    addItemsToCart(1);
  })

  document.querySelectorAll('.slider').forEach(slider => slider.addEventListener('change', checkPriceRange))

})



renderProducts(products);







//condition
 //const numbers = [61, 180, 78, 59, 93];

 //function unitsInStock(n){
  // return `<li>Units In Stock ${n}</li>`;
 //}

 //function lessThanSixtyFive(n) {
  // if n < 65;
//}




//const arrOfLessThatSixtyFive = numbers.filter(LessThatSixtyFive);

//document.getElementById(`LessThatSixtyFive`) .innerHTML -arrOfListItems.join(``);




