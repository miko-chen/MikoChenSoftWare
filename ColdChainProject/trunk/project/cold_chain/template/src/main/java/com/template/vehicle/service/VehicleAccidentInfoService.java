package com.template.vehicle.service;

import com.template.vehicle.domain.VehicleAccidentInfoDO;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:42:03
 */
public interface VehicleAccidentInfoService {
	
	VehicleAccidentInfoDO get(Integer vehicleAccidenKey);
	
	List<VehicleAccidentInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(VehicleAccidentInfoDO vehicleAccidentInfo);
	
	int update(VehicleAccidentInfoDO vehicleAccidentInfo);
	
	int remove(Integer vehicleAccidenKey);
	
	int batchRemove(Integer[] vehicleAccidenKeys);
}
