package com.template.common.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface TestMapper {
    @Select("select * from test")
    List<Map<String, Object>> list();

    @Select("select * from test	where id = #{id}")
    Map<String, Object> get(Integer id);

    @Select("select * from test	where id = #{arg0} and name = #{arg1} and age = #{arg2}")
    Map<String, Object> get1(Integer id, String name, Integer age);
}
