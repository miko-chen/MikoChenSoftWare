package com.template.car.mapper;

import com.template.car.domain.CarEvaluateDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:54:17
 */
@Mapper
public interface CarEvaluateDao {

	CarEvaluateDO get(Integer carEvaluateId);
	
	List<CarEvaluateDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(CarEvaluateDO carEvaluate);
	
	int update(CarEvaluateDO carEvaluate);
	
	int remove(Integer car_evaluate_id);
	
	int batchRemove(Integer[] carEvaluateIds);
}
