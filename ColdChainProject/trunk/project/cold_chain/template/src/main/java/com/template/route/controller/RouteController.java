package com.template.route.controller;

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

import com.template.route.domain.RouteDO;
import com.template.route.service.RouteService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 15:34:37
 */
 
@Controller
@RequestMapping("/route/route")
public class RouteController {
	@Autowired
	private RouteService routeService;
	
	@GetMapping()
	@RequiresPermissions("route:route:route")
	String Route(){
	    return "route/route/route";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("route:route:route")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<RouteDO> routeList = routeService.list(query);
		int total = routeService.count(query);
		PageUtils pageUtils = new PageUtils(routeList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("route:route:add")
	String add(){
	    return "route/route/add";
	}

	@GetMapping("/edit/{routeId}")
	@RequiresPermissions("route:route:edit")
	String edit(@PathVariable("routeId") Integer routeId,Model model){
		RouteDO route = routeService.get(routeId);
		model.addAttribute("route", route);
	    return "route/route/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("route:route:add")
	public R save( RouteDO route){
		if(routeService.save(route)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("route:route:edit")
	public R update( RouteDO route){
		routeService.update(route);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("route:route:remove")
	public R remove( Integer routeId){
		if(routeService.remove(routeId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("route:route:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] routeIds){
		routeService.batchRemove(routeIds);
		return R.ok();
	}
	
}
