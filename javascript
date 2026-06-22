const products = [
{
    id:1,
    name:"Laptop",
    price:50000,
    image:"https://via.placeholder.com/250x180?text=Laptop"
},
{
    id:2,
    name:"Smartphone",
    price:25000,
    image:"https://via.placeholder.com/250x180?text=Phone"
},
{
    id:3,
    name:"Headphones",
    price:3000,
    image:"https://via.placeholder.com/250x180?text=Headphones"
},
{
    id:4,
    name:"Smart Watch",
    price:5000,
    image:"https://via.placeholder.com/250x180?text=Watch"
}
];

let cart = [];

const productList = document.getElementById("product-list");

function displayProducts(){

products.forEach(product => {

const card = document.createElement("div");
card.classList.add("product-card");

card.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">
Add To Cart
</button>
`;

productList.appendChild(card);

});

}

displayProducts();

function addToCart(id){

const product = products.find(p => p.id === id);

cart.push(product);

updateCart();
}

function updateCart(){

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

const li = document.createElement("li");

li.innerHTML = `
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">
Remove
</button>
`;

cartItems.appendChild(li);

});

cartCount.textContent = cart.length;
totalPrice.textContent = total;
}

function removeItem(index){

cart.splice(index,1);

updateCart();
}

function checkout(){

if(cart.length===0){

alert("Cart is Empty");
return;
}

alert("Order Placed Successfully!");

cart=[];

updateCart();
}
