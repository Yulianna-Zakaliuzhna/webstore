const products = [
  {
    id: 1,
    name: `Kaloh Dinnerware Set - Turquoise`,
    code: `INTR2013`,
    unitsInStock: 78,
    price: 56,
    discountPercent: 0.85,
    category: `Dinnerware`,
    isNewItem: `yes`,
    isSoldInSets: `Sold in sets only`,
    logo: `img/product-1.jpg`,
    color: `solid`
  },
  {
    id: 2,
    name: `3D Visualization`,
    code: `INTR2013`,
    unitsInStock: 78,
    price: 56,
    discountPercent: 15,
    category: `Dinnerware`,
    isNewItem: `yes`,
    isSoldInSets: `Sold separately`,
    logo: `img/product-1.jpg`,
    color: `solid`
  },
  {
    id: 3,
    name: `3D Visualization`,
    code: `INTR2013`,
    unitsInStock: 78,
    price: 56,
    discountPercent: 15,
    category: `Dinnerware`,
    isNewItem: `yes`,
    isSoldInSets: `yes`,
    logo: `img/product-1.jpg`,
    color: `solid`
  },
  {
    id: 4,
    name: `3D Visualization`,
    code: `INTR2013`,
    unitsInStock: 78,
    price: 56,
    discountPercent: 15,
    category: `Dinnerware`,
    isNewItem: `yes`,
    isSoldInSets: `yes`,
    logo: `img/product-1.jpg`,
    color: `solid`
  },
  {
    id: 5,
    name: `3D Visualization`,
    code: `INTR2013`,
    unitsInStock: 78,
    price: 56,
    discountPercent: 15,
    category: `Dinnerware`,
    isNewItem: `yes`,
    isSoldInSets: `yes`,
    logo: `img/product-1.jpg`,
    color: `solid`
  }
]



function getProductsAsHtmlString(products) {


 return `<div class= "wrapper-content" >   
        <a>
           <img class="product-image top" src="${product.logo}" alt="${product.name}">
        </a>
          <ul class="product">
            <li class="item-name content-container"> ${products.name} </li>
            <li class="price "><del>${products.price}</del> </li>
            <li class="special">Special<ins >${products.price*products.discountPercent}</ins></li>
            <li class="color">${products.color}</li>
            <li class="set">${products.isSoldInSets}</li>
          </ul>
      
      </div>`;
}


function renderCourses(arr) {

  //* 1. map() Array to a new Array
  const arrOfHtml = arr.map(getProductsAsHtmlString);

  //* 2. join() Array into a String
  const strOfHtml = arrOfHtml.join('\n');

  //* 3. innerHTML String into Elements
  document.getElementById('products').innerHTML = strOfHtml;

}


function toggleLayoutView() {
  document.getElementById('products').classList.toggle('grid-view'), event => toggleLayoutView()
}