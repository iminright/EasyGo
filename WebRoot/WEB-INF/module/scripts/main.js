$cloobj=new Array();
function mdo(oj){

}
function getStyle( elem, name ) {
     //如果该属性存在于style[]中，则它最近被设置过(且就是当前的)
     if (elem.style[name]){
         return elem.style[name];
     //否则，尝试IE的方式
	 }else if (elem.currentStyle){
         return elem.currentStyle[name];
     //或者W3C的方法，如果存在的话
	 }else if (document.defaultView && document.defaultView.getComputedStyle) {
         //它使用传统的"text-Align"风格的规则书写方式，而不是"textAlign"
         name = name.replace(/([A-Z])/g,"-$1");
         name = name.toLowerCase();
         //获取style对象并取得属性的值(如果存在的话)
         var s = document.defaultView.getComputedStyle(elem,"");
         return s && s.getPropertyValue(name);
     //否则，就是在使用其它的浏览器
     } else{
     return null;
	 }
}


function closeit(obj){
	$obji=$cloobj.length;
	$cloobj[$obji]=obj;
 	obj.style.overflow="hidden";
	goclose($obji);
}
function goclose(obji){
	if($cloobj[obji]){
		if(getStyle($cloobj[obji],"height")){
			if(parseInt(getStyle($cloobj[obji],"height"))>2){
				$cloobj[obji].style.height=(parseInt(getStyle($cloobj[obji],"height"))-3)+"px";
				setTimeout(" goclose("+obji+")",10);
			}else{
				$cloobj[obji].style.display="none";
			}
		}else{
			$cloobj[obji].style.display="none";	
		}
	}
}

function gotoRemoveChild(objid){
	
obj=document.getElementById(objid);
if(obj.style.height){
	thishight=parseInt(obj.style.height);
}else{
	thishight=obj.offsetHeight;
}
if(thishight<20){
obj.parentNode.removeChild(obj);
}else{
	obj.style.overflow='hidden';
	obj.style.height=Math.floor(thishight*0.9)+'px';
	setTimeout(" gotoRemoveChild('"+objid+"');",10)
}
}
function intoTeam(tid,obj,uname){
	
	if(obj.parentNode.parentNode.previousSibling.getElementsByTagName('b').item(0).innerHTML==obj.innerHTML)return false;
	$thisobj=obj;
	backOpen(5,'操作中');
	wtjs("mailjs","/friend/intoteam/type/94/uid/"+uname+"/tid/"+tid);
}
function setTrueName(nowname,uname,obj){
	$thisobj=obj;
	coWrite2('<div class="coInput">请输入新的备注：<br><input id="ocInput" value="'+nowname+'" /></div>');
	document.getElementById('coOkfun').onclick=function(){
		newname=document.getElementById('ocInput').value;
		if(newname==null) return false;
		if(newname==nowname) return false;
		backOpen(5,'操作中');
		wtjs("mailjs","/friend/re-marks/type/99/uid/"+uname+"/newname/"+encodeURI(newname));
		coClose();
		return false;
	}

}
function setNewTName(nowname,tid){
		coWrite2('<div class="coInput">请输入新的分组名称：<br><input id="ocInput" value="'+nowname+'" /></div>');
		document.getElementById('coOkfun').onclick=function(){
			newname=document.getElementById('ocInput').value;
			if(newname==null) return false;
			if(newname==nowname) return false;
			backOpen(5,'操作中');
			wtjs("mailjs","/friend/newtname/type/97/tid/"+tid+"/newname/"+encodeURI(newname));
			coClose();
			return false;
		}
}
function setToTeam(obj,uname){
	if(document.getElementById("fteams")){
		myteams=document.getElementById("fteams").getElementsByTagName('a');
		$teamstr='';
		if(myteams){
			for(var i=0;i<myteams.length;i++){
				$teamstr+='<a href="javascript:;" onclick="intoTeam('+myteams.item(i).id.replace('fteam','')+',this,\''+uname+'\');return false;">'+myteams.item(i).getElementsByTagName('span').item(0).innerHTML+'</a>';
			}
		}
		$teamstr+='<a href="javascript:;"  onclick="intoTeam(0,this,\''+uname+'\');return false;" >未分组</a>';
		if(document.getElementById("setfteam")){
			document.getElementById("setfteam").parentNode.removeChild(document.getElementById("setfteam"));
		}
		obj.nextSibling.innerHTML='<div id="setfteam">'+$teamstr+'</div>&nbsp;';
		goshowselectid2(obj.nextSibling);
	}
}
var posX;   
var posY;   
var popDiv;   
var dragable;   
  
function down(e){   
    popDiv = document.getElementById("opendiv");   
    e = e || window.event; //如果是IE    
    posX = e.clientX - parseInt(popDiv.style.left);      
    posY = e.clientY - parseInt(popDiv.style.top);   
    dragable = true;   
    document.onmousemove = move;   
}   
  
function move(ev){   
    if(dragable == true){   
        ev = ev || window.event;//如果是IE   
        popDiv.style.left = (ev.clientX - posX) + "px";      
        popDiv.style.top = (ev.clientY - posY) + "px";      
    }   
}   
  
