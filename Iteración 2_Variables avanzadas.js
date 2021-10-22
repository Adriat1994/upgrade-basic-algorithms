const character = {name: "Jack Sparrow", age: 10};
character.age = 25;


firstName = "Jon";
lastName = "Snow";
age = 24;
console.log ("Soy " + firstName + " " + lastName + ", tengo 24 años y me gustan los lobos.");


const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log (toy1.price + toy2.price);


let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;