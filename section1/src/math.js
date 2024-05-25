export function add(a,b) {
  return a + b;
}

export function sub(a,b) {
  return a - b;
}

export default function multiply(a,b) {
  return a * b;
}
// 1. CJS 방식으로 모듈 내보내기
// module.exports = {
//   add, 
//   sub,
// };


// 2. ESM 방식으로 모듈 내보내기

// export { add, sub };