<%@ page contentType="text/html;charset=gbk"%>
<%@ page import="java.util.*" %>
<%@ page import="com.tellhow.framework.cps.planproject.vo.PlanProjectInfoMainBean"%>
<%@ taglib uri="/WEB-INF/tld/commonTag.tld" prefix="commonTag"%>
<%@ page errorPage="../../common/errorinfo.jsp" %>
<%@ include file="../../common/getCurrentDateAndTime.jsp"%>
<%@ include file="../../common/user_session.jsp"%>
<%
	PlanProjectInfoMainBean bean = (PlanProjectInfoMainBean)PlanProjectInfoMainBean.InitBeanFromPageContext(PlanProjectInfoMainBean.class,pageContext);
	Long mainplanid = new Long(0);
	String redHTMLStr = "<font color='red'>*</font>&nbsp;";
	String fileHtml = "";
	//String planyear = "";
	//String pspid = "";
	//String planname = "";
	//if(bean==null){
	//	planyear = request.getParameter("planyear");
	//}else{
	//	planyear = bean.getPlanyear();
	//	pspid = bean.getPspid();
	//	planname = bean.getPlanname();
	//	}
	//String projectunion = pspid+","+planname;
	//String projectsql= "select pspid||','||post1 code,post1 as name from cps.t_ps_planprojectinfomidle where year="+planyear;
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>年度批次资金计划下达页面</title>
    <link rel="stylesheet" type="text/css" href="../../css/zw.css"></link>
    <link rel="stylesheet" type="text/css" href="../../css/standard.css"></link>
    <link rel="stylesheet" type="text/css" href="../../css/queryview.css"></link>
	<script type='text/javascript' src="/cps/module/common/scripts/commonAttach.js"></script>
    <script type="text/javascript" src="../../scripts/datepicker/WdatePicker.js"></script>
	<script type='text/javascript' src="/cps/module/scripts/ValidInput.js"></script><!--用于表单检验-->	
    <script type="text/javascript" src="scripts/planProjectInfoMain.js"></script>
    <script type="text/javascript" src="scripts/common.js"></script>

    <%
	String initpage = "";
    boolean issave = true;
	if (bean != null) {
		mainplanid = bean.getMainplanid();
		initpage = bean.getInitpage();
		String dataServerToClient = bean.toClient();
		out.write(dataServerToClient);
		if("view".equals(bean.getOperationtype())) {
			issave = false;
		}
		
		List filelist = (List)pageContext.getAttribute("filelist", pageContext.REQUEST_SCOPE);
		if(filelist!=null && filelist.size()>0) {
			Hashtable fileht = (Hashtable)filelist.get(0);
			if(bean.getOperationtype().equalsIgnoreCase("edit")){
				fileHtml = fileht.get("fileinfo_edit").toString();
			} else {
				fileHtml = fileht.get("fileinfo_view").toString();
			}
		}
	}
    %>
  </head>
  
  <body onload="<%=initpage%>">
    <div style="text-align:center;font-size:16px;font-weight:bold">年度批次资金计划下达表</div>
    <form name="myform" id="myform" method="post" target="postframe" enctype="multipart/form-data" action="servlet.jsp?method=saveplanprojectinfomain">
    <input type="hidden" name="mainplanid" id="mainplanid">
    <table id='pageview' align='center' width="98%" border="1" cellspacing="0" cellpadding="2" style="word-wrap:break-word;" class="zw" bordercolorlight="#25689F" bordercolordark="#ffffff"'>
      <tr style='height:32px'>
        <td class='cuteLable' width="25%" style="text-align:right">计划年份：</td>
        <td width="110px">
			  	<commonTag:years tagName="planyear" selectValue="<%=String.valueOf(year)%>" isSelectAll="false" beginyear="2009" endyear="2020"/>年
		</td>
        <td class='cuteLable' width="25%" style="text-align:right">资金计划批文：</td>
        <td width="25%">
        	<input type="text" name="planpffile" id="planpffile">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>计划批次名称：</td>
			<td colspan=3>
				<input type='text' id='planname' name='planname' />
			</td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>计划资金规模（万元）：</td>
        <td>
        	<input type="text" name="planmoney" id="planmoney" tag="true,number,,计划资金规模">
        </td>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>建设性质：</td>
        <td>
        	<input type="text" name="plankind" id="plankind" tag="true,char,,建设性质">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>中央投资（万元）：</td>
        <td>
        	<input type="text" name="sgmoney" id="sgmoney" tag="true,number,,中央投资">
        </td>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>开工年份：</td>
        <td>
        	<input type="text" name="workbeginday" id="workbeginday" tag="true,int,,开工年份">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>银行贷款（万元）：</td>
        <td>
        	<input type="text" name="bankmoney" id="bankmoney" tag="true,number,,银行贷款">
        </td>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>建成年份：</td>
        <td>
        	<input type="text" name="workendday" id="workendday" tag="true,int,,建成年份">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>自有资金（万元）：</td>
        <td>
        	<input type="text" name="selfmoney" id="selfmoney" tag="true,number,,自有资金">
        </td>
        <td colspan=2>&nbsp;</td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">建设规模：</td>
        <td colspan=3>
        	<textarea name="content" id="content" style="width:450px;height:45px;" readonly="readonly"></textarea>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">建设内容：</td>
        <td colspan=3>
        	<textarea name="thing" id="thing" style="width:450px;height:45px;"></textarea>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">备注：</td>
        <td colspan=3>
        	<textarea name="remark" id="remark" style="width:450px;height:45px;"></textarea>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">项目申报开始时间：</td>
        <td>
        	<input type="text" name="beginday" id="beginday" onclick="new WdatePicker('beginday','%Y-%M-%D %h:%m:%s',true,'whyGreen')" readonly style="width:150px;"/>
        </td>
        <td class='cuteLable' style="text-align:right">项目申报结束时间：</td>
        <td>
        	<input type="text" name="endday" id="endday" onclick="new WdatePicker('endday','%Y-%M-%D %h:%m:%s',true,'whyGreen')" readonly style="width:150px;"/>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">详细资金计划分配表：</td>
        <td colspan=3>
        	<a href="javascript:void(0);" onclick="openInfoDetail1(<%=mainplanid%>,<%=issave?"true":"false"%>)">详细资金计划分配表</a>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">开报人：</td>
        <td>
        	<input type="text" name="planman" id="planman" value="<%=userCNName%>">
        </td>
        <td class='cuteLable' style="text-align:right">开报时间：</td>
        <td>
        	<input type="text" name="planday" id="planday" value="<%=currentDate%>" onclick="new WdatePicker('planday','%Y-%M-%D %h:%m:%s',true,'whyGreen')" readonly style="width:150px;">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">文件附件：</td>
        <td colspan=3><%=fileHtml%>
        <%if(issave) {%>
        	<input type="file" name="file" id="file" style="width:90%"/>
       	<%}%>
       	&nbsp;
        </td>
      </tr>
    </table>
    <p align="center">
    <%if(issave) {%>
    <input type="button" name="savebtn"  value="保存" onclick="save()" class="btn"/>&nbsp;&nbsp;
    <%} %>
    <input type="button" name="closebtn" value="关闭" onclick="window.close()" class="btn"/>
    </p>
    </form>
    <iframe name="postframe" id="postframe" height="0" width="0" src=""></iframe>
    <iframe name="hiddenframe" id="hiddenframe" height="0" width="0" src=""></iframe>
  </body>
</html>
