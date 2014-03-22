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
    <title>��������ʽ�ƻ��´�ҳ��</title>
    <link rel="stylesheet" type="text/css" href="../../css/zw.css"></link>
    <link rel="stylesheet" type="text/css" href="../../css/standard.css"></link>
    <link rel="stylesheet" type="text/css" href="../../css/queryview.css"></link>
	<script type='text/javascript' src="/cps/module/common/scripts/commonAttach.js"></script>
    <script type="text/javascript" src="../../scripts/datepicker/WdatePicker.js"></script>
	<script type='text/javascript' src="/cps/module/scripts/ValidInput.js"></script><!--���ڱ�����-->	
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
    <div style="text-align:center;font-size:16px;font-weight:bold">��������ʽ�ƻ��´��</div>
    <form name="myform" id="myform" method="post" target="postframe" enctype="multipart/form-data" action="servlet.jsp?method=saveplanprojectinfomain">
    <input type="hidden" name="mainplanid" id="mainplanid">
    <table id='pageview' align='center' width="98%" border="1" cellspacing="0" cellpadding="2" style="word-wrap:break-word;" class="zw" bordercolorlight="#25689F" bordercolordark="#ffffff"'>
      <tr style='height:32px'>
        <td class='cuteLable' width="25%" style="text-align:right">�ƻ���ݣ�</td>
        <td width="110px">
			  	<commonTag:years tagName="planyear" selectValue="<%=String.valueOf(year)%>" isSelectAll="false" beginyear="2009" endyear="2020"/>��
		</td>
        <td class='cuteLable' width="25%" style="text-align:right">�ʽ�ƻ����ģ�</td>
        <td width="25%">
        	<input type="text" name="planpffile" id="planpffile">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>�ƻ��������ƣ�</td>
			<td colspan=3>
				<input type='text' id='planname' name='planname' />
			</td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>�ƻ��ʽ��ģ����Ԫ����</td>
        <td>
        	<input type="text" name="planmoney" id="planmoney" tag="true,number,,�ƻ��ʽ��ģ">
        </td>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>�������ʣ�</td>
        <td>
        	<input type="text" name="plankind" id="plankind" tag="true,char,,��������">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>����Ͷ�ʣ���Ԫ����</td>
        <td>
        	<input type="text" name="sgmoney" id="sgmoney" tag="true,number,,����Ͷ��">
        </td>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>������ݣ�</td>
        <td>
        	<input type="text" name="workbeginday" id="workbeginday" tag="true,int,,�������">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>���д����Ԫ����</td>
        <td>
        	<input type="text" name="bankmoney" id="bankmoney" tag="true,number,,���д���">
        </td>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>������ݣ�</td>
        <td>
        	<input type="text" name="workendday" id="workendday" tag="true,int,,�������">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right"><%=redHTMLStr%>�����ʽ���Ԫ����</td>
        <td>
        	<input type="text" name="selfmoney" id="selfmoney" tag="true,number,,�����ʽ�">
        </td>
        <td colspan=2>&nbsp;</td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">�����ģ��</td>
        <td colspan=3>
        	<textarea name="content" id="content" style="width:450px;height:45px;" readonly="readonly"></textarea>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">�������ݣ�</td>
        <td colspan=3>
        	<textarea name="thing" id="thing" style="width:450px;height:45px;"></textarea>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">��ע��</td>
        <td colspan=3>
        	<textarea name="remark" id="remark" style="width:450px;height:45px;"></textarea>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">��Ŀ�걨��ʼʱ�䣺</td>
        <td>
        	<input type="text" name="beginday" id="beginday" onclick="new WdatePicker('beginday','%Y-%M-%D %h:%m:%s',true,'whyGreen')" readonly style="width:150px;"/>
        </td>
        <td class='cuteLable' style="text-align:right">��Ŀ�걨����ʱ�䣺</td>
        <td>
        	<input type="text" name="endday" id="endday" onclick="new WdatePicker('endday','%Y-%M-%D %h:%m:%s',true,'whyGreen')" readonly style="width:150px;"/>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">��ϸ�ʽ�ƻ������</td>
        <td colspan=3>
        	<a href="javascript:void(0);" onclick="openInfoDetail1(<%=mainplanid%>,<%=issave?"true":"false"%>)">��ϸ�ʽ�ƻ������</a>
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">�����ˣ�</td>
        <td>
        	<input type="text" name="planman" id="planman" value="<%=userCNName%>">
        </td>
        <td class='cuteLable' style="text-align:right">����ʱ�䣺</td>
        <td>
        	<input type="text" name="planday" id="planday" value="<%=currentDate%>" onclick="new WdatePicker('planday','%Y-%M-%D %h:%m:%s',true,'whyGreen')" readonly style="width:150px;">
        </td>
      </tr>
      <tr style='height:32px'>
        <td class='cuteLable' style="text-align:right">�ļ�������</td>
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
    <input type="button" name="savebtn"  value="����" onclick="save()" class="btn"/>&nbsp;&nbsp;
    <%} %>
    <input type="button" name="closebtn" value="�ر�" onclick="window.close()" class="btn"/>
    </p>
    </form>
    <iframe name="postframe" id="postframe" height="0" width="0" src=""></iframe>
    <iframe name="hiddenframe" id="hiddenframe" height="0" width="0" src=""></iframe>
  </body>
</html>
