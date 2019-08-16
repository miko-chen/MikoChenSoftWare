

package com.template.api.login.controller;


import com.template.api.annotation.Login;
import com.template.api.annotation.LoginUser;
import com.template.api.login.domain.TbUser;
import com.template.api.utils.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletRequest;

/**
 * 测试接口
 *
 * @author Mark sunlightcs@gmail.com
 */
@RestController
@RequestMapping("/api")
@Api(tags="测试接口")
public class ApiTestController {

    @GetMapping("userInfo")
    @ApiOperation(value="获取用户信息", response= TbUser.class)
    @Login
    public R userInfo(@ApiIgnore @LoginUser TbUser user){
        return R.ok().put("user", user);
    }

    @GetMapping("userId")
    @ApiOperation("获取用户ID")
    @Login
    public R userInfo(@RequestAttribute("userId") Integer userId){
        return R.ok().put("userId", userId);
    }

    @GetMapping("notToken")
    @ApiOperation("忽略Token验证测试")
    public R notToken(){
        return R.ok().put("msg", "无需token也能访问。。。");
    }

    @GetMapping("myTest")
    @ApiOperation("我的测试")
    @Login
    public R myTest(@RequestParam("userId") Integer userId, HttpServletRequest request){
        return R.ok().put("msg", request.getAttribute("userId"));
    }
}
