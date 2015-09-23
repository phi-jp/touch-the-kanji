/*
 * gamescene.js
 */


(function(ns) {
    
    var TIME = 300;
    
    var UI_DATA = {
        children: [
            { type: "Label", name: "titleLabel", x:SCREEN_CENTER_X, y:80, width:SCREEN_WIDTH, text:"title", align:"center", fontSize:50 },
            { type: "Label", name: "timeLabel", x:260, y:160, width:SCREEN_WIDTH, text:"Time:", fontSize:25 },
            { type: "AnswerLabel", name: "answerLabel", x:SCREEN_WIDTH/2, y:SCREEN_HEIGHT-100, width:SCREEN_WIDTH, text:"answer", fontSize:40 },
            { type: "HintLabel", name: "hintLabel", x:SCREEN_WIDTH/2, y:SCREEN_HEIGHT-100, width:SCREEN_WIDTH, text:"hint", fontSize:40 },
        ]
    };

    ns.MainScene = tm.createClass({
        
        superClass: tm.app.Scene,
        
        init: function(mode) {
            this.superInit();
            this.frame = 0;
            
            mode = mode || "default";
            
            // ゲームデータ取得, 初期化
            this.gameData = tm.util.DataManager.get("game-data");
            this.gameData.time  = 0;
            this.gameData.score = 0;
            this.gameData.mode = mode;
            
            // UI
            this.fromJSON(UI_DATA);
            this.titleLabel.text = mode;
            
            
            // 漢字を生成
            this.questionData = QUESTION_MAP[mode];
            
            this.kanjiList = [];
            for (var i=0; i<5; ++i) {
                for (var j=0; j<5; ++j) {
                    var x = j*70 + 100;
                    var y = i*70 + 220;
                    var kanji = Kanji(this.questionData.random()).addChildTo(this);
                    kanji.setPosition(x, y);
                    this.kanjiList.push(kanji);
                }
            }
            
            
            this.setAnswer();
        },
        
        update: function(app) {
            this.gameData.time = (this.frame / app.fps).floor(2);
            
            var timeText = this.gameData.time+"";
            var bottom = timeText.split('.')[1];
            if (!bottom) timeText += '.00';
            else if (bottom.length == 1) timeText += '0';
            this.timeLabel.text = "Time:" + timeText.padding(6, ' ');
            this.frame += 1;
        },
        
        setAnswer: function() {
            this.answerLabel.text = this.kanjiList.random().reading;
        },
        
        ontouchkanji: function(e) {
            var kanji = e.kanji;
            if (kanji.reading == this.answerLabel.text) {
                this.kanjiList.erase(kanji);
                kanji.disappear();
                
                tm.sound.SoundManager.get("pinpon").play();
                
                if (this.kanjiList.length > 0) {
                    this.setAnswer();
                }
                else {
                    alert("clear");
                }
            }
            else {
                tm.sound.SoundManager.get("boo").play();
                this.hintLabel.text = kanji.reading;
                this.hintLabel.show();
            }
        },
        
        onblur: function() {
            app.pushScene(PauseScene());
        }
        
    });

})(window);




(function(ns) {
    
    ns.Kanji = tm.createClass({
        superClass: tm.app.LabelButton,
        
        init: function(data) {
            this.superInit(data.kanji);
            this.kanji = data.kanji;
            this.reading = data.reading;
            
            this.setFontSize(58);
        },
        
        ontouchstart: function() {
            var e = tm.event.Event("touchkanji");
            e.kanji = this;
            this.parent.dispatchEvent(e);
        },
        
        disappear: function() {
            this.clearEventListener("pointingover");
            this.clearEventListener("pointingout");
            this.animation.fade(0.0, 1000);
            this.animation.scale(1.5, 1000);
            
            this.ontouchstart   = null;
            this.onanimationend = this._onanimationend;
        },
        
        _onanimationend: function() {
            this.remove();
        }
    });
    
})(window);

(function(ns) {
    
    ns.AnswerLabel = tm.createClass({
        superClass: tm.app.Label,
        
        init: function() {
            this.superInit();
            this.setFontSize(58);
            this.setAlign("center").setBaseline("center");
        },
    });
    
    ns.HintLabel = tm.createClass({
        superClass: tm.app.Label,
        
        init: function() {
            this.superInit();
            this.setFontSize(58);
            this.setAlign("center").setBaseline("center");
            
            this.fillStyle = "red";
            this.alpha = 0;
        },
        
        show: function() {
            this.alpha = 1.0;
            this.animation.clear();
            this.animation.fade(0.0, 2000);
        },
    });
    
})(window);





