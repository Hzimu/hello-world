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
var heroList_item = (function (_super) {
    __extends(heroList_item, _super);
    function heroList_item() {
        var _this = _super.call(this) || this;
        _this.skinName = 'heroListItem';
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    heroList_item.prototype.onComplete = function () {
        var _this = this;
        this.ce_select.addEventListener(eui.UIEvent.CHANGE, function (e) {
            _this.data.isSelected = _this.data.selected;
            console.log(_this.data);
        }, this);
    };
    heroList_item.prototype.dataChange = function () {
        this.ce_select.selected = this.data.isSelected;
    };
    return heroList_item;
}(eui.ItemRenderer));
__reflect(heroList_item.prototype, "heroList_item");
//# sourceMappingURL=heroList_item.js.map