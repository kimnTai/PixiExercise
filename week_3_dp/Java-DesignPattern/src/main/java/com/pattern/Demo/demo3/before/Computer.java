package com.pattern.Demo.demo3.before;

public class Computer {
    private WdHardDisk hardDisk;
    private IntelCpu cpu;
    private KingstonMemory memory;

    public void run() {
        System.out.println("運行電腦");
        String data = hardDisk.get();
        System.out.println("從硬碟中獲取的數據是" + data);
        cpu.run();
        memory.save();
    }

    public WdHardDisk getHardDisk() {
        return hardDisk;
    }

    public void setHardDisk(WdHardDisk hardDisk) {
        this.hardDisk = hardDisk;
    }

    public IntelCpu getCpu() {
        return cpu;
    }

    public void setCpu(IntelCpu cpu) {
        this.cpu = cpu;
    }

    public KingstonMemory getMemory() {
        return memory;
    }

    public void setMemory(KingstonMemory memory) {
        this.memory = memory;
    }
}
