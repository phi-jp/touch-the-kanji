/*
 * param.js
 */


var FRAME_RATE      = 30;
var SCREEN_WIDTH    = 480;
var SCREEN_HEIGHT   = 720;
var SCREEN_CENTER_X = SCREEN_WIDTH/2;
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;


tm.preload(function() {
    
    tm.sound.SoundManager.add("bgm", "http://storage.tmlife.net/resource/bgm/maoudamashii/bgm_maoudamashii_healing02.wav", 1);
    tm.sound.SoundManager.add("pinpon", "sound/pinpon");
    tm.sound.SoundManager.add("boo", "sound/boo");
    
    tm.util.DataManager.set("game-data", {
        time : 0,
        score: 0,
    });
});


/*
 * http://www.usiwakamaru.or.jp/~doraemon/jyuku/sakana.htm
 */
var QUESTION_FISH = [
    {"kanji":"鯏","reading":"あさり"},{"kanji":"鮗","reading":"このしろ"},{"kanji":"鯡","reading":"にしん"},
    {"kanji":"鯵","reading":"あじ"},{"kanji":"鮭","reading":"さけ"},{"kanji":"鯊","reading":"はぜ"},
    {"kanji":"鮎","reading":"あゆ"},{"kanji":"鯖","reading":"さば"},{"kanji":"鰰","reading":"はたはた"},
    {"kanji":"鮑","reading":"あわび"},{"kanji":"鮫","reading":"さめ"},{"kanji":"鱧","reading":"はも"},
    {"kanji":"鰯","reading":"いわし"},{"kanji":"鰆","reading":"さわら"},{"kanji":"鮠","reading":"はや"},
    {"kanji":"鰻","reading":"うなぎ"},{"kanji":"鯱","reading":"しゃち"},{"kanji":"鮃","reading":"ひらめ"},
    {"kanji":"鰍","reading":"かじか"},{"kanji":"鱸","reading":"すずき"},{"kanji":"鱶","reading":"ふか"},
    {"kanji":"鯑","reading":"かずのこ"},{"kanji":"鯣","reading":"するめ"},{"kanji":"鮒","reading":"ふな"},
    {"kanji":"鰹","reading":"かつお"},{"kanji":"鯛","reading":"たい"},{"kanji":"鰤","reading":"ぶり"},
    {"kanji":"鰈","reading":"かれい"},{"kanji":"鮹","reading":"たこ"},{"kanji":"鯔","reading":"ぼら"},
    {"kanji":"鱚","reading":"きす"},{"kanji":"鱈","reading":"たら"},{"kanji":"鮪","reading":"まぐろ"},
    {"kanji":"鯨","reading":"くじら"},{"kanji":"鯲","reading":"どじょう"},{"kanji":"鱒","reading":"ます"},
    {"kanji":"鯉","reading":"こい"},{"kanji":"鯰","reading":"なまず"},{"kanji":"鰐","reading":"わに"}
];

/*
 * http://www.usiwakamaru.or.jp/~doraemon/jyuku/musi.htm
 */
var QUESTION_INSECT = [
];


/*
 * http://kiriusa.at.webry.info/201007/article_13.html
 */
var QUESTION_COUNTRY = [
    {"kanji":"日","reading":"日本"},
    {"kanji":"英","reading":"イギリス"},
    {"kanji":"仏","reading":"フランス"},
    {"kanji":"独","reading":"ドイツ"},
    
    {"kanji":"西","reading":"スペイン"},
    {"kanji":"伊","reading":"イタリア"},
    {"kanji":"葡","reading":"ポルトガル"},
    {"kanji":"露","reading":"ロシア"},
    
    {"kanji":"中","reading":"中国"},
    {"kanji":"台","reading":"台湾"},
    {"kanji":"韓","reading":"韓国"},
    {"kanji":"朝","reading":"北朝鮮"},
    
    {"kanji":"印","reading":"インド"},
    {"kanji":"米","reading":"アメリカ合衆国"},
    {"kanji":"豪","reading":"オーストラリア"},
    {"kanji":"蘭","reading":"オランダ"},
];


/*
 * http://www.usiwakamaru.or.jp/~doraemon/jyuku/yomikyuugi.htm
 */
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



var QUESTION_MAP = {
    "Default"   : QUESTION_COUNTRY,
    "Country"   : QUESTION_COUNTRY,
    "Fish"      : QUESTION_FISH,
    "Insect"    : [],
    "Ball Game" : QUESTION_BALL_GAME,
};


