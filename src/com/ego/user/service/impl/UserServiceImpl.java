package com.ego.user.service.impl; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ego.user.dao.UserDao;
import com.ego.user.model.User;
import com.ego.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Override
	public User loginCheck(User user) {
		User u  = userDao.findUserByUserName(user.getUsername());
		//System.out.println("id="+u.getId()+",  userName="+u.getUserName()+", password="+u.getPassWord());
		if(user.getPassword().equals(u.getPassword())){
			return u;
		}
		else{
			return null;
		}
	}

	@Override
	public boolean register(User user) {
		User u =  userDao.findUserByUserName(user.getUsername());
		System.out.println("------------------") ;
		System.out.println(u.getUsername()) ;
		System.out.println(u.getPassword()) ;
		System.out.println(u.getUserid()) ;
		if(u.getUserid()==null){
			userDao.register(user);
			return true;
		}
		else{
			System.out.println("userid="+u.getUserid()+",username="+u.getUsername()+", password="+u.getPassword());
			return false;
		}
	}

}