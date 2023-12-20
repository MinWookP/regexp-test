const str = `
010-1234-4567
mwp525@naver.ocm
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbbbbcccddddd
`

// 생성자 벙삭
// const regexp = new RegExp('the','g') // ['the'] 
// const regexp = new RegExp('the','gi') // ['The','the'] 대문자 소문자 상관없이

// 리터럴 방식
// const regexp = /the/g  // ['the'] 
const regexp = /the/gi  // ['The','the'] 대문자 소문자 상관없이
console.log(str.match(regexp))
