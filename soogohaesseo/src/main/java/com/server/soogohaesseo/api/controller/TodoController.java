package com.server.soogohaesseo.api.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(value="/api/todo")
public class TodoController {
    @GetMapping("/")
    public String main() {
        log.debug("main controller starts!");
        return "Hello my pal!";
    }
}
