let str = `
010-1234-4567
mwp525@naver.ocm
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbbbbcccddddd
`
// 변경된 내용을 저장하고 싶다면,const를 let으로 

const regexp = /dog/gi // str 안에 dog 데이터가 있나?
console.log(regexp.test(str)) // true
// console.log(str.replace(regexp,'AAA')) // The quick brown fox jumps over the lazy AAA
str = str.replace(regexp,'Cat')
console.log(str) // The quick brown fox jumps over the lazy Cat