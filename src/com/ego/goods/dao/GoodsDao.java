package com.ego.goods.dao;

import com.ego.goods.model.Goods;

public interface GoodsDao {
	public void register(Goods goods);
	public Goods findUserByUserName(final String userName);
}