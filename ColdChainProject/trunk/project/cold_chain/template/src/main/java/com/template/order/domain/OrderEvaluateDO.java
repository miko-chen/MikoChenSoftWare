package com.template.order.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:57:02
 */
public class OrderEvaluateDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer operatorEvaluateId;
	//
	private String operatorNo;
	//
	private String orderNo;
	//
	private Integer delayTimes;
	//
	private Integer goodsErrorTimes;
	//
	private Double score;
	//
	private String information;
	//
	private String createUser;
	//
	private Date createTime;
	//
	private String lastModifyUser;
	//
	private Date lastModifyTime;

	/**
	 * 设置：
	 */
	public void setOperatorEvaluateId(Integer operatorEvaluateId) {
		this.operatorEvaluateId = operatorEvaluateId;
	}
	/**
	 * 获取：
	 */
	public Integer getOperatorEvaluateId() {
		return operatorEvaluateId;
	}
	/**
	 * 设置：
	 */
	public void setOperatorNo(String operatorNo) {
		this.operatorNo = operatorNo;
	}
	/**
	 * 获取：
	 */
	public String getOperatorNo() {
		return operatorNo;
	}
	/**
	 * 设置：
	 */
	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}
	/**
	 * 获取：
	 */
	public String getOrderNo() {
		return orderNo;
	}
	/**
	 * 设置：
	 */
	public void setDelayTimes(Integer delayTimes) {
		this.delayTimes = delayTimes;
	}
	/**
	 * 获取：
	 */
	public Integer getDelayTimes() {
		return delayTimes;
	}
	/**
	 * 设置：
	 */
	public void setGoodsErrorTimes(Integer goodsErrorTimes) {
		this.goodsErrorTimes = goodsErrorTimes;
	}
	/**
	 * 获取：
	 */
	public Integer getGoodsErrorTimes() {
		return goodsErrorTimes;
	}
	/**
	 * 设置：
	 */
	public void setScore(Double score) {
		this.score = score;
	}
	/**
	 * 获取：
	 */
	public Double getScore() {
		return score;
	}
	/**
	 * 设置：
	 */
	public void setInformation(String information) {
		this.information = information;
	}
	/**
	 * 获取：
	 */
	public String getInformation() {
		return information;
	}
	/**
	 * 设置：
	 */
	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}
	/**
	 * 获取：
	 */
	public String getCreateUser() {
		return createUser;
	}
	/**
	 * 设置：
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	/**
	 * 获取：
	 */
	public Date getCreateTime() {
		return createTime;
	}
	/**
	 * 设置：
	 */
	public void setLastModifyUser(String lastModifyUser) {
		this.lastModifyUser = lastModifyUser;
	}
	/**
	 * 获取：
	 */
	public String getLastModifyUser() {
		return lastModifyUser;
	}
	/**
	 * 设置：
	 */
	public void setLastModifyTime(Date lastModifyTime) {
		this.lastModifyTime = lastModifyTime;
	}
	/**
	 * 获取：
	 */
	public Date getLastModifyTime() {
		return lastModifyTime;
	}
}
