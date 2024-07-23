import { Player } from "./base.js";
import { GIF } from "../utils/gif.js";

class Kyo extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animations();
        this.hp = 100;
    }

    init_animations() {
        let outer = this;
        let offset = [0, -22, -22, -140, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(require(`../../images/test/player/kyo/${i}.gif`));
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0, //总图片数
                frame_rate: 5, //每5帧渲染一次d
                offset_y: offset[i], //y方向偏移量
                loaded: false, //是否加载完成
                scale: 2,     //放大倍数
            });

            gif.onload = function () {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) obj.frame_rate = 6;
            }
        }
    }
}

export {
    Kyo
}