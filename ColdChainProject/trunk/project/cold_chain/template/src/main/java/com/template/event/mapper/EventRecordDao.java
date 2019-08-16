package com.template.event.mapper;

import com.template.event.domain.EventRecordDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:27:02
 */
@Mapper
public interface EventRecordDao {

	EventRecordDO get(Integer eventId);
	
	List<EventRecordDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(EventRecordDO eventRecord);
	
	int update(EventRecordDO eventRecord);
	
	int remove(Integer event_id);
	
	int batchRemove(Integer[] eventIds);
}
