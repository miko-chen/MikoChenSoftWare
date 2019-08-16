package com.template.order.controller;

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

import com.template.order.domain.OrderEvaluateDO;
import com.template.order.service.OrderEvaluateService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:57:02
 */
 
@Controller
@RequestMapping("/order/orderEvaluate")
public class OrderEvaluateController {
	@Autowired
	private OrderEvaluateService orderEvaluateService;
	
	@GetMapping()
	@RequiresPermissions("order:orderEvaluate:orderEvaluate")
	String OrderEvaluate(){
	    return "order/orderEvaluate/orderEvaluate";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("order:orderEvaluate:orderEvaluate")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<OrderEvaluateDO> orderEvaluateList = orderEvaluateService.list(query);
		int total = orderEvaluateService.count(query);
		PageUtils pageUtils = new PageUtils(orderEvaluateList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("order:orderEvaluate:add")
	String add(){
	    return "order/orderEvaluate/add";
	}

	@GetMapping("/edit/{operatorEvaluateId}")
	@RequiresPermissions("order:orderEvaluate:edit")
	String edit(@PathVariable("operatorEvaluateId") Integer operatorEvaluateId,Model model){
		OrderEvaluateDO orderEvaluate = orderEvaluateService.get(operatorEvaluateId);
		model.addAttribute("orderEvaluate", orderEvaluate);
	    return "order/orderEvaluate/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("order:orderEvaluate:add")
	public R save( OrderEvaluateDO orderEvaluate){
		if(orderEvaluateService.save(orderEvaluate)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("order:orderEvaluate:edit")
	public R update( OrderEvaluateDO orderEvaluate){
		orderEvaluateService.update(orderEvaluate);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("order:orderEvaluate:remove")
	public R remove( Integer operatorEvaluateId){
		if(orderEvaluateService.remove(operatorEvaluateId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("order:orderEvaluate:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] operatorEvaluateIds){
		orderEvaluateService.batchRemove(operatorEvaluateIds);
		return R.ok();
	}
	
}
