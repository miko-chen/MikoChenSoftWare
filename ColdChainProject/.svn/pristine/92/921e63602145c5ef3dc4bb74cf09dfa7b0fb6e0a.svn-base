

package com.template.api.login.service.impl;

import com.template.api.login.domain.TbToken;
import com.template.api.login.domain.TbTokenExample;
import com.template.api.login.mapper.TbTokenMapper;
import com.template.api.login.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;


@Service("tokenService")
public class TokenServiceImpl implements TokenService {

	@Autowired
	private TbTokenMapper tbTokenMapper;
	/**
	 * 12小时后过期
	 */
	private final static int EXPIRE = 3600 * 12;

	@Override
	public TbToken queryByToken(String token) {
		TbTokenExample tbTokenExample = new TbTokenExample();
		TbTokenExample.Criteria criteria = tbTokenExample.createCriteria();
		if(token != null){
			criteria.andTokenEqualTo(token);
		}
		List<TbToken> tbTokens = tbTokenMapper.selectByExample(tbTokenExample);
		if(tbTokens != null && tbTokens.size() != 0){
			return tbTokens.get(0);
		}else{
			return null;
		}
	}

	@Override
	public TbToken createToken(long userId) {
		//当前时间
		Date now = new Date();
		//过期时间
		Date expireTime = new Date(now.getTime() + EXPIRE * 1000);

		//生成token
		String token = generateToken();

		//保存或更新用户token
		TbToken tbToken = new TbToken();
		tbToken.setUserId(userId);
		tbToken.setToken(token);
		tbToken.setUpdateTime(now);
		tbToken.setExpireTime(expireTime);
		TbToken tbToken1 = tbTokenMapper.selectByPrimaryKey(userId);
		if(tbToken1 != null){
			tbTokenMapper.updateByPrimaryKeySelective(tbToken);
		}else{
			tbTokenMapper.insertSelective(tbToken);
		}
		return tbToken;
	}

	@Override
	public void expireToken(long userId){
		Date now = new Date();

		TbToken tbToken = new TbToken();
		tbToken.setUserId(userId);
		tbToken.setUpdateTime(now);
		tbToken.setExpireTime(now);
		TbToken tbToken1 = tbTokenMapper.selectByPrimaryKey(userId);
		if(tbToken1 != null){
			tbTokenMapper.updateByPrimaryKeySelective(tbToken);
		}else{
			tbTokenMapper.insertSelective(tbToken);
		}
	}

	private String generateToken(){
		return UUID.randomUUID().toString().replace("-", "");
	}
}