function up(){   
    dragable = false;   
} 
function mkOpen(){
	document.getElementById("mailjs").style.display="block";
	document.getElementById("opendiv").style.display="block";
	document.getElementById("mailjs").style.height=document.documentElement.scrollHeight+"px";
	document.getElementById("mailjs").style.width=document.documentElement.scrollWidth+"px";
        var top = document.documentElement.scrollTop + document.body.scrollTop;
	if(document.documentElement.clientHeight>document.getElementById("opendiv").scrollHeight){
	document.getElementById("opendiv").style.top=(top+(document.documentElement.clientHeight-document.getElementById("opendiv").scrollHeight)/2)+"px";
	}else{
	document.getElementById("opendiv").style.top=top+"px";
	}
	if(document.documentElement.clientWidth>document.getElementById("opendiv").scrollWidth){
	document.getElementById("opendiv").style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-document.getElementById("opendiv").scrollWidth)/2)+"px";
	}else{
	document.getElementById("opendiv").style.left=(document.documentElement.scrollLeft)+"px";
	}
	//document.getElementById("opendiv").scrollHeight;
	//document.getElementById("opendiv").clientHeight;
	//alert(document.documentElement.clientHeight);
 }
 
 
function coOpen(){
	document.getElementById("mailjs").style.display="block";
	document.getElementById("confdiv").style.display="block";
	document.getElementById("mailjs").style.height=document.documentElement.scrollHeight+"px";
	document.getElementById("mailjs").style.width=document.documentElement.scrollWidth+"px";
	if(document.documentElement.clientHeight>document.getElementById("confdiv").scrollHeight){
	document.getElementById("confdiv").style.top=(document.documentElement.scrollTop+(document.documentElement.clientHeight-document.getElementById("confdiv").scrollHeight)/2)+"px";
	}else{
	document.getElementById("confdiv").style.top=(document.documentElement.scrollTop)+"px";
	}
	if(document.documentElement.clientWidth>document.getElementById("confdiv").scrollWidth){
	document.getElementById("confdiv").style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-document.getElementById("confdiv").scrollWidth)/2)+"px";
	}else{
	document.getElementById("confdiv").style.top=(document.documentElement.scrollLeft)+"px";
	}
	//document.getElementById("confdiv").scrollHeight;
	//document.getElementById("opendiv").clientHeight;
	//alert(document.documentElement.clientHeight);
 }
function backClose(){
	 if(document.getElementById("openback").title=='点击刷新'){
		 top.location.reload();
	}
	document.getElementById("mailjs").style.display="none";
	document.getElementById("openback").style.display="none";
	 }
function backOpen(backtype,backtext){
	document.getElementById("mailjs").style.display="block";
	document.getElementById("openback").style.display="block";
	if(backtext)document.getElementById("openback").innerHTML=backtext;
	document.getElementById("mailjs").style.height=document.documentElement.scrollHeight+"px";
	document.getElementById("mailjs").style.width=document.documentElement.scrollWidth+"px";
	document.getElementById("openback").style.top=(document.documentElement.scrollTop+160)+"px";
	if(backtype==1||backtype==3){
		document.getElementById("openback").style.backgroundPosition='left bottom';
	}else if(backtype==5){
		document.getElementById("openback").style.backgroundPosition='left 1000px';
	}else{
		document.getElementById("openback").style.backgroundPosition='left top';
	}
	if(backtype==0||backtype==1){
		document.getElementById("openback").title='点击刷新';
	}else{
		document.getElementById("openback").title='点击关闭';
	}
}
function mkClose(){
	document.getElementById("mailjs").style.display="none";
	document.getElementById("opendiv").style.display="none";
}
function coClose(){
	document.getElementById("mailjs").style.display="none";
	document.getElementById("confdiv").style.display="none";
}
function ITOpen(ittitle,guan){
	document.getElementById("mailjs").style.display="block";
	document.getElementById("openitem").style.display="block"; 
	document.getElementById("mailjs").style.height=document.documentElement.scrollHeight+"px";
	document.getElementById("mailjs").style.width=document.documentElement.scrollWidth+"px";
	document.getElementById("openitem").style.top=(document.documentElement.scrollTop+20)+"px";
if(guan){
	document.getElementById("opit_t").getElementsByTagName('div').item(0).title="关闭";
}else{
	document.getElementById("opit_t").getElementsByTagName('div').item(0).title="隐藏";

}
if(ittitle){
	document.getElementById("opit_t").getElementsByTagName('b').item(0).innerHTML=ittitle;
}else{
	document.getElementById("opit_t").getElementsByTagName('b').item(0).innerHTML="操作结果";

}
 }
 function ITclose(){
	document.getElementById("mailjs").style.display="none";
	document.getElementById("openitem").style.display="none";
	if(document.getElementById("opit_t").getElementsByTagName('div').item(0).title!="隐藏"){self.location.reload();}
 }
 function mkWrite(htmstr,mktitle){
	 document.getElementById("opendivbody").innerHTML=htmstr;
	 if(mktitle)document.getElementById("opendivtitle").getElementsByTagName("span").item(0).innerHTML=mktitle;
	document.getElementById('opendiv').style.width='498px';
	document.getElementById('idopenout').style.width='488px';
	 mkOpen();
 }
