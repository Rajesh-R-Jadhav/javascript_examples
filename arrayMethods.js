let common = require('./common');

// map - use when you want to iterate,modify element of array
const numbers = [1, 2, 3, 4, 5];
const numberPlusOne = numbers.map((v, i) => v + 1);

console.log("map - numberPlusOne:", numberPlusOne);
common.addEndLine();

// filter - use when you want to filter an array
const friends = ["pp", "rj", "dj", "hdg"];
const findMe = friends.filter((v, i) => v === "rj");

console.log("filter - findMe:", findMe);
common.addEndLine();

// reduce - use when you want to take a array & combine them into one value
const sum = numbers.reduce((total, v) => total + v);
// (1, 2) inital/first  value + next value 
// (3, 3) total + next value
// (6, 4)
// (10, 5)
console.log('reduce - sum:', sum);
common.addEndLine();

// map use-case with method example
const mapFun1 = (arr, fn) => {
    return arr.map((v, i) => fn(v));
}
const result1 = mapFun1([1, 2, 3], n => n * 2);
console.log('map use-case with method example - result1:', result1);
common.addEndLine();

// reduce use-case with method example
const reduceFun1 = (arr, fn) => {
    return arr.reduce((acc, v) => [...acc, fn(v)], []);

    // console.clear();
    // return arr.reduce((acc, v) => {    
    //     const returnedArray = [...acc, fn(v)];    
    //     return returnedArray;
    // }, []);
}

const result2 = reduceFun1([1, 2, 3], n => n * 2);
console.log('reduce use-case with method example - result2:', result2);
common.addEndLine();

// filter use-case with method example
const reduceFun2 = (arr, fn) => {
    return arr.filter((acc, v) => {
        return fn(acc);
    });
}
const result3 = reduceFun2([1, 2, 3, 4, 5], n => n % 2 === 0);
console.log('filter use-case with method example - result3:', result3);
common.addEndLine();

// reduce - flatten array
const flatThisArr = [1, 2, 3, [4, [[[5, [6, 7]]]], 8]];
const flatDeep = (arr) => {
    return arr.reduce((acc, v) => {
        return Array.isArray(v)
            ? [...acc, ...flatDeep(v)]
            : [...acc, v];
    }, []);
}
const result4 = flatDeep(flatThisArr);
console.log('reduce - flatten array - result4:', result4)
common.addEndLine();

// concat
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
console.log('concat - result:', numbers1.concat(numbers2));
common.addEndLine();

// includes
console.log('includes -', numbers1.includes(3)); // true
console.log('includes -', numbers1.includes(33)); // false
common.addEndLine();

// indexOf
console.log('indexOf -', numbers1.indexOf(3));  // 2
common.addEndLine();

// forEach - accepts 3 params as value, index, array
console.log('forEach - result ');
numbers1.forEach((v, i, a) => {
    console.log(v, i, a);
});
common.addEndLine();

// find
// Difference - find stops finding elements as soons as it finds one. Not filter.
// Filter will iterate over the whole array no matter what.
console.log('find - result -', numbers1.find((v) => v === 3));
common.addEndLine();

// findIndex
console.log('findIndex - result -', numbers1.findIndex((v) => v === 2));
// Difference - first parameter of indexOf is a primitive value 
// while the first parameter of findIndex is a callback function.
common.addEndLine();

// slice (shallow copy)
const arr = ['foo', 42, { name: 'Thomas' }]
let copy = [...arr]

copy[0] = 'bar'
console.log('slice - No mutations:');
console.log(arr) // No mutations: ["foo", 42, { name: "Thomas" }]
console.log(copy) // ["bar", 42, { name: "Thomas" }]

copy[2].name = 'Hello'

console.log('slice - MUTATION:');
console.log(arr) // /!\ MUTATION ["foo", 42, { name: "Hello" }]
console.log(copy) // ["bar", 42, { name: "Hello" }]

common.addEndLine();

// some
// If you want to test that at least one element of an array passes a test,
// well you can use some
const users = [
    {
        id: 'fe34',
        permissions: ['read', 'write'],
    },
    {
        id: 'a198',
        permissions: [],
    },
    {
        id: '18aa',
        permissions: ['delete', 'read', 'write'],
    },
]

const hasDeletePermission = users.some(user =>
    user.permissions.includes('delete')
)
console.log('some - hasDeletePermission: ', hasDeletePermission) // true
common.addEndLine();

// every
// Similar to some except that every tests 
// if all elements pass the condition (instead of at least one).
const hasAllReadPermission = users.every(user =>
    user.permissions.includes('read')
)
console.log('every - hasAllReadPermission: ', hasAllReadPermission) // false
common.addEndLine();

// flat - accepts 1 param as a number, which represents how deep you want to flatten your array
const numbersflattenOnce = flatThisArr.flat();
console.log('flat - numbersflattenOnce: ', numbersflattenOnce)

const numbersflattenTwice = flatThisArr.flat(2);
console.log('flat - numbersflattenOnce: ', numbersflattenTwice);

const numbersFlattenInfinity = flatThisArr.flat(Infinity);
console.log('flat - numbersFlattenInfinity: ', numbersFlattenInfinity);
common.addEndLine();

// flatMap 
const sentences = [
    'This is a sentence',
    'This is another sentence',
    "I can't find any original phrases",
]

const allWords = sentences.flatMap(sentence => sentence.split(' '));
// or below
// const allWords = [];
// const result = sentences.map((v, i)=> allWords.push(...v.split(' ')) ); 

console.log('flatMap - allWords', allWords)
common.addEndLine();

// reduce use-case for counting the words
const wordsCount = allWords.reduce((count, word) => {
    count[word] = count[word] ? count[word] + 1 : 1
    return count
}, {})
console.log('reduce use-case for counting the words:');
console.log(wordsCount)
common.addEndLine();

// join - create a string by concatenating array elements separated by a provided separator
const participants = ['john', 'mary', 'gary'];
const participantsFormatted = participants.join(', ')
console.log('join -');
console.log(participantsFormatted) // john, mary, gary
common.addEndLine();

// join use-case with filter & map
const potentialParticipants = [
    { id: 'k38i', name: 'john', age: 17 },
    { id: 'baf3', name: 'mary', age: 13 },
    { id: 'a111', name: 'gary', age: 24 },
    { id: 'fx34', name: 'emma', age: 34 },
]

const participantsFormatted1 = potentialParticipants
    .filter(user => user.age > 18)
    .map(user => user.name)
    .join(', ')

console.log('join use-case with filter & map-');
console.log(participantsFormatted1) // gary, emma
common.addEndLine();

// from
