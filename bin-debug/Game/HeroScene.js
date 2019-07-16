var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HeroScene = (function (_super) {
    __extends(HeroScene, _super);
    function HeroScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "HeroSceneSkin";
        return _this;
    }
    HeroScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeroScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.upInitUI();
    };
    HeroScene.prototype.upInitUI = function () {
        // 原始数组
        var dataArr = [
            { image: 'resource/art/heros_goods/heros01.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros02.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros03.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
            { image: 'resource/art/heros_goods/heros04.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros05.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false }
        ];
        // 转成EUI数组
        var uiArr = new eui.ArrayCollection(dataArr);
        this.list_hero.dataProvider = uiArr;
        // 设置list_hero的项呈视器 (这里直接写类名,而不是写实例)
        this.list_hero.itemRenderer = heroListItem;
        /**这里有两种写法	 */
        //返回键
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
        //确定键
        this.btn_select.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureClick, this);
    };
    /**
     * 点击确定
     */
    HeroScene.prototype.onSureClick = function (egret) {
        SceneManager.toMainScene();
        SceneManager.instance.mainScene.toggleBtn(0);
        var dataPro = this.list_hero.dataProvider;
        var arr = [];
        for (var i = 0; i < dataPro.length; i++) {
            var item = dataPro.getItemAt(i);
            if (item.isSelected) {
                arr.push(item.name);
            }
        }
        SceneManager.showInfo(arr);
    };
    return HeroScene;
}(eui.Component));
__reflect(HeroScene.prototype, "HeroScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HeroScene.js.map