"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typing_1 = require("./typing");
/**
 * 有一些公共的方法、屬性、靜態工具
 * Modal 父類
 * 對每種狀態內部的屬性加工，每種狀態的功能擴展
 * Success Warning Error Modal 不同的類 -> Modal
 *
 * 有個工廠通過傳入的狀態，來自動產生相對應的類
 * Modal Factory
 */
var Modal = /** @class */ (function () {
    function Modal(status) {
        this.status = status;
        this.status = status;
    }
    Object.defineProperty(Modal.prototype, "className", {
        get: function () {
            var classStr = "modal";
            switch (this.status) {
                case typing_1.ModalTypes.SUCCESS:
                    classStr += "success";
                    break;
                case typing_1.ModalTypes.WARNING:
                    classStr += "warning";
                    break;
                case typing_1.ModalTypes.ERROR:
                    classStr += "error";
                    break;
                default:
                    break;
            }
            return classStr;
        },
        enumerable: false,
        configurable: true
    });
    return Modal;
}());
var SuccessModal = /** @class */ (function (_super) {
    __extends(SuccessModal, _super);
    function SuccessModal(title) {
        var _this = _super.call(this, typing_1.ModalTypes.SUCCESS) || this;
        _this.title = "\u6210\u529F : " + title;
        return _this;
    }
    return SuccessModal;
}(Modal));
var WarningModal = /** @class */ (function (_super) {
    __extends(WarningModal, _super);
    function WarningModal(title) {
        var _this = _super.call(this, typing_1.ModalTypes.WARNING) || this;
        _this.title = "\u544A\u8B66 : " + title;
        return _this;
    }
    return WarningModal;
}(Modal));
var ErrorModal = /** @class */ (function (_super) {
    __extends(ErrorModal, _super);
    function ErrorModal(title) {
        var _this = _super.call(this, typing_1.ModalTypes.ERROR) || this;
        _this.title = "\u5931\u6557 : " + title;
        return _this;
    }
    return ErrorModal;
}(Modal));
var ModalFactory = /** @class */ (function () {
    function ModalFactory(dom) {
        this.dom = dom;
    }
    ModalFactory.prototype.create = function (title, status) {
        var dom = this.dom;
        var modal;
        switch (status) {
            case typing_1.ModalTypes.SUCCESS:
                modal = new SuccessModal(title);
                break;
            case typing_1.ModalTypes.WARNING:
                modal = new WarningModal(title);
                break;
            case typing_1.ModalTypes.ERROR:
                modal = new ErrorModal(title);
                break;
            default:
                break;
        }
        if (modal) {
            dom.getElementsByTagName("header")[0].innerText = modal.title;
            dom.className = modal.className;
        }
    };
    return ModalFactory;
}());
exports.default = ModalFactory;
