package com.ego.user.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class User implements Serializable {
	
	private Integer userid ;//id
	private String username ;//名称
	private String password ;//密码
	private String phonenum ;//电话
	private String address ;//详细地址（备注）
	private String build ;//栋
	private String floor ;//楼层
	private String room ;//房间号
	
	
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhonenum() {
		return phonenum;
	}
	public void setPhonenum(String phonenum) {
		this.phonenum = phonenum;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getBuild() {
		return build;
	}
	public void setBuild(String build) {
		this.build = build;
	}
	public String getFloor() {
		return floor;
	}
	public void setFloor(String floor) {
		this.floor = floor;
	}
	public String getRoom() {
		return room;
	}
	public void setRoom(String room) {
		this.room = room;
	}
	
}
