package com.template.vehicle.service.impl;

import com.template.vehicle.mapper.VehicleProtectInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.vehicle.domain.VehicleProtectInfoDO;
import com.template.vehicle.service.VehicleProtectInfoService;



@Service
public class VehicleProtectInfoServiceImpl implements VehicleProtectInfoService {
	@Autowired
	private VehicleProtectInfoDao vehicleProtectInfoDao;
	
	@Override
	public VehicleProtectInfoDO get(Integer vehicleProtecId){
		return vehicleProtectInfoDao.get(vehicleProtecId);
	}
	
	@Override
	public List<VehicleProtectInfoDO> list(Map<String, Object> map){
		return vehicleProtectInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return vehicleProtectInfoDao.count(map);
	}
	
	@Override
	public int save(VehicleProtectInfoDO vehicleProtectInfo){
		return vehicleProtectInfoDao.save(vehicleProtectInfo);
	}
	
	@Override
	public int update(VehicleProtectInfoDO vehicleProtectInfo){
		return vehicleProtectInfoDao.update(vehicleProtectInfo);
	}
	
	@Override
	public int remove(Integer vehicleProtecId){
		return vehicleProtectInfoDao.remove(vehicleProtecId);
	}
	
	@Override
	public int batchRemove(Integer[] vehicleProtecIds){
		return vehicleProtectInfoDao.batchRemove(vehicleProtecIds);
	}
	
}
