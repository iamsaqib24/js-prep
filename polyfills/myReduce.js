Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;

    for(let i = 0; i < this.length; i++) {
        if(accumulator === 0 && accumulator === 'undefined'){
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

const array = [1, 2, 3, 4, 5, 6];

console.log("Using myReduce method: ", array.myReduce((acc, curr, i, arr) => { return acc + curr }, 0));

console.log("Using default Reduce method: ", array.reduce((acc, curr, i, arr) => { return acc + curr }, 0));
