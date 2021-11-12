package com.example.demo.StrategyFactoryTemplate.After;

import org.springframework.beans.factory.InitializingBean;

public interface Handler extends InitializingBean {
    public void logic(String name);
}
