package com.template.event.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:27:02
 */
public class EventRecordDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer eventId;
	//
	private String vehicleNo;
	//
	private Integer vehicleColor;
	//
	private Integer alarmType;
	//
	private Integer alarmLevel;
	//
	private Date driveStartTime;
	//
	private Date eventStartTime;
	//
	private Date driveEndTime;
	//
	private String eventLength;
	//
	private Integer eventStatus;
	//
	private String area;
	//
	private Integer operationType;
	//
	private String companyName;
	//
	private Integer dealStatus;
	//
	private String receiptInfor;
	//
	private String eventInfor;
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
	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}
	/**
	 * 获取：
	 */
	public Integer getEventId() {
		return eventId;
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
	public void setVehicleColor(Integer vehicleColor) {
		this.vehicleColor = vehicleColor;
	}
	/**
	 * 获取：
	 */
	public Integer getVehicleColor() {
		return vehicleColor;
	}
	/**
	 * 设置：
	 */
	public void setAlarmType(Integer alarmType) {
		this.alarmType = alarmType;
	}
	/**
	 * 获取：
	 */
	public Integer getAlarmType() {
		return alarmType;
	}
	/**
	 * 设置：
	 */
	public void setAlarmLevel(Integer alarmLevel) {
		this.alarmLevel = alarmLevel;
	}
	/**
	 * 获取：
	 */
	public Integer getAlarmLevel() {
		return alarmLevel;
	}
	/**
	 * 设置：
	 */
	public void setDriveStartTime(Date driveStartTime) {
		this.driveStartTime = driveStartTime;
	}
	/**
	 * 获取：
	 */
	public Date getDriveStartTime() {
		return driveStartTime;
	}
	/**
	 * 设置：
	 */
	public void setEventStartTime(Date eventStartTime) {
		this.eventStartTime = eventStartTime;
	}
	/**
	 * 获取：
	 */
	public Date getEventStartTime() {
		return eventStartTime;
	}
	/**
	 * 设置：
	 */
	public void setDriveEndTime(Date driveEndTime) {
		this.driveEndTime = driveEndTime;
	}
	/**
	 * 获取：
	 */
	public Date getDriveEndTime() {
		return driveEndTime;
	}
	/**
	 * 设置：
	 */
	public void setEventLength(String eventLength) {
		this.eventLength = eventLength;
	}
	/**
	 * 获取：
	 */
	public String getEventLength() {
		return eventLength;
	}
	/**
	 * 设置：
	 */
	public void setEventStatus(Integer eventStatus) {
		this.eventStatus = eventStatus;
	}
	/**
	 * 获取：
	 */
	public Integer getEventStatus() {
		return eventStatus;
	}
	/**
	 * 设置：
	 */
	public void setArea(String area) {
		this.area = area;
	}
	/**
	 * 获取：
	 */
	public String getArea() {
		return area;
	}
	/**
	 * 设置：
	 */
	public void setOperationType(Integer operationType) {
		this.operationType = operationType;
	}
	/**
	 * 获取：
	 */
	public Integer getOperationType() {
		return operationType;
	}
	/**
	 * 设置：
	 */
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	/**
	 * 获取：
	 */
	public String getCompanyName() {
		return companyName;
	}
	/**
	 * 设置：
	 */
	public void setDealStatus(Integer dealStatus) {
		this.dealStatus = dealStatus;
	}
	/**
	 * 获取：
	 */
	public Integer getDealStatus() {
		return dealStatus;
	}
	/**
	 * 设置：
	 */
	public void setReceiptInfor(String receiptInfor) {
		this.receiptInfor = receiptInfor;
	}
	/**
	 * 获取：
	 */
	public String getReceiptInfor() {
		return receiptInfor;
	}
	/**
	 * 设置：
	 */
	public void setEventInfor(String eventInfor) {
		this.eventInfor = eventInfor;
	}
	/**
	 * 获取：
	 */
	public String getEventInfor() {
		return eventInfor;
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
