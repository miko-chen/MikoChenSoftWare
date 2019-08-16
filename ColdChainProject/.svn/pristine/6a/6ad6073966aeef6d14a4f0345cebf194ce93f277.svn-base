package com.template.order.service.impl;

import com.template.order.mapper.OrderEvaluateDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.order.domain.OrderEvaluateDO;
import com.template.order.service.OrderEvaluateService;



@Service
public class OrderEvaluateServiceImpl implements OrderEvaluateService {
	@Autowired
	private OrderEvaluateDao orderEvaluateDao;
	
	@Override
	public OrderEvaluateDO get(Integer operatorEvaluateId){
		return orderEvaluateDao.get(operatorEvaluateId);
	}
	
	@Override
	public List<OrderEvaluateDO> list(Map<String, Object> map){
		return orderEvaluateDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return orderEvaluateDao.count(map);
	}
	
	@Override
	public int save(OrderEvaluateDO orderEvaluate){
		return orderEvaluateDao.save(orderEvaluate);
	}
	
	@Override
	public int update(OrderEvaluateDO orderEvaluate){
		return orderEvaluateDao.update(orderEvaluate);
	}
	
	@Override
	public int remove(Integer operatorEvaluateId){
		return orderEvaluateDao.remove(operatorEvaluateId);
	}
	
	@Override
	public int batchRemove(Integer[] operatorEvaluateIds){
		return orderEvaluateDao.batchRemove(operatorEvaluateIds);
	}
	
}
