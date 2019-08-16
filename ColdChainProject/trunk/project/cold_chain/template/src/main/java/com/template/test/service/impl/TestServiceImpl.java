package com.template.test.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.template.test.dao.TestDao;
import com.template.test.domain.TestDO;
import com.template.test.service.TestService;



@Service
public class TestServiceImpl implements TestService {
	@Autowired
	private TestDao testDao;
	
	@Override
	public TestDO get(Integer id){
		return testDao.get(id);
	}
	
	@Override
	public List<TestDO> list(Map<String, Object> map){
		return testDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return testDao.count(map);
	}
	
	@Override
	public int save(TestDO test){
		return testDao.save(test);
	}
	
	@Override
	public int update(TestDO test){
		return testDao.update(test);
	}
	
	@Override
	public int remove(Integer id){
		return testDao.remove(id);
	}
	
	@Override
	public int batchRemove(Integer[] ids){
		return testDao.batchRemove(ids);
	}
	
}