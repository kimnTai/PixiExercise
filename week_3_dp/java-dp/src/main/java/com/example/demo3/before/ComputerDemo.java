package com.example.demo3.before;

public class ComputerDemo {
    public static void main(String[] args) {
        // 創建組件物件
        WdHardDisk hardDisk = new WdHardDisk();
        IntelCpu cpu = new IntelCpu();
        KingstonMemory memory = new KingstonMemory();

        // 創建電腦物件
        Computer computer = new Computer();
        // 組裝
        computer.setCpu(cpu);
        computer.setHardDisk(hardDisk);
        computer.setMemory(memory);
        // 運行
        computer.run();
    }
}
