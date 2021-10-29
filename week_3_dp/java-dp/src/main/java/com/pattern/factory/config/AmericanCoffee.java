package com.pattern.factory.config;

import com.pattern.factory.method.Coffee;

public class AmericanCoffee extends Coffee {

    @Override
    public String getName() {
        return "美式咖啡";
    }
}
