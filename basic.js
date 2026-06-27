let testValue; // let : 변수 선언 키워드
testValue = 1;
console.log(testValue);
testValue = 2;
console.log(testValue);

const testValue1 = 1; // const : 상수 선언 키워드
console.log(testValue1);

//데이터 타입 number : 정수와 부동소수점을 포함함
let testValue2 = 1;
console.log(typeof testValue2);     //number

//데이터 타입 boolean : true와 false의 두 값을 가짐
testValue2 = true;
let testValue3 = Boolean("hi");
console.log(typeof testValue2);     //boolean
console.log(testValue3, typeof testValue3);     //true boolean

//데이터 타입 undefined : 값을 할당하지 않은 상태
let testValue4;
console.log(testValue4, typeof testValue4);     //undefined undefined

//데이터 타입 null : 값이 없는 상태
let testValue5 = null;
//null이지만 타입 확인(typeof)을 할 때에는 object로 인식됨
console.log(testValue5, typeof testValue5);     //null object

//데이터 타입 object : 객체 타입을 나타냄

//데이터 타입 symbol : 고유한 값으로 만듦
let testSymbol1 = Symbol("1");
let testSymbol2 = Symbol("1");
console.log(testSymbol1, typeof testSymbol1);   //Symbol(1) symbol
console.log(testSymbol1 == testSymbol2); // 값이 같은지 => false
console.log(testSymbol1 === testSymbol2); // 값과 데이터 타입이 같은지 => false

//데이터 타입 변환
console.log(Number("1"));   //1
console.log(parseInt(1.2)); //Number타입의 정수형으로 변환 => 1
console.log(parseFloat(1)); //Number타입의 실수형으로 변환 => 1
console.log(String(1));     //1
console.log(Boolean(""));   //false

//동등 연산자(==, !=) : 값만 같은지
console.log("" == "0"); //false
console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(false == "false"); //false
console.log(false == "0"); //true
console.log(false == undefined); //false
console.log(false == null); //false
console.log(null == undefined); //true
console.log("\t\r\n" == 0); //true

//일치 연산자(===, !==) : 값과 데이터 타입 둘 다 같은지
console.log("" === "0"); //false
console.log(0 === ""); //false
console.log(0 === "0"); //false
console.log(false === "false"); //false
console.log(false === "0"); //false
console.log(false === undefined); //false
console.log(false === null); //false
console.log(null === undefined); //false
console.log("\t\r\n" === 0); //false

//사칙연산자(+, -, *, /)
console.log(100 + 100 - (10 / 2) * 4);  //180

//++연산자
let value1 = 1;
console.log(value1++ === 2); //출력 후 변수 값에 1을 더함 => false
console.log(++value1 === 3); //출력하기 전 변수 값에 1을 더함 => true

//논리 연산자(!, &&, ||)
console.log(false); //false
console.log(true && true); //true
console.log(false && true); //false
console.log(true || true); //true
console.log(false || true); //true
