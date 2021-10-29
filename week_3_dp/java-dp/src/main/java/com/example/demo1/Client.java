package com.example.demo1;

public class Client {
    public static void main(String[] args) {
        // 創建輸入法物件
        Input input = new Input();
        // 創建皮膚物件
        //DefaultSkin skin = new DefaultSkin();
        OtherSkin skin = new OtherSkin();

        // 將皮膚設置到輸入法中
        input.setSkin(skin);
        // 顯示皮膚
        input.display();
    }
}
