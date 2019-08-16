package com.template.driver.service.impl;

import com.template.driver.mapper.DriverInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


import com.template.driver.domain.DriverInfoDO;
import com.template.driver.service.DriverInfoService;



@Service
public class DriverInfoServiceImpl implements DriverInfoService {
	@Autowired
	private DriverInfoDao driverInfoDao;
	
	@Override
	public DriverInfoDO get(Integer driverId){
		return driverInfoDao.get(driverId);
	}
	
	@Override
	public List<DriverInfoDO> list(Map<String, Object> map){
		return driverInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return driverInfoDao.count(map);
	}
	
	@Override
	public int save(DriverInfoDO driverInfo){
		return driverInfoDao.save(driverInfo);
	}
	
	@Override
	public int update(DriverInfoDO driverInfo){
		return driverInfoDao.update(driverInfo);
	}
	
	@Override
	public int remove(Integer driverId){
		return driverInfoDao.remove(driverId);
	}
	
	@Override
	public int batchRemove(Integer[] driverIds){
		return driverInfoDao.batchRemove(driverIds);
	}
	
}
