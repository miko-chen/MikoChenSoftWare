package com.template.vehicle.service;

import com.template.vehicle.domain.VehicleViolationInfoDO;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:47:11
 */
public interface VehicleViolationInfoService {
	
	VehicleViolationInfoDO get(Integer vehicleViolationId);
	
	List<VehicleViolationInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(VehicleViolationInfoDO vehicleViolationInfo);
	
	int update(VehicleViolationInfoDO vehicleViolationInfo);
	
	int remove(Integer vehicleViolationId);
	
	int batchRemove(Integer[] vehicleViolationIds);
}
