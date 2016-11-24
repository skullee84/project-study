package com.study.app.controller;

import com.study.app.service.CommandService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class CommandContorller {

    private final CommandService commandService;

    @Inject
    public CommandContorller(CommandService commandService) {
        this.commandService = commandService;
    }

    @RequestMapping(value = "cmd", method = RequestMethod.GET)
    public Object data(String command) {
        return commandService.run(command);
    }
}
