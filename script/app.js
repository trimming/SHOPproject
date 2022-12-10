'use strict';
// В переменную quantityInCart даем доступ к иконке корзины.
let quantityInCart = document.querySelector('.b-menu__quantityCart');
// В переменную buttonsAddCart даем доступ к кнопкt Add to Cart карточек товаров. 
let buttonsAddCart = document.querySelectorAll('.b-card__button');
// В переменную productName даем доступ к имени продукта.
let productCards = document.querySelectorAll('.b-card__info');
// В переменную products даем доступ к блоку, в который помещать будем продукты. 
let products = document.querySelector('.b-menu__cartProduct');

let wrap = document.querySelector('.b-menu__cart')


// Создаем переменную count в которой будет счетчик общего количества продуктов добавленных в корзину. 
let count = 0;
buttonsAddCart.forEach(element => {
    element.addEventListener('click', function (event) {
        count = count + 1;
        quantityInCart.style.background = '#F16D7F';
        quantityInCart.innerText = count;
        showProduct(event.target.dataset.type);
    });
});

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

/**
 * Функция перебирает объекты продуктов массива productsData и сравнивает имя продукта со значением аттрибута кнопки Add to Cart, по которой произошел клик, затем рендерит разметку продукта, с которым произошло совпадение.   
 * @param {string} buttonEvent  значение аттрибута data-type кнопки Add to Cart.
 */
function showProduct(buttonEvent) {
    productsData.forEach(product => {
        let generatedMarkup = '';
        if (product.name === buttonEvent && product.output <= 1) {
            generatedMarkup = getProductMarkup(product);
            products.insertAdjacentHTML('beforeend', generatedMarkup);
            wrap.classList.add('b-menu__cart_active');
            product.output += 1;
        } else if (product.name === buttonEvent) {
            let renderedMarkupQuantity = document.querySelectorAll('.productQuantity');
            renderedMarkupQuantity.forEach(quantity => {
                if (buttonEvent === quantity.getAttribute('id')) {
                    quantity.innerText = +quantity.innerText + 1;
                }
                let renderMarkupMulti = document.querySelectorAll('.productMulti');
                renderMarkupMulti.forEach((multi) => {
                    if (buttonEvent === multi.getAttribute('type')) {
                        multi.innerText = product.price * quantity.innerText;
                    }
                });
            });

        }
    });
}
/**
 * Функция возвращает разметку продукта.
 */
function getProductMarkup(product) {
    return `<div class = "b-menu__cartItem">
                <span class="productName">${product.name}</span>
                <div>
                    <span id = "${product.name}" class = "productQuantity">${product.quantity}</span>
                    <span>шт.</span>
                </div>   
                <div>
                    <span>$</span>
                    <span>${product.price}</span>                    
                </div>    
                <div>
                    <span>$</span>
                    <span class = "productMulti" type = "${product.name}" >${product.multi}</span>                    
                </div>    
            </div>`;
}

