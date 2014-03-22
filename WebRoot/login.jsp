<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <script type="text/javascript">
    	function reg(){
    		
    	}
    	
    	function login(){
    		userfrm.action = "user/login.do" ;
    		userfrm.submit() ;
    	}
    	
    	function reg(){
    		userfrm.action = "user/register.do" ;
    		userfrm.submit() ;
    	}
    	
    </script>
  </head>
  
  <body>
  <form action="" name="userfrm" method="post">
    用户名：<input type="text" id="username" name ="username" />
    密码：<input type="password" id="password" name ="password" />
    <button onclick="login();">登陆</button>
    <button onclick="reg();">注册</button>
  </form>
  </body>
</html>
