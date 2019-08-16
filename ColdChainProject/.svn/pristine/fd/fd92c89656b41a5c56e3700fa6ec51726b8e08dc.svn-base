package com.template.vehicle.service.impl;

import com.template.vehicle.mapper.VehicleInsuranceDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.vehicle.domain.VehicleInsuranceDO;
import com.template.vehicle.service.VehicleInsuranceService;



@Service
public class VehicleInsuranceServiceImpl implements VehicleInsuranceService {
	@Autowired
	private VehicleInsuranceDao vehicleInsuranceDao;
	
	@Override
	public VehicleInsuranceDO get(Integer vehicleId){
		return vehicleInsuranceDao.get(vehicleId);
	}
	
	@Override
	public List<VehicleInsuranceDO> list(Map<String, Object> map){
		return vehicleInsuranceDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return vehicleInsuranceDao.count(map);
	}
	
	@Override
	public int save(VehicleInsuranceDO vehicleInsurance){
		return vehicleInsuranceDao.save(vehicleInsurance);
	}
	
	@Override
	public int update(VehicleInsuranceDO vehicleInsurance){
		return vehicleInsuranceDao.update(vehicleInsurance);
	}
	
	@Override
	public int remove(Integer vehicleId){
		return vehicleInsuranceDao.remove(vehicleId);
	}
	
	@Override
	public int batchRemove(Integer[] vehicleIds){
		return vehicleInsuranceDao.batchRemove(vehicleIds);
	}
	
}
