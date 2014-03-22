<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page contentType="text/html;charset=gbk"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
<title>乐购@足不出户-会员注册</title>
<link type="text/css" rel="stylesheet" href="css/index.css" />
<link type="text/css" rel="stylesheet" href="css/login.css" />
<!--后台样式-->
<script type="text/javascript" src="scripts/jquery.min.js"></script>
<script type="text/javascript" src="scripts/DD_png.js"></script>
 <!--[if IE 6]>    
    <script type="text/javascript">
    DD_belatedPNG.fix('.pngimg');
    </script>
<![endif]-->
<script type="text/javascript">
$(function(){
	loadValCode();
});
function submitRegister(){
	var maile=$("input:text[name='maile']").val();
	var password=$("input:password[name='password']").val();
	var myname=$("input:myname[name='myname']").val();
	var checknum=$("input:text[name='checknum']").val();	
	  if(maile=="" || password=="" || myname=="" || checknum==""){
		$("#tip").html("输入的信息为空或格式错误");
		return;
	}

	if ( password.length < 6 ) {
		$("#tip").html("密码长度不能小于6位数！");
		return ;
	}

	document.forms["regform"].submit();
}
function loadValCode(){
	var curtime=new Date().getTime();
	document.getElementById("valImage").src="/index/get-val-code/curtime/"+curtime;
}
</script>
</head>

<!--reg-main start-->
<body>
<div class="regbody" align="center">
<div style="width:100%; height:110px;"><img src="images/reglogo.jpg" width="640" height="110" border="0" usemap="#Map" />
</div>
  <div class="regmsgout">
    <div class="regmsgl"><img src="images/regbg_l.png" width="22" height="470" class="pngimg" /></div>
    
    <div class="regmsgm">
      <div class="regmsgt"><img src="images/regbg_t.png" width="634" height="20" class="pngimg" /></div>
      <div class="regmsg">
		<script>
