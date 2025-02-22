package com.server.soogohaesseo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(value="/api/todo")
public class TodoController {
    @GetMapping("/")
    public String getTodo() {
        log.debug("getTodo controller starts!");

        return "hoho!";
    }
}
