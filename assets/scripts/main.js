/*
 *
 */

phina.globalize();

/*
 * constant.js
 */
var SCREEN_WIDTH    = 640;              // スクリーン幅
var SCREEN_HEIGHT   = 960;              // スクリーン高さ


phina.main(function() {
  var app = GameApp({
  	title: 'Touch the kanji',
    startLabel: location.search.substr(1).toObject().scene || 'title',
    // assets: ASSETS,
  });
  document.body.appendChild( app.domElement );

  app.enableStats();

  app.run();
});
