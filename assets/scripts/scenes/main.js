

phina.define('MainScene', {
  superClass: 'CanvasScene',

  init: function() {
    this.superInit();

    this.fromJSON({
      children: {
        kanjiGroup: {
          className: 'CanvasElement',
        },
        answerLabel: {
          className: 'Label',
          arguments: {
            text: '',
            fontSize: 50,
          },
          x: this.gridX.center(),
          y: this.gridY.span(13),
        },
      }
    });

    this.questionMap = QUESTION_BALL_GAME;

    (25).times(function(i) {
      var xIndex = (i%5);
      var yIndex = (i/5)|0;
      var q = this.questionMap.pickup();
      var kanji = KanjiButton(q).addChildTo(this.kanjiGroup);
      kanji.x = xIndex * 100 + 120;
      kanji.y = yIndex * 100 + 200;

      kanji.onpush = function() {
        this.check(kanji) ? this.correct(kanji) : this.incorrect(kanji);
      }.bind(this);
    }, this);
  },

  onenter: function() {
    this.setQuestion();
  },

  setQuestion: function() {
    var target = this.kanjiGroup.children.filter(function(e) {
      return e.active;
    }).pickup();
    this.answerLabel.text = target.reading;

    this.answerLabel
      .tweener.clear().from({
        alpha: 0,
        scaleX: 0.5,
        scaleY: 0.5,
        y: this.gridY.span(16),
      }, 500, 'easeOutCubic');

    this.answerLabel.tweener.update(this.app);
  },

  check: function(kanji) {
    return true;
    return this.answerLabel.text === kanji.reading;
  },

  correct: function(kanji) {
    kanji.disapper();

    this.setQuestion();
  },

  incorrect: function() {
    console.log('incorrect');
  },
});

phina.define('KanjiButton', {
  superClass: 'Button',

  init: function(options) {
    this.superInit({
      text: options.kanji,
      width: 64,
      height: 64,
      color: '#444',
      backgroundColor: 'transparent',
      fontSize: 64,
    });

    this.reading = options.reading;

    this.appear();
  },

  appear: function() {
    this.active = true;
  },

  disapper: function() {
    this.active = false;

    this.tweener.clear()
      .to({
        alpha: 0,
        scaleX: 2,
        scaleY: 2,
      }, 500)
      .call(function() {
        this.target.remove();
        this.remove();
      });
  }

});




