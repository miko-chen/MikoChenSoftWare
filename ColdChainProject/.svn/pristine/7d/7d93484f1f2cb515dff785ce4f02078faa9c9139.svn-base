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

import com.template.order.domain.OrderInfoDO;
import com.template.order.service.OrderInfoService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:32:43
 */
 
@Controller
@RequestMapping("/order/orderInfo")
public class OrderInfoController {
	@Autowired
	private OrderInfoService orderInfoService;
	
	@GetMapping()
	@RequiresPermissions("order:orderInfo:orderInfo")
	String OrderInfo(){
	    return "order/orderInfo/orderInfo";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("order:orderInfo:orderInfo")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<OrderInfoDO> orderInfoList = orderInfoService.list(query);
		int total = orderInfoService.count(query);
		PageUtils pageUtils = new PageUtils(orderInfoList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("order:orderInfo:add")
	String add(){
	    return "order/orderInfo/add";
	}

	@GetMapping("/edit/{orderId}")
	@RequiresPermissions("order:orderInfo:edit")
	String edit(@PathVariable("orderId") Integer orderId,Model model){
		OrderInfoDO orderInfo = orderInfoService.get(orderId);
		model.addAttribute("orderInfo", orderInfo);
	    return "order/orderInfo/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("order:orderInfo:add")
	public R save( OrderInfoDO orderInfo){
		if(orderInfoService.save(orderInfo)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("order:orderInfo:edit")
	public R update( OrderInfoDO orderInfo){
		orderInfoService.update(orderInfo);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("order:orderInfo:remove")
	public R remove( Integer orderId){
		if(orderInfoService.remove(orderId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("order:orderInfo:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] orderIds){
		orderInfoService.batchRemove(orderIds);
		return R.ok();
	}
	
}
