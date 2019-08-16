package com.template.common.controller;

import com.alibaba.fastjson.JSON;
import com.template.common.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 省市区级联查询
 */
@Controller
@RequestMapping("/common/city")
public class CityController {
    @Autowired
    private CityService cityService;

    @RequestMapping("/name")
    @ResponseBody
    public String areaName(@RequestParam(value = "areaId", required = false) Integer areaId) {
        return JSON.toJSONString(cityService.city(areaId));
    }

}
