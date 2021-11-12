package com.pattern.Demo.demo2.after;

public class RectangleDemo {
    // 拓寬方法
    public static void resize(Rectangle rectangle) {
        // 判斷寬如果比長小，進行拓寬的操作
        while (rectangle.getWidth() <= rectangle.getLength()) {
            rectangle.setWidth(rectangle.getWidth() + 1);
        }
    }

    // 印出長和寬
    public static void printLengthAndWidth(Quadrilateral quadrilateral) {
        System.out.println(quadrilateral.getLength());
        System.out.println(quadrilateral.getWidth());
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
        s.setSide(10);
        //resize(s);  --- 只有長方形可以調用
        printLengthAndWidth(s);
    }
}
