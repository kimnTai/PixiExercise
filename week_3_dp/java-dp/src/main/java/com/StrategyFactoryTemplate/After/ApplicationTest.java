package com.StrategyFactoryTemplate.After;


import org.springframework.boot.test.context.SpringBootTest;
import org.testng.annotations.Test;


public class ApplicationTest {
    public static void main(String[] args) {
        String name = "張三";
        Handler strategy = Factory.getStrategy(name);
        strategy.logic(name);
    }

    void Design() {

//        if (name.equals("張三")) {
//            System.out.println("張三完成任務");
//        } else if (name.equals("李四")) {
//            System.out.println("李四完成任務");
//        } else if (name.equals("王五")) {
//            System.out.println("王五完成任務");
//        } else if (name.equals("越六")) {
//            System.out.println("越六完成任務");
//        } else if (name.equals("田七")) {
//            System.out.println("田七完成任務");
//        } else if (name.equals("越八")) {
//            System.out.println("越八完成任務");
//        }
    }
}
