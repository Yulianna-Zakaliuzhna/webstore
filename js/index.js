const products = [
  {
    id: 1,
    name: `Kaloh Dinnerware Set - Turquoise`,
    code: `DNR01`,
    unitsInStock: 61,
    price: 56,
    discountPercent: 0.85,
    category: `Dinnerware`,
    isNewItem: false,
    isOnSale: true,
    isSoldInSets: `Sold in set of 3 only`,
    logo: `img/product-1.jpg`,
    color: `solid colour`
  },
  {
    id: 2,
    name: `Pastel Speckle Salad Plates (Set Of 4)`,
    code: `DNR02`,
    unitsInStock: 180,
    price: 23,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold separately`,
    logo: `img/product-2.jpg`,
    color: `geometry pattern`
  },
  {
    id: 3,
    name: `Pastel Plates, Bowls`,
    code: `DNR03`,
    unitsInStock: 78,
    price: 43,
    discountPercent: 0.85,
    category: `Dinnerware`,
    isNewItem: false,
    isOnSale: true,
    isSoldInSets: `Sold in set of 2 only`,
    logo: `img/product-3.jpg`,
    color: `solid colour`
  },
  {
    id: 4,
    name: `Reactive Glaze Dinnerware Set - Bronze`,
    code: `DNR04`,
    unitsInStock: 59,
    price: 39,
    discountPercent: 0.9,
    category: `Dinnerware`,
    isNewItem: false,
    isOnSale: true,
    isSoldInSets: `sold separately`,
    logo: `img/product-4.jpg`,
    color: `solid colour`
  },
  {
    id: 5,
    name: `40-Piece Gold Tableware Starter Set`,
    code: `DNR05`,
    unitsInStock: 93,
    price: 179.99,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold in sets of 40 only`,
    logo: `img/product-5.jpg`,
    color: `solid colour`
  },
  {
    id: 6,
    name: `Square Dinnerware - White`,
    code: `DNR06`,
    unitsInStock: 12,
    price: 60,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold in sets of 4 only`,
    logo: `img/product-6.jpg`,
    color: `solid colour`
  },
  {
    id: 7,
    name: `Devon Porcelain 16-Piece Dinnerware Set`,
    code: `DNR07`,
    unitsInStock: 9,
    price: 99.99,
    discountPercent: .7,
    category: `Dinnerware`,
    isNewItem: false,
    isOnSale: true,
    isSoldInSets: `Sold in sets of 16 only`,
    logo: `img/product-7.jpg`,
    color: `solid colour`
  },
  {
    id: 8,
    name: `Orla 16-Piece Stoneware Dinnerware Set`,
    code: `DNR08`,
    unitsInStock: 20,
    price: 99,
    discountPercent: .5,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: true,
    isSoldInSets: `Sold in sets of 16 only`,
    logo: `img/product-8.jpg`,
    color: `solid colour`
  },
  {
    id: 9,
    name: `Mikasa Bone China 40-Piece Dinnerware Set`,
    code: `DNR09`,
    unitsInStock: 34,
    price: 450,
    discountPercent: .5,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: true,
    isSoldInSets: `Sold in sets of 40 only`,
    logo: `img/product-9.jpg`,
    color: `solid colour`
  },
  {
    id: 10,
    name: `Gibson Colour Speckle 12-Piece Mix and Match `,
    code: `DNR010`,
    unitsInStock: 53,
    price: 86.99,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold separately`,
    logo: `img/product-10.jpg`,
    color: `solid colour`
  },
  {
    id: 11,
    name: `Mondello 6-Piece Dinnerware Set`,
    code: `DNR011`,
    unitsInStock: 17,
    price: 122.99,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold in sets of 6 only`,
    logo: `img/product-11.jpg`,
    color: `solid colour`
  },
  {
    id: 12,
    name: `Cobalt Blue Chevron Dinnerware 16-Piece Set`,
    code: `DNR012`,
    unitsInStock: 8,
    price: 210,
    discountPercent: .6,
    category: `Dinnerware`,
    isNewItem: false,
    isOnSale: true,
    isSoldInSets: `Sold in sets of 16 only`,
    logo: `img/product-12.jpg`,
    color: `solid colour`
  },
  {
    id: 13,
    name: `Porto 12-Piece Dinnerware Set`,
    code: `DNR013`,
    unitsInStock: 14,
    price: 119,
    discountPercent: .75,
    category: `Dinnerware`,
    isNewItem: false,
    isOnSale: true,
    isSoldInSets: `Sold in set of 12 only`,
    logo: `img/product-13.jpg`,
    color: `dotted pattern`
  },
  {
    id: 14,
    name: `Home 8-inch Bowl in Blue`,
    code: `DNR014`,
    unitsInStock: 58,
    price: 7.99,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold separately`,
    logo: `img/product-14.jpg`,
    color: `solid colour`
  },
  {
    id: 15,
    name: `Architect 16-Piece Dinnerware Set`,
    code: `DNR015`,
    unitsInStock: 39,
    price: 99.9,
    discountPercent: .69,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: true,
    isSoldInSets: `Sold separately`,
    logo: `img/product-15.jpg`,
    color: `solid`
  },
  {
    id: 16,
    name: `Gelato Black 16-Piece Dinnerware Set`,
    code: `DNR016`,
    unitsInStock: 13,
    price: 59.99,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold in sets of 16 only`,
    logo: `img/product-16.jpg`,
    color: `marble pattern`
  },
  {
    id: 17,
    name: `Diamond 16-Piece Dinnerware Set`,
    code: `DNR017`,
    unitsInStock: 19,
    price: 69,
    discountPercent: .57971,
    category: `Dinnerware`,
    isNewItem: false,
    isOnSale: true,
    isSoldInSets: `Sold in sets of 16 only`,
    logo: `img/product-17.jpg`,
    color: `solid colour`
  },
  {
    id: 18,
    name: `Swirl Melamine Salad Plate`,
    code: `DNR018`,
    unitsInStock: 11,
    price: 14.99,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold separately`,
    logo: `img/product-18.jpg`,
    color: `solid colour`
  },
  {
    id: 19,
    name: `Classic Coupe Porcelain Dinner Plate`,
    code: `DNR019`,
    unitsInStock: 52,
    price: 32,
    discountPercent: 1,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: false,
    isSoldInSets: `Sold separately`,
    logo: `img/product-19.jpg`,
    color: `solid colour`
  },
  {
    id: 20,
    name: `Denise Fielder Champagne Cheers Appetizer Plate`,
    code: `DNR020`,
    unitsInStock: 64,
    price: 25,
    discountPercent: .65,
    category: `Dinnerware`,
    isNewItem: true,
    isOnSale: true,
    isSoldInSets: `Sold separately`,
    logo: `img/product-20.jpg`,
    color: `solid`
  },
]
var numOfItems = 5;
var currentProducts = products.slice(0, numOfItems);


