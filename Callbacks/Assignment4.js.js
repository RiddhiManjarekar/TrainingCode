const productsArr=[
    {
    name:"p1",
    price:1000,
    category:"Accessories"
    },
    {
        name:"p2",
        price:2000,
        category:"Electronics"
    },
    {
        name:"p3",
        price:3000,
        category:"Furniture"
    },
    {
        name:"p4",
        price:4000,
        category:"Electronics"
    },
    {
        name:"p5",
        price:5000,
        category:"Furniture"
    }

];

function calcTotalPrice(products, category) {
    return products
        .filter(product => product.category === category) 
        .map(product => product.price) 
        .reduce((totalP, price) => totalP + price, 0); 
}


console.log(productsArr.map(product => product.name.toUpperCase()));


console.log(productsArr.filter(product => product.category === "Electronics"));

console.log("Total Price: "+productsArr.reduce((total, product) => total + product.price, 0));

const totalElectronics = calcTotalPrice(productsArr, "Electronics");
console.log("Total price of Electronics:", totalElectronics);

