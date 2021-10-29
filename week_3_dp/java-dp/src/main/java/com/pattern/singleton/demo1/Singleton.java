package com.pattern.singleton.demo1;

// 餓漢式
public class Singleton {
    // 私有構造方法
    private Singleton() {
    }

    // 在本類中創建本類物件
    private static Singleton instance = new Singleton();

    // 提供一個公共的訪問方式，讓外界獲取該物件
    public static Singleton getInstance() {
        return instance;
    }
}

class Client{
    public static void main(String[] args) {
        Singleton instance = Singleton.getInstance();
        Singleton instance1 = Singleton.getInstance();
        System.out.println(instance == instance1);
    }
}