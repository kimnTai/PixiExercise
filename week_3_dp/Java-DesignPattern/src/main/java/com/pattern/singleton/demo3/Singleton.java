package com.pattern.singleton.demo3;

// 懶漢式: 靜態代碼塊
public class Singleton {
    // 私有構造方法
    private Singleton() {
    }

    // 聲明 Singleton 類型的變量
    private static Singleton instance;  // null

    // 對外提供獲取該類物件的方法
    public static synchronized Singleton getInstance() {
        // 判斷 instance 是否為 nll ，說明還沒有創建 Singleton 類的物件
        // 如果沒有，創建一個並返回，如果有，直接返回。
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

class Client {
    public static void main(String[] args) {
        Singleton instance = Singleton.getInstance();
        Singleton instance1 = Singleton.getInstance();
        System.out.println(instance == instance1);
    }
}