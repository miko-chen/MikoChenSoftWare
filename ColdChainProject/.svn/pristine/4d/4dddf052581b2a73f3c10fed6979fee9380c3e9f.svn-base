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

import com.template.vehicle.domain.VehicleAccidentInfoDO;
import com.template.vehicle.service.VehicleAccidentInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:42:03
 */
 
@Controller
@RequestMapping("/vehicle/vehicleAccidentInfo")
public class VehicleAccidentInfoController {
	@Autowired
	private VehicleAccidentInfoService vehicleAccidentInfoService;
	
	@GetMapping()
	@RequiresPermissions("vehicle:vehicleAccidentInfo:vehicleAccidentInfo")
	String VehicleAccidentInfo(){
	    return "vehicle/vehicleAccidentInfo/vehicleAccidentInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("vehicle:vehicleAccidentInfo:vehicleAccidentInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<VehicleAccidentInfoDO> vehicleAccidentInfoList = vehicleAccidentInfoService.list(query);
		int total = vehicleAccidentInfoService.count(query);
		PageUtils pageUtils = new PageUtils(vehicleAccidentInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("vehicle:vehicleAccidentInfo:add")
	String add(){
	    return "vehicle/vehicleAccidentInfo/add";
	}

	@GetMapping("/edit/{vehicleAccidenKey}")
	@RequiresPermissions("vehicle:vehicleAccidentInfo:edit")
	String edit(@PathVariable("vehicleAccidenKey") Integer vehicleAccidenKey,Model model){
		VehicleAccidentInfoDO vehicleAccidentInfo = vehicleAccidentInfoService.get(vehicleAccidenKey);
		model.addAttribute("vehicleAccidentInfo", vehicleAccidentInfo);
	    return "vehicle/vehicleAccidentInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("vehicle:vehicleAccidentInfo:add")
	public R save( VehicleAccidentInfoDO vehicleAccidentInfo){
		if(vehicleAccidentInfoService.save(vehicleAccidentInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("vehicle:vehicleAccidentInfo:edit")
	public R update( VehicleAccidentInfoDO vehicleAccidentInfo){
		vehicleAccidentInfoService.update(vehicleAccidentInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleAccidentInfo:remove")
	public R remove( Integer vehicleAccidenKey){
		if(vehicleAccidentInfoService.remove(vehicleAccidenKey)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleAccidentInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] vehicleAccidenKeys){
		vehicleAccidentInfoService.batchRemove(vehicleAccidenKeys);
		return R.ok();
	}
	
}
