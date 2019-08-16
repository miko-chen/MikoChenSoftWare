package com.template.vehicle.service.impl;

import com.template.vehicle.mapper.VehicleAccidentInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.vehicle.domain.VehicleAccidentInfoDO;
import com.template.vehicle.service.VehicleAccidentInfoService;



@Service
public class VehicleAccidentInfoServiceImpl implements VehicleAccidentInfoService {
	@Autowired
	private VehicleAccidentInfoDao vehicleAccidentInfoDao;
	
	@Override
	public VehicleAccidentInfoDO get(Integer vehicleAccidenKey){
		return vehicleAccidentInfoDao.get(vehicleAccidenKey);
	}
	
	@Override
	public List<VehicleAccidentInfoDO> list(Map<String, Object> map){
		return vehicleAccidentInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return vehicleAccidentInfoDao.count(map);
	}
	
	@Override
	public int save(VehicleAccidentInfoDO vehicleAccidentInfo){
		return vehicleAccidentInfoDao.save(vehicleAccidentInfo);
	}
	
	@Override
	public int update(VehicleAccidentInfoDO vehicleAccidentInfo){
		return vehicleAccidentInfoDao.update(vehicleAccidentInfo);
	}
	
	@Override
	public int remove(Integer vehicleAccidenKey){
		return vehicleAccidentInfoDao.remove(vehicleAccidenKey);
	}
	
	@Override
	public int batchRemove(Integer[] vehicleAccidenKeys){
		return vehicleAccidentInfoDao.batchRemove(vehicleAccidenKeys);
	}
	
}
