package com.template.vehicle.mapper;

import com.template.vehicle.domain.VehicleReviewInfoDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:38:43
 */
@Mapper
public interface VehicleReviewInfoDao {

	VehicleReviewInfoDO get(Integer vehicleReviewId);
	
	List<VehicleReviewInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(VehicleReviewInfoDO vehicleReviewInfo);
	
	int update(VehicleReviewInfoDO vehicleReviewInfo);
	
	int remove(Integer vehicle_review_id);
	
	int batchRemove(Integer[] vehicleReviewIds);
}