function customWrite(htmstr,w,h){
    document.getElementById("opendivbody").innerHTML=htmstr;
    var _w = w-10;
    var _h = h-10;
    document.getElementById('opendiv').style.width=w+'px';
    document.getElementById('idopenout').style.width=_w+'px';
    mkOpen();
}

 function coWrite(htmstr){
	 document.getElementById("confdivbody").innerHTML=htmstr+'<div class="coDoit"><div><a href="#" id="coOkfun" onclick="return false;"></a></div><div class="docancel"><a href="#" onclick="coClose(); return false;"></a></div>';
	document.getElementById('confdiv').style.width='298px';
	document.getElementById('idconfout').className='confout';
	 coOpen();
 }
 function coWrite2(htmstr){
	 document.getElementById("confdivbody").innerHTML=htmstr+'<div class="coDoit" onclick="coClose();"><div><a href="#" id="coOkfun" onclick="return false;"></a></div><div class="docancel"><a href="#" onclick=" return false;"></a></div>';
	document.getElementById('confdiv').style.width='378px';
	document.getElementById('idconfout').className='confout0';
	 coOpen();
 }
 var coObj=null;
function wtjs(objid,jssrc){
  if(document.getElementById(objid)){
	document.getElementById(objid).innerHTML="";
	var oSr= document.createElement("script"); 
	oSr.setAttribute("type", "text/javascript"); 
	oSr.setAttribute("src", jssrc); 
	if (typeof oSr != "undefined") document.getElementById(objid).appendChild(oSr); 
  }
}
$thisobj=null;
function snsflow0(obj,userid){
	$thisobj=obj; 
	wtjs("mailjs","/transmit/addfriend/type/93/value/"+userid)
	
}
function addteam(tname){
	if(tname){
		tnamel=tname;
		if(tnamel.replace(/[^x00-xff]/g,"aa").length>10){
		
		alert('分组名长度最多5个汉字！');	
		}else{
			wtjs("mailjs","/friend/addteam/type/95/value/"+encodeURI(tname));
		}
	}else{
		alert('请输入分组名！');
	}
}
function delteam(tid){
	if(Math.floor(tid)){
		wtjs("mailjs","/friend/delteam/type/96/value/"+Math.floor(tid));
	}else{
		alert('参数有误！');
	}
}
function snsflow(obj,userid){
	$thisobj=obj; 
	wtjs("mailjs","/transmit/addfriend/type/90/value/"+userid)
	
}
function delflow(obj,userid){
	$thisobj=obj;
	wtjs("mailjs","/transmit/delfriend/type/91/value/"+userid)
}
function delflow2(obj,userid){
	$thisobj=obj;
	wtjs("mailjs","/transmit/delfriend/type/91/tp/2/value/"+userid)
}
function setstepmu(obj,val){
	$thisobj=obj; 
	wtjs("mailjs","checkjs.php?type=40&value="+val)
}
function wantflow(obj,userid){
	$thisobj=obj; 
	wtjs("mailjs","/transmit/addcheck/type/92/value/"+userid)
}
function addblk(obj,userid){
	$thisobj=obj; 
	wtjs("mailjs","/transmit/addblk/type/71/value/"+userid)
}
function delblk(obj,userid){$thisobj=obj;wtjs("mailjs","/transmit/delblk/type/72/value/"+userid);}
function joinclb(obj,clbid){$thisobj=obj;wtjs("mailjs","/transmit/addclub/type/65/value/"+clbid);}


