package com.template.car.controller;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.template.common.domain.CityDO;
import com.template.common.service.CityService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.template.car.domain.CarEvaluateDO;
import com.template.car.service.CarEvaluateService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:54:17
 */
 
@Controller
@RequestMapping("/car/carEvaluate")
public class CarEvaluateController {
	@Autowired
	private CarEvaluateService carEvaluateService;
	@Autowired
	private CityService cityService;
	
	@GetMapping()
	@RequiresPermissions("car:carEvaluate:carEvaluate")
	String CarEvaluate(){
			return "car/carEvaluate/carEvaluate";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("car:carEvaluate:carEvaluate")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<CarEvaluateDO> carEvaluateList = carEvaluateService.list(query);
		int total = carEvaluateService.count(query);
		PageUtils pageUtils = new PageUtils(carEvaluateList, total);
		return pageUtils;
	}
	@RequestMapping("/name")
	@ResponseBody
	//@RequiresPermissions("car:carEvaluate:carEvaluate")
	public String areaName(Integer areaParentAreaId) {
		if(null == areaParentAreaId){
			areaParentAreaId = 0;
            return JSON.toJSONString(cityService.city(areaParentAreaId));
		}else {
		return JSON.toJSONString(cityService.city(areaParentAreaId));}
	}
	
	@GetMapping("/add")
	@RequiresPermissions("car:carEvaluate:add")
	String add(){
				return "car/carEvaluate/add";
	}

	@GetMapping("/edit/{carEvaluateId}")
	@RequiresPermissions("car:carEvaluate:edit")
	String edit(@PathVariable("carEvaluateId") Integer carEvaluateId,Model model){
		CarEvaluateDO carEvaluate = carEvaluateService.get(carEvaluateId);
		model.addAttribute("carEvaluate", carEvaluate);
	    return "car/carEvaluate/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("car:carEvaluate:add")
	public R save( CarEvaluateDO carEvaluate){
		if(carEvaluateService.save(carEvaluate)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("car:carEvaluate:edit")
	public R update( CarEvaluateDO carEvaluate){
		carEvaluateService.update(carEvaluate);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("car:carEvaluate:remove")
	public R remove( Integer carEvaluateId){
		if(carEvaluateService.remove(carEvaluateId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("car:carEvaluate:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] carEvaluateIds){
		carEvaluateService.batchRemove(carEvaluateIds);
		return R.ok();
	}
	
}
