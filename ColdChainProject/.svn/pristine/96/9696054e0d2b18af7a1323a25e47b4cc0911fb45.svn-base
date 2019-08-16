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

import com.template.vehicle.domain.VehicleReviewInfoDO;
import com.template.vehicle.service.VehicleReviewInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:38:43
 */
 
@Controller
@RequestMapping("/vehicle/vehicleReviewInfo")
public class VehicleReviewInfoController {
	@Autowired
	private VehicleReviewInfoService vehicleReviewInfoService;
	
	@GetMapping()
	@RequiresPermissions("vehicle:vehicleReviewInfo:vehicleReviewInfo")
	String VehicleReviewInfo(){
	    return "vehicle/vehicleReviewInfo/vehicleReviewInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("vehicle:vehicleReviewInfo:vehicleReviewInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<VehicleReviewInfoDO> vehicleReviewInfoList = vehicleReviewInfoService.list(query);
		int total = vehicleReviewInfoService.count(query);
		PageUtils pageUtils = new PageUtils(vehicleReviewInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("vehicle:vehicleReviewInfo:add")
	String add(){
	    return "vehicle/vehicleReviewInfo/add";
	}

	@GetMapping("/edit/{vehicleReviewId}")
	@RequiresPermissions("vehicle:vehicleReviewInfo:edit")
	String edit(@PathVariable("vehicleReviewId") Integer vehicleReviewId,Model model){
		VehicleReviewInfoDO vehicleReviewInfo = vehicleReviewInfoService.get(vehicleReviewId);
		model.addAttribute("vehicleReviewInfo", vehicleReviewInfo);
	    return "vehicle/vehicleReviewInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("vehicle:vehicleReviewInfo:add")
	public R save( VehicleReviewInfoDO vehicleReviewInfo){
		if(vehicleReviewInfoService.save(vehicleReviewInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("vehicle:vehicleReviewInfo:edit")
	public R update( VehicleReviewInfoDO vehicleReviewInfo){
		vehicleReviewInfoService.update(vehicleReviewInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleReviewInfo:remove")
	public R remove( Integer vehicleReviewId){
		if(vehicleReviewInfoService.remove(vehicleReviewId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("vehicle:vehicleReviewInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] vehicleReviewIds){
		vehicleReviewInfoService.batchRemove(vehicleReviewIds);
		return R.ok();
	}
	
}
