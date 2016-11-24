package com.study.app.service.impl;

import com.study.app.service.CommandService;
import com.study.support.exception.CommandRuntimeException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by dominic.lee on 2016. 11. 24..
 */
@Component
public class CommandServiceImpl implements CommandService {

    private static final String[] searchCharSequences = {
        "rm", "mv", "cp", "sudo", "su", "mkdir", "cat"
    };

    @Override
    public List<String> run(String command) {
        confirmCommand(command);
        try {
            Process proc = Runtime.getRuntime().exec(command, null, Paths.get(System.getProperty("user.home")).toFile());

            try (BufferedReader buffer = new BufferedReader(new InputStreamReader(proc.getInputStream()))) {
                return buffer.lines().collect(Collectors.toList());
            }
        } catch (IOException e) {
            throw new CommandRuntimeException(e.getMessage());
        }
    }

    private void confirmCommand(String command) {
        if(StringUtils.isEmpty(command) || StringUtils.containsAny(command.toLowerCase(), searchCharSequences)) {
            throw new CommandRuntimeException("oops! unavailable command.");
        }
    }

}