function changesharetosns(obj){$thisobj=obj;wtjs("mailjs","/transmit/setscr/type/10/sname/share_staus/value/1");}
/* liuhaiming 20121113 */
function joinclb2(obj,ivid,clbid){$thisobj=obj;wtjs("mailjs","/transmit/addclub/type/65/ivid/"+ivid+"/value/"+clbid);}
/* liuhaiming 20121113 */
function exitclb(obj,clbid){$thisobj=obj;wtjs("mailjs","/transmit/exitclub/type/66/value/"+clbid);}
function buyitem(obj,itemid,itemnum){
	if(Math.floor(itemid.value)){
		if(Math.floor(itemnum.value)){
		$thisobj=obj; 
		wtjs("mailjs","checkjs.php?type=22&value="+itemid.value+"&num="+itemnum.value);
		}else{
			obj.innerHTML="数量填写不正确！";
		}
	}else{
		obj.innerHTML="获取商品ID失败！";
	}
}
function showfriend(obj,key){
	$thisobj=obj;
	wtjs("mailjs","checkjs.php?type=24&value="+encodeURI(key.value));
	
}
function delAllMsg(touser,uname){
	if(touser){
		coWrite2('<div class=coText >确认要删除与 '+uname+' 之间的所有对话？</div>');
		document.getElementById('coOkfun').onclick=function(){
			wtjs("mailjs","checkjs.php?type=45&value="+touser);
			coClose();
			return false;
		}
	}
}
function sendMsg(touser,sendtype){
senduser='请输入对方昵称';
if(touser){
senduser=touser;
}
mkWrite('<iframe style="display:none" src="about:blank" name="sendmsgifr"></iframe><form action="/home/sendmsg/'+(sendtype?'?noreload=1':'')+'" method="post" onsubmit="if(this[\'text\'].value&&this[\'uname\'].value&&this[\'uname\'].value!=\'请输入对方昵称\'){ }else{ document.getElementById(\'msgwtinfo\').innerHTML=\'<span style=color:#f00; >昵称和内容都完整填入才可发送哦</span>\';return false;}" target="sendmsgifr"><table width="450" border="0" cellspacing="0" cellpadding="0"><tr>   <td width="50" height="40">发  给：</td>   <td align="left"><div style="position:relative"><div id="showfr" onmousemove="onshowfr=true;" onmouseout="onshowfr=false;" style="top:28px; left:0px;"></div><input name="uname"  id="uname" type="text" value="'+senduser+'" size="12" maxlength="24" onfocus="if(this.value==\'请输入对方昵称\'){this.value=\'\';};if(this.value){showfriend(document.getElementById(\'showfr\'),this);}"  onblur="if(this.value==\'\'){this.value=\'请输入对方昵称\';};if(!onshowfr){document.getElementById(\'showfr\').style.display=\'none\';};" autocomplete="off"  onkeyup="this.form[\'uid\'].value=0;if(this.value){showfriend(document.getElementById(\'showfr\'),this);}else{document.getElementById(\'showfr\').style.display=\'none\';}"  style="width:178px; padding-left:5px;height:26px;line-height:26px;"  class="inputgray" /></div><input name="uid" type="hidden" id="uid" value="0" /></td> </tr> <tr>   <td valign="top">内  容：</td>   <td><textarea name="text" style="width:388px; padding: 2px 5px; overflow:hidden; overflow-y:visible; margin-bottom:10px; height: 52px; min-height: 52px; line-height: 26px;" onpropertychange="this.style.height=(this.scrollHeight<52?\'52px\':this.scrollHeight + \'px\');" oninput="this.style.height=\'52px\';this.style.height=(this.scrollHeight<52?\'52px\':this.scrollHeight + \'px\');"  onkeyup="limitLength(this,140);" onblur="limitLength(this,140);"  class="inputgray" id="msgtext"></textarea></td> </tr> <tr>   <td>&nbsp;</td>   <td><div style=" width: 400px;"><input type="image" src="/public/images/msgwtsend.jpg" style="float:right; width:55px; height:24px;margin:0px"  /><div style="float:right; width:334px; text-align:right; height: 24px; line-height: 24px; color: #A2A2A2; margin-right: 5px;" id="msgwtinfo">还能输入140字</div></div><br /></td> </tr></table></form>',"发私信");
	//<div id="facelist" style="top:0px; left:-5px;">  <div style="height:14px; padding:4px 10px; background-color: #FFFCEB;"><img src="images/closemsgtishi.jpg" width="8" height="9" style="float:right; margin-top:5px; cursor:pointer; background-color: #FFF;" onclick="closeit(this.parentNode.parentNode);" />点击下面表情选择插入</div> <div style=" background-color:#FFF;  width:413px; height:251px;" id="mafaces"><iframe src="/em/" scrolling="no" width="413" height="251" frameborder="0" marginheight="0" marginwidth="0" name="emsrc"></iframe></div></div><img src="images/msgwtface.jpg" width="50" onclick="flistshow(document.getElementById(\'facelist\'));" height="24" style="float:left; cursor:pointer;" />
}
function backsendmsg(backtext,backtype){
	if(backtype){
		if(backtype==1){
			mkClose();
			backOpen(0,'发送成功！');
			setTimeout('top.location.reload()',2000);
		}else  if(backtype==4){
			mkClose();
			backOpen(2,'发送成功！');
			setTimeout(backClose,2000);
		}else if(backtype==2){
			document.getElementById('msgwtinfo').innerHTML='<span style=color:#f00; >'+backtext+'</span>';

		}else if(backtype==3){
			mkClose();
			backOpen(1,backtext);	
		}
	}
}
function setmyvalue(mname,mid){
	document.getElementById("uname").value=mname;
	document.getElementById("uid").value=mid;
	document.getElementById("showfr").style.display='none';
	onshowfr=false;
 
}
function useitemto(obj,itemid,uname,uid){
	if(Math.floor(itemid.value)){
		if(uid.value||uname.value){
		$thisobj=obj; 
		wtjs("mailjs","checkjs.php?type=23&item_id="+itemid.value+"&uname="+encodeURI(uname.value)+"&uid="+uid.value);
		}else{
			obj.innerHTML="数量填写不正确！";
		}
	}else{
		obj.innerHTML="获取商品ID失败！";
	}
}
function useitemtoo(obj,itemid,uid){
	if(Math.floor(itemid)){
		 
		$thisobj=obj; 
		wtjs("mailjs","checkjs.php?type=23&item_id="+itemid+"&uid="+uid);
		 
	}else{
		obj.innerHTML="获取商品ID失败！";
	}
}
function useitemok(obj,itemid,uid){
	if(Math.floor(itemid)){
		if(uid){
		$thisobj=obj; 
		wtjs("mailjs","checkjs.php?type=23&useto=ok&item_id="+itemid+"&uid="+uid);
		}else{
			obj.innerHTML="选择施放对像为空！";
		}
	}else{
		obj.innerHTML="获取商品ID失败！";
	}
}
function useitemok2(obj,itemid,uid){
	if(Math.floor(itemid)){
		if(uid){
			if(obj.title){
		$thisobj=obj; 
		wtjs("mailjs","checkjs.php?type=23&useto=ok&item_id="+itemid+"&sid="+obj.title+"&uid="+uid);
			}else{
				alert("请选择镣铐对应道具！");
			}
		}else{
			alert("选择施放对像为空！");
		}
	}else{
		obj.innerHTML="获取商品ID失败！";
	}
}
function setscrto(obj,svalue,sname){
	if(Math.floor(svalue)>0&&Math.floor(svalue)<4&&sname){
		$thisobj=obj; 
 
		wtjs("mailjs","/transmit/setscr/type/10/sname/"+sname+"/value/"+svalue);
		 
	}else{
		alert("参数有误！");
	}
	
}
function showitem(itemid ){
	if(Math.floor(itemid)){
 
		wtjs("mailjs","checkjs.php?type=21&value="+itemid);
		 
	}else{
		alert("获取商品ID失败！");
	}
}
function useitem(itemid,showit){
	if(Math.floor(itemid)){
		show="";
 if(showit) show="&onlyshow=1";
		wtjs("mailjs","checkjs.php?type=23&item_id="+Math.floor(itemid)+show);
		 
		show="";
	}else{
		alert("获取商品ID失败！");
	}
}
function giveitem(itemid ){
	if(Math.floor(itemid)){
 
		wtjs("mailjs","checkjs.php?type=25&item_id="+Math.floor(itemid));
		 
	}else{
		alert("获取商品ID失败！");
	}
}


