package com.template.vehicle.mapper;

import com.template.vehicle.domain.VehicleAccidentInfoDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:42:03
 */
@Mapper
public interface VehicleAccidentInfoDao {

	VehicleAccidentInfoDO get(Integer vehicleAccidenKey);
	
	List<VehicleAccidentInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(VehicleAccidentInfoDO vehicleAccidentInfo);
	
	int update(VehicleAccidentInfoDO vehicleAccidentInfo);
	
	int remove(Integer vehicle_acciden_key);
	
	int batchRemove(Integer[] vehicleAccidenKeys);
}