//consider 

function getProductsAsHtmlString(products) {

  return `<div class= "wrapper-content" >   
            <a><img class="product-image top" src="${products.logo}" alt="${products.name}"> </a>
              <ul class="product">
                <li class="item-name"> ${products.name} </li>
                <li class="price">$ ${products.discountPercent != 1 ? '<s>' + products.price + '</s>&nbsp;<span class="special">(-' + ((1 - products.discountPercent) * 100).toFixed(0) + '%)&nbsp;' + products.price * products.discountPercent : products.price}</li>
                <li class="color">${products.color}</li>
                <li class="set">${products.isSoldInSets}</li>
                <li class="add"><button class="buttons" id="addToCart-${products.id}">Add to Cart</button></li>
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
  if (numItemsInCart != 0) {
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
function checkPriceRange() {

  const low = document.getElementById('slidePriceLow').value;
  const high = document.getElementById('slidePriceHigh').value;

  console.log(low, high);

  var filteredProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (currentProducts[i].discountPercent == 1) {
      if (currentProducts[i].price >= low && currentProducts[i].price <= high) {
        filteredProducts.push(currentProducts[i]);
      }
    } else {
      console.log((currentProducts[i].price * currentProducts.discountPercent) <= high);
      if ((currentProducts[i].price * currentProducts[i].discountPercent) >= low &&
        (currentProducts[i].price * currentProducts[i].discountPercent) <= high) {
        console.log(currentProducts[i].price * currentProducts[i].discountPercent)
        filteredProducts.push(currentProducts[i]);
      }
    }
  }
  currentProducts = filteredProducts;
  renderProducts(currentProducts);
  /// Filter by two criteria
}
 // function to determine filter criteria and generate list based on that criteria
function filterBy(filterCriteria) {
  var filteredProducts = []; // initialise new array to create a list of filtered products
  
  // check selected 'filter' dropdown value and generate list based on that criteria
  switch (filterCriteria) {
    case "Colour-pattern":
      // loop through the the current list of products(shown on the page) and
      // if the product matches the criteria, add it to the filtered list and return the generated list
      // ** Same logic applies to all the filter criteria below in this function ** \\
      for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].color.includes("pattern")) { 
          filteredProducts.push(currentProducts[i]);
        }
      }
      break;
    case "Colour-solid":
      for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].color.includes("solid")) {
          filteredProducts.push(currentProducts[i]);
        }
      }
      break;
    case "Sold-In-Sets-Only":
      for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].isSoldInSets.includes("in sets")) {
          filteredProducts.push(currentProducts[i]);
        }
      }
      break;
    case "Sold-separately":
      for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].isSoldInSets.includes("separately")) {
          filteredProducts.push(currentProducts[i]);
        }
      }
      break;
    case "New":
      for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].isNewItem) {
          filteredProducts.push(currentProducts[i]);
        }
      }
      break;
    case "On-Sale":
      for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].isOnSale) {
          filteredProducts.push(currentProducts[i]);
        }
      }
      break;
    default:
      filteredProducts = currentProducts;
  }

  return filteredProducts;
}


$(document).ready(function () {
  $(".buttons").click(function (event) {
    addItemsToCart(1);
  });

  $("#loadMore").click(() => {
    if (numOfItems != 15) {
      numOfItems += 5; // load 5 more items
      currentProducts = products.slice(0, numOfItems)
      checkPriceRange(); // check the price range filter on the page and show items based on the filter
      renderProducts(filterBy($("#filter").val())); // check the filter dropdown value and show only items that apply, with the price range filter applied before
    }
    if (numOfItems == 15) {
      $("#loadMore").css("visibility", "hidden");
    }
  });

  $("#filter").change(() => {
    renderProducts(filterBy($("#filter").val())); // call the filter function to check what products apply and show them on the page
  });



  document.querySelectorAll('.slider').forEach(slider => slider.addEventListener('change', checkPriceRange))

})

renderProducts(currentProducts.slice(0, numOfItems));
