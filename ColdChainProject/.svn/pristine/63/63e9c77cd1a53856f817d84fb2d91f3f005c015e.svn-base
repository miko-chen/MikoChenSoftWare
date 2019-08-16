package com.template.order.mapper;

import com.template.order.domain.OrderEvaluateDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:57:02
 */
@Mapper
public interface OrderEvaluateDao {

	OrderEvaluateDO get(Integer operatorEvaluateId);
	
	List<OrderEvaluateDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(OrderEvaluateDO orderEvaluate);
	
	int update(OrderEvaluateDO orderEvaluate);
	
	int remove(Integer operator_evaluate_id);
	
	int batchRemove(Integer[] operatorEvaluateIds);
}
