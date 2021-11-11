package com.StrategyFactoryTemplate.After.Person;

import com.StrategyFactoryTemplate.After.Factory;
import com.StrategyFactoryTemplate.After.Handler;
import org.springframework.stereotype.Component;

@Component
public class PersonA implements Handler {
    @Override
    public void logic(String name) {
        System.out.println("張三完成任務");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        Factory.register("張三",this);
    }
}
