package com.template.vehicle.mapper;

import com.template.vehicle.domain.VehicleProtectInfoDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:36:19
 */
@Mapper
public interface VehicleProtectInfoDao {

	VehicleProtectInfoDO get(Integer vehicleProtecId);
	
	List<VehicleProtectInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(VehicleProtectInfoDO vehicleProtectInfo);
	
	int update(VehicleProtectInfoDO vehicleProtectInfo);
	
	int remove(Integer vehicle_protec_id);
	
	int batchRemove(Integer[] vehicleProtecIds);
}
