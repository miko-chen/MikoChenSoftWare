package com.template.test.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 测试表
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2019-01-14 08:55:58
 */
public class TestDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer id;
	//
	private String name;

	/**
	 * 设置：
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 获取：
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * 设置：
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * 获取：
	 */
	public String getName() {
		return name;
	}
}
