package com.ego.user.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

import com.ego.user.dao.UserDao;
import com.ego.user.model.User;

@Repository
public class UserDaoImpl implements UserDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public void register(User user) {
		String sqlStr = "insert into t_user(userid,username,password,phonenum,address,build,floor,room) values(1,?,?)";
		Object[] params = new Object[]{user.getUserid(),user.getUsername(),user.getPassword(),
					user.getPhonenum(),user.getAddress(),user.getBuild(),user.getFloor(),user.getRoom()};
		jdbcTemplate.update(sqlStr, params);
	}

	@Override
	public User findUserByUserName(String userName) {
		String sqlStr = "select userid,username,password,phonenum,address,build,floor,room from t_user where username=?";
		final User user = new User();
		jdbcTemplate.query(sqlStr, new Object[]{userName}, new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				user.setUserid(rs.getInt("userid"));
				user.setUsername(rs.getString("username"));
				user.setPassword(rs.getString("password"));
				user.setPhonenum(rs.getString("phonenum"));
				user.setAddress(rs.getString("address"));
				user.setBuild(rs.getString("build"));
				user.setFloor(rs.getString("floor"));
				user.setRoom(rs.getString("room"));
			}
		});
		return user;
	}

}