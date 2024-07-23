import { GameObject } from "../gameobject/base.js";

class Player extends GameObject {
    constructor(root, info) {
        super();
        this.root = root;

        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.direction = 1;
        this.vx = 0;
        this.vy = 0;

        this.speedx = 400; //水平移动速度
        this.speedy = -2000; //跳起的初始速度

        this.gravity = 50;

        this.ctx = this.root.gamemap.ctx;
        this.pressed_keys = this.root.gamemap.controller.pressed_keys;
        this.status = 3; // 0: idle, 1: move, 2: jump, 3: attack, 4: beated, 5: died

        this.animations = new Map();
        this.frame_current_cnt = 0;

        this.hp = 0;
        this.$hp = this.root.$kof.find(`.kof-head-hp${this.id}>div`);
        this.$hp_in = this.root.$kof.find(`.kof-head-hp${this.id}>div>div`)
    }

    start() {

    }

    update() {
        this.move();
        this.controll();
        this.update_direction();
        this.update_attack();
        this.render();
    }

    update_direction() {
        if (this.status === 6) return;

        let players = this.root.players;
        if (players[0] && players[1]) {
            let me = this, you = players[1 - this.id];

            if (me.x < you.x) me.direction = 1;
            else me.direction = -1;
        }
    }

    controll() {
        let w, a, d, space;

        if (this.id === 0) {
            w = this.pressed_keys.has('w');
            a = this.pressed_keys.has('a');
            d = this.pressed_keys.has('d');
            space = this.pressed_keys.has(' ');
        }
        else if (this.id === 1) {
            w = this.pressed_keys.has('ArrowUp');
            a = this.pressed_keys.has('ArrowLeft');
            d = this.pressed_keys.has('ArrowRight');
            space = this.pressed_keys.has('Enter');
        }

        if (this.status === 0 || this.status === 1) {
            if (space) {
                this.status = 4;
                this.vx = 0;
                this.frame_current_cnt = 0;
            }
            else if (w) {
                if (a) {
                    this.vx = -this.speedx;
                }
                else if (d) {
                    this.vx = this.speedx;
                }
                else {
                    this.vx = 0;
                }
                this.vy = this.speedy;
                this.status = 3;
                if (this.frame_current_cnt > 100) this.frame_current_cnt = 0;//让起始帧与跳跃帧重合，方式对不上帧，加上100限制防止跳上天
            }
            else if (d) {
                this.vx = this.speedx;
                this.status = 1;
            }
            else if (a) {
                this.vx = -this.speedx;
                this.status = 1;
            }
            else {
                this.vx = 0;
                this.status = 0;
            }
        }
    }

    move() {
        let bottom = 450;
        let left_edge = 0;
        let right_edge = this.root.gamemap.ctx.canvas.width - this.width;

        this.vy += this.gravity;


        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;



        if (this.y > bottom) {
            this.y = bottom;
            this.vy = 0;
            if (this.status === 3) this.status = 0;
        }
        if (this.x < left_edge) {
            this.x = left_edge;
        }

        if (this.x > right_edge) {
            this.x = right_edge;
        }
    }

    is_collision(r1, r2) {
        if (Math.max(r1.x1, r2.x1) > Math.min(r1.x2, r2.x2)) return false;
        if (Math.max(r1.y1, r2.y1) > Math.min(r1.y2, r2.y2)) return false;
        return true;
    }

    is_attack() {
        if (this.status === 6) return;

        this.status = 5;
        this.frame_current_cnt = 0;

        this.hp = Math.max(this.hp - 10, 0);

        this.$hp_in.animate(
            { width: this.$hp.parent().width() * this.hp / 100 },
            200
        );

        this.$hp.animate(
            { width: this.$hp.parent().width() * this.hp / 100, },
            400
        );

        // this.$hp.width(this.$hp.parent().width() * this.hp / 100);

        if (this.hp <= 0) {
            this.status = 6;
            this.vx = 0;
            this.frame_current_cnt = 0;
        }
    }

    update_attack() {
        if (this.status === 4 && this.frame_current_cnt === 18) {
            let me = this, you = this.root.players[1 - this.id];
            let r1, r2;
            if (this.direction > 0) {
                r1 = {
                    x1: me.x + 120,
                    y1: me.y + 40,
                    x2: me.x + 120 + 100,
                    y2: me.y + 40 + 20,
                };
            }
            else {
                r1 = {
                    x1: me.x - 100,
                    y1: me.y + 40,
                    x2: me.x - 100 + 100,
                    y2: me.y + 40 + 20,
                }
            }

            r2 = {
                x1: you.x,
                y1: you.y,
                x2: you.x + you.width,
                y2: you.y + you.height,
            }

            if (this.is_collision(r1, r2)) {
                you.is_attack();
            }
        }
    }

    render() {
        // this.ctx.fillStyle = 'blue';
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        // console.log(this.x, this.y, this.width, this.height, this.color);

        // if (this.direction > 0) {
        //     this.ctx.fillStyle = 'red';
        //     this.ctx.fillRect(this.x + 120, this.y + 40, 100, 20);
        // }
        // else {
        //     this.ctx.fillStyle = 'red';
        //     this.ctx.fillRect(this.x - 100, this.y + 40, 100, 20);
        // }

        let status = this.status;

        if (this.status === 1 && this.direction * this.vx < 0) status = 2;

        let obj = this.animations.get(status);

        if (obj && obj.loaded) {
            if (this.direction > 0) {
                let k = parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt;
                let image = obj.gif.frames[k].image;
                this.ctx.drawImage(image, this.x, this.y + obj.offset_y, image.width * obj.scale, image.height * obj.scale);
            }
            else {
                this.ctx.save();
                this.ctx.translate(this.root.gamemap.ctx.canvas.width, 0);
                this.ctx.scale(-1, 1);

                let k = parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt;
                let image = obj.gif.frames[k].image;
                this.ctx.drawImage(image, this.root.gamemap.ctx.canvas.width - this.x - this.width, this.y + obj.offset_y, image.width * obj.scale, image.height * obj.scale);
                this.ctx.restore();
            }
        }

        if (status === 3 || status === 4 || status === 5 || status === 6) {
            if (this.frame_current_cnt == obj.frame_rate * (obj.frame_cnt - 1)) {
                if (status === 6) {
                    this.frame_current_cnt--;
                }
                else this.status = 0;
            }
        }

        this.frame_current_cnt++;
    }
}

export {
    Player
}