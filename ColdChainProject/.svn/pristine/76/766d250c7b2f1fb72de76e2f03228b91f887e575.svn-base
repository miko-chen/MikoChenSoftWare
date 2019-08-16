package com.template.api.login.service;

import com.template.api.form.LoginForm;
import com.template.api.login.domain.TbUser;

import java.util.Map;

/**
 * 用户
 *
 * @author Mark sunlightcs@gmail.com
 */
public interface UserService {

	TbUser queryByMobile(String mobile);

	/**
	 * 用户登录
	 * @param form    登录表单
	 * @return        返回登录信息
	 */
	Map<String, Object> login(LoginForm form);


	TbUser getById(Long id);

	void save(TbUser user);
}
