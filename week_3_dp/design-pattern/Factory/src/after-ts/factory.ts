import { ModalTypes } from "./typing";

/**
 * 有一些公共的方法、屬性、靜態工具
 * Modal 父類
 * 對每種狀態內部的屬性加工，每種狀態的功能擴展
 * Success Warning Error Modal 不同的類 -> Modal
 *
 * 有個工廠通過傳入的狀態，來自動產生相對應的類
 * Modal Factory
 */

class Modal {
  title!: string;
  constructor(private status: unknown) {
    this.status = status;
  }
  get className() {
    let classStr = "modal";
    switch (this.status) {
      case ModalTypes.SUCCESS:
        classStr += "success";
        break;
      case ModalTypes.WARNING:
        classStr += "warning";
        break;
      case ModalTypes.ERROR:
        classStr += "error";
        break;
      default:
        break;
    }
    return classStr;
  }
}
class SuccessModal extends Modal {
  constructor(title: string) {
    super(ModalTypes.SUCCESS);
    this.title = `成功 : ${title}`;
  }
}
class WarningModal extends Modal {
  constructor(title: string) {
    super(ModalTypes.WARNING);
    this.title = `告警 : ${title}`;
  }
}
class ErrorModal extends Modal {
  constructor(title: string) {
    super(ModalTypes.ERROR);
    this.title = `失敗 : ${title}`;
  }
}

export default class ModalFactory {
  dom: Element;
  constructor(dom: Element) {
    this.dom = dom;
  }
  create(title: string, status: string) {
    const dom: Element = this.dom;
    let modal;
    switch (status) {
      case ModalTypes.SUCCESS:
        modal = new SuccessModal(title);
        break;
      case ModalTypes.WARNING:
        modal = new WarningModal(title);
        break;
      case ModalTypes.ERROR:
        modal = new ErrorModal(title);
        break;
      default:
        break;
    }
    if (modal) {
      dom.getElementsByTagName("header")[0].innerText = modal.title;
      dom.className = modal.className;
    }
  }
}
