package com.template.test.dao;

import com.template.test.domain.TestDO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 测试表
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2019-01-14 08:55:58
 */
@Mapper
public interface TestDao {

	TestDO get(Integer id);
	
	List<TestDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(TestDO test);
	
	int update(TestDO test);
	
	int remove(Integer id);
	
	int batchRemove(Integer[] ids);
}
