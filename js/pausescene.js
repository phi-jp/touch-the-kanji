/*
 * gamescene.js
 */


(function(ns) {
    

    ns.PauseScene = tm.createClass({
        
        superClass: tm.app.Scene,
        
        init: function(bgm) {
            this.superInit();
            
            this.bgm = bgm;
            
            var filter = tm.app.Sprite(SCREEN_WIDTH, SCREEN_HEIGHT);
            filter.setPosition(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
            filter.canvas.clearColor("rgba(0, 0, 0, 1.0)");
            this.addChild(filter);
            
            
            var label = tm.app.Label("PAUSE").addChildTo(this);
            label.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y).setWidth(SCREEN_WIDTH);
            label.setFontSize(40).setAlign("center").setBaseline("middle");
        },
        
        update: function(app) {
        },
        
        onfocus: function() {
            app.start();
        },
        
        onblur: function() {
            app.stop();
            tm.sound.SoundManager.get("bgm").pause();
        },
        
        onpointingstart: function() {
            app.popScene();
            tm.sound.SoundManager.get("bgm").play();
        },
    });

})(window);