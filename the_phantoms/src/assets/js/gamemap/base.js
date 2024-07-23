import { GameObject } from '../gameobject/base.js';
import { Controller } from '../controller/base.js';
import $ from 'jquery/dist/jquery.js';

class Gamemap extends GameObject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext("2d");
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);
        this.root.$kof.append($(`<div class="kof-head">
            <div class="kof-head-hp0">
                <div><div></div></div>
            </div>
            <div class="kof-head-timer">
                <div>60</div>
            </div>
            <div class="kof-head-hp1">
                <div><div></div></div>
            </div>
        </div>`))
        this.time_left = 60000;
        this.$timer = this.root.$kof.find(`.kof-head-timer`);

    }

    start() {

    }

    update() {
        this.time_left = this.time_left - this.timedelta;

        if (this.time_left < 0) {
            this.time_left = 0;
        }

        this.$timer.text(parseInt(this.time_left / 1000));
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // console.log(this.ctx.canvas.width, this.ctx.canvas.height);
        // this.ctx.fillStyle = 'black'
        // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}

export {
    Gamemap
}