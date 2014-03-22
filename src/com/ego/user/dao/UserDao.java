package com.ego.user.dao;

import com.ego.user.model.User;

public interface UserDao {
	public void register(User user);
	public User findUserByUserName(final String userName);
}