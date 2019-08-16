package com.template.common.service.impl;

import com.template.common.dao.CityDao;
import com.template.common.domain.CityDO;
import com.template.common.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 省市区级联查询
 */
@Service
public class CityServiceImpl implements CityService {
    @Autowired
    private CityDao cityDao;
    @Override
    //查询省市区
    public List<CityDO> city(Integer areaParentAreaId) {
        return cityDao.city(areaParentAreaId);
    }
}
