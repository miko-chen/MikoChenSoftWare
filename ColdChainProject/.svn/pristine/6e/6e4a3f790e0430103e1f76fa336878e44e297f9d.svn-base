package com.template.basic.mapper;



import java.util.List;
import java.util.Map;

import com.template.basic.domain.BasicEquipmentInfoDO;
import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:04:41
 */
@Mapper
public interface BasicEquipmentInfoDao {

	BasicEquipmentInfoDO get(Integer equipmentId);
	
	List<BasicEquipmentInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(BasicEquipmentInfoDO basicEquipmentInfo);
	
	int update(BasicEquipmentInfoDO basicEquipmentInfo);
	
	int remove(Integer equipment_id);
	
	int batchRemove(Integer[] equipmentIds);
}
