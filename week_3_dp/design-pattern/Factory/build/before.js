"use strict";
(function () {
    // 獲取 dom 元素
    var oModal = document.querySelector(".modal");
    var oBtnGroup = document.querySelector(".btn-group");
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
            changeStatus(status_1);
        }
    }
    // 希望有個物件可以幫我創造模態框、可以根據需求增加功能，方便達到目的
    // 狀態切換
    function changeStatus(status) {
        if (oModal == null) {
            return;
        }
        switch (status) {
            case "S":
                oModal.className = "modal success";
                break;
            case "W":
                oModal.className = "modal warning";
                break;
            case "E":
                oModal.className = "modal error";
                break;
            default:
                break;
        }
    }
    init();
})();
