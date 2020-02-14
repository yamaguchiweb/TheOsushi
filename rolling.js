/**
* お寿司の生成
*/

var sushisList = document.getElementsByClassName('sushi_list');
var x = 1;
var menuArray = [
	['tamago','たまご',100],
	['kappa','かっぱ',100],
	['tekka','鉄火巻',100],
	['ikura','いくら',180],
	['ebi','蒸エビ',180],
	['purin','プリン',180],
	['chutoro','中トロ',250],
	['kanburi','寒ブリ',250],
	['agari','あがり',0]
];




// お寿司タグ生成メソッド
function sushis(sw, ss){

	var sushisQuantity = window.innerWidth / sw; //画面の横に最低数入る数
	var sushisLength = Array(Math.round(sushisQuantity + menuArray.length)); // 最低数 + メニューの配列数

	// ランダムにお寿司配列を作成（あがり抜き）
	var sushisArray = [];
	for(var i = 0; i < sushisLength.length; i++){
		var random = Math.floor( Math.random() * (menuArray.length -1) );
		sushisArray.push(menuArray[random]);
	}

	sushisList[0].style.width = sushisLength.length * (sw + ss * 2)  + "px";

	for(var i = 0; i < sushisArray.length; i++){

		// お寿司のclass名付きliタグを生成
		var li = document.createElement('li');
		li.classList.add(sushisArray[i][0]);
		li.style.marginLeft = ss  + "px";
		li.style.marginRight = ss  + "px";
		sushisList[0].appendChild(li);

		// liタグの中にお寿司のnameを生成
		var name = document.createElement('div');
		name.classList.add('name');
		name.innerText = sushisArray[i][1];
		var li = sushisList[0].getElementsByTagName('li');
		li[i].appendChild(name);

		// liタグの中にお寿司のnetaを生成
		var neta = document.createElement('div');
		neta.classList.add('neta');
		li[i].appendChild(neta);

		// liタグの中にお寿司のpriceを生成
		var price = document.createElement('div');
		price.classList.add('price');
		price.innerText = sushisArray[i][2] + "円";
		li[i].appendChild(price);

		// お寿司のneta（divタグ）の中に二貫生成
		var s01 = document.createElement('div');
		var s02 = document.createElement('div');
		var sin01 = document.createElement('span');
		var sin02 = document.createElement('span');

		var netaDiv = li[i].getElementsByClassName('neta');
		netaDiv[0].appendChild(s01);
		netaDiv[0].appendChild(s02);

		var sDiv = netaDiv[0].getElementsByTagName('div');
		sDiv[0].appendChild(sin01);
		sDiv[1].appendChild(sin02);
	}
}

function sushisRolling(){
	x -= 1;
	sushisList[0].style.left = x + "px";
	var style = window.getComputedStyle(sushisList[0]);
	
	console.log(sushisList[0]);

}

// お寿司の生成
sushis(100, 5);

// お寿司の回転
// setInterval('sushisRolling()' , 10);
