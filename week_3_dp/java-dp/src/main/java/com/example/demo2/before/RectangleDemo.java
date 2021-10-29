package com.example.demo2.before;

public class RectangleDemo {
    // 拓寬方法
    public static void resize(Rectangle rectangle) {
        // 判斷寬如果比長小，進行拓寬的操作
        while (rectangle.getWidth() <= rectangle.getLength()) {
            rectangle.setWidth(rectangle.getWidth() + 1);
        }
    }
    // 印出長和寬
    public static void printLengthAndWidth(Rectangle rectangle) {
        System.out.println(rectangle.getLength());
        System.out.println(rectangle.getWidth());
    }
    public static void main(String[] args) {
        // 創建長方形物件
        Rectangle r = new Rectangle();
        r.setLength(20);
        r.setWidth(10);
        // 調用 resize 方法進行拓寬
        resize(r);
        printLengthAndWidth(r);
        System.out.println("------分隔線------");
        // 創建正方形物件
        Square s = new Square();
        s.setLength(10);
        // 調用 resize 方法進行拓寬 - 這段會不斷執行造成錯誤
        resize(s);
        printLengthAndWidth(s);
    }
}
