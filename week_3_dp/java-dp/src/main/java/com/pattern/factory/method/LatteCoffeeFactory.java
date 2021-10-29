package com.pattern.factory.method;

// 拿鐵咖啡工廠，用來生產拿鐵咖啡
public class LatteCoffeeFactory implements CoffeeFactory {
    @Override
    public Coffee createCoffee() {
        return new LatteCoffee();
    }
}
