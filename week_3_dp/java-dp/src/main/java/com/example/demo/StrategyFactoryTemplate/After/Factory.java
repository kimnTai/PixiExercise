package com.example.demo.StrategyFactoryTemplate.After;

import org.springframework.util.StringUtils;
import org.testng.collections.Maps;

import java.util.Map;

public class Factory {
    private static final Map<String, Handler> strategyMap = Maps.newHashMap();

    public static Handler getStrategy(String str) {
        return strategyMap.get(str);
    }

    public static void register(String name, Handler handler) {
        if (!StringUtils.hasText(name) || null == handler) {
            return;
        }
        strategyMap.put(name, handler);
    }
}
