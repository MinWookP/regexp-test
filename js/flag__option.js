const str = `
010-1234-4567
mwp525@naver.ocm
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbbcccddddd
`

// const regexp = /the
// const regexp = /the/g // ['the'] 전역
const regexp = /the/gi// ['The','the'] 대문자 소문자 구분없이 찾기


console.log(str.match(regexp))
console.log(str.match(/the/gi))
console.log(str.match(/\./gi))
console.log(str.match(/\.$/gi)) // null
console.log(str.match(/\.$/gim)) // ['.'] 하나의 문자 데이터에 존재하는 각각의 줄이 일치하는지 확인

// 이스케이프 문자(Escape Character)란 \(백슬래시)기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.
