package com.template.route.mapper;

import com.template.route.domain.RouteDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:34:37
 */
@Mapper
public interface RouteDao {

	RouteDO get(Integer routeId);
	
	List<RouteDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(RouteDO route);
	
	int update(RouteDO route);
	
	int remove(Integer route_id);
	
	int batchRemove(Integer[] routeIds);
}
