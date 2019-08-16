package com.template.api.login.service.impl;


import com.template.api.exception.RRException;
import com.template.api.form.LoginForm;
import com.template.api.login.domain.TbToken;
import com.template.api.login.domain.TbUser;
import com.template.api.login.domain.TbUserExample;
import com.template.api.login.mapper.TbUserMapper;
import com.template.api.login.service.TokenService;
import com.template.api.login.service.UserService;
import com.template.api.utils.Assert;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private TokenService tokenService;

	@Autowired
	private TbUserMapper tbUserMapper;

	@Override
	public TbUser queryByMobile(String mobile) {

		TbUserExample tbUserExample = new TbUserExample();
		TbUserExample.Criteria criteria = tbUserExample.createCriteria();
		if(mobile != null){
			criteria.andMobileEqualTo(mobile);
		}
		List<TbUser> tbUsers = tbUserMapper.selectByExample(tbUserExample);
		if(tbUsers != null && tbUsers.size() != 0){
			return tbUsers.get(0);
		}else{
			return null;
		}
	}

	@Override
	public Map<String, Object> login(LoginForm form) {
		TbUser user = queryByMobile(form.getMobile());
		Assert.isNull(user, "手机号或密码错误");

		//密码错误
		if(!user.getPassword().equals(DigestUtils.sha256Hex(form.getPassword()))){
			throw new RRException("手机号或密码错误");
		}

		//获取登录token
		TbToken token = tokenService.createToken(user.getUserId());

		Map<String, Object> map = new HashMap<>(2);
		map.put("token", token.getToken());
		map.put("expire", token.getExpireTime().getTime() - System.currentTimeMillis());

		return map;
	}

	@Override
	public TbUser getById(Long id) {
		return tbUserMapper.selectByPrimaryKey(id);
	}

	@Override
	public void save(TbUser user) {
		tbUserMapper.insertSelective(user);
	}

}
