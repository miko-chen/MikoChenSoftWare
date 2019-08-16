package com.template.test.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.template.common.dao.TestMapper;
import com.template.common.utils.JPushUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.template.test.domain.TestDO;
import com.template.test.service.TestService;
import com.template.common.utils.PageUtils;
import com.template.common.utils.Query;
import com.template.common.utils.R;

/**
 * 测试表
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2019-01-14 08:55:58
 */
@Api(tags={"用户操作接口"})
@Controller
@RequestMapping("/test/test")
public class TestController {
	@Autowired
	private TestService testService;
	
	@Autowired
	private TestMapper testMapper;
	
	@GetMapping()
	@RequiresPermissions("test:test:test")
	String Test(){
	    return "test/test/test";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("test:test:test")
	public PageUtils list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);
		List<TestDO> testList = testService.list(query);
		int total = testService.count(query);
		PageUtils pageUtils = new PageUtils(testList, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("test:test:add")
	String add(){
	    return "test/test/add";
	}

	@GetMapping("/edit/{id}")
	@RequiresPermissions("test:test:edit")
	String edit(@PathVariable("id") Integer id,Model model){
		TestDO test = testService.get(id);
		model.addAttribute("test", test);
	    return "test/test/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("test:test:add")
	public R save( TestDO test){
		if(testService.save(test)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping(value = "/update",method = RequestMethod.POST)
	@RequiresPermissions("test:test:edit")
	public R update( TestDO test){
		testService.update(test);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("test:test:remove")
	public R remove( Integer id){
		if(testService.remove(id)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("test:test:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] ids){
		testService.batchRemove(ids);
		return R.ok();
	}

	/**
	 * 测试
	 */
	@ResponseBody
	@RequestMapping(value = "/test",method = RequestMethod.POST)
	public List<Map<String, Object>> test(){
		List<Map<String, Object>> list = testMapper.list();
		return list;
	}


	/**
	 * 测试
	 */
	@ResponseBody
	@RequestMapping(value = "/testId",method = RequestMethod.POST)
	public Map<String, Object> testId(Integer id){
		Map<String, Object> o = testMapper.get(id);
		return o;
	}

    @ResponseBody
    @GetMapping("/go")
    public String go(){
        return "success";
    }

	@ResponseBody
	@GetMapping("/go1")
	public Object gettest1(@RequestParam("id") Integer id, @RequestParam("name") String name, @RequestParam("age") Integer age){
		Map<String, Object> testMapper1 = testMapper.get1(id, name, age);
		return testMapper1;
	}

	/**
	 * 推送测试
	 */
	@ApiOperation(value = "推送测试")
	@ApiImplicitParams(
			@ApiImplicitParam(name="id",value="用户ID",defaultValue = "1",dataType = "Integer")
	)
	@ResponseBody
	@RequestMapping(value="/testPush",method = RequestMethod.POST)
	public String push(){

		String alias = "wangchj";
		List<String> list = new ArrayList<>();
		list.add(alias);
        //然后调用安卓的
        JPushUtil.sendToAliasList(list,"这是一条消息推送",null,"测试");
        return "推送成功";
	}

}
