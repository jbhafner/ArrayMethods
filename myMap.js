// create my own map method
Array.prototype.myMap = function(func) {
    for(let i=0; i<this.length; i++) {
        this[i]=func(this[i]);
    }
    return this;
};

function addOne(item) {
    return item+1;
}

function addTax(item) {
    // add 10% sales tax
    return (item*1.1).toFixed(2);
}

const numbers = [1,2,3];
const letters = ["a", "b", "c"];
const sales = [100,225, 15];

console.log(numbers.myMap(addOne));
console.log(letters.myMap(addOne));
console.log(sales.myMap(addTax));
