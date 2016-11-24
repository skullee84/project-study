package com.study.support.exception;

/**
 * Created by dominic.lee on 2016. 11. 24..
 */
public class CommandRuntimeException extends RuntimeException {
    private static final long serialVersionUID = -2135752953061605913L;

    public CommandRuntimeException(String message) {
        super(message);
    }
}
