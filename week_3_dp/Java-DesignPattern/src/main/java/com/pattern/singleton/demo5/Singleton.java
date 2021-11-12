package com.pattern.singleton.demo5;

// 懶漢式: 靜態內部類
public class Singleton {
    // 私有構造方法
    private Singleton() {
    }

    // 定義一個靜態內部類
    private static class SingletonHolder {
        // 在內部類中聲明並初始化外部類的物件
        private static final Singleton INSTANCE = new Singleton();
    }

    // 對外提供獲取該類物件的方法
    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}

class Client {
    public static void main(String[] args) {
        Singleton instance = Singleton.getInstance();
        Singleton instance1 = Singleton.getInstance();
        System.out.println(instance == instance1);
    }
}