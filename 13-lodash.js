//npm init ( stap by stap process)
//npm -y (everything default)

const _ =  require('lodash')

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);
const str = "yash kumar shah";
console.log(_.toUpper(str));