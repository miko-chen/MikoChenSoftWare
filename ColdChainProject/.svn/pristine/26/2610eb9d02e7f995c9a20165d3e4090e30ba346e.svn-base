package com.template.api.notify.service.impl;



import com.template.api.notify.dao.OaNotifyMapper;
import com.template.api.notify.domain.OaNotify;
import com.template.api.notify.service.OaNotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OaNotifyServiceImpl implements OaNotifyService {

	@Autowired
	private OaNotifyMapper oaNotifyMapper;

	@Override
	public OaNotify get(Long cid){
		return oaNotifyMapper.selectByPrimaryKey(cid);
	}
	

	
}