function deltalk2(talkID ){
	ocObj=window.self;
	if(Math.floor(talkID)){
		window.parent.coWrite('<div class=coText >确定要删除这条回复吗？</div>');
		window.parent.document.getElementById('coOkfun').onclick=function(){
			ocObj.wtjs("mailjs","/transmit/delreply/type/60/value/"+Math.floor(talkID));
			window.parent.coClose();
			return false;
		}
	}else{
		alert("获取内容失败！");
	}
}
var coUrl='/';
function webExit(){
		coWrite('<div class=coText >确认退出麦开网？</div>');
		document.getElementById('coOkfun').onclick=function(){
			window.self.location='/quit/logout';
			coClose();
			return false;
		}
}

function deltalk(talkID ){
	if(Math.floor(talkID)){
		coWrite('<div class=coText >确定要删除这条内容吗？</div>');
		document.getElementById('coOkfun').onclick=function(){
			wtjs("mailjs","/transmit/delreply/type/60/value/"+Math.floor(talkID));
			coClose();
			return false;
		}
	}else{
		alert("获取内容失败！");
	}
}
function mailinvitfriend(mails ){
	if(mails){
		wtjs("mailjs","checkjs.php?type=30&value="+mails);
	}else{
		alert("请输入您要邀请的好友的邮箱地址！");
	}
}
function snsinvitfriend(){
	sendtext='';
	if(document.getElementById('snsivittext')){
		sendtext=encodeURI(document.getElementById('snsivittext').value);
	}
		wtjs("mailjs","checkjs.php?type=31&sendtext="+sendtext);
	 
}
function giveitemok(obj,itemid,uid,uname,gvnum){
		$thisobj=obj; 
	if(Math.floor(itemid.value)){
 
	//obj.innerHTML="checkjs.php?type=25&item_id="+itemid.value+"&uname="+encodeURI(uname.value)+"&gvnum="+gvnum.value+"&uid="+uid.value
	wtjs("mailjs","checkjs.php?type=25&item_id="+itemid.value+"&uname="+encodeURI(uname.value)+"&gvnum="+gvnum.value+"&uid="+uid.value);
		 
	}else{
		alert("获取商品ID失败！");
	}
}
function intocomp(obj,act_id,gnum){
	$thisobj=obj;
	var $gnum='';
	if(gnum){
	$gnum='/groupNum/'+gnum;
	}
	mkWrite('<iframe src="/race/intorace/act_id/'+act_id+$gnum+'" id="addifr" width="468"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>',"加入竞赛");
}
function intocompiv(obj,iv_id){
	$thisobj=obj;
	mkWrite('<iframe src="/invit/intorace/iv_id/'+iv_id+'" id="addifr" width="468"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>',"加入竞赛");
}
function intoclubiv(obj,iv_id){
	$thisobj=obj;
	mkWrite('<iframe src="intoclub.php?iv_id='+iv_id+'" id="addifr" width="468"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>',"加入竞赛");
}
function DaySta(obj,objY,objM,nowday){
	obj.options.length = 0;
		//obj.options.add(new Option("-日期-","0"));
		objMvalue=Math.floor(objM.value);
	if(objMvalue==2){
		if(objY.value%4==0){
			maxday=29;
		}else{
			maxday=28;
		}
	}else if(objMvalue==1||objMvalue==3||objMvalue==5||objMvalue==7||objMvalue==8||objMvalue==10||objMvalue==12){
	
			maxday=31;
	}else{
			maxday=30;
	}
	for(var di=1;di<=maxday;di++){if(di<10){
		$di="0"+di;
		}else{
		$di=di;
		}
			obj.options.add(new Option($di,$di)); 
			if(di==Math.floor(nowday))obj.options[obj.options.length-1].selected = true;
	}
}
function setmday(objB,objY,objM,objD){
	objB.value=objY.value+"-"+objM.value+"-"+objD.value
}
function DateSta(objY,objM,objD,nowdate){
	nowdatearr=nowdate.split('-');
	for(var di=1940;di<=2012;di++){
			objY.options.add(new Option(di,di)); 
			if(di==Math.floor(nowdatearr[0]))objY.options[objY.options.length-1].selected = true;
	}
	for(var di=1;di<=12;di++){
		if(di<10){
		$di="0"+di;
		}else{
		$di=di;
		}
			objM.options.add(new Option($di,$di)); 
			if(di==Math.floor(nowdatearr[1]))objM.options[objM.options.length-1].selected = true;
	}
	DaySta(objD,objY,objM,nowdatearr[2])
}
function limitLength(obj,length,objname) {       
    var desc = obj.value; 
	thvalue=substrs(obj.value,length*2,objname);
    if(thvalue) return false;
	 return true;
}
function checktalktext(ckid,retextid,textlong){
	if(!limitLength(document.getElementById(ckid),textlong,retextid)){
		document.getElementById(ckid).style.backgroundColor='#fcc'; 
		setTimeout('document.getElementById(\"'+ckid+'\").style.backgroundColor=\"#fff\";',100);
	return false;
	}else{
		return true;	
	}
}
function substrs(str,length,objname){
	var l=0,i=0;       
	while(i<str.length){       
		l+=1;       
		if(str.substring(i,i+1).match(/[\u00ff-\uffff]/))l+=1;//一个中文是相当于3个英文     
		i+=1;
	}
 
	if(l>length){
	backtotext='已经超出<span style="color:#DA0000">'+Math.ceil((l-length)*0.5)+'</span>字';
	}else{
	backtotext='还能输入<span>'+Math.floor((length-l)*0.5)+'</span>字';		
	}
	if(objname){
		document.getElementById(objname).innerHTML=backtotext;
	}else{
		document.getElementById("msgwtinfo").innerHTML=backtotext;
	}
	
	return l>length;       
} 
	function flistshow(obj){
            Flistdivs=obj.getElementsByTagName("div");
			Flistheight=0;
			obj.style.display='block';
			for(var i=0 ;i<Flistdivs.length;i++){
			Flistheight+=Flistdivs.item(0).offsetHeight;
			} 
			$obji=$cloobj.length;
			$cloobj[$obji]=obj;
			obj.style.height=Flistheight+'px';
			obj.style.overflow="hidden";
			heightto($obji,Flistheight);
			
			}
			function heightto(obji,hvalue){
				if(parseInt($cloobj[obji].style.height)<hvalue){
					$cloobj[obji].style.height=(parseInt($cloobj[obji].style.height)+2)+"px";
					setTimeout('heightto('+obji+','+hvalue+');',10);
				}else{
				$cloobj[obji].style.overflow="visible";
				$cloobj[obji].style.height="auto";
				}	
			}
			function AddOnPos(myField, myValue)   
{   
    //IE support   
    if (document.selection)   
    {   
    myField.focus();   
    sel = document.selection.createRange();   
   // myValue = "[face]"+myValue+"[/face]";   
    sel.text = myValue;   
    sel.select();   
    }   
    //MOZILLA/NETSCAPE support   
    else if (myField.selectionStart || myField.selectionStart == '0')   
    {   
    var startPos = myField.selectionStart;   
    var endPos = myField.selectionEnd;   
    // save scrollTop before insert   
    var restoreTop = myField.scrollTop;   
  //  myValue = "[face]"+myValue+"[/face]";   
    myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos,myField.value.length);   
    if (restoreTop > 0)   
    {   
    // restore previous scrollTop   
    myField.scrollTop = restoreTop;   
    }   
    myField.focus();   
    myField.selectionStart = startPos + myValue.length;   
    myField.selectionEnd = startPos + myValue.length;   
    } else {   
    myField.value += myValue;   
    myField.focus();   
    }   
} 

