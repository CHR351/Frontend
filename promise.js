/*동기적 처리 : 요청을 보낸 후 요청의 응답을 받아야 다음 동작을 실행*/

/*비동기적 처리 : 요청을 보낸 후 응답과 관계없이 다음 동작을 실행*/

/*Javascript => 기본적으로 동기적 처리이지만 실행이 오래 걸리는 동작의 경우 비동기적 처리로 실행*/

//setTimeout(함수, ms(밀리세컨드))
console.log('안녕하세요.');
setTimeout(() => {
    console.log('반갑습니다.');
}, 3000);
console.log('Alex');
//안녕하세요.    Alex    반갑습니다.

/*비동기 처리의 문제점 해결 => 콜백함수*/
console.log('안녕하세요');
function desc1(callback) {
    setTimeout(() => {
        console.log('Dave');
        callback();
    }, 3000);
}
function desc2() {
    console.log('반갑습니다.')
}
desc1(desc2);
//안녕하세요    Dave    반갑습니다.

/*promise 객체*/
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = 10;
        if (num > 9) {
            resolve(num);
        } else {
            reject('error');
        }
    }, 1000);
});

//promise.then(성공시수행할작업, 실패시수행할작업)
promise.then(
    (num) => {
        console.log('success', num);
    },
    (err) => {
        console.log(err);
    }
)
//success   10
