package com.template.route.service.impl;

import com.template.route.mapper.RouteDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.route.domain.RouteDO;
import com.template.route.service.RouteService;



@Service
public class RouteServiceImpl implements RouteService {
	@Autowired
	private RouteDao routeDao;
	
	@Override
	public RouteDO get(Integer routeId){
		return routeDao.get(routeId);
	}
	
	@Override
	public List<RouteDO> list(Map<String, Object> map){
		return routeDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return routeDao.count(map);
	}
	
	@Override
	public int save(RouteDO route){
		return routeDao.save(route);
	}
	
	@Override
	public int update(RouteDO route){
		return routeDao.update(route);
	}
	
	@Override
	public int remove(Integer routeId){
		return routeDao.remove(routeId);
	}
	
	@Override
	public int batchRemove(Integer[] routeIds){
		return routeDao.batchRemove(routeIds);
	}
	
}
