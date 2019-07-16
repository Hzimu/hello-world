var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    // 在构造函数中创建好场景，保存到属性
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playerScene = new PLayerScene();
    }
    /**
     * 设置根场景
     */
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.showInfo = function (arr) {
        var text = "你选择了:";
        if (arr.length === 0) {
            text = "什么都没选，厉害！";
        }
        else {
            text += arr.toString();
        }
        // 新建一个消息背景图
        var img = new egret.Bitmap();
        img.texture = RES.getRes("toast-bg_png");
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        // 新建一个label用来显示
        var label = new egret.TextField();
        label.text = text;
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label);
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2;
        label.y = 50;
        label.height = 40;
        // 创建一个定时器,1000毫秒后删除label
        var timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.mainScene.removeChild(label);
            SceneManager.instance.mainScene.removeChild(img);
        }, this);
    };
    /****************场景*********************************************/
    /**
     * 主场景
     */
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage; // (根) 舞台
        var mainScene = SceneManager.instance.mainScene; // 主场景
        mainScene.toggleBtn(0);
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if (!mainScene.parent) {
            // 未被添加到场景
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene);
        }
        // 判断玩家场景是否有父级(是否在场景中)
        if (SceneManager.instance.playerScene.parent) {
            // 如果有就删除玩家场景
            mainScene.removeChild(SceneManager.instance.playerScene);
        }
    };
    /**
     * 玩家场景
     */
    SceneManager.toPlayerScene = function () {
        var stage = this.instance._stage;
        // 把玩家场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map