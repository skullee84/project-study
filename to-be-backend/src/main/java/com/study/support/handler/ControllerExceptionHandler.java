package com.study.support.handler;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.study.support.exception.CommandRuntimeException;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serializable;

/**
 * Created by dominic.lee on 2016. 11. 24..
 */
@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(CommandRuntimeException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public Object orderValidationException(CommandRuntimeException e) {
        return new Response(e.getMessage());
    }

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private static class Response implements Serializable {
        private static final long serialVersionUID = 5107063086837040162L;
        private String message;

        public Response(String message) {
            this.message = message;
        }
    }


}
