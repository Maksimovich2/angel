package com.USA.angel.usa;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerUSA {

    @GetMapping("/usa")
    public String greeting() {
        return "usaAngel";
    }
    @GetMapping("/question")
    public String showQuestion() {
        return "question";
    }

}
