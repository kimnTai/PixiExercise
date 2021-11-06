(() => {
  // 獲取 dom 元素
  const oModal = document.querySelector(".modal");
  const oBtnGroup = document.querySelector(".btn-group");
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
      changeStatus(status);
    }
  }
  // 希望有個物件可以幫我創造模態框、可以根據需求增加功能，方便達到目的
  // 狀態切換
  function changeStatus(status: string): void {
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
