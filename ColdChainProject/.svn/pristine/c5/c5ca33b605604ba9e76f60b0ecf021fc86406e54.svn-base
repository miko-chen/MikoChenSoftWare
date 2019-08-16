package com.template.api.notify.dao;


import com.template.api.notify.domain.OaNotify;
import com.template.api.notify.domain.OaNotifyExample;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface OaNotifyMapper {
    int countByExample(OaNotifyExample example);

    int deleteByExample(OaNotifyExample example);

    int deleteByPrimaryKey(Long id);

    int insert(OaNotify record);

    int insertSelective(OaNotify record);

    List<OaNotify> selectByExample(OaNotifyExample example);

    OaNotify selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") OaNotify record, @Param("example") OaNotifyExample example);

    int updateByExample(@Param("record") OaNotify record, @Param("example") OaNotifyExample example);

    int updateByPrimaryKeySelective(OaNotify record);

    int updateByPrimaryKey(OaNotify record);
}