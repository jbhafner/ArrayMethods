// create my own filter method
Array.prototype.myFilter = function(func) {
    const output=[];
    for(let i=0; i<this.length; i++) {
        // console.log('this[i]', this[i]);
        if(func(this[i])) {
            output.push(this[i]);
        }
    }
  return output;  
};

function isTen(item) {
   if(item >= 10) {
       return item
   } 
};

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
};

function filterID(item) {
    if (isNumber(item.id)) {
        return item;
    };
};

function filterFruit(item) {
    let search = 'ap';
    if(item.includes(search) === true) {
        return item;
    }
};

const list = [12, 5, 8, 130, 44];

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

console.log(list.myFilter(isTen));
console.log(arr.myFilter(filterID));
console.log(fruits.myFilter(filterFruit));