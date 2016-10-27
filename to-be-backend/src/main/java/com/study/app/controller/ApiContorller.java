package com.study.app.controller;

import com.study.app.service.AppService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * Created by dominic.lee on 2016. 10. 26..
 */
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class ApiContorller {

    @Inject
    private AppService appService;

    @RequestMapping(value = "users", method = RequestMethod.GET)
    public Object data() {
        return appService.getSampleData();
    }
}
