package com.example.demo3.after;

public class AmdCpu implements Cpu {
    @Override
    public void run() {
        System.out.println("使用 AMD 處理器");
    }
}
