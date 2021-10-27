package com.mypage.host.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.mail.internet.InternetAddress;
import java.io.UnsupportedEncodingException;

@Controller
public class MainController {

    @GetMapping("/")
    public String mainPage() {
        return "mainPage";
    }

    @GetMapping("/en")
    public String mainPage_en() {
        return "mainPage_english";
    }

    @Autowired
    MailSender send;

    @Value("${spring.mail.username}")
    private String username;

    @Value("${spring.mail.password}")
    private String pwd;


    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ModelAndView send(@RequestParam("sender") String sender, @RequestParam("emailSubject") String emailSubject,
                             @RequestParam("emailContent") String emailContent, ModelAndView m) throws UnsupportedEncodingException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("ilpyoyang@gmail.com");
        message.setFrom(String.valueOf(new InternetAddress(username,pwd)));
        message.setSubject(emailSubject);
        message.setText("sender: "+sender+"\ncontents: "+emailContent);

        send.send(message);

        m.setViewName("msg");
        return m;
    }
}

