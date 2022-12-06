'use strict';
// В переменную quantityInCart даем доступ к иконке корзины.
let quantityInCart = document.querySelector('.b-menu__quantityCart');
// В переменную buttonsAddCart даем доступ к кнопкt Add to Cart карточек товаров. 
let buttonsAddCart = document.querySelectorAll('.b-card__button');
// В переменную productName даем доступ к имени продукта.
let productCards = document.querySelectorAll('.b-card__info');
// В переменную products даем доступ к блоку, в который помещать будем продукты. 
let products = document.querySelector('.b-menu__cart');
// Создаем переменную count в которой будет счетчик общего количества продуктов добавленных в корзину. 
let count = 0;
buttonsAddCart.forEach(element => {
    element.addEventListener('click', function (event) {
        count = count + 1;
        quantityInCart.style.background = '#F16D7F';
        quantityInCart.innerText = count;
        showProduct(event.target.dataset.type);
        console.log(event.target.dataset.type);
    });
});

let productsData = [];
productCards.forEach(function (productCard) {
    let name = productCard.querySelector('.b-card__infoItem').innerText;
    let price = +productCard.querySelector('.b-card__price').innerText;
    let quantyty = 1;
    productsData.push({
        name,
        price,
        quantyty
    });
});
console.log(productsData);
/**
 * Функция перебирает объекты продуктов массива productsData и сравнивает имя продукта со значением аттрибута кнопки Add to Cart, по которой произошел клик, затем рендерит разметку продукта, с которым произошло совпадение.   
 * @param {string} buttonEvent  значение аттрибута кнопки Add to Cart.
 */
function showProduct(buttonEvent) {
    let generatedMarkup = '';
    productsData.forEach(element => {
        if (element.name === buttonEvent) {
            generatedMarkup = getProductMarkup(element);
            products.classList.add('b-menu__cart_active');
        }
    });
    products.insertAdjacentHTML('beforeend', generatedMarkup);
    let productAddToCart = document.querySelectorAll('.productName');
    console.log(productAddToCart);
    productAddToCart.forEach(element => {
        if (element.previousElementSibling.innerText === element.innerText) {
            element.remove();
            productData.quantyty += 1;
        }
    });

}
/**
 * Функция возвращает разметку продукта.
 */
function getProductMarkup(product) {
    return `<div class = "b-menu__cartItem"><span class = "productName">${product.name}</span><span>${product.quantyty}шт.</span><span>${product.price}</span><span>260.00</span></div>`;
}