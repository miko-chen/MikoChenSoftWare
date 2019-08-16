package com.template.order.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;



/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:32:43
 */
public class OrderInfoDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Integer orderId;
	//
	private String orderNo;
	//
	private String consignorNo;
	//
	private String consignorName;
	//
	private String consignorPhone;
	//
	private String operatorNo;
	//
	private String startArea;
	//
	private String endArea;
	//
	private String receiverName;
	//
	private String receiverPhone;
	//
	private String receiveErrorRemark;
	//
	private String orderRemark;
	//
	private Date planStartTime;
	//
	private Date planEndTime;
	//
	private BigDecimal payableAmount;
	//
	private BigDecimal realAmount;
	//
	private Date realStartTime;
	//
	private Date realEndTime;
	//
	private Integer orderStatus;
	//
	private String signatory;
	//
	private Integer isSplit;
	//
	private Integer dispatchId;
	//
	private Integer isChild;
	//
	private Integer mainOrderId;
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
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	/**
	 * 获取：
	 */
	public Integer getOrderId() {
		return orderId;
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
	public void setConsignorNo(String consignorNo) {
		this.consignorNo = consignorNo;
	}
	/**
	 * 获取：
	 */
	public String getConsignorNo() {
		return consignorNo;
	}
	/**
	 * 设置：
	 */
	public void setConsignorName(String consignorName) {
		this.consignorName = consignorName;
	}
	/**
	 * 获取：
	 */
	public String getConsignorName() {
		return consignorName;
	}
	/**
	 * 设置：
	 */
	public void setConsignorPhone(String consignorPhone) {
		this.consignorPhone = consignorPhone;
	}
	/**
	 * 获取：
	 */
	public String getConsignorPhone() {
		return consignorPhone;
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
	public void setStartArea(String startArea) {
		this.startArea = startArea;
	}
	/**
	 * 获取：
	 */
	public String getStartArea() {
		return startArea;
	}
	/**
	 * 设置：
	 */
	public void setEndArea(String endArea) {
		this.endArea = endArea;
	}
	/**
	 * 获取：
	 */
	public String getEndArea() {
		return endArea;
	}
	/**
	 * 设置：
	 */
	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}
	/**
	 * 获取：
	 */
	public String getReceiverName() {
		return receiverName;
	}
	/**
	 * 设置：
	 */
	public void setReceiverPhone(String receiverPhone) {
		this.receiverPhone = receiverPhone;
	}
	/**
	 * 获取：
	 */
	public String getReceiverPhone() {
		return receiverPhone;
	}
	/**
	 * 设置：
	 */
	public void setReceiveErrorRemark(String receiveErrorRemark) {
		this.receiveErrorRemark = receiveErrorRemark;
	}
	/**
	 * 获取：
	 */
	public String getReceiveErrorRemark() {
		return receiveErrorRemark;
	}
	/**
	 * 设置：
	 */
	public void setOrderRemark(String orderRemark) {
		this.orderRemark = orderRemark;
	}
	/**
	 * 获取：
	 */
	public String getOrderRemark() {
		return orderRemark;
	}
	/**
	 * 设置：
	 */
	public void setPlanStartTime(Date planStartTime) {
		this.planStartTime = planStartTime;
	}
	/**
	 * 获取：
	 */
	public Date getPlanStartTime() {
		return planStartTime;
	}
	/**
	 * 设置：
	 */
	public void setPlanEndTime(Date planEndTime) {
		this.planEndTime = planEndTime;
	}
	/**
	 * 获取：
	 */
	public Date getPlanEndTime() {
		return planEndTime;
	}
	/**
	 * 设置：
	 */
	public void setPayableAmount(BigDecimal payableAmount) {
		this.payableAmount = payableAmount;
	}
	/**
	 * 获取：
	 */
	public BigDecimal getPayableAmount() {
		return payableAmount;
	}
	/**
	 * 设置：
	 */
	public void setRealAmount(BigDecimal realAmount) {
		this.realAmount = realAmount;
	}
	/**
	 * 获取：
	 */
	public BigDecimal getRealAmount() {
		return realAmount;
	}
	/**
	 * 设置：
	 */
	public void setRealStartTime(Date realStartTime) {
		this.realStartTime = realStartTime;
	}
	/**
	 * 获取：
	 */
	public Date getRealStartTime() {
		return realStartTime;
	}
	/**
	 * 设置：
	 */
	public void setRealEndTime(Date realEndTime) {
		this.realEndTime = realEndTime;
	}
	/**
	 * 获取：
	 */
	public Date getRealEndTime() {
		return realEndTime;
	}
	/**
	 * 设置：
	 */
	public void setOrderStatus(Integer orderStatus) {
		this.orderStatus = orderStatus;
	}
	/**
	 * 获取：
	 */
	public Integer getOrderStatus() {
		return orderStatus;
	}
	/**
	 * 设置：
	 */
	public void setSignatory(String signatory) {
		this.signatory = signatory;
	}
	/**
	 * 获取：
	 */
	public String getSignatory() {
		return signatory;
	}
	/**
	 * 设置：
	 */
	public void setIsSplit(Integer isSplit) {
		this.isSplit = isSplit;
	}
	/**
	 * 获取：
	 */
	public Integer getIsSplit() {
		return isSplit;
	}
	/**
	 * 设置：
	 */
	public void setDispatchId(Integer dispatchId) {
		this.dispatchId = dispatchId;
	}
	/**
	 * 获取：
	 */
	public Integer getDispatchId() {
		return dispatchId;
	}
	/**
	 * 设置：
	 */
	public void setIsChild(Integer isChild) {
		this.isChild = isChild;
	}
	/**
	 * 获取：
	 */
	public Integer getIsChild() {
		return isChild;
	}
	/**
	 * 设置：
	 */
	public void setMainOrderId(Integer mainOrderId) {
		this.mainOrderId = mainOrderId;
	}
	/**
	 * 获取：
	 */
	public Integer getMainOrderId() {
		return mainOrderId;
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
