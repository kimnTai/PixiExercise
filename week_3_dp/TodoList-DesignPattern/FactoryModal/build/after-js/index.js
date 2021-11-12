import ModalFactory from "./factory.js";
import { ModalTypes } from "./typing.js";
(() => {
	// 獲取 dom 元素
	const oModal = document.querySelector(".modal");
	const oBtnGroup = document.querySelector(".btn-group");
	const modalFactory = new ModalFactory(oModal);
	function init() {
		bindEvent();
	}
	function bindEvent() {
		oBtnGroup.addEventListener("click", handleBtnClick, false);
	}
	function handleBtnClick(e) {
		const tar = e.target;
		const tagName = tar.tagName.toLowerCase();
		if (tagName === "button") {
			const status = tar.dataset.status;
			const modal = modalFactory.create("這是一個工廠模式應用", status);
			switch (status) {
				case ModalTypes.SUCCESS: modal.goHome("https://www.google.com.tw/"); break
				case ModalTypes.WARNING: modal.outputInfo('這是一個告警提示'); break
				case ModalTypes.ERROR: modal.outputInfo('這是一個錯誤提示'); break
				default: break
			}
		}
	}


	init();
	console.log('test');
})();
