let cartItems = localStorage.getItem("productInCart");
cartItems = JSON.parse(cartItems);
let productInfo = document.querySelector('.product-info');

let cartCost = parseInt(localStorage.getItem('totalCost'));


 if(cartItems && productInfo){
 productinfo.innerHTML = '';
  Object.values(cartItems).map(item =>{
    productInfo.innerHTML +=  `<div class="products">
      <div class="img-info">
        <i class="fa fa-trash-o delete" aria-hidden="true"></i>
        <img src="${item.image}" alt=""  width="80%" height="160px"/>
        <p>${item.name}</p>
      </div>
      <div class="price">
        <p>$${item.price}</p>
      </div>
      <div class="quantity">
        <i class="fa fa-caret-left dec" aria-hidden="true"></i><p>${item.incart}</p><i class="fa fa-caret-right incr" aria-hidden="true"></i>
      </div>
      <div class="total">
        <h4>$${item.incart*item.price}</h4>
      </div>
    </div>`;
  });
    productInfo.innerHTML += `<div class="totalcost"><h3><span>Total:</span> $${cartCost}</h3></div><button class="orderbtn">Order</button>`;
}
