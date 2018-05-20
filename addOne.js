Array.prototype.myLength = function() {
    for(let i=0; i<this.length; i++)
        console.log(this[i]);
};

console.log([1,2,3].listItems);