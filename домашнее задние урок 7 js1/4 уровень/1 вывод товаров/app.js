"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/

const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let btn = document.querySelectorAll("button");
btn.forEach(button => {
    button.addEventListener('click', function (event) {
        clickHandler(event);
    });
});
/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    //вам нужно очищать содержимое .products
    let prod = document.querySelector('.products');
    prod.innerHTML = "";
    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    let cattype = event.currentTarget.dataset;
    showCategory(cattype.type);
}

/**
 * Функция берет товары (объекты) из соответствующего массива phones,
 * tablets или tv. Генерирует разметку, используя getProductMarkup
 * и вставляет в .products
 * @param {string} category сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 */
function showCategory(category) {
    let prod = document.querySelector('.products');
    switch (category) {
        case "phones":
            let phones = products.phones;
            for (let i = 0; i < phones.length; i++) {
                prod.insertAdjacentHTML("beforeend",
                    `${getProductMarkup(phones[i], phones[i].id, phones[i].name, phones[i].price, phones[i].imageUrl)}`);
            }
            break;
        case "tablets":
            let tables = products.tablets;
            for (let i = 0; i < tables.length; i++) {
                prod.insertAdjacentHTML("beforeend",
                    `${getProductMarkup(tables[i], tables[i].id, tables[i].name, tables[i].price, tables[i].imageUrl)}`);
            }
            break;
        case "tv":
            let tv = products.tv;
            for (let i = 0; i < tv.length; i++) {
                prod.insertAdjacentHTML("beforeend",
                    `${getProductMarkup(tv[i], tv[i].id, tv[i].name, tv[i].price, tv[i].imageUrl)}`);
            }
            break;

    }

}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара по аналогии из комментария
 * в верху этого файла.
 */
function getProductMarkup(product, product_id, product_name, product_price, product_imageUrl) {
    return `
    <div class=${product}>
    <div>${product_name}</div>
    <img src="${product_imageUrl} " alt="">
    <div>${product_price}</div>
    <a href="https://example.com/producs/${product_id}">Подробнее</a>
    </div>`
}