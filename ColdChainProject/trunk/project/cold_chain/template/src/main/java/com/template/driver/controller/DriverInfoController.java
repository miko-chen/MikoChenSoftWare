package com.template.driver.controller;

import java.util.List;
import java.util.Map;

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

import com.template.driver.domain.DriverInfoDO;
import com.template.driver.service.DriverInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:21:50
 */
 
@Controller
@RequestMapping("/driver/driverInfo")
public class DriverInfoController {
	@Autowired
	private DriverInfoService driverInfoService;
	
	@GetMapping()
	@RequiresPermissions("driver:driverInfo:driverInfo")
	String DriverInfo(){
	    return "driver/driverInfo/driverInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("driver:driverInfo:driverInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<DriverInfoDO> driverInfoList = driverInfoService.list(query);
		int total = driverInfoService.count(query);
		PageUtils pageUtils = new PageUtils(driverInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("driver:driverInfo:add")
	String add(){
	    return "driver/driverInfo/add";
	}

	@GetMapping("/edit/{driverId}")
	@RequiresPermissions("driver:driverInfo:edit")
	String edit(@PathVariable("driverId") Integer driverId,Model model){
		DriverInfoDO driverInfo = driverInfoService.get(driverId);
		model.addAttribute("driverInfo", driverInfo);
	    return "driver/driverInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("driver:driverInfo:add")
	public R save( DriverInfoDO driverInfo){
		if(driverInfoService.save(driverInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("driver:driverInfo:edit")
	public R update( DriverInfoDO driverInfo){
		driverInfoService.update(driverInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("driver:driverInfo:remove")
	public R remove( Integer driverId){
		if(driverInfoService.remove(driverId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("driver:driverInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] driverIds){
		driverInfoService.batchRemove(driverIds);
		return R.ok();
	}
	
}
