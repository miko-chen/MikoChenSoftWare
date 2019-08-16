package com.template.common.service;

import org.springframework.stereotype.Service;

import com.template.common.domain.LogDO;
import com.template.common.domain.PageDO;
import com.template.common.utils.Query;
@Service
public interface LogService {
	void save(LogDO logDO);
	PageDO<LogDO> queryList(Query query);
	int remove(Long id);
	int batchRemove(Long[] ids);
}
