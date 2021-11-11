package com.example.demo.StrategyFactoryTemplate.After.Person;

import com.example.demo.StrategyFactoryTemplate.After.Factory;
import com.example.demo.StrategyFactoryTemplate.After.Handler;
import org.springframework.stereotype.Component;

@Component
public class PersonD implements Handler {
    @Override
    public void logic(String name) {
        System.out.println("越六完成任務");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        Factory.register("越六",this);
    }
}
