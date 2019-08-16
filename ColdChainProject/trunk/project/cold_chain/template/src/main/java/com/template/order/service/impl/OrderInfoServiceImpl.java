package com.template.order.service.impl;

import com.template.order.mapper.OrderInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.order.domain.OrderInfoDO;
import com.template.order.service.OrderInfoService;



@Service
public class OrderInfoServiceImpl implements OrderInfoService {
	@Autowired
	private OrderInfoDao orderInfoDao;
	
	@Override
	public OrderInfoDO get(Integer orderId){
		return orderInfoDao.get(orderId);
	}
	
	@Override
	public List<OrderInfoDO> list(Map<String, Object> map){
		return orderInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return orderInfoDao.count(map);
	}
	
	@Override
	public int save(OrderInfoDO orderInfo){
		return orderInfoDao.save(orderInfo);
	}
	
	@Override
	public int update(OrderInfoDO orderInfo){
		return orderInfoDao.update(orderInfo);
	}
	
	@Override
	public int remove(Integer orderId){
		return orderInfoDao.remove(orderId);
	}
	
	@Override
	public int batchRemove(Integer[] orderIds){
		return orderInfoDao.batchRemove(orderIds);
	}
	
}
