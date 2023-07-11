package com.server.soogohaesseo.controller;

import com.server.soogohaesseo.dto.day.GetDayRequestDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(value="/api/day")
public class DayController {
    @GetMapping("/")
    public String getDay(/*@RequestBody GetDayRequestDto getDayRequestDto*/) {
        log.debug("getDay controller starts!");

        return "hihi";
    }
}
