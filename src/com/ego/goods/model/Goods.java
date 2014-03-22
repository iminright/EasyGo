package com.ego.goods.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Goods implements Serializable {
	
	private Integer goodsid ;//商品id
	private String goodsname ;//商品名称
	private Integer classityid ;//商品分类id
	private Float price ;//价格
	private Float price_bak ;//原价
	private Integer volume ;//成交量
	private String remarks ;//备注
	private Integer shopid ;//店家id
	private String shopname ;//店家名称
	private Integer goodsnum ;//库存
	
	
	public Integer getGoodsid() {
		return goodsid;
	}
	public void setGoodsid(Integer goodsid) {
		this.goodsid = goodsid;
	}
	public String getGoodsname() {
		return goodsname;
	}
	public void setGoodsname(String goodsname) {
		this.goodsname = goodsname;
	}
	public Integer getClassityid() {
		return classityid;
	}
	public void setClassityid(Integer classityid) {
		this.classityid = classityid;
	}
	public Float getPrice() {
		return price;
	}
	public void setPrice(Float price) {
		this.price = price;
	}
	public Float getPrice_bak() {
		return price_bak;
	}
	public void setPrice_bak(Float price_bak) {
		this.price_bak = price_bak;
	}
	public Integer getVolume() {
		return volume;
	}
	public void setVolume(Integer volume) {
		this.volume = volume;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public Integer getShopid() {
		return shopid;
	}
	public void setShopid(Integer shopid) {
		this.shopid = shopid;
	}
	public String getShopname() {
		return shopname;
	}
	public void setShopname(String shopname) {
		this.shopname = shopname;
	}
	public Integer getGoodsnum() {
		return goodsnum;
	}
	public void setGoodsnum(Integer goodsnum) {
		this.goodsnum = goodsnum;
	}
	

}
