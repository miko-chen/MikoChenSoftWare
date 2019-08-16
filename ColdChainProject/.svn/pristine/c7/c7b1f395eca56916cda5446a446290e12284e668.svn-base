package com.template.order.service;

import com.template.order.domain.OrderInfoDO;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:32:43
 */
public interface OrderInfoService {
	
	OrderInfoDO get(Integer orderId);
	
	List<OrderInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(OrderInfoDO orderInfo);
	
	int update(OrderInfoDO orderInfo);
	
	int remove(Integer orderId);
	
	int batchRemove(Integer[] orderIds);
}
