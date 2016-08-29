export default class Game {
    // 构造
    constructor() {
        this.source = 0;
        this.throws = [];
        this.currentThrow = 0;
        this.currentFrame = 1;
        this.firstThrow = true;
    }

    getSource() {
        return this.getSourceForFrame(this.getCurrentFrame() - 1);
    }

    add(pins) {
        this.throws[this.currentThrow++] = pins;
        this.source += pins;
        this.adjustCurrentFrame(pins);
    }

    adjustCurrentFrame(pins) {
        if (this.firstThrow) {
            if (pins == 10) {
                this.currentFrame++;
            } else {
                this.firstThrow = false;
            }
        } else {
            this.firstThrow = true;
            this.currentFrame++;
        }
        this.currentFrame = Math.min(11,this.currentFrame)
    }

    getCurrentFrame() {
        return this.currentFrame;
    }

    getSourceForFrame(theFrame) {
        if (theFrame == 0 && this.throws.length == 1) {
            return this.throws[0];
        }
        var ball = 0,
            source = 0;
        for (var currentFrame = 0; currentFrame < theFrame; currentFrame++) {
            var firstThrow = this.throws[ball++];
            if (firstThrow == 10) {
                source += firstThrow + this.throws[ball] + this.throws[ball + 1];
            } else {
                var secondThrow = this.throws[ball++];
                var frameSource = firstThrow + secondThrow;
                if (frameSource == 10) {
                    source += frameSource + this.throws[ball];
                } else {
                    source += frameSource;
                }
            }
        }
        return source;
    }
}