package com.template.car.service.impl;

import com.template.car.mapper.CarEvaluateDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.car.domain.CarEvaluateDO;
import com.template.car.service.CarEvaluateService;



@Service
public class CarEvaluateServiceImpl implements CarEvaluateService {
	@Autowired
	private CarEvaluateDao carEvaluateDao;
	
	@Override
	public CarEvaluateDO get(Integer carEvaluateId){
		return carEvaluateDao.get(carEvaluateId);
	}
	
	@Override
	public List<CarEvaluateDO> list(Map<String, Object> map){
		return carEvaluateDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return carEvaluateDao.count(map);
	}
	
	@Override
	public int save(CarEvaluateDO carEvaluate){
		return carEvaluateDao.save(carEvaluate);
	}
	
	@Override
	public int update(CarEvaluateDO carEvaluate){
		return carEvaluateDao.update(carEvaluate);
	}
	
	@Override
	public int remove(Integer carEvaluateId){
		return carEvaluateDao.remove(carEvaluateId);
	}
	
	@Override
	public int batchRemove(Integer[] carEvaluateIds){
		return carEvaluateDao.batchRemove(carEvaluateIds);
	}
	
}
