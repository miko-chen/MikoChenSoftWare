package com.template.api.login.mapper;

import com.template.api.login.domain.TbToken;
import com.template.api.login.domain.TbTokenExample;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TbTokenMapper {
    int countByExample(TbTokenExample example);

    int deleteByExample(TbTokenExample example);

    int deleteByPrimaryKey(Long userId);

    int insert(TbToken record);

    int insertSelective(TbToken record);

    List<TbToken> selectByExample(TbTokenExample example);

    TbToken selectByPrimaryKey(Long userId);

    int updateByExampleSelective(@Param("record") TbToken record, @Param("example") TbTokenExample example);

    int updateByExample(@Param("record") TbToken record, @Param("example") TbTokenExample example);

    int updateByPrimaryKeySelective(TbToken record);

    int updateByPrimaryKey(TbToken record);
}