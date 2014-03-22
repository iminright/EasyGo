<%@ page contentType="text/html;charset=gbk"%>
<%

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>商品新增</title>
    <link rel='stylesheet' type="text/css" href='css/common.css'/>
    <link rel="stylesheet" type="text/css" href="css/queryview.css"></link>
    <script type="text/javascript" src="/cps/scripts/common.js"></script>
	<script type='text/javascript' src='/cps/module/scripts/datagrid/tjquery.js'></script>
    <script type="text/javascript" src="scripts/common.js"></script>
    <script type="text/javascript" src="scripts/planProjectInfoMain.js"></script>
  </head>
  
  <body style="margin:0px;OVERFLOW:hidden" onload="fixsize();initListPage();" onresize="fixsize();">
		<form NAME="frmCommon" method="post" action="servlet.jsp?viewpage=planProjectInfoMainList" target="postframe" style="margin:0px">
		  <table id='seektable' width="100%"  border="1" cellpadding="0" cellspacing="0" class="zw" bordercolorlight="#25689F" bordercolordark="#ffffff">
			<tr height="27px">
			  <td align="right">
			  	<input type="button" id="button1" value="新增" class="btn" onclick="addInfoMain()"/>&nbsp;
			  	<input type="button" id="button2" value="删除" class="btn" onclick="delInfoMain()"/>&nbsp;
			  	<input type="button" id="button3" value="修改" class="btn" onclick="editInfoMain()"/>&nbsp;
			  	<input type="button" id="button4" value="详细资金计划分配" class="btn" onclick="openInfoDetail()"/>&nbsp;
			  	<input type="button" id="button5" value="下达" class="btn" onclick="sendInfoMain()"/>&nbsp;&nbsp;
			  </td>
			</tr>
		  </table>
			<table id="resultTable" background="../image/datagrid/background.gif" width="100%" cellpadding="0" cellspacing="0">
			  <tr>
				  <td colspan ="2">
						<button id="queryBtn" onmouseover="this.className='overbutton';" onmouseout="this.className='button'" onClick="initListPage()" class="button"><img src="../image/datagrid/magGlass.gif"/>查询</button>		
						<button onmouseover="this.className='overbutton';" onmouseout="this.className='button'" onClick="postframe.window.exportall();" class="button"><img src="../image/datagrid/excel.gif"/>导出所有</button>
						<button onmouseover="this.className='overbutton';" onmouseout="this.className='button'" onClick="postframe.window.exportcurrent();" class="button"><img src="../image/datagrid/excel.gif"/>导出本页</button>
				  </td>
			  </tr>
			</table>
		</form>
	  <iframe style="height:0px"  width='100%' frameborder='0' id='postframe' name='postframe' scrolling='no' ></iframe>
	  <iframe name="includeframe" id="includeframe" height="0" width="0" src=""></iframe>
  </body>
</html>
