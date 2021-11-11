package com.StrategyFactoryTemplate.Before;

import com.StrategyFactoryTemplate.After.Person.PersonA;
import org.springframework.boot.test.context.SpringBootTest;
import org.testng.annotations.Test;

@SpringBootTest
public class ApplicationTest {
    @Test
    void noDesign() {
        String name = "張三";
        if (name.equals("張三")) {
            new PersonA().logic(name);
        } else if (name.equals("李四")) {
            System.out.println("李四完成任務");
        } else if (name.equals("王五")) {
            System.out.println("王五完成任務");
        } else if (name.equals("越六")) {
            System.out.println("越六完成任務");
        } else if (name.equals("田七")) {
            System.out.println("田七完成任務");
        } else if (name.equals("越八")) {
            System.out.println("越八完成任務");
        }
    }

}
