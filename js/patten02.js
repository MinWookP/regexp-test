// // 정규표현식 패턴(옵션)02
// const str = `
// 010-1234-4567
// tmwp525@naver.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbbbbcccddddd
// hxyp
// http://localhost:1234
// 안녕_하세요
// d`
// const h = `  the Hello   World   !`


// console.log(
//     // str.match(/[fox]/g) // 'f','o','x'가 다 찾아져 배열로 출력
//     // str.match(/[0-9]{1,}/g) // ['010', '1234', '4567', '525', '7035', '60', '1234']
//     // str.match(/[가-힣]{1,}/g) // ['안녕하세요']
//     // str.match(/\w/g) // 영어 숫자 대문자 under_bar까지 출력 
//     // str.match(/\bf\w{1,}\b/g) // 글자 사이사이 경계를 출력  // 소문자 f로 시작하는 단어를 출력 ['frozen', 'fox']
//     // str.match(/\d{1,}/g) // ['010', '1234', '4567', '525', '7035', '60', '1234']
//     // str.match(/\s/g) // 모든 공백을 찾아낸다.
//     // str.match(//g)
//     // str.match(//g)
// )
// console.log(
//     h.replace(/\s/g, '') //theHelloWorld!
// )

const str = `
010-1234-4567
mwp525@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbbbbcccddddd
`

console.log(
    // str.match(/.{1,7}(?=@)/g) // ['mwp525'] @ 기준으로 앞쪽에 있는것을 출력
    str.match(/(?<=@).{1,}/g) // ['naver.com'] @ 기준으로 앞쪽에 있는것을 출력
)