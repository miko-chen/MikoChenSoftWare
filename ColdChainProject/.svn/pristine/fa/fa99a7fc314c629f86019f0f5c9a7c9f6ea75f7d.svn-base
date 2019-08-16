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

import com.template.basic.domain.BasicEquipmentInfoDO;
import com.template.basic.service.BasicEquipmentInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:04:41
 */
 
@Controller
@RequestMapping("/basic/basicEquipmentInfo")
public class BasicEquipmentInfoController {
	@Autowired
	private BasicEquipmentInfoService basicEquipmentInfoService;
	
	@GetMapping()
	@RequiresPermissions("basic:basicEquipmentInfo:basicEquipmentInfo")
	String BasicEquipmentInfo(){
	    return "basic/basicEquipmentInfo/basicEquipmentInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("basic:basicEquipmentInfo:basicEquipmentInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<BasicEquipmentInfoDO> basicEquipmentInfoList = basicEquipmentInfoService.list(query);
		int total = basicEquipmentInfoService.count(query);
		PageUtils pageUtils = new PageUtils(basicEquipmentInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("basic:basicEquipmentInfo:add")
	String add(){
	    return "basic/basicEquipmentInfo/add";
	}

	@GetMapping("/edit/{equipmentId}")
	@RequiresPermissions("basic:basicEquipmentInfo:edit")
	String edit(@PathVariable("equipmentId") Integer equipmentId,Model model){
		BasicEquipmentInfoDO basicEquipmentInfo = basicEquipmentInfoService.get(equipmentId);
		model.addAttribute("basicEquipmentInfo", basicEquipmentInfo);
	    return "basic/basicEquipmentInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("basic:basicEquipmentInfo:add")
	public R save( BasicEquipmentInfoDO basicEquipmentInfo){
		if(basicEquipmentInfoService.save(basicEquipmentInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("basic:basicEquipmentInfo:edit")
	public R update( BasicEquipmentInfoDO basicEquipmentInfo){
		basicEquipmentInfoService.update(basicEquipmentInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("basic:basicEquipmentInfo:remove")
	public R remove( Integer equipmentId){
		if(basicEquipmentInfoService.remove(equipmentId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("basic:basicEquipmentInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] equipmentIds){
		basicEquipmentInfoService.batchRemove(equipmentIds);
		return R.ok();
	}
	
}
