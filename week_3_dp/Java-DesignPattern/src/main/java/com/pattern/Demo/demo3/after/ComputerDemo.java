package com.pattern.Demo.demo3.after;

public class ComputerDemo {
    public static void main(String[] args) {
        // 創建組件物件
        HardDisk hardDisk = new WdHardDisk();
        IntelCpu intelCpu = new IntelCpu();
        AmdCpu amdCpu = new AmdCpu();
        KingstonMemory memory = new KingstonMemory();

        // 創建電腦物件
        Computer computer = new Computer();

        // 組裝
        computer.setCpu(amdCpu);
        computer.setHardDisk(hardDisk);
        computer.setMemory(memory);
        // 運行
        computer.run();
    }
}
