<%@ page contentType="text/html;charset=gbk"%>
<%@ page import="com.tellhow.framework.cps.common.vo.DataGridCondition"%>
<%@ taglib uri="/WEB-INF/tld/cps_datagrid.tld" prefix="grd"%>
<%
String output=request.getParameter("output");
if(output==null) output="";
if(output.equals("current") || output.equals("all")){
  	response.setContentType("application/vnd.ms-excel;charset=gbk");
  	response.setHeader("Content-disposition", "attachment;filename=data.xls");
}

DataGridCondition condition=(DataGridCondition)pageContext.getAttribute("conditionobject",PageContext.REQUEST_SCOPE);
if(condition==null) {
	out.write("�Բ���,ҳ��ȱ�ٱ�Ҫ����!");
	return;
}

String viewdetail="servlet.jsp?viewpage=planProjectInfoMainEditView&isedit=false&mainplanid=";//��¼��ϸҳ�� ���޸�
int pagesize=20; //ÿҳ��¼����,���޸�
int width=1050;//����� ,���޸�
int DataWidth=1050; //���ݿ��,���޸� 
if(output.equals("all")||output.equals("current")) {
	if(output.equals("current")) {
		pagesize=20;
	} else {
		pagesize=99999;
	}
}
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns:x="urn:schemas-microsoft-com:office:excel">
  <head>
    <title>��Ŀ���μƻ�</title>
    <%if(output.equalsIgnoreCase("")){%>
    <link REL="StyleSheet" HREF="/cps/module/css/cps_GridStyle.css">
    <script src="/cps/module/scripts/datagrid/cps_DataGrid.js" type="text/javascript"></script>
	<script type='text/javascript' src='/cps/module/planproject/scripts/common.js'></script>
	<script type='text/javascript' src='/cps/module/planproject/scripts/planProjectInfoMain.js'></script>
    <script language="javascript">
    function initpage() {
    	frmShow.sql.value="<%=condition.getQuerysql()%>";
    	frmShow.parames.value="<%=condition.getParamsStrValue()%>";
    }    
    </script>
    <%}else{//����ʱ,exec�ļ���һ�б��� ���޸�%>
    <!--[if gte mso 9]><xml>
            <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                    <x:ExcelWorksheet>
                        <x:Name>��Ŀ���μƻ�</x:Name>
                        <x:WorksheetOptions>
                            <x:Print>
                                <x:ValidPrinterInfo />
                            </x:Print>
                        </x:WorksheetOptions>
                    </x:ExcelWorksheet>
                </x:ExcelWorksheets>
            </x:ExcelWorkbook>
        </xml>
        <![endif]-->
    <%}%>
  </head>
  
  <body style="margin:0px" onload="fixgridsize(25);initpage();" onresize="fixgridsize(25);">
  <center>
    <form NAME="frmShow" id="frmShow" METHOD="post" action="servlet.jsp?viewpage=planProjectInfoMainList">
	  <input type="hidden" name="sql"/>
	  <input type="hidden" name="parames"/>
	  <input type='hidden' name='output' id='output' value=''>
	  <%if(output.equals("all") || output.equals("current")){%>��Ŀ���μƻ�<%}%>
	  <grd:dbgrid id="tblStat" name="tblStat" width="<%=width%>" pageSize="<%=pagesize%>" pageObject="<%=pageContext%>" 
		border="0" cellSpacing="1" cellPadding="2" dataMember="" dataSource="" totalRecords="<%=0%>"
		cssClass="gridTable" lightOn="true" tdIntervalColor="true" verticalHeight="375" gridPosition="absolute" 
		dataWidth="<%=DataWidth%>" viewDetail="<%=viewdetail%>" queryCondition="<%=condition%>" viewWidth="650" viewHeight="600">
            <%if(output.equalsIgnoreCase("")){%>
            <grd:gridpager imgFirst="../../images/First.gif" imgPrevious="../../images/Previous.gif" imgNext="../../images/Next.gif" 
            			   imgLast="../../images/Last.gif" imgBackground="../../images/di-bt.gif"/>
            <%}%>
            <grd:rownumcolumn dataField="mainplanid" headerText="���" width="4" HAlign="center" sortable="true"/>
            <%if(output.equalsIgnoreCase("")){%>
            <grd:checkboxcolumn dataField="mainplanid" headerText="checkbox" HAlign="center" sortable="true" width="4"/>
            <%}%>
            <grd:textcolumn dataField="planyear" headerText="�ƻ����" HAlign="center" sortable="true" width="8"/>
            <grd:textcolumn dataField="planname" headerText="�ƻ���������" HAlign="center" sortable="true" width="18"/>
            <grd:textcolumn dataField="planman" headerText="�´���" HAlign="center" sortable="true" width="10"/>
            <grd:textcolumn dataField="planmoney" headerText="�ʽ��ģ" HAlign="center" sortable="true" width="10"/>
            <grd:textcolumn dataField="beginday" headerText="������ʼʱ��" HAlign="center" sortable="true" width="15" dataFormat="yyyy-MM-dd hh:mm:ss"/>
            <grd:textcolumn dataField="endday" headerText="��������ʱ��" HAlign="center" sortable="true" width="15" dataFormat="yyyy-MM-dd hh:mm:ss"/>
            <grd:anchorcolumn dataField="mainplanid" headerText="��ϸ���" HAlign="center" sortable="true" width="8" 
            				  linkUrl="javascript:viewDetailPlan('{mainplanid}')" linkText="��ϸ���"/>
            <grd:textcolumn dataField="flagname" headerText="״̬" HAlign="center" sortable="true" width="8"/>
            <grd:inputcolumn headerText="hidden" inputType="hidden" dataField="flag" annexID="mainplanid"/>
      </grd:dbgrid>
      <iframe style="height:0px"  width='0px' frameborder='0' id='hiddenframe' name='hiddenframe' scrolling='no'></iframe>
    </form>
  </center>
  </body>
</html>
