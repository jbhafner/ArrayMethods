// create forEach from scrap

Array.prototype.myForEach = function(func) {
    for (let i=0; i<this.length; i++) {
       func(this[i]);
    }
};

function addOne(item) {
    console.log(item +  " + 1 = "+ (item+1));
};

function addTax(item) {
    // add 10% sales tax
    console.log (`Item Price: $${item} + 10% tax of ${(item*0.1).toFixed(2)} = Total of: $${(item*1.1).toFixed(2)}`);
};

const numbers = [1,2,3];
const letters = ["a", "b", "c"];
const sales = [100,225, 15];

const output = numbers.myForEach(addOne);
const output2 = letters.myForEach(addOne);
const output3 = sales.myForEach(addTax);
