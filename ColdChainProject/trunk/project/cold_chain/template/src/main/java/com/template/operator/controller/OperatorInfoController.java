package com.template.operator.controller;

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

import com.template.operator.domain.OperatorInfoDO;
import com.template.operator.service.OperatorInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:51:14
 */
 
@Controller
@RequestMapping("/operator/operatorInfo")
public class OperatorInfoController {
	@Autowired
	private OperatorInfoService operatorInfoService;
	
	@GetMapping()
	@RequiresPermissions("operator:operatorInfo:operatorInfo")
	String OperatorInfo(){
	    return "operator/operatorInfo/operatorInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("operator:operatorInfo:operatorInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<OperatorInfoDO> operatorInfoList = operatorInfoService.list(query);
		int total = operatorInfoService.count(query);
		PageUtils pageUtils = new PageUtils(operatorInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("operator:operatorInfo:add")
	String add(){
	    return "operator/operatorInfo/add";
	}

	@GetMapping("/edit/{operatorId}")
	@RequiresPermissions("operator:operatorInfo:edit")
	String edit(@PathVariable("operatorId") Integer operatorId,Model model){
		OperatorInfoDO operatorInfo = operatorInfoService.get(operatorId);
		model.addAttribute("operatorInfo", operatorInfo);
	    return "operator/operatorInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("operator:operatorInfo:add")
	public R save( OperatorInfoDO operatorInfo){
		if(operatorInfoService.save(operatorInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("operator:operatorInfo:edit")
	public R update( OperatorInfoDO operatorInfo){
		operatorInfoService.update(operatorInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("operator:operatorInfo:remove")
	public R remove( Integer operatorId){
		if(operatorInfoService.remove(operatorId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("operator:operatorInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] operatorIds){
		operatorInfoService.batchRemove(operatorIds);
		return R.ok();
	}
	
}
