package com.template.vehicle.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:38:43
 */
public class VehicleReviewInfoDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer vehicleReviewId;
	//
	private String vehicleNo;
	//
	private Date registerTime;
	//
	private Date effectiveTime;
	//
	private Integer peopleCount;
	//
	private String createUser;
	//
	private Date createTime;
	//
	private String lastModifyUser;
	//
	private Date lastModifyTime;
	//
	private Integer state;

	/**
	 * 设置：
	 */
	public void setVehicleReviewId(Integer vehicleReviewId) {
		this.vehicleReviewId = vehicleReviewId;
	}
	/**
	 * 获取：
	 */
	public Integer getVehicleReviewId() {
		return vehicleReviewId;
	}
	/**
	 * 设置：
	 */
	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}
	/**
	 * 获取：
	 */
	public String getVehicleNo() {
		return vehicleNo;
	}
	/**
	 * 设置：
	 */
	public void setRegisterTime(Date registerTime) {
		this.registerTime = registerTime;
	}
	/**
	 * 获取：
	 */
	public Date getRegisterTime() {
		return registerTime;
	}
	/**
	 * 设置：
	 */
	public void setEffectiveTime(Date effectiveTime) {
		this.effectiveTime = effectiveTime;
	}
	/**
	 * 获取：
	 */
	public Date getEffectiveTime() {
		return effectiveTime;
	}
	/**
	 * 设置：
	 */
	public void setPeopleCount(Integer peopleCount) {
		this.peopleCount = peopleCount;
	}
	/**
	 * 获取：
	 */
	public Integer getPeopleCount() {
		return peopleCount;
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
	/**
	 * 设置：
	 */
	public void setState(Integer state) {
		this.state = state;
	}
	/**
	 * 获取：
	 */
	public Integer getState() {
		return state;
	}
}
