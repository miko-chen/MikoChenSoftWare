package com.template.vehicle.service.impl;

import com.template.vehicle.mapper.VehicleReviewInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.vehicle.domain.VehicleReviewInfoDO;
import com.template.vehicle.service.VehicleReviewInfoService;



@Service
public class VehicleReviewInfoServiceImpl implements VehicleReviewInfoService {
	@Autowired
	private VehicleReviewInfoDao vehicleReviewInfoDao;
	
	@Override
	public VehicleReviewInfoDO get(Integer vehicleReviewId){
		return vehicleReviewInfoDao.get(vehicleReviewId);
	}
	
	@Override
	public List<VehicleReviewInfoDO> list(Map<String, Object> map){
		return vehicleReviewInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return vehicleReviewInfoDao.count(map);
	}
	
	@Override
	public int save(VehicleReviewInfoDO vehicleReviewInfo){
		return vehicleReviewInfoDao.save(vehicleReviewInfo);
	}
	
	@Override
	public int update(VehicleReviewInfoDO vehicleReviewInfo){
		return vehicleReviewInfoDao.update(vehicleReviewInfo);
	}
	
	@Override
	public int remove(Integer vehicleReviewId){
		return vehicleReviewInfoDao.remove(vehicleReviewId);
	}
	
	@Override
	public int batchRemove(Integer[] vehicleReviewIds){
		return vehicleReviewInfoDao.batchRemove(vehicleReviewIds);
	}
	
}
