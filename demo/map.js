const numbers = [1,2,3];
const letters = ["a", "b", "c"];
const sales = [100,225, 15];

function addOne(item) {
    return item+1;
}

function addTax(item) {
    // add 10% sales tax
    return (item*1.1).toFixed(2);
}

console.log(numbers.map(addOne));
console.log(letters.map(addOne));
console.log(sales.map(addTax));