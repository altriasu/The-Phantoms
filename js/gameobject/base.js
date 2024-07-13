let GAME_OBJECTS = [];

class GameObject {
    constructor() {
        GAME_OBJECTS.push(this);

        this.timedelta = 0;
        this.has_call_start = false;
    }

    start() { // 初始执行一次

    }

    update() { // 每一帧执行一次

    }

    destory() { // 删除当前对象
        for (let i in GAME_OBJECTS) {
            if (GAME_OBJECTS[i] == this) {
                GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let lasttimestamp;

let GameObjectFrame = function (timestamp) {
    for (let obj of GAME_OBJECTS) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        }
        else {
            obj.timedelta = timestamp - lasttimestamp;
            obj.update();
        }
    }

    lasttimestamp = timestamp;
    requestAnimationFrame(GameObjectFrame);
}

requestAnimationFrame(GameObjectFrame);

export {
    GameObject
}