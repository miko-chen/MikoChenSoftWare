package com.template.event.controller;

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

import com.template.event.domain.EventRecordDO;
import com.template.event.service.EventRecordService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 
 * 
 * @author jwh
 * @email 1173564449@qq.com
 * @date 2019-05-22 16:27:02
 */
 
@Controller
@RequestMapping("/event/eventRecord")
public class EventRecordController {
	@Autowired
	private EventRecordService eventRecordService;
	
	@GetMapping()
	@RequiresPermissions("event:eventRecord:eventRecord")
	String EventRecord(){
	    return "event/eventRecord/eventRecord";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("event:eventRecord:eventRecord")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<EventRecordDO> eventRecordList = eventRecordService.list(query);
		int total = eventRecordService.count(query);
		PageUtils pageUtils = new PageUtils(eventRecordList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("event:eventRecord:add")
	String add(){
	    return "event/eventRecord/add";
	}

	@GetMapping("/edit/{eventId}")
	@RequiresPermissions("event:eventRecord:edit")
	String edit(@PathVariable("eventId") Integer eventId,Model model){
		EventRecordDO eventRecord = eventRecordService.get(eventId);
		model.addAttribute("eventRecord", eventRecord);
	    return "event/eventRecord/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("event:eventRecord:add")
	public R save( EventRecordDO eventRecord){
		if(eventRecordService.save(eventRecord)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("event:eventRecord:edit")
	public R update( EventRecordDO eventRecord){
		eventRecordService.update(eventRecord);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("event:eventRecord:remove")
	public R remove( Integer eventId){
		if(eventRecordService.remove(eventId)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("event:eventRecord:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] eventIds){
		eventRecordService.batchRemove(eventIds);
		return R.ok();
	}
	
}
