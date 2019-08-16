package com.template.driver.mapper;

import com.template.driver.domain.DriverInfoDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:21:50
 */
@Mapper
public interface DriverInfoDao {

	DriverInfoDO get(Integer driverId);
	
	List<DriverInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(DriverInfoDO driverInfo);
	
	int update(DriverInfoDO driverInfo);
	
	int remove(Integer driver_id);
	
	int batchRemove(Integer[] driverIds);
}