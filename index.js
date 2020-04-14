const carts = document.querySelectorAll('.add-cart');
const cartCounter = document.querySelector('.cart span');

let products = [
  {
    name: "Nike Black",
    tag: "nikeblack",
    image:"resources/header.jpg",
    price: 150,
    incart: 0
  },
  {
    name: "Nike Grey",
    tag: "nikegrey",
    image:"resources/add1.jpg",
    price: 180,
    incart: 0
  },
  {
    name: "Yeezy350",
    tag: "yeezy350",
    image:"resources/rowaf.jpg",
    price: 120,
    incart: 0
  },
  {
    name: "Puma Solid",
    tag: "pumasolid",
    image:"resources/first.jpg",
    price: 250,
    incart: 0
  },
  {
    name: "Airforce One",
    tag: "airforceone",
    image:"resources/second.jpg",
    price: 150,
    incart: 0
  },
  {
    name: "Yeezy500",
    tag: "yeezy500",
    image:"resources/rowl.jpg",
    price: 200,
    incart: 0
  }

];



carts.forEach((cart, i) => {
  cart.addEventListener('click', () =>{
    cartNumber(products[i]);
    totalCost(products[i]);
  });
});

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumber');
  if(productNumbers){
    cartCounter.innerHTML = productNumbers;
  }
};
onLoadCartNumbers();


function cartNumber(product){
  cartCounter;
  const productNumber = localStorage.getItem("cartNumber");
  productNumbers = parseInt(productNumber);

if(productNumbers){
  localStorage.setItem("cartNumber", productNumbers + 1);
  cartCounter.innerHTML = productNumbers + 1;
}else{
  localStorage.setItem("cartNumber", 1);
  cartCounter.innerHTML = 1;
}

 setItems(product);

}

function setItems(product){
  let cartItems = localStorage.getItem('productInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null){

    if(cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].incart += 1;
  } else{
      product.incart = 1;
      cartItems = {
          [product.tag]: product
      }
  }
  localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');

  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
  localStorage.setItem('totalCost', product.price);
  }
}
