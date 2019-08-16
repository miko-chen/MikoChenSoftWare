package com.template.ic.mapper;

import com.template.ic.domain.IcCardInfoDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:59:28
 */
@Mapper
public interface IcCardInfoDao {

	IcCardInfoDO get(Integer icId);
	
	List<IcCardInfoDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(IcCardInfoDO icCardInfo);
	
	int update(IcCardInfoDO icCardInfo);
	
	int remove(Integer ic_id);
	
	int batchRemove(Integer[] icIds);
}
