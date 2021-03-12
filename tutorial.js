const sum = (...nums) => { result = 0; nums.forEach((num, idx, nums) => { result += num }); return result };
// console.log(sum(1,8,96,6,9,6,3,7));
const PI = 3.14;
class someObject{
    constructor(){
        console.log('someObject created');
    }
}
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.someObjectClass = someObject;
