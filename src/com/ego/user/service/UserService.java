package com.ego.user.service;

import com.ego.user.model.User;

public interface UserService {
	public boolean register(User user);
	public User loginCheck(User user);
}