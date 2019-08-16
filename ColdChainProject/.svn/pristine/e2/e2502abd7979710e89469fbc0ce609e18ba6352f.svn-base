package com.template.ic.service.impl;

import com.template.ic.mapper.IcCardInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.ic.domain.IcCardInfoDO;
import com.template.ic.service.IcCardInfoService;



@Service
public class IcCardInfoServiceImpl implements IcCardInfoService {
	@Autowired
	private IcCardInfoDao icCardInfoDao;
	
	@Override
	public IcCardInfoDO get(Integer icId){
		return icCardInfoDao.get(icId);
	}
	
	@Override
	public List<IcCardInfoDO> list(Map<String, Object> map){
		return icCardInfoDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return icCardInfoDao.count(map);
	}
	
	@Override
	public int save(IcCardInfoDO icCardInfo){
		return icCardInfoDao.save(icCardInfo);
	}
	
	@Override
	public int update(IcCardInfoDO icCardInfo){
		return icCardInfoDao.update(icCardInfo);
	}
	
	@Override
	public int remove(Integer icId){
		return icCardInfoDao.remove(icId);
	}
	
	@Override
	public int batchRemove(Integer[] icIds){
		return icCardInfoDao.batchRemove(icIds);
	}
	
}
