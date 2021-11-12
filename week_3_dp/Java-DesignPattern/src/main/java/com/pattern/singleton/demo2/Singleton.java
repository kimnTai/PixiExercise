package com.pattern.singleton.demo2;

// 餓漢式: 靜態代碼塊
public class Singleton {
    // 私有構造方法
    private Singleton() {
    }

    // 聲明 Singleton 類型的變量
    private static Singleton instance;  // null

    // 在靜態代碼塊中進行賦值
    static {
        instance = new Singleton();
    }

    // 對外提供獲取該類物件的方法
    public static Singleton getInstance() {
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