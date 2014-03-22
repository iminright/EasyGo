package com.ego.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ego.user.model.User;
import com.ego.user.service.UserService;

@Controller
@RequestMapping("/user") 
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/loginView")
	public String loginView(){
		return "login";
	}
	
	@RequestMapping("/registerView")
	public ModelAndView registerView(){
		ModelAndView mav = new ModelAndView();
		mav.setViewName("fuck");
		return mav ;
	}
	
	@RequestMapping("/login")
	public ModelAndView login(User user){
		ModelAndView mav = new ModelAndView();
		User u = userService.loginCheck(user);
		if(null==u){
			mav.setViewName("login");
			mav.addObject("errorMsg","用户名或密码有误！");
			return mav;
		}
		else{
			if(user.getUsername().equals("admin")){
				mav.setViewName("houtai");
				mav.addObject("user", u);
			}else{
				mav.setViewName("success");
				mav.addObject("user", u);
			}
			return mav;
		}
	}
	
	@RequestMapping("/register")
	public ModelAndView register(User user){
		ModelAndView mav = new ModelAndView();
		if(userService.register(user)){
			mav.setViewName("register_succ");
			return mav;
		}
		else{
			mav.setViewName("register");
			mav.addObject("errorMsg","用户名已被占用，请更换！！");
			return mav;
		}
	}
}