function comptinvit(aid){
	mkWrite('<div style="line-height:40px;color:#333;font-size:14px;text-align:left;margin:0px auto;width:614px;"><b>邀请好友参加竞赛，人越多越好玩哦！</b><iframe src="/invit/raceinvit/act_id/'+aid+'" id="addifr" width="614"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no" height="1"></iframe></div>','');
	
	document.getElementById('opendiv').style.width='690px';
	document.getElementById('idopenout').style.width='680px';
}



function comptinvit2(uid){
	
	mkWrite('<div style="line-height:40px;color:#333;font-size:14px;text-align:left;margin:0px auto;width:614px;"><b>邀请好友参加竞赛，人越多越好玩哦！</b><iframe src="/invit/gameinvit/uid/'+uid+'" id="addifr" width="614"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no" height="1"></iframe></div>'," ");
	document.getElementById('opendiv').style.width='690px';
	document.getElementById('idopenout').style.width='680px';
}
function clubinvit(cid){
	mkWrite('<div style="line-height:40px;color:#333;font-size:14px;text-align:left;margin:0px auto;width:614px;"><b>邀请好友加入俱乐部，一起交流！</b><iframe src="/invit/clubinvit/clubid/'+cid+'" id="addifr" width="614"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no" height="1"></iframe></div>','');
	
	document.getElementById('opendiv').style.width='690px';
	document.getElementById('idopenout').style.width='680px';
}
function clubinvit2(uid){
	mkWrite('<div style="line-height:40px;color:#333;font-size:14px;text-align:left;margin:0px auto;width:614px;"><b>邀请好友加入俱乐部，一起交流！</b><iframe src="/invit/clubinvit/uid/'+uid+'" id="addifr" width="614"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no" height="1"></iframe></div>'," ");
	document.getElementById('opendiv').style.width='690px';
	document.getElementById('idopenout').style.width='680px';

}
function settask(typ){
	var gotype='';
	if(typ)gotype=typ;
	mkWrite('<iframe src="/taskset/sports/type/'+gotype+'" id="addifr" width="468"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>','  ');
}

