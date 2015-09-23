/*
 * main.js
 */

var app = null;

tm.main(function() {
    app = tm.app.CanvasApp("#world");
    app.fps = FRAME_RATE;
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
    app.fitWindow();
    // app.enableStats();
    
    var bgm = tm.sound.SoundManager.get("bgm");
    bgm.loop = true;
    bgm.volume = 0.5;
    bgm.play();
    
    var titleScene = TitleScene();
    app.replaceScene(titleScene);
    
    app.run();
});

/*
var str = "\
鯏    あさり　    鮗   このしろ    鯡   にしん \
鯵    あじ　　    鮭   さけ　　    鯊   はぜ \
鮎    あゆ　　    鯖   さば　　    鰰   はたはた \
鮑    あわび　    鮫   さめ　　    鱧   はも \
鰯    いわし　    鰆   さわら　    鮠   はや　　\
鰻    うなぎ　    鯱   しゃち　    鮃   ひらめ　\
鰍    かじか　    鱸   すずき　    鱶   ふか　　\
鯑    かずのこ    鯣   するめ　    鮒   ふな　\
鰹    かつお　    鯛   たい　　    鰤   ぶり　\
鰈    かれい　    鮹   たこ　　    鯔   ぼら \
鱚    きす  鱈   たら　　    鮪   まぐろ　 \
鯨    くじら　    鯲   どじょう    鱒   ます \
鯉    こい　　    鯰   なまず　    鰐   わに \
";

str = str.replace(/[\s|　]+/g, ',');
str = str.split(',');

var kanji = [];
var reading = [];
for (var i=0; i<str.length; ++i) {
    if (i%2 == 0) kanji.push(str[i]);
    else {
        reading.push(str[i]);
    }
}

var q = [];
for (var i=0; i<kanji.length; ++i) {
    q.push({
        kanji:kanji[i],
        reading: reading[i],
    });
}

console.log(JSON.stringify(q));
*/