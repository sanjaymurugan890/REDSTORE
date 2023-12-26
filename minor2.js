let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'product-1.jpg',
        price: 500,
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'product-2.jpg',
        price: 1500,
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'product-3.jpg',
        price: 450,
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'product-4.jpg',
        price: 550,
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'product-5.jpg',
        price: 5000,
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'product-6.jpg',
        price: 600,
    },
    {
        id: 7,
        name: 'PRODUCT NAME 6',
        image: 'product-7.jpg',
        price: 700,
    },
    {
        id: 8,
        name: 'PRODUCT NAME 6',
        image: 'product-8.jpg',
        price: 650,
    },
    {
        id: 9,
        name: 'PRODUCT NAME 6',
        image: 'product-9.jpg',
        price: 650,
    },
    {
        id: 10,
        name: 'PRODUCT NAME 6',
        image: 'product-10.jpg',
        price: 750,
    },
    {
        id: 11,
        name: 'PRODUCT NAME 6',
        image: 'product-11.jpg',
        price: 790,
    },
    {
        id: 12,
        name: 'PRODUCT NAME 6',
        image: 'product-12.jpg',
        price: 800,
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <div class="row2"><div class= "col-2"> <img src="images/${value.image}">
           <div class="title">${value.name}</div>
           <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCart(${key})">Add To cart</button></div></div>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key]==null){
        listCards[key]=JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
               <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
