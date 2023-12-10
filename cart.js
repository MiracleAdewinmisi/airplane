if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemButtons);
    for(var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButons = document.getElementsByClassName('shop-item-button')
    for(var i = 0; i < addToCartButons.length; i++){
        var button = addToCartButons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchasClicked)
}

function purchasClicked(){
    // alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('section-p1')[0]
    while(cartItems.hasChildNodes()) {
        window.location.href = "Next.html"
        cartItems.removeChild(cartItems.firstChild)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target;
    var eachFoodItem = button.parentElement;
    var title = eachFoodItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = eachFoodItem.getElementsByClassName('price')[0].innerText;
    var imageSrc = eachFoodItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('box-container')[0];
    var cartRowContents = `
        <tr>
            <td><a href="#" class="btn-danger"><i class="far fa-times-circle"></i></a></td>
            <td><img src="img/p-1.jpg" alt=""></td>
            <td>Tasty Burger</td>
            <td class="cart-price">$15.99</td>
            <td><input class="cart-quantity-input" type="number" value="1"></td>
            <!-- <td>$15</td> -->
        </tr>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    // cartRow.getElementsByClassName('class-quantity-input')[0].addEventListener('change', quantityChanged())
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('section-p1')[0];
    var cartBody = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(var i = 0; i < cartBody.length; i++){
        var cartBody = cartBody[i];
        var priceElement = cartBody.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBody.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var itemQuantity = quantityElement.value;
        total = total + (price * itemQuantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

// For Payment with Cash

function CashPurchase(){
    var deliveryAddress = address.value
    if(deliveryAddress == ""){
        alert("Please input the address for the delivery!")
    }
    else{
        alert("Thanks for your Patronage!")
        window.location.href = "Home.html"
    }
}

// For Payment with Card

function confirmPayment(){
    var cardNumbers = Number(cardNumber.value)
    var cardExpiringDate = Number(expiringDate.value)
    var cardCvCode = Number(cvCode.value)
    var cardOwnerName = cardOwner.value
    if(cardNumbers == "", cardExpiringDate == "", cardOwnerName == "", cardCvCode == ""){
        alert("Please input your card details")
    }
    else{
        alert("Thanks for your Patronage!")
        window.location.href = "Home.html"
    }
}