

package com.template.api.login.service;

import com.template.api.login.domain.TbToken;


/**
 * 用户Token
 *
 * @author Mark sunlightcs@gmail.com
 */
public interface TokenService{

	TbToken queryByToken(String token);

	/**
	 * 生成token
	 * @param userId  用户ID
	 * @return        返回token信息
	 */
	TbToken createToken(long userId);

	/**
	 * 设置token过期
	 * @param userId 用户ID
	 */
	void expireToken(long userId);

}
