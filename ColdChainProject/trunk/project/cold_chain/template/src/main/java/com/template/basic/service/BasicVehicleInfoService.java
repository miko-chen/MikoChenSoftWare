package com.template.basic.service;

import com.template.basic.domain.BasicVehicleInfoDO;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:42:54
 */
public interface BasicVehicleInfoService {
	
	BasicVehicleInfoDO get(Integer vehicleId);
	
	List<BasicVehicleInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(BasicVehicleInfoDO basicVehicleInfo);
	
	int update(BasicVehicleInfoDO basicVehicleInfo);
	
	int remove(Integer vehicleId);
	
	int batchRemove(Integer[] vehicleIds);
}
