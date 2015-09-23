/*
 *
 */

phina.globalize();

/*
 * constant.js
 */
var SCREEN_WIDTH    = 640;              // スクリーン幅
var SCREEN_HEIGHT   = 960;              // スクリーン高さ

var QUESTION_BALL_GAME = [
    {"kanji":"野","reading":"ベースボール"},
    {"kanji":"卓","reading":"テーブル・テニス"},
    {"kanji":"水","reading":"ウォーター・ポロ"},
    {"kanji":"庭","reading":"テニス"},
    {"kanji":"蹴","reading":"サッカー"},
    {"kanji":"籠","reading":"バスケットボール"},
    {"kanji":"闘","reading":"ラグビー"},
    {"kanji":"避","reading":"ドッジボール"},
    {"kanji":"排","reading":"バレーボール"},
    {"kanji":"撞","reading":"ビリヤード"},
    {"kanji":"鎧","reading":"アメリカン・フットボール"},
    {"kanji":"送","reading":"ハンドボール"},
    {"kanji":"氷","reading":"アイスホッケー"},
];


var ASSETS = {
  script: {
    main: './assets/scripts/scenes/main.js',
  },
};

phina.main(function() {
  var app = GameApp({
    title: 'Touch the kanji',
    startLabel: location.search.substr(1).toObject().scene || 'title',
    assets: ASSETS,
  });
  document.body.appendChild( app.domElement );

  app.enableStats();

  app.run();
});