$ie=false;
if(!+[1,])$ie=true;
var $goon=new Array();
var $goout=new Array();
function headgoon(objname){
$goon[objname]=setTimeout("document.getElementById('"+objname+"').className='mymenuf';",300);
if($goout[objname])clearTimeout($goout[objname]);
}
function headgoout(objname){
	$goout[objname]=setTimeout("document.getElementById('"+objname+"').className='mymenu';",500);
	if($goon[objname])clearTimeout($goon[objname]);	
}
var rld=0;
var rlds=false;
function srollflight()
{
	if(!rlds){
		if(rld>2){
			rld=0;
			reloadinvit();	
		}
	}
    var headdiv ;
    if(document.getElementById("gotop"))
    {  
        headdiv = document.getElementById("gotop");
		if(document.documentElement.scrollTop&&document.documentElement.clientWidth>1054){
       	 headdiv.style.top=document.documentElement.clientHeight-150+'px';
		 
			headdiv.style.display='block';
		}else{
			headdiv.style.display='none';	
		}
    }
}
function reinitIframe(reid){
    var iframe = document.getElementById(reid);
    try{
    var bHeight = iframe.contentWindow.document.body.scrollHeight;
    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
    var height = Math.max(bHeight, dHeight);
    iframe.height =  height;
    }catch (ex){}
}
function reloadinvit(){
	wtjs("mailjs","/transmit/reloadinvit");	
}
//用户名片信息调用
function getnameinfo(uid){
if(uid){
        url='/Ajax/getuserinfo/uid/'+uid;
        $.ajax({ 
        url:url,
        type: 'GET',    
        beforeSend: function(){            
            $('#tsfnametext').html("<img src='/public/images/loading.gif' />") ;             
        },
        success: function(data){//alert(data);
            var html ='';
            var str = data.split('|');
            var  sex ='';
            var sex_color='';
            var city='';
            //if(str[7]){city='getCity("'+str[7]+'")';}
            var dk=0; dk=parseInt(str[14])*1;
            var gl=0; gl=str[15];
            var qb=0; qb=str[16];
            if(str[5]==2){sex='2';sex_color='bottom';}else{sex='';sex_color='top';}
            if(str[0]){
                html+='<div class="tsfnameuinfo"><a href="/sporter/'+str[2]+'" target="_blank" class="fuserhead"><img src="/public/attachment/images/avatar/'+str[17]+'_50.jpg?" width="50" height="50" border="0"  title="" onerror="if(!this.title){this.src=&quot/public/images/nohead50'+sex+'.jpg&quot;;this.title=&quot暂时未上传头像&quot;}" /></a>';
                html+='<div class="fuserinfo"><a href="/sporter/'+str[2]+'" target="_blank" class="fusername">'+str[1]+''+str[12]+'</a><div class="fusersex" style=" height:22px;padding-left:0px;background-position:65px '+sex_color+'">';
                html+='<img src="/public/images/lv'+str[6]+'.gif" width="50" height="18" align="absmiddle" style="margin-right:30px; float:left; margin-top:3px;" /><div style="float:left">';
                //html+=''+city+' &nbsp;';
                if(str[7]){html+=getCity(str[7])+'&nbsp;';}else{html+='&nbsp;';}
	            html+='</div></div><div>拥有麦子：'+str[4]+'&nbsp;粒</div></div><div class="userintr">'+str[8]+'</div></div><div class="tsfnameusenya"><div class="usenyainfo1" title="累计运动消耗卡路里" >'+dk+'<br />大卡</div>';		
	            html+='<div title="累计运动里程" class="usenyainfo2"">'+gl+'<br />公里</div><div class="usenyainfo3""  title="累计运动步数">'+qb+'<br />千步</div></div>';
            }
            var vsblack='';
            if(str[13]=='1'){vsblack='flowblack';}else if(str[11]=='1'){vsblack='flowok';}else if(str[11]=='2'){vsblack='flowok2';}else if(str[13]=='2'){vsblack='flowo';}else{vsblack='flowno';}           
            if(str[3]!=str[10]){
                html+='<div  style="padding: 7px 14px; height:24px; line-height:24px;"><div class="cmpfristaus" style="padding-left:70px; float:right;"><div class="'+vsblack+'" style="padding-top:0px;">';
	            html+='<div class="interinfoadd" onclick="snsflow(this.parentNode,&quot;'+str[2]+'&quot;);return false;" title="+好友"></div>';
 		        html+='<div class="interinfowait" title="等他确认">';
			    html+='<a href="#" onclick="delflow(this.parentNode.parentNode,&quot;'+str[2]+'&quot;);return false;" title="取消">&nbsp;</a></div>	<div class="interinfook" title="已加好友">			';
                html+='<a href="#" onclick="delflow(this.parentNode.parentNode,&quot;'+str[2]+'&quot;);return false;" title="取消">&nbsp;</a></div>';	
			    html+='<div class="interinfoself" title="别加自己"></div><div class="interinfofail" title="已被拒绝"></div>	<div class="interinfoblack" title="已被拒绝"></div>	</div>	</div>';
		    	html+='<div style="float:left">	<a class="font08c12a" href="snsmsg.php?action=sendmsg&uid='+str[2]+'"  target="_blank" onclick="sendMsg(&quot;'+str[1]+'&quot;); return false;" title="发私信">发私信</a></div></div>';
            } 
            //alert(html);       
           $('#tsfnametext').html(html);           
        }
    }); 
}	
}
function getX(obj){ 
var ParentObj=obj; 
var left=obj.offsetLeft; 
while(ParentObj=ParentObj.offsetParent){ 
left+=ParentObj.offsetLeft; 
} 
return left; 
} 
//获取div的y位置
function getY(obj){ 
var ParentObj=obj; 
var top=obj.offsetTop; 
while(ParentObj=ParentObj.offsetParent){ 
top+=ParentObj.offsetTop; 
} 
return top; 
} 
function getWindowSize() {
    var client = {
        h:0,
        w:0,
        x:0,
        y:0,
        l:0,
        t:0
    };
 
    if(typeof document.compatMode != 'undefined' && document.compatMode == 'CSS1Compat') {
        client.x = document.documentElement.clientWidth;
        client.y = document.documentElement.clientHeight;
        client.l = document.documentElement.scrollLeft;
        client.t = document.documentElement.scrollTop;
        client.h = document.documentElement.scrollHeight;
        client.w = document.documentElement.scrollWidth;
    } else if(typeof document.body != 'undefined') {
        client.x = document.body.clientWidth;
        client.y = document.body.clientHeight;
        client.l = document.body.scrollLeft;
        client.t = document.body.scrollTop;
        client.h = document.body.scrollHeight;
        client.w = document.body.scrollWidth;
    }
 
    return client;
}


