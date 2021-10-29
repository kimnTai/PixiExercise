package com.example.demo4.after;

public class GoogleSafetyDoor implements AntiTheft, FireProof {
    @Override
    public void antiTheft() {
        System.out.println("google 防盜");
    }

    @Override
    public void fireProof() {
        System.out.println("google 防火");
    }
}
