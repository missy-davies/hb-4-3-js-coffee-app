"use strict";

/* Takes in an item, creates a table, and appends item to the cart */
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

/* Take cart total and replace with 0, empty cart of all items */
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

/* Takes price and adds to cart total */
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

/* Take amount sold and add to total of coffee sold */
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

/* Display the status of order and updated the progress */
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//


$('.add-to-order').on('click', () => {
    addItemToCart('Coffee');
    
});

