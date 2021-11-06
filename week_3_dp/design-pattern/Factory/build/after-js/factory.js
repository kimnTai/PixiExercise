import { ModalTypes, ModalClassName } from "./typing.js";

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
   title;
   constructor(status) {
      this.status = status;
   }
   get className() {
      let classStr = "modal" + " ";
      switch (this.status) {
         case ModalTypes.SUCCESS:
            classStr += ModalClassName.SUCCESS;
            break;
         case ModalTypes.WARNING:
            classStr += ModalClassName.WARNING;
            break;
         case ModalTypes.ERROR:
            classStr += ModalClassName.ERROR;
            break;
         default:
            break;
      }
      return classStr;
   }
   static checkStatusIsExist(types, status) {
      for (let i in types) {
         if (types[i] === status) {
            return true
         }
      }
      return false
   }
   static outputInfo(info) {

      console.log(info);
   }

}
class SuccessModal extends Modal {
   constructor(title) {
      super(ModalTypes.SUCCESS);
      this.title = `成功 : ${title}`;
   }
   goHome(url) {
      setTimeout(() => {
         window.location.href = url
      }, 2000)
   }
}
class WarningModal extends Modal {
   constructor(title) {
      super(ModalTypes.WARNING);
      this.title = `告警 : ${title}`;
   }
   outputInfo(info) {
      Modal.outputInfo("告警提示 : " + info)
   }
}
class ErrorModal extends Modal {
   constructor(title) {
      super(ModalTypes.ERROR);
      this.title = `失敗 : ${title}`;
   }
   outputInfo(err) {
      Modal.outputInfo('錯誤提示 : ' + err)
   }
}

class ModalFactory {
   constructor(dom) {
      this.dom = dom;
   }
   create(title, status) {
      const statusIsExist = Modal.checkStatusIsExist(ModalTypes, status)
      if (!statusIsExist) {
         throw new Error('Modal 型別不存在')
      }
      let modal = null;
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
      this.dom.getElementsByTagName("header")[0].innerText = modal.title;
      this.dom.className = modal.className;

      return {
         outputInfo: modal.outputInfo,
         goHome: modal.goHome
      }
   }
}

export default ModalFactory;