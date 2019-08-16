
package com.template.api.login.controller;


import com.template.api.form.RegisterForm;
import com.template.api.login.domain.TbUser;
import com.template.api.login.service.UserService;
import com.template.api.utils.R;
import com.template.api.utils.ValidatorUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;


@RestController
@RequestMapping("/api")
@Api(tags="注册接口")
public class ApiRegisterController {
    @Autowired
    private UserService userService;

    @PostMapping("register")
    @ApiOperation("注册")
    public R register(@RequestBody RegisterForm form){
        //表单校验
        ValidatorUtils.validateEntity(form);

        TbUser user = new TbUser();

        user.setCreateTime(new Date());
        userService.save(user);
        return R.ok();
    }
}
