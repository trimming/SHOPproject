'use strict';
// В переменную quantityInCart даем доступ к иконке корзины.
let quantityInCart = document.querySelector('.b-menu__quantityCart');
// В переменную buttonsAddCart даем доступ к кнопкt Add to Cart карточек товаров. 
let buttonsAddCart = document.querySelectorAll('.b-card__button');
console.log(quantityInCart);

let count = 0;
buttonsAddCart.forEach(element => {
    element.addEventListener('click', function () {
        count = count + 1;
        quantityInCart.style.background = '#F16D7F';
        quantityInCart.innerText = count;

    });
});
