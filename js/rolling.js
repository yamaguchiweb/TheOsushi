/**
* お寿司の生成
*/
var sushisList = document.getElementsByClassName('sushi_list'); // お寿司の大枠
var menuArray = [
  ['tamago', 'たまご', 100],
  ['kappa', 'かっぱ', 100],
  ['tekka', '鉄火巻', 100],
  ['ikura', 'いくら', 180],
  ['ebi', '蒸エビ', 180],
  ['purin', 'プリン', 180],
  ['chutoro', '中トロ', 250],
  ['kanburi', '寒ブリ', 250],
  ['agari', 'あがり', 0]
];
var random; // お寿司の番号をランダムに抽出
var sushisLength; // 画面に入るお寿司の数
var sushisArray = [];　// お寿司の番号配列

var sushiPos01; // お寿司個別の座標
var sushiPos02; // 先頭お寿司の座標
var x; // お寿司個別のx座標

var lists; // お寿司個別のliタグ郡


// 初期お寿司タグ生成メソッド（引数swにはお寿司の幅を入れる）
function sushis(sw) {

  // お寿司の必要数を計算
  sushisLength = Math.ceil(window.innerWidth / sw);

  // 必要な数だけお寿司を抽選、配列に入れていく（ひとまずあがりは抜く）
  for (var i = 0; i < sushisLength + 1; i++) {
    random = Math.floor(Math.random() * (menuArray.length - 1));
    sushisArray.push(menuArray[random]);
  }

  // お寿司列の長さを設定
  sushisList[0].style.width = sushisLength * sw + "px";

  for (var i = 0; i < sushisArray.length; i++) {

    // お寿司のclass名付きliタグを生成
    var li = document.createElement('li');
    li.classList.add(sushisArray[i][0]);
    li.style.left = i * sw + "px";
    sushisList[0].appendChild(li);

    // liタグの中にお寿司のnameを生成
    var name = document.createElement('div');
    name.classList.add('name');
    name.innerText = sushisArray[i][1];
    lists = sushisList[0].getElementsByTagName('li');
    lists[i].appendChild(name);

    // liタグの中にお寿司のnetaを生成
    var neta = document.createElement('div');
    neta.classList.add('neta');
    lists[i].appendChild(neta);

    // liタグの中にお寿司のpriceを生成
    var price = document.createElement('div');
    price.classList.add('price');
    price.innerText = sushisArray[i][2] + "円";
    lists[i].appendChild(price);

    // お寿司のneta（divタグ）の中に二貫生成
    var s01 = document.createElement('div');
    var s02 = document.createElement('div');
    var sin01 = document.createElement('span');
    var sin02 = document.createElement('span');

    var netaDiv = lists[i].getElementsByClassName('neta');
    netaDiv[0].appendChild(s01);
    netaDiv[0].appendChild(s02);

    var sDiv = netaDiv[0].getElementsByTagName('div');
    sDiv[0].appendChild(sin01);
    sDiv[1].appendChild(sin02);
  }
}


// お寿司を動かすメソッド（引数swにはお寿司の幅を入れる）
function sushisRolling(sw) {

  lists = sushisList[0].getElementsByTagName('li');

  for (var i = 0; i < lists.length; i++){

    // お皿を個別に1pxずつ左へ移動させる
    sushiPos01 = lists[i].getBoundingClientRect();
    x = sushiPos01.left;
    x -= 1;
    lists[i].style.left = x + "px";
  
    // 先頭のお皿が画面の左に隠れたら削除、列の最後に新しく一皿追加
    sushiPos02 = lists[0].getBoundingClientRect(); // 先頭のお皿座標
    if (sushiPos02.left < -sw) {
      sushisList[0].removeChild(sushisList[0].firstElementChild);

      // 追加するお寿司を抽選
      random = Math.floor(Math.random() * (menuArray.length));

      // お寿司のclass名付きliタグを生成;
      var li = document.createElement('li');
      li.classList.add(menuArray[random][0]);
      li.style.left = sushisLength * sw + "px";
      sushisList[0].appendChild(li);

      // liタグの中にお寿司のnameを生成
      var name = document.createElement('div');
      name.classList.add('name');
      name.innerText = menuArray[random][1];
      var li = sushisList[0].lastElementChild;
      li.appendChild(name);

      // liタグの中にお寿司のnetaを生成
      var neta = document.createElement('div');
      neta.classList.add('neta');
      li.appendChild(neta);

      // liタグの中にお寿司のpriceを生成
      var price = document.createElement('div');
      price.classList.add('price');
      price.innerText = menuArray[random][2] + "円";
      li.appendChild(price);

      // お寿司のneta（divタグ）の中に二貫生成
      var s01 = document.createElement('div');
      var s02 = document.createElement('div');
      var sin01 = document.createElement('span');
      var sin02 = document.createElement('span');

      var netaDiv = li.getElementsByClassName('neta');
      netaDiv[0].appendChild(s01);
      netaDiv[0].appendChild(s02);

      var sDiv = netaDiv[0].getElementsByTagName('div');
      sDiv[0].appendChild(sin01);
      sDiv[1].appendChild(sin02);
    }
  }
}

// お寿司の生成
sushis(130);

// お寿司の回転
//setInterval('sushisRolling(130)' , 50);