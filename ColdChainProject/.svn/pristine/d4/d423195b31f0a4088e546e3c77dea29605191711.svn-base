package com.template.api.login.mapper;

import com.template.api.login.domain.TbUser;
import com.template.api.login.domain.TbUserExample;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TbUserMapper {
    int countByExample(TbUserExample example);

    int deleteByExample(TbUserExample example);

    int deleteByPrimaryKey(Long userId);

    int insert(TbUser record);

    int insertSelective(TbUser record);

    List<TbUser> selectByExample(TbUserExample example);

    TbUser selectByPrimaryKey(Long userId);

    int updateByExampleSelective(@Param("record") TbUser record, @Param("example") TbUserExample example);

    int updateByExample(@Param("record") TbUser record, @Param("example") TbUserExample example);

    int updateByPrimaryKeySelective(TbUser record);

    int updateByPrimaryKey(TbUser record);
}