package com.template;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;
@EnableAutoConfiguration(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class
})
@EnableTransactionManagement
@ServletComponentScan
@MapperScan("com.template.*.mapper,com.template.*.dao")
@SpringBootApplication
@EnableCaching
public class TemplateApplication{
    public static void main(String[] args) {
        SpringApplication.run(TemplateApplication.class, args);
        System.out.println("ヾ(◍°∇°◍)ﾉﾞ    项目启动成功      ヾ(◍°∇°◍)ﾉﾞ\n");
    }

//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
//        return builder.sources(TemplateApplication.class);
//    }
}
