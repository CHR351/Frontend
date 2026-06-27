//조건문 if,else if, else
let age = 20;
if (age > 19) {
  console.log("어른입니다.");
}
//어른입니다.

age = 18;
if (age > 19) {
  console.log("어른입니다.");
} else {
  console.log("청소년입니다.");
}
//청소년입니다.

age = 8;
if (age > 19) {
  console.log("어른입니다.");
} else if (age > 10) {
  console.log("청소년입니다.");
} else {
  console.log("어린이입니다.");
}
//어린이입니다.

//switch,case 구문
let month = 1;
switch (month) {
  case 1:
    console.log("Jan");
    break; //해당 case문이 참이면 나머지 아래 코드들도 실행되기 때문에 사용
  case 2:
    console.log("Feb");
    break;
  default: //아무 case에 해당되지 않았다면 실행됨
    console.log("Nor Matched");
}
//Jan

//함수
function FunCoding(name) {
  console.log("Hi " + name + "!");
}
FunCoding("Jin");
//Hi Jin!

function Add(n1, n2) {
  return n1 + n2;
}
console.log(Add(4, 5));
//9

//화살표 함수 선언
/*let f1 = function() {
    retrun "Hello, World!";
}
*/
let f1 = () => "Hello, World!";
console.log(f1());
//Hello, World!

/*let f2 = function(age) {
    retrun age * 2;
}
*/
let f2 = (age) => age * 2;
console.log(f2(20));
//40

/*let f3 = function(item1, item2) {
    retrun item1 * item2;
}
*/
let f3 = (item1, item2) => item1 * item2;
console.log(f3(4, 3));
//12

//반복문 for(초기문, 조건문, 증감문)
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//0 1 2 3 4

//배열과 for문
const data = ['Dave', 'Alex', 'David'];
//배열의 길이만큼 반복
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}
//Dave Alex David
//for...of문 : 배열을 반복문에 가져옴
for (let item of data) {
    console.log(item);
}
//Dave Alex David

//객체와 for문
const data1 = {
    name: 'Dave',
    age: 20,
    brand: 'funcoding'
};
console.log(Object.entries(data1)); //Object.entries() : 프로퍼티 키와 값들 반환
//[ [ 'name', 'Dave' ], [ 'age', 20 ], [ 'brand', 'funcoding' ] ]
console.log(Object.keys(data1)); //Object.keys() : 프로퍼티 키 반환
//[ 'name', 'age', 'brand' ]
console.log(Object.values(data1)); //Object.values() : 프로퍼티 값 반환
//[ 'Dave', 20, 'funcoding' ]
//for...in문 : 객체의 키를 반복문에 가져옴
for (let key in data1) {
    console.log(key);
}
//name age brand
for (let key in data1) {
    console.log(data1[key]);
}
//Dave 20 funcoding

//반복문 while
let i = 0;
while (i<5) {
    console.log(i);
    i++;
}
//0 1 2 3 4

//break와 continue
for (let i = 0; i<5; i++) {
    if (i === 3) {
        continue;       //continue 다음의 반복 코드를 수행하지 않고 다음 반복 횟수로 넘어감
    }
    console.log(i);
}
//0 1 2 4
for (let i = 0; i<5; i++) {
    if (i === 3) {
        break;       //더이상 반복문을 수행하지 않고 밖으로 빠져나옴
    }
    console.log(i);
}
//0 1 2

//배열
const myArray = [1, 2, 'Dave', 100];
console.log(myArray);   //[ 1, 2, 'Dave', 100 ]
console.log(myArray.length); //배열명.length : 배열 길이 확인 => 4
console.log(myArray[0]);    //1

myArray[0] = 'funcoding';   //인덱스 번호로 수정 가능
console.log(myArray);   //[ 'funcoding', 2, 'Dave', 100 ]

myArray.splice(1, 2);   //배열명.splice(시작, 삭제할 갯수) : 배열 삭제
console.log(myArray);   //[ 'funcoding', 100 ]

myArray.push(2); //배열명.push(값) : 배열 끝에 값 추가
console.log(myArray);   //[ 'funcoding', 100, 2 ]

console.log(myArray.pop()); //배열명.pop() : 배열 끝 값 반환 후 삭제 => 2
console.log(myArray);   //[ 'funcoding', 100 ]

myArray.shift(); //배열명.shift() : 처음 값 삭제
console.log(myArray);   //[ 100 ]

const myArray1 = [1, 2];
const myArray2 = ['Dave', 100];
let arr = myArray1.concat(myArray2); //배열1.concat(배열2) : 두 배열 합침
console.log(arr);   //[ 1, 2, 'Dave', 100 ]

arr = arr.join('|');    //배열.join(연결자) : 값 사이에 연결자를 넣어서 문자열로 만듦
console.log(arr, typeof arr);   //1|2|Dave|100  string

const array = [1, 2, 'Dave', 100];
array.reverse();    //배열명.reverse() : 배열 역순 배치
console.log(array); //[ 100, 'Dave', 2, 1 ]

let arr1 = array.slice(0, 2);   //배열명.slice(시작, 끝) : 시작부터 끝-1까지 반환
console.log(arr1);  //[ 100, 'Dave' ]

//배열명.forEach(변수명 => {for문}) : for문 대체해 배열의 각 값을 가져올 수 있는 함수
array.forEach(item => {
    console.log(item)
});
//100 Dave 2 1

//배열명.map(변수명 => 새로운 배열의 값) : 배열의 각 값을 넣어 새로운 배열로 반환
const array1 = [1, 2, 5, 10];
const array2 = array1.map(item => item * 2);
console.log(array2);    //[ 2, 4, 10, 20 ]

//배열명.indexOf(값) : 배열 내의 값이 위치한 인덱스 반환(객체X)
let array3 = [1, 2, 'Dave', 100];
console.log(array3.indexOf('Dave'));    //2

//배열명.findIndex(변수명 => 찾을 값) : 배열 내의 값이 위치한 인덱스 반환(객체O)
const array4 = [
    {
        id: 1,
        name: 'Dave'
    },
    {
        id: 2,
        name: 'Alex'
    }
];
console.log(array4.findIndex(item => item.name === 'Alex'));    //1

//배열명.find(변수명 => 찾을 값) : 배열 내의 값이 들어 있는 객체 반환
console.log(array4.find(item => item.name === 'Alex')); //{ id: 2, name: 'Alex' }

//배열명.filter(변수명 => 조건문) : 조건에 맞은 값만 반환
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.filter(item => item % 2 === 0));    //[ 2, 4, 6, 8, 10 ]