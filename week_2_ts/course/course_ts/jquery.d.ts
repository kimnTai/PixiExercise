// ES6 模塊化
declare module "jquery" {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  // 混合類型
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}

// 定義全局函數

// 函數重載

// 如何對物件進行類型定義，以及對類進行類型定義，以及命名空間的嵌套

// 使用 interface 的語法，實現函數重載
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }
// declare var $: JQuery;
