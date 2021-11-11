package com.pattern.Demo.demo3.before;

public class WdHardDisk {
    public void save(String data) {
        System.out.println("使用硬碟儲存數據為 :" + data);
    }

    public String get() {
        System.out.println("使用硬碟讀取數據");
        return "數據";
    }
}
