package com.pattern.Demo.demo4.after;

public class Client {
    public static void main(String[] args) {
        AppleSafetyDoor door = new AppleSafetyDoor();
        door.antiTheft();
        door.fireProof();
        door.waterProof();
        GoogleSafetyDoor googleSafetyDoor = new GoogleSafetyDoor();
        googleSafetyDoor.antiTheft();
        googleSafetyDoor.fireProof();
    }
}
