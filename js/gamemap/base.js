import { GameObject } from '../gameobject/base.js';
import { Controller } from '../controller/base.js';

class Gamemap extends GameObject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext("2d");
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);

    }

    start() {

    }

    update() {
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