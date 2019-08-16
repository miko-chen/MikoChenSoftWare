package com.template.car.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:54:17
 */
public class CarEvaluateDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer carEvaluateId;
	//
	private String carNo;
	//
	private String orderNo;
	//
	private Integer rapidAccelerationTimes;
	//
	private Integer overSpeedTimes;
	//
	private Integer sharpTurnTimes;
	//
	private Integer brakesTimes;
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
	public void setCarEvaluateId(Integer carEvaluateId) {
		this.carEvaluateId = carEvaluateId;
	}
	/**
	 * 获取：
	 */
	public Integer getCarEvaluateId() {
		return carEvaluateId;
	}
	/**
	 * 设置：
	 */
	public void setCarNo(String carNo) {
		this.carNo = carNo;
	}
	/**
	 * 获取：
	 */
	public String getCarNo() {
		return carNo;
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
	public void setRapidAccelerationTimes(Integer rapidAccelerationTimes) {
		this.rapidAccelerationTimes = rapidAccelerationTimes;
	}
	/**
	 * 获取：
	 */
	public Integer getRapidAccelerationTimes() {
		return rapidAccelerationTimes;
	}
	/**
	 * 设置：
	 */
	public void setOverSpeedTimes(Integer overSpeedTimes) {
		this.overSpeedTimes = overSpeedTimes;
	}
	/**
	 * 获取：
	 */
	public Integer getOverSpeedTimes() {
		return overSpeedTimes;
	}
	/**
	 * 设置：
	 */
	public void setSharpTurnTimes(Integer sharpTurnTimes) {
		this.sharpTurnTimes = sharpTurnTimes;
	}
	/**
	 * 获取：
	 */
	public Integer getSharpTurnTimes() {
		return sharpTurnTimes;
	}
	/**
	 * 设置：
	 */
	public void setBrakesTimes(Integer brakesTimes) {
		this.brakesTimes = brakesTimes;
	}
	/**
	 * 获取：
	 */
	public Integer getBrakesTimes() {
		return brakesTimes;
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
