package com.pattern.factory.config;

import com.pattern.factory.method.Coffee;

public class LatteCoffee extends Coffee {
    @Override
    public String getName() {
        return "拿鐵咖啡";
    }
}
