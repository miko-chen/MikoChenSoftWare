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

import com.template.vehicle.domain.VehicleInsuranceDO;
import com.template.vehicle.service.VehicleInsuranceService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:50:31
 */
 
@Controller
@RequestMapping("/vehicle/vehicleInsurance")
public class VehicleInsuranceController {
	@Autowired
	private VehicleInsuranceService vehicleInsuranceService;
	
	@GetMapping()
	@RequiresPermissions("vehicle:vehicleInsurance:vehicleInsurance")
	String VehicleInsurance(){
	    return "vehicle/vehicleInsurance/vehicleInsurance";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("vehicle:vehicleInsurance:vehicleInsurance")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<VehicleInsuranceDO> vehicleInsuranceList = vehicleInsuranceService.list(query);
		int total = vehicleInsuranceService.count(query);
		PageUtils pageUtils = new PageUtils(vehicleInsuranceList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("vehicle:vehicleInsurance:add")
	String add(){
	    return "vehicle/vehicleInsurance/add";
	}

	@GetMapping("/edit/{vehicleId}")
	@RequiresPermissions("vehicle:vehicleInsurance:edit")
	String edit(@PathVariable("vehicleId") Integer vehicleId,Model model){
		VehicleInsuranceDO vehicleInsurance = vehicleInsuranceService.get(vehicleId);
		model.addAttribute("vehicleInsurance", vehicleInsurance);
	    return "vehicle/vehicleInsurance/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("vehicle:vehicleInsurance:add")
	public R save( VehicleInsuranceDO vehicleInsurance){
		if(vehicleInsuranceService.save(vehicleInsurance)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("vehicle:vehicleInsurance:edit")
	public R update( VehicleInsuranceDO vehicleInsurance){
		vehicleInsuranceService.update(vehicleInsurance);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleInsurance:remove")
	public R remove( Integer vehicleId){
		if(vehicleInsuranceService.remove(vehicleId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleInsurance:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] vehicleIds){
		vehicleInsuranceService.batchRemove(vehicleIds);
		return R.ok();
	}
	
}
