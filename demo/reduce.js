const class1 = [90,98,89,100,100,86,94];
const class2 = [40,65,77,82,80,54,73,63,95,49];
const word = 'parrot'

function adder(accumulator, currentElement) {
    return accumulator + currentElement;
};

function removeR(accumulator, currentElement) {
    if(currentElement ==='r') {
        return accumulator;
    } else {
        return accumulator + currentElement;
    }
};

console.log((class1.reduce(adder,0)/class1.length).toFixed(2));
console.log((class2.reduce(adder,0)/class2.length).toFixed(2));
console.log(((word).split('')).reduce(removeR,''));
