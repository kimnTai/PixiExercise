package com.example.demo.StrategyFactoryTemplate.After.Person;

import com.example.demo.StrategyFactoryTemplate.After.Factory;
import com.example.demo.StrategyFactoryTemplate.After.Handler;
import org.springframework.stereotype.Component;

@Component
public class PersonB implements Handler {
    @Override
    public void logic(String name) {
        System.out.println("李四完成任務");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        Factory.register("李四",this);
    }
}
