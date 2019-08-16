package com.template.common.dao;

import com.template.common.domain.CityDO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * 省市区级联查询
 */
@Mapper
public interface CityDao {
    /**
     * 省市区的级联查询
     * @param areaParentAreaId
     * @return
     */
    List<CityDO> city(@Param("areaParentAreaId") Integer areaParentAreaId);

}