function posMouse(ev,ename,obj)
{
	ecX=ev.clientX;
	ecY=ev.clientY;
	id=document.getElementById('tsfname');
	idv=document.getElementById('tsfnamemv');
	idp=document.getElementById('tsfnamepoin');
	if(id.style.display!='block'||idp.title!=ename){
	idpr=document.getElementById('tsfnamepoinr');
	idpl=document.getElementById('tsfnamepoinl');
	idpb=document.getElementById('tsfnamepoinb');
	idp.style.display='none';
	idpl.style.display='none';
	idpr.style.display='none';
	idpb.style.display='none';
	idv.style.top="auto";
	idv.style.right="auto";
	idv.style.left="auto";
	idv.style.bottom="auto";
	
	var sizea = getWindowSize();
	var wsw = sizea.x;
	var wsh = sizea.y;
	var wsaw = sizea.w;
	var wsah = sizea.h;
	var wsl=sizea.l;
	var wst=sizea.t;
	var oh=obj.scrollHeight;
	var ow=obj.scrollWidth;
	var ox=getX(obj);//ev.layerX?obj.offsetLeft:ecX+wsl-ev.offsetX;//getX(obj);
	var oy=getY(obj);//ev.layerY?obj.offsetTop:ecY+wst-ev.offsetY;//getX(obj);
	if(idp.title!=ename){
		document.getElementById('tsfnametext').innerHTML='<div style="height:180px"><Br>&nbsp;&nbsp;&nbsp;&nbsp;加载中……<Br>&nbsp;</div>';
		getnameinfo(ename);	
	}
	if(!obj.onmouseout){
		obj.onmouseout=function(){
			headgoout('tsfname');
		}
	}
		idp.title=ename;
	//alert('w:'+wsw+' l:'+wsl+' h:'+wsh+' t:'+wst+' x:'+ox+' y:'+oy)
	if(wsl+wsw>ox+370&&oy-wst>230){
		//指针位置
		idpb.style.display='block';
		if(Math.floor(ow/2-11)>10){
			idpb.style.left=22+'px';
		}else{
			idpb.style.left='11px';
		}
		id.style.left=ox+"px";	
		id.style.top=oy-230+"px";
		idv.style.bottom="-227px";
		
	}else if(wsl+wsw>ox+370&&wst+wsh>oy+230){
		//指针位置
		idp.style.display='block';
		if(Math.floor(ow/2-11)>10){
			idp.style.left=22+'px';
		}else{
			idp.style.left='11px';
		}
		id.style.left=ox+"px";	
		id.style.top=oy+oh+"px";
		idv.style.top="3px";
		idv.style.left="0px";
	}else if(wsl+wsw>ox+ow+370){
		//指针位置
		idpl.style.display='block';
		if(Math.floor(oh/2-11)>10){
			idpl.style.top=22+'px';
		}else{
			idpl.style.top='11px';
		}
		id.style.left=ox+ow+"px";	
		id.style.top=oy+"px";
		idv.style.left="3px";
		if(wst+wsh>oy+200){
		idv.style.top="-10px";
		}else{
		idv.style.top="-"+(230-wst-wsh+oy)+"px";	
		idpl.style.top=(230-wst-wsh+oy)+'px';
		if((230-wst-wsh+oy)>160){idpl.style.top='160px';}
		}
	}else{
		idpr.style.display='block';
		if(Math.floor(oh/2-11)>10){
			idpr.style.top=22+'px';
		}else{
			idpr.style.top='11px';
		}
		id.style.left=ox-370+"px";	
		id.style.top=oy+"px";
		idv.style.right="-367px";
		if(wst+wsh>oy+200){
		idv.style.top="-10px";
		}else{
		idv.style.top="-"+(230-wst-wsh+oy)+"px";	
		idpr.style.top=(230-wst-wsh+oy)+'px';
		if((230-wst-wsh+oy)>160){idpr.style.top='160px';}
		}
	}
	
}
headgoon('tsfname');
}


function normal(id,times)
{
        var obj=$("#"+id);
        obj.css("background-color","#FFF");
        if(times<0)
        {
                return;
        }
        times=times-1;
        setTimeout("error('"+id+"',"+times+")",150);
}

function error(id,times)
{
        var obj=$("#"+id);
        obj.css("background-color","#F6CECE");
        times=times-1;
        setTimeout("normal('"+id+"',"+times+")",300);
}
window.onscroll=srollflight; 