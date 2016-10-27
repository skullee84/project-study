package com.study.app.config.spring;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by dominic.lee on 2016. 10. 26..
 */
// root-context.xml
@Configuration
@ComponentScan(
    basePackages = {"com.study.app", "com.study.support.aspect"},
    excludeFilters = {
        @ComponentScan.Filter(RestController.class),
        @ComponentScan.Filter(Configuration.class)
    }
)
public class ApplicationConfiguration {
}
