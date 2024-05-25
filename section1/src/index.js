import mul, {add, sub} from "./math.js";
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);








//node.js section1
// 1. 변수 선언 후 module.export로 math.js export 부분 내보낸 것을 가져옴(CJS)  

// const moduleData = require('./math');

// console.log(moduleData.add(1, 2)) // 3
// console.log(moduleData.sub(1, 2)) // -1

// 2. 구조분해 할당
// const { add , sub } = require('./math');
//구조분해할당을 이용하여 코드의 가독성 높임.
// console.log(add(1, 2)) // 3
// console.log(sub(1, 2)) // -1

// console.log(mul(10, 20)) // 200