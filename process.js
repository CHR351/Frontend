/*삼항 연산자 => 조건문 ? 참일 때 실행문 : 거짓일 때 실행문*/
const myArray = [1, 2]
myArray.length === 0 ? console.log('빈 배열') : console.log('아이템이 있는 배열');
//아이템이 있는 배열

//함수의 기본 인자 값 설정
function printName(name='Dave') {
    console.log(name);
}
printName();    //Dave
printName('Alex');  //Alex

/*구조 분해 할당 문법*/
//#1객체
let data = {
    name: 'Dave',
    age: 20
};
let {age, name} = data; //동일한 변수명을 써줘야 해당 맞는 값이 대입됨
console.log(name, age); //Dave  20

//다른 변수명을 쓰는 경우, 대입할 변수명: 다른 변수명 형태로 써야함
let {age: myAge, name: myName} = data;
console.log(myName, myAge); //Dave  20

//가져올 변수명을 다른 변수에 저장하지만 해당 변수명이 객체 안에 없을 경우 기본 인자 값 대입
let {name: myName1, age:myAge1=25, hobby='coding'} = data;
console.log(myName1, myAge1, hobby);   //Dave, 20, coding

//#2배열
let myArray1 = [1,2,3,4];
let [first, second, third, fourth] = myArray1;
console.log(first, second, third, fourth);  //1 2 3 4

//컴마를 통해 필요하지 않은 아이템을 건너 뛸 수 있음 
//또한 대입할 아이템이 없는 경우는 undefined로 대입
//객체와 마찬가지로 기본 인자 값 대입 가능
let [value1, , value3, value4, value5, vlaue6=5] = myArray1;
console.log(value1, value3, value4, value5, vlaue6);    //1 3 4 undefined 5

//...을 통해 나머지 요소 한번에 가져올 수 있음
let myArray2 = ['Dave', 'David', 'Alex', 'Jane', 'Andy'];
let [item1, item2, ...item3] = myArray2;
console.log(item1, item2, item3);   //Dave David ['Alex', 'Jane', 'Andy']

/*rest 파라미터 : 함수 인자 선언 앞에 ...을 붙여서 정의 
=> 해당 함수에 전달된 인자는 하나의 배열로 넣어짐 */
function getData(a, ...rest) {
    console.log(a, rest);
}
getData(10, 20, 30, 40, 50, 60);
//10    [20, 30, 40, 50, 60]

/*spread 파라미터 : 변수 앞에 ...을 붙여서 정의
=> 해당 변수의 데이터를 개별 아이템으로 분리함 */
let myArray3 = [1,2,3];
console.log(...myArray3);   //1 2 3

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);  //[1, 2, 3, 4, 5, 6]

/*전역 scope : 외부에서 선언된 변수/함수로 함수 또는 블록 포함 모든 코드에서 사용 가능*/

/*블록 scope(ex. let, const) : {}로 이루어진 영역*/
{
    const n = 'Dave';
    console.log(n); //Dave
}
//console.log(n);   //블록 밖에서 실행 시 undefined 또는 에러

/*함수 scope : 함수 내에서의 범위 */
function getName() {
    console.log(myName);
    function showMsg() {
        console.log('Hello');
    }
}
getName();  //Dave
//showMsg(); 함수 외부에서 호출했으므로 에러

/*전역변수 vs 지역변수 => 동일한 이름일 때 지역변수 우선 사용 */
let name1 = 'Dave';
function getStr() {
    let name1 = 'Alex';
    console.log(name1);
}
getStr();   //Alex
console.log(name1); //Dave