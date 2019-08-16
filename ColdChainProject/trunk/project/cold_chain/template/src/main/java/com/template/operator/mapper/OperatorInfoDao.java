package com.template.operator.mapper;

import com.template.operator.domain.OperatorInfoDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:51:14
 */
@Mapper
public interface OperatorInfoDao {

	OperatorInfoDO get(Integer operatorId);
	
	List<OperatorInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(OperatorInfoDO operatorInfo);
	
	int update(OperatorInfoDO operatorInfo);
	
	int remove(Integer operator_id);
	
	int batchRemove(Integer[] operatorIds);
}
