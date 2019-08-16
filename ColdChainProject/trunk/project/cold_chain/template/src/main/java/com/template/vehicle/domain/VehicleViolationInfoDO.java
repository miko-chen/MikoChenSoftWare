package com.template.vehicle.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:47:11
 */
public class VehicleViolationInfoDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer vehicleViolationId;
	//
	private String vehicleNo;
	//
	private Date time;
	//
	private String place;
	//
	private Integer illegalCode;
	//
	private String illegalDescribe;
	//
	private String createUser;
	//
	private Date createTime;
	//
	private String lastModifyUser;
	//
	private Date lastModifyTime;
	//
	private Integer status;

	/**
	 * 设置：
	 */
	public void setVehicleViolationId(Integer vehicleViolationId) {
		this.vehicleViolationId = vehicleViolationId;
	}
	/**
	 * 获取：
	 */
	public Integer getVehicleViolationId() {
		return vehicleViolationId;
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
	public void setTime(Date time) {
		this.time = time;
	}
	/**
	 * 获取：
	 */
	public Date getTime() {
		return time;
	}
	/**
	 * 设置：
	 */
	public void setPlace(String place) {
		this.place = place;
	}
	/**
	 * 获取：
	 */
	public String getPlace() {
		return place;
	}
	/**
	 * 设置：
	 */
	public void setIllegalCode(Integer illegalCode) {
		this.illegalCode = illegalCode;
	}
	/**
	 * 获取：
	 */
	public Integer getIllegalCode() {
		return illegalCode;
	}
	/**
	 * 设置：
	 */
	public void setIllegalDescribe(String illegalDescribe) {
		this.illegalDescribe = illegalDescribe;
	}
	/**
	 * 获取：
	 */
	public String getIllegalDescribe() {
		return illegalDescribe;
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
	public void setStatus(Integer status) {
		this.status = status;
	}
	/**
	 * 获取：
	 */
	public Integer getStatus() {
		return status;
	}
}
