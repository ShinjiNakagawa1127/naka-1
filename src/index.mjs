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

let val2 = "let変数";
console.log(val2);

//let val2 = "let変数を再宣言"

val2 = "let変数上書き";
console.log(val2);

const val3 = "const変数"
console.log(val3);

val3 = "const変数を上書き";

//const val3 = "const変数を再宣言"；

const val4 = {
  name = "じゃけえ",
  age = 28,
};

console.log(val4);
  
