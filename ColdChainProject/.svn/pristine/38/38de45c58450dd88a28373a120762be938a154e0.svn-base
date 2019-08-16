package com.template.api.notify.controller;



import com.alibaba.druid.support.json.JSONUtils;
import com.template.api.notify.domain.OaNotify;
import com.template.api.notify.service.OaNotifyService;
import org.nutz.json.Json;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author bootdo 1992lcg@163.com
 */
@RequestMapping("/api")
@RestController
public class OaNotifyController {
	private static final Logger logger = LoggerFactory.getLogger(OaNotifyController.class);
	@Autowired
	OaNotifyService oaNotifyService;


	@GetMapping("/list")
	public Object list() {
		OaNotify oaNotify = oaNotifyService.get(41L);
		logger.info("heheh,{},{}", oaNotify, Json.toJson(oaNotify));
		return oaNotify;
	}


}
