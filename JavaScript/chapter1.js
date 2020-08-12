// 変数   (var or let)
var m = "Good morning!";
let a = ["Good afternoon!", "Good evening!"];　// 変数の中に配列を入れることも可能です。
let r = "Hello";
var e = {institute: "金沢工業大学", major: "情報フロンティア学部", department: "メディア情報学科", class: 2};

// 定数 (const)
const myname = "mare";

// 値を取り出す
console.log(m);
console.log(a[1]);
console.log(e.institute);
console.log(myname);


// 分岐 (if文)
var numA = 1;
if (numA == 1) {
  console.log("変数numAの値は1です")
}else if (numA == 2) {
  console.log("変数numAの値は2です")
} else {
  console.log("変数numAの値は1または2ではありません")
}

// ちょっと応用(分岐に四則演算をいろいろ使って奇数偶数かを判断する)
if (numA%2 == 0) {
  console.log("numAは偶数です")
} else {
  console.log("numAは奇数です")
}


// 繰り返し (for文、while文、do-while文)
// 0~9までを表示させる
console.log("0~10までを表示させる");
for (var numB = 0; numB<=10; numB++) {
  console.log(numB);
}

// 0~10の範囲で偶数のみ表示させる
console.log("0~10の範囲で偶数のみ表示させる");
var numC = 0;
while (numC <= 10) {
  console.log(numC);
  numC = numC + 2;
}

// 0~10までの値で初項1、公比3の等比数列を表示
console.log("初項1、公比3の等比数列を表示")
var numD = 1;
do {
  console.log(numD);
  numD = numD * 3;
} while (numD <= 10);


// 関数を作成してみる　(function)