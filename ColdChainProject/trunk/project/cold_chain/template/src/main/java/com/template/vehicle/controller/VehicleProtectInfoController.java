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

import com.template.vehicle.domain.VehicleProtectInfoDO;
import com.template.vehicle.service.VehicleProtectInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:36:19
 */
 
@Controller
@RequestMapping("/vehicle/vehicleProtectInfo")
public class VehicleProtectInfoController {
	@Autowired
	private VehicleProtectInfoService vehicleProtectInfoService;
	
	@GetMapping()
	@RequiresPermissions("vehicle:vehicleProtectInfo:vehicleProtectInfo")
	String VehicleProtectInfo(){
	    return "vehicle/vehicleProtectInfo/vehicleProtectInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("vehicle:vehicleProtectInfo:vehicleProtectInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<VehicleProtectInfoDO> vehicleProtectInfoList = vehicleProtectInfoService.list(query);
		int total = vehicleProtectInfoService.count(query);
		PageUtils pageUtils = new PageUtils(vehicleProtectInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("vehicle:vehicleProtectInfo:add")
	String add(){
	    return "vehicle/vehicleProtectInfo/add";
	}

	@GetMapping("/edit/{vehicleProtecId}")
	@RequiresPermissions("vehicle:vehicleProtectInfo:edit")
	String edit(@PathVariable("vehicleProtecId") Integer vehicleProtecId,Model model){
		VehicleProtectInfoDO vehicleProtectInfo = vehicleProtectInfoService.get(vehicleProtecId);
		model.addAttribute("vehicleProtectInfo", vehicleProtectInfo);
	    return "vehicle/vehicleProtectInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("vehicle:vehicleProtectInfo:add")
	public R save( VehicleProtectInfoDO vehicleProtectInfo){
		if(vehicleProtectInfoService.save(vehicleProtectInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("vehicle:vehicleProtectInfo:edit")
	public R update( VehicleProtectInfoDO vehicleProtectInfo){
		vehicleProtectInfoService.update(vehicleProtectInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleProtectInfo:remove")
	public R remove( Integer vehicleProtecId){
		if(vehicleProtectInfoService.remove(vehicleProtecId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleProtectInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] vehicleProtecIds){
		vehicleProtectInfoService.batchRemove(vehicleProtecIds);
		return R.ok();
	}
	
}
