'use strict';
// В переменную quantityInCart даем доступ к иконке корзины.
let quantityInCart = document.querySelector('.b-menu__quantityCart');
// В переменную buttonsAddCart даем доступ к кнопкt Add to Cart карточек товаров. 
let buttonsAddCart = document.querySelectorAll('.b-card__button');
// В переменную productName даем доступ к имени продукта.
let productName = document.querySelector('.b-card__infoItem');
// В переменную productPrice даем доступ к цене продукта.
let productPrice = document.querySelector('.b-card__price');

let count = 0;
buttonsAddCart.forEach(element => {
    element.addEventListener('click', function (event) {
        count = count + 1;
        quantityInCart.style.background = '#F16D7F';
        quantityInCart.innerText = count;
        showProduct(event.target.setAttribute('id'));
        console.log(event.target.dataset.type);
    });
});

function showProduct(product) {
    let generatedText = '';
    switch (product) {
        case '01':

    }
}

function getProductMarkup() {
    return `<li>Product 01 <span>5шт.</span><span>52.00</span><span>260.00</span></li>`
}