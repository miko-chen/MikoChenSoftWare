package com.template.operator.service.impl;

import com.template.operator.mapper.OperatorInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.operator.domain.OperatorInfoDO;
import com.template.operator.service.OperatorInfoService;



@Service
public class OperatorInfoServiceImpl implements OperatorInfoService {
	@Autowired
	private OperatorInfoDao operatorInfoDao;
	
	@Override
	public OperatorInfoDO get(Integer operatorId){
		return operatorInfoDao.get(operatorId);
	}
	
	@Override
	public List<OperatorInfoDO> list(Map<String, Object> map){
		return operatorInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return operatorInfoDao.count(map);
	}
	
	@Override
	public int save(OperatorInfoDO operatorInfo){
		return operatorInfoDao.save(operatorInfo);
	}
	
	@Override
	public int update(OperatorInfoDO operatorInfo){
		return operatorInfoDao.update(operatorInfo);
	}
	
	@Override
	public int remove(Integer operatorId){
		return operatorInfoDao.remove(operatorId);
	}
	
	@Override
	public int batchRemove(Integer[] operatorIds){
		return operatorInfoDao.batchRemove(operatorIds);
	}
	
}
