package com.pattern.factory.method;

// 美式咖啡工廠物件，用來生產美式咖啡
public class AmericanCoffeeFactory implements CoffeeFactory {
    @Override
    public Coffee createCoffee() {
        return new AmericanCoffee();
    }
}
