package com.StrategyFactoryTemplate.After;
import org.apache.commons.lang.StringUtils;
import org.testng.collections.Maps;

import java.util.Map;

public class Factory {
    private static final Map<String, Handler> strategyMap = Maps.newHashMap();

    public static Handler getStrategy(String str) {
        return strategyMap.get(str);
    }

    public static void register(String str, Handler handler) {
        if (StringUtils.isEmpty(str) || null == handler) {
            return;
        }
        strategyMap.put(str, handler);
    }
}
