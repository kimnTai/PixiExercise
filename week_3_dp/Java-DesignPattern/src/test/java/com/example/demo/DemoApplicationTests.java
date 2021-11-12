package com.example.demo;


import com.example.demo.StrategyFactoryTemplate.After.Factory;
import com.example.demo.StrategyFactoryTemplate.After.Handler;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class DemoApplicationTests {

    @Test
    void noDesign() {
        String name = "張三";
        if (name.equals("張三")) {
            System.out.println("張三完成任務");
        } else if (name.equals("李四")) {
            System.out.println("李四完成任務");
        } else if (name.equals("王五")) {
            System.out.println("王五完成任務");
        } else if (name.equals("越六")) {
            System.out.println("越六完成任務");
        } else if (name.equals("田七")) {
            System.out.println("田七完成任務");
        } else if (name.equals("林八")) {
            System.out.println("林八完成任務");
        }
    }
    @Test
    void Design() {
        String name = "張三";
        Handler strategy = Factory.getStrategy(name);
        strategy.logic(name);
        String name2 = "林八";
        strategy = Factory.getStrategy(name2);
        strategy.logic(name2);
    }

}
