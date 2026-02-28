export let cart = [];

export function addtocart(productId) {
  
  let matchingcartItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingcartItem = cartItem;
    };
  });


  if (matchingcartItem) {
    matchingcartItem.quantitiy += 1;
  }
  else {
    cart.push({
      productId: productId,
      quantitiy: 1,
    });
  };
};