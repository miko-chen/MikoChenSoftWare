package com.template.event.service.impl;

import com.template.event.mapper.EventRecordDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.event.domain.EventRecordDO;
import com.template.event.service.EventRecordService;



@Service
public class EventRecordServiceImpl implements EventRecordService {
	@Autowired
	private EventRecordDao eventRecordDao;
	
	@Override
	public EventRecordDO get(Integer eventId){
		return eventRecordDao.get(eventId);
	}
	
	@Override
	public List<EventRecordDO> list(Map<String, Object> map){
		return eventRecordDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return eventRecordDao.count(map);
	}
	
	@Override
	public int save(EventRecordDO eventRecord){
		return eventRecordDao.save(eventRecord);
	}
	
	@Override
	public int update(EventRecordDO eventRecord){
		return eventRecordDao.update(eventRecord);
	}
	
	@Override
	public int remove(Integer eventId){
		return eventRecordDao.remove(eventId);
	}
	
	@Override
	public int batchRemove(Integer[] eventIds){
		return eventRecordDao.batchRemove(eventIds);
	}
	
}
