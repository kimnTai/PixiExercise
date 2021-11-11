package com.example.demo.StrategyFactoryTemplate.After.Person;

import com.example.demo.StrategyFactoryTemplate.After.Factory;
import com.example.demo.StrategyFactoryTemplate.After.Handler;
import org.springframework.stereotype.Component;

@Component
public class PersonC implements Handler {
    @Override
    public void logic(String name) {
        System.out.println("王五完成任務");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        Factory.register("王五",this);
    }
}
