package com.template.basic.service.impl;

import com.template.basic.mapper.BasicEquipmentInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


import com.template.basic.domain.BasicEquipmentInfoDO;
import com.template.basic.service.BasicEquipmentInfoService;



@Service
public class BasicEquipmentInfoServiceImpl implements BasicEquipmentInfoService {
	@Autowired
	private BasicEquipmentInfoDao basicEquipmentInfoDao;
	
	@Override
	public BasicEquipmentInfoDO get(Integer equipmentId){
		return basicEquipmentInfoDao.get(equipmentId);
	}
	
	@Override
	public List<BasicEquipmentInfoDO> list(Map<String, Object> map){
		return basicEquipmentInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return basicEquipmentInfoDao.count(map);
	}
	
	@Override
	public int save(BasicEquipmentInfoDO basicEquipmentInfo){
		return basicEquipmentInfoDao.save(basicEquipmentInfo);
	}
	
	@Override
	public int update(BasicEquipmentInfoDO basicEquipmentInfo){
		return basicEquipmentInfoDao.update(basicEquipmentInfo);
	}
	
	@Override
	public int remove(Integer equipmentId){
		return basicEquipmentInfoDao.remove(equipmentId);
	}
	
	@Override
	public int batchRemove(Integer[] equipmentIds){
		return basicEquipmentInfoDao.batchRemove(equipmentIds);
	}
	
}
