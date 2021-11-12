import ModalFactory from "./factory";
(() => {
  // 獲取 dom 元素
  const oModal = document.querySelector(".modal");
  const oBtnGroup = document.querySelector(".btn-group");
  if (oModal == null) {
    return;
  }
  const modalFactory = new ModalFactory(oModal);

  function init(): void {
    bindEvent();
  }
  function bindEvent(): void {
    if (oBtnGroup == null) {
      return;
    }
    oBtnGroup.addEventListener("click", handleBtnClick, false);
  }
  function handleBtnClick(e: any): void {
    const tar = e.target;
    const tagName: string = tar.tagName.toLowerCase();
    if (tagName === "button") {
      const status: string = tar.dataset.status;
      modalFactory.create("這是一個工廠模式應用", status);
    }
  }
  // 希望有個物件可以幫我創造模態框、可以根據需求增加功能，方便達到目的
  // 狀態切換
  init();
})();
