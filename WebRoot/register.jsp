<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page contentType="text/html;charset=gbk"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
<title>�ֹ�@�㲻����-��Աע��</title>
<link type="text/css" rel="stylesheet" href="css/index.css" />
<link type="text/css" rel="stylesheet" href="css/login.css" />
<!--��̨��ʽ-->
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
		$("#tip").html("�������ϢΪ�ջ��ʽ����");
		return;
	}

	if ( password.length < 6 ) {
		$("#tip").html("���볤�Ȳ���С��6λ����");
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
patrns[1] = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/  //email��ַ
patrns[2] = /^[\u4e00-\u9fa5|\w|\-]+$/  //���Ļ������֡�26��Ӣ����ĸ�����»�����ɵ��ַ���
patrns[3] = /^\w+$/  //�����֡�26��Ӣ����ĸ�����»�����ɵ��ַ���
patrns[4] = /^[A-Za-z0-9]+$/  //��������ĸ���
patrns[5] = /^\w+$/  //�����֡�26��Ӣ����ĸ�����»�����ɵ���
patrns[6] = /^[\w\~\`\!\@\#\$\^\&\*\(\)\-\_\=\+\[\]\{\}\\\\|\.\<\;\:\>\?\/\,]+$/  //�����֡�26��Ӣ����ĸ�����»�����ɵ��ַ�
function checkInput(obj,ty){
	if(obj.nextSibling.title){
			nowstr=obj.nextSibling.title.split("|");
			if(!obj.value){ 
						obj.nextSibling.nextSibling.className="tser";
						if(nowstr[6]){
							obj.nextSibling.nextSibling.innerHTML=nowstr[6];	
						}else{
							obj.nextSibling.nextSibling.innerHTML=nowstr[3]+"����Ϊ��";	
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
							obj.nextSibling.nextSibling.innerHTML="��"+nowstr[3]+"��"+"�ĳ���Ϊ"+(nowstr[0]==nowstr[1]?nowstr[0]:nowstr[0]+"��"+nowstr[1])+"���ַ�";
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
	if(confirm("�Ƿ�ͬ�⡰��������͡���˽Ȩ�����͸�����Ϣ�������ߡ���")){
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
                  msgtxt = "����";
               }
               if(cktype==2){
                  postdata="name="+$('#myname').val();
                  msgid = $('#nmsg');
                  msgtxt = "�ǳ�";
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
                            msgid.html("��ϲ��,��"+msgtxt+"����ע�ᣡ");                                               
                            
                        }else{
                            msgid.removeClass();
                            msgid.addClass('tser');
                            msgid.html(""+msgtxt+"��ע�ᣡ");
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

    //���볤�ȴ���5λ 

    +( password.length > 5 ) 

    //���뺬����ĸ 

    +( /[a-z]/.test(password) && /[A-Z]/.test(password) ) 

    //���뺬����ĸ������ 

    +( /\d/.test(password) && /\D/.test(password) ) 

    //���뺬�������ַ� 

    +( /[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/.test(password) && /\w/.test(password) ) 

    //���볤�ȴ���12λ 

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
		  <strong>�ʺ�</strong><input name="username" id="username" type="text" value="" maxlength="100" class="ckout"  autocomplete="off" />
	</label>
	<label>	
		  <strong>��������</strong><input name="password" type="password" id="password" value="" maxlength="16"  class="ckout"  /><b title="6|16|6|����|������6-16λ����ַ���ɡ�|������6-16λ����ַ�����ĸ�����֡����ţ���ɣ����ִ�Сд��|����̫���ˣ�����6λ��"></b><span></span>
	</label>
	<label>
    	  <strong>�ǳ�</strong><input name="usernc" type="text" id="usernc"  onblur="checkJs(this,2)" value=""  class="ckout"  maxlength="30" autocomplete="off" /><b title="4|24|2|�ǳ�|֧����Ӣ�ġ����ֻ��ߡ�_����|������4-24λ������Ӣ�ġ����ֺ����ġ�|�������ǳơ�"></b><span id="nmsg"></span>
  	</label>
  	<label><strong>��ַ</strong>
    	  <input name="address" type="text" id="address" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label><strong>��ϵ��ʽ</strong>
    	  <input name="address" type="text" id="address" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label style="display: none"><strong>��</strong>
    	  <input name="build" type="hidden" id="build" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label style="display: none"><strong>¥��</strong>
    	  <input name="floor" type="hidden" id="floor" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
  	<label style="display: none"><strong>�����</strong>
    	  <input name="room" type="hidden" id="room" value="" size="4" maxlength="4"  class="ckout"  autocomplete="off" />
	</label>
	<label style="width:436px; padding-top:25px;">
		<strong></strong>
		<img name="gosumb" style="margin-bottom:8px; margin-left:10px;_margin-left:5px;" id="gosumb" src="images/regsumbit.png"  title="��ȷ��������д������ٵ��"  onMouseOut="if(document.getElementById('agreementa').checked){this.src='images/regsumbit.png';};" onMouseMove="if(document.getElementById('agreementa').checked){this.src='images/regsumbit1.png';};" onclick="reg();"/>
	</label>
	<label style="width:436px; padding-top:0px;">
		<strong></strong><input name="agreement" type="checkbox" style="display:none;"/><input name="agreement" type="checkbox"  id="agreementa" value="ͬ��" onClick="document.getElementById('gosumb').disabled=!this.checked;document.getElementById('gosumb').src=this.checked?'images/regsumbit.png':'images/regsumbit0.png';document.getElementById('gosumb').title=this.checked?'��ȷ��������д������ٵ��':'����ͬ�⡶�ֹ�@�㲻����ʹ��Э�顷';"  checked="checked" style="margin:0px; margin-right:5px;margin-left:10px;_margin-left:5px;" />��ͬ��<a href="#" target="_blank" class="font08c12a">���ֹ�@�㲻����ʹ��Э�顷</a><br /> 	 
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