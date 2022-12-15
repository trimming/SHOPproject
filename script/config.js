'use strict';
// В переменную quantityInCart даем доступ к иконке корзины.
let quantityInCart = document.querySelector('.b-menu__quantityCart');
// В переменную buttonsAddCart даем доступ к кнопкt Add to Cart карточек товаров. 
let buttonsAddCart = document.querySelectorAll('.b-card__button');
// В переменную productName даем доступ к имени продукта.
let productCards = document.querySelectorAll('.b-card__info');
// В переменную products даем доступ к блоку, в который помещать будем продукты. 
let products = document.querySelector('.b-menu__cartProduct');
// В этот блок будем вставлять выбранные товары друг за другом.
let wrap = document.querySelector('.b-menu__cart');
// В этот спан будет прилетать общая сумма всех товаров в корзине.
let total = document.querySelector('.cartTotal');

let cart = document.querySelector('.b-menu__rightCart');

// Создаем пустой массив и добавляем в него объекты наших товаров со страницы каталога.
let productsData = [];
productCards.forEach(function (productCard) {
    let name = productCard.querySelector('.b-card__infoItem').innerText;
    let price = +productCard.querySelector('.b-card__price').innerText;
    let quantity = 1;
    let multi = price * quantity;
    let output = 1;
    productsData.push({
        name,
        price,
        quantity,
        multi,
        output
    });
});
cart.addEventListener('click', () => {
    wrap.classList.toggle('b-menu__cart_active');
});