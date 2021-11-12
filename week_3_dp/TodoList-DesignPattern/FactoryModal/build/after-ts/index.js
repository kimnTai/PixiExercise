"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __importDefault(require("./factory"));
(function () {
    // 獲取 dom 元素
    var oModal = document.querySelector(".modal");
    var oBtnGroup = document.querySelector(".btn-group");
    if (oModal == null) {
        return;
    }
    var modalFactory = new factory_1.default(oModal);
    function init() {
        bindEvent();
    }
    function bindEvent() {
        if (oBtnGroup == null) {
            return;
        }
        oBtnGroup.addEventListener("click", handleBtnClick, false);
    }
    function handleBtnClick(e) {
        var tar = e.target;
        var tagName = tar.tagName.toLowerCase();
        if (tagName === "button") {
            var status_1 = tar.dataset.status;
            modalFactory.create("這是一個工廠模式應用", status_1);
        }
    }
    // 希望有個物件可以幫我創造模態框、可以根據需求增加功能，方便達到目的
    // 狀態切換
    init();
})();
