const array = [3, 4, 5, 8, 12, 25];

Array.prototype.myFilter = function(callback) {
    let output = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
            output.push(this[i]);
        }
    }
    return output;
}

const newArray = array.myFilter(item => item > 2);
console.log("Output using myFilter method:", newArray);
console.log("Output using default Filter method:", array.myFilter(item => item > 2));
