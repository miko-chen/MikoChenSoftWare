package com.template.vehicle.controller;

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

import com.template.vehicle.domain.VehicleViolationInfoDO;
import com.template.vehicle.service.VehicleViolationInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:47:11
 */
 
@Controller
@RequestMapping("/vehicle/vehicleViolationInfo")
public class VehicleViolationInfoController {
	@Autowired
	private VehicleViolationInfoService vehicleViolationInfoService;
	
	@GetMapping()
	@RequiresPermissions("vehicle:vehicleViolationInfo:vehicleViolationInfo")
	String VehicleViolationInfo(){
	    return "vehicle/vehicleViolationInfo/vehicleViolationInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("vehicle:vehicleViolationInfo:vehicleViolationInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<VehicleViolationInfoDO> vehicleViolationInfoList = vehicleViolationInfoService.list(query);
		int total = vehicleViolationInfoService.count(query);
		PageUtils pageUtils = new PageUtils(vehicleViolationInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("vehicle:vehicleViolationInfo:add")
	String add(){
	    return "vehicle/vehicleViolationInfo/add";
	}

	@GetMapping("/edit/{vehicleViolationId}")
	@RequiresPermissions("vehicle:vehicleViolationInfo:edit")
	String edit(@PathVariable("vehicleViolationId") Integer vehicleViolationId,Model model){
		VehicleViolationInfoDO vehicleViolationInfo = vehicleViolationInfoService.get(vehicleViolationId);
		model.addAttribute("vehicleViolationInfo", vehicleViolationInfo);
	    return "vehicle/vehicleViolationInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("vehicle:vehicleViolationInfo:add")
	public R save( VehicleViolationInfoDO vehicleViolationInfo){
		if(vehicleViolationInfoService.save(vehicleViolationInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("vehicle:vehicleViolationInfo:edit")
	public R update( VehicleViolationInfoDO vehicleViolationInfo){
		vehicleViolationInfoService.update(vehicleViolationInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleViolationInfo:remove")
	public R remove( Integer vehicleViolationId){
		if(vehicleViolationInfoService.remove(vehicleViolationId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleViolationInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] vehicleViolationIds){
		vehicleViolationInfoService.batchRemove(vehicleViolationIds);
		return R.ok();
	}
	
}
