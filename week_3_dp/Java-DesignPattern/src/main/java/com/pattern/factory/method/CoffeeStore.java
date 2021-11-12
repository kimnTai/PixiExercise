package com.pattern.factory.method;

public class CoffeeStore {
    // 依賴於工廠
    private CoffeeFactory factory;
    public void setFactory(CoffeeFactory factory) {
        this.factory = factory;
    }
    public Coffee orderCoffee() {
        Coffee coffee = factory.createCoffee();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    }
}

class test {
    public static void main(String[] args) {
        CoffeeStore store = new CoffeeStore();
        // 創建工廠
        //CoffeeFactory factory = new AmericanCoffeeFactory();
        CoffeeFactory factory = new LatteCoffeeFactory();
        store.setFactory(new LatteCoffeeFactory());
        // 點咖啡
        Coffee coffee = store.orderCoffee();
        System.out.println(coffee.getName());
    }
}