let common = require('./common');

// map - use when you want to iterate,modify element of array
const numbers = [1, 2, 3, 4, 5];
const numberPlusOne = numbers.map((v, i) => v + 1);

console.log("numberPlusOne:", numberPlusOne);
common.addEndLine();

// filter - use when you want to filter an array
const friends = ["pp", "rj", "dj", "hdg"];
const findMe = friends.filter((v, i) => v === "rj");

console.log("findMe:", findMe);
common.addEndLine();

// reduce - use when you want to take a array & combine them into one value
const sum = numbers.reduce((total, v) => total + v);
// (1, 2) inital/first  value + next value 
// (3, 3) total + next value
// (6, 4)
// (10, 5)
console.log('sum:', sum);
common.addEndLine();

// map with method example
const mapFun1 = (arr, fn) => {
    return arr.map((v, i) => fn(v));
}
const result1 = mapFun1([1, 2, 3], n => n * 2);
console.log('result1:', result1);
common.addEndLine();

// reduce with method example
const reduceFun1 = (arr, fn) => {
    return arr.reduce((acc, v) => [...acc, fn(v)], []);

    // console.clear();
    // return arr.reduce((acc, v) => {    
    //     const returnedArray = [...acc, fn(v)];    
    //     return returnedArray;
    // }, []);
}

const result2 = reduceFun1([1, 2, 3], n => n * 2);
console.log('result2:', result2);
common.addEndLine();

// filter with method example
const reduceFun2 = (arr, fn) => {
    return arr.filter((acc, v) => {
        return fn(acc);
    });
}
const result3 = reduceFun2([1, 2, 3, 4, 5], n => n % 2 === 0);
console.log('result3:', result3);
common.addEndLine();

// reduce - flatten array
const flatDeep = (arr) => {
    return arr.reduce((acc, v) => {
        return Array.isArray(v)
            ? [...acc, ...flatDeep(v)]
            : [...acc, v];
    }, []);
}
const result4 = flatDeep([1, 2, 3, [4, [[[5, [6, 7]]]], 8]]);
console.log('result4:', result4)
common.addEndLine();
