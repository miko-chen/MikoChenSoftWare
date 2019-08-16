package com.template.basic.service.impl;

import com.template.basic.mapper.BasicVehicleInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


import com.template.basic.domain.BasicVehicleInfoDO;
import com.template.basic.service.BasicVehicleInfoService;



@Service
public class BasicVehicleInfoServiceImpl implements BasicVehicleInfoService {
	@Autowired
	private BasicVehicleInfoDao basicVehicleInfoDao;
	
	@Override
	public BasicVehicleInfoDO get(Integer vehicleId){
		return basicVehicleInfoDao.get(vehicleId);
	}
	
	@Override
	public List<BasicVehicleInfoDO> list(Map<String, Object> map){
		return basicVehicleInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return basicVehicleInfoDao.count(map);
	}
	
	@Override
	public int save(BasicVehicleInfoDO basicVehicleInfo){
		return basicVehicleInfoDao.save(basicVehicleInfo);
	}
	
	@Override
	public int update(BasicVehicleInfoDO basicVehicleInfo){
		return basicVehicleInfoDao.update(basicVehicleInfo);
	}
	
	@Override
	public int remove(Integer vehicleId){
		return basicVehicleInfoDao.remove(vehicleId);
	}
	
	@Override
	public int batchRemove(Integer[] vehicleIds){
		return basicVehicleInfoDao.batchRemove(vehicleIds);
	}
	
}
