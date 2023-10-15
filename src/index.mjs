import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//var val1 = "var変数";
//console.log(val1);

//val1 = "変数を上書き";
//console.log(val1);

//var val1 = "var変数を再宣言";
//console.log(val1);

//let val2 = "let変数";
//console.log(val2);

//let val2 = "let変数を再宣言"

//val2 = "let変数上書き";
//console.log(val2);

//const val3 = "const変数"
//console.log(val3);

//val3 = "const変数を上書き";

//const val3 = "const変数を再宣言"；

//constで定義したオブジェクトはプロパティの変更が可能
//const val4 = {
//  name:"じゃけえ",
//  age:28,
//};
//val4.name = "JAK";
//val4.address = "hiroshima"
//console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5)

const name = "じゃけえ";
const age = 28;

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

//アロー関数

//従来の関数
function func1(str) {
  return str;
}
// const func1 = function (str) {
//   return str;
// };
console.log(func1("func1です"));

//アロー関数
const func2 = str => {
  return str;
}
console.log(func2("func2です"));
