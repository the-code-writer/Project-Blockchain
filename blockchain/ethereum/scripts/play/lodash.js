const _ = require("lodash");
const nums = _.range(1, 9);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
const chunks = _.chunk(nums, 3);
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const right = _.takeRight(nums, 2);
// => [7, 8, 9]