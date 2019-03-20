const obj = {
    info: null,
    test: 2
}
const tab1 = ['info', 'test'];

let result = tab1.every((key) => obj.hasOwnProperty(key))

console.log(result);