/*
 * gamescene.js
 */


(function(ns) {
    
    var UI_DATA = {
        children: [
            { type: "Label", name: "titleLabel", x:SCREEN_CENTER_X, y:150, width:SCREEN_WIDTH, text:"Touch the Kanji", align:"center", fontSize:40 },
            { type: "LabelButton", name: "playLabel", x:SCREEN_CENTER_X, y:360, width:150, width:SCREEN_WIDTH, text:"Play Game", align:"center", fontSize:25 },
            { type: "LabelButton", name: "tweetLabel", x:SCREEN_CENTER_X, y:420, width:150, width:SCREEN_WIDTH, text:"Tweet", align:"center", fontSize:25 },
            { type: "LabelButton", name: "rankingLabel", x:SCREEN_CENTER_X, y:480, width:150, width:SCREEN_WIDTH, text:"Ranking", align:"center", fontSize:25 },
        ],
    }

    ns.TitleScene = tm.createClass({
        
        superClass: tm.app.Scene,
        
        init: function(bgm) {
            this.superInit();
            
            this.fromJSON(UI_DATA);
            
            this.playLabel.ontouchstart = function() {
                app.replaceScene(ModeSelectScene());
            };
        },
        
        update: function(app) {
        },
        
        onblur: function() {
            app.pushScene(PauseScene());
        }
    });

})(window);

(function(ns) {
    
    var UI_DATA = {
        children: [
            { type: "Label", name: "titleLabel", x:SCREEN_CENTER_X, y:150, width:SCREEN_WIDTH, text:"Mode Select", align:"center", fontSize:40 },
            { type: "LabelButton", name: "countryLabel", x:SCREEN_CENTER_X, y:360, width:150, width:SCREEN_WIDTH, text:"Country", align:"center", fontSize:25 },
            { type: "LabelButton", name: "fishLabel", x:SCREEN_CENTER_X, y:420, width:150, width:SCREEN_WIDTH, text:"Fish", align:"center", fontSize:25 },
            { type: "LabelButton", name: "insectLabel", x:SCREEN_CENTER_X, y:480, width:150, width:SCREEN_WIDTH, text:"Insect", align:"center", fontSize:25 },
            { type: "LabelButton", name: "ballGameLabel", x:SCREEN_CENTER_X, y:540, width:150, width:SCREEN_WIDTH, text:"Ball Game", align:"center", fontSize:25 },
        ],
    }

    ns.ModeSelectScene = tm.createClass({
        
        superClass: tm.app.Scene,
        
        init: function(bgm) {
            this.superInit();
            
            this.fromJSON(UI_DATA);
            
            var _onpointingstart = function() {
                app.replaceScene(MainScene(this.text));
            };
            this.countryLabel.onpointingstart   = _onpointingstart;
            this.fishLabel.onpointingstart      = _onpointingstart;
            this.insectLabel.onpointingstart    = _onpointingstart;
            this.ballGameLabel.onpointingstart  = _onpointingstart;
        },
        
        update: function(app) {
        },
        
        onblur: function() {
            app.pushScene(PauseScene());
        }
    });

})(window);