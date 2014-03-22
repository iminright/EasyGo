package com.ego.goods.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ego.goods.dao.GoodsDao;
import com.ego.goods.model.Goods;
import com.ego.goods.service.GoodsService;

@Service
public class GoodsServiceImpl implements GoodsService {

	@Autowired
	private GoodsDao GoodsDao;

}