package com.template.vehicle.mapper;

import com.template.vehicle.domain.VehicleInsuranceDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:50:31
 */
@Mapper
public interface VehicleInsuranceDao {

	VehicleInsuranceDO get(Integer vehicleId);
	
	List<VehicleInsuranceDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(VehicleInsuranceDO vehicleInsurance);
	
	int update(VehicleInsuranceDO vehicleInsurance);
	
	int remove(Integer vehicle_id);
	
	int batchRemove(Integer[] vehicleIds);
}
