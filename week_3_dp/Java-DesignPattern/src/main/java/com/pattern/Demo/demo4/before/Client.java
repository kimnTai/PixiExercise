package com.pattern.Demo.demo4.before;

public class Client {
    public static void main(String[] args) {
        NewSafetyDoor door = new NewSafetyDoor();
        door.antiTheft();
        door.fireProof();
        door.waterProof();
    }
}
