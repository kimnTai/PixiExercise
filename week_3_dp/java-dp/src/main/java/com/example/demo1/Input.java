package com.example.demo1;

public class Input {
    private AbstractSkin skin;

    public void setSkin(AbstractSkin skin) {
        this.skin = skin;
    }
    public void display(){
        skin.display();
    }
}
