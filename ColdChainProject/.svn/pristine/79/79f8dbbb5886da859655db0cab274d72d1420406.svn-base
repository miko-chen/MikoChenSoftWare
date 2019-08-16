package com.template.event.service;

import com.template.event.domain.EventRecordDO;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:27:02
 */
public interface EventRecordService {
	
	EventRecordDO get(Integer eventId);
	
	List<EventRecordDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(EventRecordDO eventRecord);
	
	int update(EventRecordDO eventRecord);
	
	int remove(Integer eventId);
	
	int batchRemove(Integer[] eventIds);
}
