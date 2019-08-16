package com.template.vehicle.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:50:31
 */
public class VehicleInsuranceDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer vehicleId;
	//
	private String vehicleNo;
	//
	private Integer insuranceType;
	//
	private String company;
	//
	private Date startDate;
	//
	private Date endDate;
	//
	private Double money;
	//
	private String policyNum;
	//
	private Integer policyStatus;
	//
	private String agent;
	//
	private String agentTel;
	//
	private String photo;
	//
	private String remarks;
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
	public void setVehicleId(Integer vehicleId) {
		this.vehicleId = vehicleId;
	}
	/**
	 * 获取：
	 */
	public Integer getVehicleId() {
		return vehicleId;
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
	public void setInsuranceType(Integer insuranceType) {
		this.insuranceType = insuranceType;
	}
	/**
	 * 获取：
	 */
	public Integer getInsuranceType() {
		return insuranceType;
	}
	/**
	 * 设置：
	 */
	public void setCompany(String company) {
		this.company = company;
	}
	/**
	 * 获取：
	 */
	public String getCompany() {
		return company;
	}
	/**
	 * 设置：
	 */
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	/**
	 * 获取：
	 */
	public Date getStartDate() {
		return startDate;
	}
	/**
	 * 设置：
	 */
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	/**
	 * 获取：
	 */
	public Date getEndDate() {
		return endDate;
	}
	/**
	 * 设置：
	 */
	public void setMoney(Double money) {
		this.money = money;
	}
	/**
	 * 获取：
	 */
	public Double getMoney() {
		return money;
	}
	/**
	 * 设置：
	 */
	public void setPolicyNum(String policyNum) {
		this.policyNum = policyNum;
	}
	/**
	 * 获取：
	 */
	public String getPolicyNum() {
		return policyNum;
	}
	/**
	 * 设置：
	 */
	public void setPolicyStatus(Integer policyStatus) {
		this.policyStatus = policyStatus;
	}
	/**
	 * 获取：
	 */
	public Integer getPolicyStatus() {
		return policyStatus;
	}
	/**
	 * 设置：
	 */
	public void setAgent(String agent) {
		this.agent = agent;
	}
	/**
	 * 获取：
	 */
	public String getAgent() {
		return agent;
	}
	/**
	 * 设置：
	 */
	public void setAgentTel(String agentTel) {
		this.agentTel = agentTel;
	}
	/**
	 * 获取：
	 */
	public String getAgentTel() {
		return agentTel;
	}
	/**
	 * 设置：
	 */
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	/**
	 * 获取：
	 */
	public String getPhoto() {
		return photo;
	}
	/**
	 * 设置：
	 */
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	/**
	 * 获取：
	 */
	public String getRemarks() {
		return remarks;
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
