package com.template.basic.controller;

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

import com.template.basic.domain.BasicVehicleInfoDO;
import com.template.basic.service.BasicVehicleInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:42:54
 */
 
@Controller
@RequestMapping("/basic/basicVehicleInfo")
public class BasicVehicleInfoController {
	@Autowired
	private BasicVehicleInfoService basicVehicleInfoService;
	
	@GetMapping()
	@RequiresPermissions("basic:basicVehicleInfo:basicVehicleInfo")
	String BasicVehicleInfo(){
	    return "basic/basicVehicleInfo/basicVehicleInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("basic:basicVehicleInfo:basicVehicleInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<BasicVehicleInfoDO> basicVehicleInfoList = basicVehicleInfoService.list(query);
		int total = basicVehicleInfoService.count(query);
		PageUtils pageUtils = new PageUtils(basicVehicleInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("basic:basicVehicleInfo:add")
	String add(){
	    return "basic/basicVehicleInfo/add";
	}

	@GetMapping("/edit/{vehicleId}")
	@RequiresPermissions("basic:basicVehicleInfo:edit")
	String edit(@PathVariable("vehicleId") Integer vehicleId,Model model){
		BasicVehicleInfoDO basicVehicleInfo = basicVehicleInfoService.get(vehicleId);
		model.addAttribute("basicVehicleInfo", basicVehicleInfo);
	    return "basic/basicVehicleInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("basic:basicVehicleInfo:add")
	public R save( BasicVehicleInfoDO basicVehicleInfo){
		if(basicVehicleInfoService.save(basicVehicleInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("basic:basicVehicleInfo:edit")
	public R update( BasicVehicleInfoDO basicVehicleInfo){
		basicVehicleInfoService.update(basicVehicleInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("basic:basicVehicleInfo:remove")
	public R remove( Integer vehicleId){
		if(basicVehicleInfoService.remove(vehicleId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("basic:basicVehicleInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] vehicleIds){
		basicVehicleInfoService.batchRemove(vehicleIds);
		return R.ok();
	}
	
}
