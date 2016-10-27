package com.study.app.controller.view;

import com.study.app.service.AppService;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.inject.Inject;

/**
 * Created by dominic.lee on 2016. 10. 26..
 */
@Controller
public class ViewContorller {

    @Inject
    private AppService appService;

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    public String home() {
        return "home";
    }

    @RequestMapping(value = "home", method = RequestMethod.GET)
    public void home(ModelMap map) {
        map.put("view", "home");
        map.put("data", appService.getSampleData());
    }
}
