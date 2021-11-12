package com.pattern.Demo.demo3.after;

public class Computer {
    // 依賴於抽象
    private HardDisk hardDisk;
    private Cpu cpu;
    private Memory memory;

    public void run() {
        System.out.println("運行電腦");
        String data = hardDisk.get();
        System.out.println("從硬碟中獲取的數據是: " + data);
        cpu.run();
        memory.save();
    }

    public HardDisk getHardDisk() {
        return hardDisk;
    }

    public void setHardDisk(HardDisk hardDisk) {
        this.hardDisk = hardDisk;
    }

    public Cpu getCpu() {
        return cpu;
    }

    public void setCpu(Cpu cpu) {
        this.cpu = cpu;
    }

    public Memory getMemory() {
        return memory;
    }

    public void setMemory(Memory memory) {
        this.memory = memory;
    }
}
