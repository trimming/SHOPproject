'use strict';


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


/**
 * Функция перебирает объекты продуктов массива productsData и сравнивает имя продукта со значением аттрибута кнопки Add to Cart, по которой произошел клик, затем рендерит разметку продукта, с которым произошло совпадение.   
 * @param {string} buttonEvent  значение аттрибута data-type кнопки Add to Cart.
 */
function showProduct(buttonEvent) {
    productsData.forEach(product => {
        let generatedMarkup = '';
        if (product.name === buttonEvent && product.output <= 1) {
            generatedMarkup = renderProductMarkup(product);
            products.insertAdjacentHTML('beforeend', generatedMarkup);
            product.output += 1;
            total.innerText = +total.innerText + product.multi;
        } else if (product.name === buttonEvent) {
            let renderedMarkupQuantity = document.querySelectorAll('.productQuantity');
            renderedMarkupQuantity.forEach(quantity => {
                if (buttonEvent === quantity.getAttribute('id')) {
                    quantity.innerText = +quantity.innerText + 1;

                    let renderMarkupMulti = document.querySelectorAll('.productMulti');
                    renderMarkupMulti.forEach((multi) => {
                        if (buttonEvent === multi.getAttribute('type')) {
                            multi.innerText = (product.price * quantity.innerText).toFixed(2);
                            total.innerText = (+total.innerText + product.multi).toFixed(2);
                        }
                    });
                }
            });

        }
    });
}




