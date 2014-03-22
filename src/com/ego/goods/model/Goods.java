package com.ego.goods.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class Goods implements Serializable {
	
	private Integer goodsid ;//��Ʒid
	private String goodsname ;//��Ʒ����
	private Integer classityid ;//��Ʒ����id
	private Float price ;//�۸�
	private Float price_bak ;//ԭ��
	private Integer volume ;//�ɽ���
	private String remarks ;//��ע
	private Integer shopid ;//���id
	private String shopname ;//�������
	private Integer goodsnum ;//���
	
	
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
