package com.pattern.factory.simple;


public class SimpleCoffeeFactory {

    public Coffee createCoffee(String type) {
        // 聲明 Coffee 類型的變數，根據不同的類型創建不同的 Coffee 子類物件
        Coffee coffee = null;
        if ("american".equals(type)) {
            coffee = new AmericanCoffee();
        } else if ("latte".equals(type)) {
            coffee = new LatteCoffee();
        } else {
            throw new RuntimeException("你所點的咖啡沒有");
        }
        return coffee;
    }
}
