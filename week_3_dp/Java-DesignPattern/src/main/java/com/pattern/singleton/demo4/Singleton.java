package com.pattern.singleton.demo4;

// 懶漢式: 靜態代碼塊
public class Singleton {
    // 私有構造方法
    private Singleton() {
    }

    // 聲明 Singleton 類型的變量
    // 使用 volatile 解決多線程空指針問題
    private static volatile Singleton instance;  // null

    // 對外提供獲取該類物件的方法
    public static  Singleton getInstance() {
        // 第一次判斷
        if (instance == null) {
            synchronized (Singleton.class) {
                // 第二次判斷
                if (instance == null) {
                    instance = new Singleton();
                }
            }
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