package com.template.vehicle.service.impl;

import com.template.vehicle.mapper.VehicleViolationInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.vehicle.domain.VehicleViolationInfoDO;
import com.template.vehicle.service.VehicleViolationInfoService;



@Service
public class VehicleViolationInfoServiceImpl implements VehicleViolationInfoService {
	@Autowired
	private VehicleViolationInfoDao vehicleViolationInfoDao;
	
	@Override
	public VehicleViolationInfoDO get(Integer vehicleViolationId){
		return vehicleViolationInfoDao.get(vehicleViolationId);
	}
	
	@Override
	public List<VehicleViolationInfoDO> list(Map<String, Object> map){
		return vehicleViolationInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return vehicleViolationInfoDao.count(map);
	}
	
	@Override
	public int save(VehicleViolationInfoDO vehicleViolationInfo){
		return vehicleViolationInfoDao.save(vehicleViolationInfo);
	}
	
	@Override
	public int update(VehicleViolationInfoDO vehicleViolationInfo){
		return vehicleViolationInfoDao.update(vehicleViolationInfo);
	}
	
	@Override
	public int remove(Integer vehicleViolationId){
		return vehicleViolationInfoDao.remove(vehicleViolationId);
	}
	
	@Override
	public int batchRemove(Integer[] vehicleViolationIds){
		return vehicleViolationInfoDao.batchRemove(vehicleViolationIds);
	}
	
}
