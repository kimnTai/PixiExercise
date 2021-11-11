package com.pattern.Demo.demo4.after;

public class AppleSafetyDoor implements AntiTheft,FireProof,WaterProof {
    @Override
    public void antiTheft() {
        System.out.println("防盜");
    }

    @Override
    public void fireProof() {
        System.out.println("防火");
    }

    @Override
    public void waterProof() {
        System.out.println("防水");
    }
}
