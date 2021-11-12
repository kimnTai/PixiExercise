package com.pattern.singleton.demo9;

import java.io.IOException;
import java.io.InputStream;

public class RuntimeDemo {
    public static void main(String[] args) throws IOException {
        // 獲取 Runtime 物件
        Runtime runtime = Runtime.getRuntime();
        // 調用 runtime 的方法，參數要的是一個命令
        Process process = runtime.exec("node -v");
        // 調用 process 物件的獲取輸入流的方法
        InputStream inputStream = process.getInputStream();
        byte[] arr = new byte[1024 * 1024 * 100];
        // 讀取數據
        int len = inputStream.read(arr);    // 返回讀到的字節個數
        // 將字節束組轉換為字串輸出
        System.out.println(new String(arr, 0, len, "GBK"));
    }
}
