'use strict';
/**
 * Функция возвращает разметку продукта.
 */
function renderProductMarkup(product) {
    return `<div class = "b-menu__cartItem">
                <span class="productName">${product.name}</span>
                <div>
                    <span id = "${product.name}" class = "productQuantity">${product.quantity}</span>
                    <span>шт.</span>
                </div>   
                <div>
                    <span>$</span>
                    <span class = "productPrice">${product.price}</span>                    
                </div>    
                <div>
                    <span>$</span>
                    <span class = "productMulti" type = "${product.name}" >${product.multi}</span>                    
                </div>    
            </div>`;
}