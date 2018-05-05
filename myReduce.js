// Create reduce() method from scratch

Array.prototype.myReduce = function(func, init) {
    let accum = init;
    for (let i=0; i<this.length; i++) {
        accum = func(accum,this[i]);
    }
    console.log('total scores: ',accum);
    return accum;
};

function adder(a,b) {
    return a + b;
};

function removeR(a,b) {
    if(b==='r') {
        return a;
    } else {
        return a+b;
    }
};

const class1 = [90,98,89,100,100,86,94];
const class2 = [40,65,77,82,80,54,73,63,95,49];
const word = 'parrot'

console.log((class1.myReduce(adder,0)/class1.length).toFixed(2));
console.log((class2.myReduce(adder,0)/class2.length).toFixed(2));
console.log(((word).split('')).myReduce(removeR,''));


