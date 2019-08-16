package com.template.ic.controller;

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

import com.template.ic.domain.IcCardInfoDO;
import com.template.ic.service.IcCardInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:59:28
 */
 
@Controller
@RequestMapping("/ic/icCardInfo")
public class IcCardInfoController {
	@Autowired
	private IcCardInfoService icCardInfoService;
	
	@GetMapping()
	@RequiresPermissions("ic:icCardInfo:icCardInfo")
	String IcCardInfo(){
	    return "ic/icCardInfo/icCardInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("ic:icCardInfo:icCardInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<IcCardInfoDO> icCardInfoList = icCardInfoService.list(query);
		int total = icCardInfoService.count(query);
		PageUtils pageUtils = new PageUtils(icCardInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("ic:icCardInfo:add")
	String add(){
	    return "ic/icCardInfo/add";
	}

	@GetMapping("/edit/{icId}")
	@RequiresPermissions("ic:icCardInfo:edit")
	String edit(@PathVariable("icId") Integer icId,Model model){
		IcCardInfoDO icCardInfo = icCardInfoService.get(icId);
		model.addAttribute("icCardInfo", icCardInfo);
	    return "ic/icCardInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("ic:icCardInfo:add")
	public R save( IcCardInfoDO icCardInfo){
		if(icCardInfoService.save(icCardInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("ic:icCardInfo:edit")
	public R update( IcCardInfoDO icCardInfo){
		icCardInfoService.update(icCardInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("ic:icCardInfo:remove")
	public R remove( Integer icId){
		if(icCardInfoService.remove(icId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("ic:icCardInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] icIds){
		icCardInfoService.batchRemove(icIds);
		return R.ok();
	}
	
}