var patrns = new Array();
patrns[1] = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/  //email地址
patrns[2] = /^[\u4e00-\u9fa5|\w|\-]+$/  //中文或由数字、26个英文字母或者下划线组成的字符串
patrns[3] = /^\w+$/  //由数字、26个英文字母或者下划线组成的字符串
patrns[4] = /^[A-Za-z0-9]+$/  //数字与字母组成
patrns[5] = /^\w+$/  //由数字、26个英文字母或者下划线组成的字
patrns[6] = /^[\w\~\`\!\@\#\$\^\&\*\(\)\-\_\=\+\[\]\{\}\\\\|\.\<\;\:\>\?\/\,]+$/  //由数字、26个英文字母或者下划线组成的字符
function checkInput(obj,ty){
	if(obj.nextSibling.title){
			nowstr=obj.nextSibling.title.split("|");
			if(!obj.value){ 
						obj.nextSibling.nextSibling.className="tser";
						if(nowstr[6]){
							obj.nextSibling.nextSibling.innerHTML=nowstr[6];	
						}else{
							obj.nextSibling.nextSibling.innerHTML=nowstr[3]+"不可为空";	
						}				 
			}else{
				if(nowstr[0]&&nowstr[1]){
					lvalue=obj.value.replace(/[\u4e00-\u9fa5]/g,'aa');

					
					if(lvalue.length<Math.floor(nowstr[0])||lvalue.length>Math.floor(nowstr[1])){
						if(ty){
						obj.nextSibling.nextSibling.innerHTML=nowstr[4];
						obj.nextSibling.nextSibling.className="tser";
						}else{
						if(nowstr[5]){
							obj.nextSibling.nextSibling.innerHTML=nowstr[5];	
						}else{
							obj.nextSibling.nextSibling.innerHTML="“"+nowstr[3]+"”"+"的长度为"+(nowstr[0]==nowstr[1]?nowstr[0]:nowstr[0]+"至"+nowstr[1])+"个字符";
						}
						obj.nextSibling.nextSibling.className="tsem";
						//obj.className="ckok";
						
						}
					}else{
						if(nowstr[2]){
							result=obj.value.match(patrns[Math.floor(nowstr[2])]);
							if(result){
								obj.nextSibling.nextSibling.innerHTML="";
								obj.nextSibling.nextSibling.className=(obj.name!="cheknum")?"tsok":"";	
								//obj.className=ty?"ckout":"ckok";
							}else{
								obj.nextSibling.nextSibling.innerHTML=nowstr[4];
								obj.nextSibling.nextSibling.className="tser";
							}
						}else{
								obj.nextSibling.nextSibling.innerHTML="";
								obj.nextSibling.nextSibling.className=(obj.name!="cheknum")?"tsok":"";
								//obj.className=ty?"ckout":"ckok";
						}
					}
				} 
			}
	}
	
}

function checkForm(obj){
	myform=obj; 
	for(var i=0;i<myform.length;i++){
		if(myform[i].nextSibling.nextSibling.className=='tser'){
		myform[i].focus();
		return false;
		}
		if(myregform[i].type=="text"||myregform[i].type=="password"){
		checkInput(myregform[i],1);
		if(myform[i].nextSibling.nextSibling.className=='tser'){
			myform[i].focus();
			myform[i].select();
			return false;
		}
		}
	}
	if(obj["agreement"].checked=false){
	if(confirm("是否同意“服务条款”和“隐私权保护和个人信息利用政策”？")){
	obj["agreement"].checked=true;
	}else{
	return false;	
	}
	}
	return true;
}
function wtjs(objid,jssrc){
	document.getElementById(objid).innerHTML="";
	var oSr= document.createElement("script"); 
	oSr.setAttribute("type", "text/javascript"); 
	oSr.setAttribute("src", jssrc); 
	if (typeof oSr != "undefined") document.getElementById(objid).appendChild(oSr); 
}
function checkJs(obj,cktype){
	 
	if(obj.nextSibling.nextSibling.className=='tser'){
			 
			return false;
	}else{
	 checkInput(obj,1);
	}
	if(obj.nextSibling.nextSibling.className=='tser'){
			 
			return false;
	}else{
		pvalue=obj.value;
		if(pvalue.length>0){
			var class_name = $('#mmsg').attr('class');
            var txtval = $('#maile').val();
            var postdata  = "";
            var msgtxt  = "";
            var msgid = "";
               if(cktype==1){
                  postdata="mail="+$('#maile').val();
                  msgid = $('#mmsg');
                  msgtxt = "邮箱";
               }
               if(cktype==2){
                  postdata="name="+$('#myname').val();
                  msgid = $('#nmsg');
                  msgtxt = "昵称";
               }            
       	       url ='/Ajax/checkreg';
    	       $.ajax({ 
                url:url,
                type: 'POST', 
                data:postdata,  
                beforeSend: function(){
                      msgid.html("<img src='images/027.gif' />");                             
                },
                success: function(data){
                        if(parseInt(data)<1){
                            msgid.html("恭喜您,此"+msgtxt+"可以注册！");                                               
                            
                        }else{
                            msgid.removeClass();
                            msgid.addClass('tser');
                            msgid.html(""+msgtxt+"已注册！");
                        }                 
                   
                }
            }); 
		}else{
		obj.className="ckout"
		}
	}
}

function getPasswordSecurityLevel(password){ 

    return 0 

    //密码长度大于5位 

    +( password.length > 5 ) 

    //密码含有字母 

    +( /[a-z]/.test(password) && /[A-Z]/.test(password) ) 

    //密码含有字母和数字 

    +( /\d/.test(password) && /\D/.test(password) ) 

    //密码含有特殊字符 

    +( /[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/.test(password) && /\w/.test(password) ) 

    //密码长度大于12位 

    +( password.length > 12 ); 

} 

function showregmail(obj){

		//alert(obj.parentNode.offsetWidth);
		document.getElementById('regmailtui').style.display='block';
		document.getElementById('regmailtui').style.width=(obj.parentNode.offsetWidth-24)+"px";

}
</script>
    <script type="text/javascript">
    	function reg(){
    		
    	}
    	
    	function login(){
    		userfrm.action = "user/login.do" ;
    		userfrm.submit() ;
    	}
    	
    	function reg(){
    		regform.action = "user/register.do" ;
    		regform.submit() ;
    	}
    	
    </script>
<span id="tip" style="color:red;"></span>
<div id="phonejs" style="display:none"></div>
<div align="left"  ><div style="height:72px; width:100%"><img src="images/regtitle.gif" width="200" height="72" /></div>
<form id="regform" class="regform" name="regform" method="post" action="">
  
	<label style="position:relative; z-index:101;">
		  <strong>帐号</strong><input name="username" id="username" type="text" value="" maxlength="100" class="ckout"  autocomplete="off" />
	</label>
	<label>	
		  <strong>创建密码</strong><input name="password" type="password" id="password" value="" maxlength="16"  class="ckout"  /><b title="6|16|6|密码|密码由6-16位半角字符组成。|密码由6-16位半角字符（字母、数字、符号）组成，区分大小写。|密码太短了，最少6位。"></b><span></span>
	</label>
	<label>
    	  <strong>昵称</strong><input name="usernc" type="text" id="usernc"  onblur="checkJs(this,2)" value=""  class="ckout"  maxlength="30" autocomplete="off" /><b title="4|24|2|昵称|支持中英文、数字或者“_”。|可输入4-24位，包含英文、数字和中文。|请输入昵称。"></b><span id="nmsg"></span>
  	</label>
  	<label><strong>地址</strong>
    	  <input name="address" type="text" id="address" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label><strong>联系方式</strong>
    	  <input name="address" type="text" id="address" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label style="display: none"><strong>栋</strong>
    	  <input name="build" type="hidden" id="build" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label style="display: none"><strong>楼层</strong>
    	  <input name="floor" type="hidden" id="floor" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label style="display: none"><strong>房间号</strong>
    	  <input name="room" type="hidden" id="room" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
	<label style="width:436px; padding-top:25px;">
		<strong></strong>
		<img name="gosumb" style="margin-bottom:8px; margin-left:10px;_margin-left:5px;" id="gosumb" src="images/regsumbit.png"  title="请确认所有填写无误后再点击"  onMouseOut="if(document.getElementById('agreementa').checked){this.src='images/regsumbit.png';};" onMouseMove="if(document.getElementById('agreementa').checked){this.src='images/regsumbit1.png';};" onclick="reg();"/>
	</label>
	<label style="width:436px; padding-top:0px;">
		<strong></strong><input name="agreement" type="checkbox" style="display:none;"/><input name="agreement" type="checkbox"  id="agreementa" value="同意" onClick="document.getElementById('gosumb').disabled=!this.checked;document.getElementById('gosumb').src=this.checked?'images/regsumbit.png':'images/regsumbit0.png';document.getElementById('gosumb').title=this.checked?'请确认所有填写无误后再点击':'请先同意《乐购@足不出户使用协议》';"  checked="checked" style="margin:0px; margin-right:5px;margin-left:10px;_margin-left:5px;" />我同意<a href="#" target="_blank" class="font08c12a">《乐购@足不出户使用协议》</a><br /> 	 
	</label>
		<input name="ivid"  id="ivid" value="" type="hidden" />
</form>
</div>
 <script> 
myregform=document.forms["regform"];
	for(var i=0;i<myregform.length;i++){
		if(myregform[i].type=="text"||myregform[i].type=="password"){
			myregform[i].onkeyup=function(){
			 checkInput(this,0);	
				 document.getElementById('regmailtui').style.display='none';	
			}
			myregform[i].onfocus=function(){
			 this.className="ckok";	
				 if(this.name!="maile"){document.getElementById('regmailtui').style.display='none';	}
			}
			if(myregform[i].name=="maile"||myregform[i].name=="myname"||myregform[i].name=="cheknum"){
				myregform[i].onblur=function(){
				 mtype=this.name=="maile"?1:(this.name=="myname"?2:(this.name=="cheknum"?3:0));
				 this.className="ckout";
				 document.getElementById('regmailtui').style.display='none';	
				 return checkJs(this,mtype);
				}
			}else{
				myregform[i].onblur=function(){
				 this.className="ckout";
				 document.getElementById('regmailtui').style.display='none';
				 checkInput(this,1); 
				}

			}
		}
	}
</script>
</div>
      <div class="regmsgb"><img src="images/regbg_b.png" width="634" height="20" class="pngimg" /></div>
    </div>
    <div class="regmsgr"><img src="images/regbg_r.png" width="24" height="470" class="pngimg" /></div>
  </div>
</div>
<div  align="center" style="background-color:#ECf9Dd"></div>
  <map name="Map" id="Map">
    <area shape="rect" coords="2,17,338,99" href="#" />
</map>
</body>
</html>