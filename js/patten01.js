// 정규표현식 패턴(옵션)01
const str = `
010-1234-4567
tmwp525@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbbcccddddd
hxyp
http://localhost:1234
d`

console.log(
    // str.match(/d$/g) // ['d']
    // str.match(/d$/gim) // ['d','d']
    // str.match(/^t/gm) // ['t']
    // str.match(/^T/gm) // ['T']
    // str.match(/^t/gim) // ['t', 'T']
    // str.match(/./gim) // 모든 문자를 배열로 만들어 출력 
    // str.match(/h..p/gim) // 임의의 한 문자와 일치하는 것 // ['http'] // ['http', 'hxyp']
    // str.match(/fox|dog/g) //  ['fox ', ' dog'] |는 또는을 의미 먼저 찾아지는 것을 반환
    // str.match(/https?/g) // ['https', 'http']
    // str.match(/d{2}/g) // ['dd'] g가 추가되면 ['dd','dd']
    // str.match(/d{2,}/g) // ['dddd']
    // str.match(/d{2,3}/g) // ['ddd','dd']
    // str.match(/\w{2,3}/g) // 
    str.match(/\b\w{2,3}\b/g) // 두글자 이상 3글자 이하 // ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']
)
