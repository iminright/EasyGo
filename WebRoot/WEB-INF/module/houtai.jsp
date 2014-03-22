<%@ page contentType="text/html;charset=GBK"%>
<%
	String title = "后台维护";		
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title><%=title%></title>
    <style type="text/css">
	.divt{
		text-align: center;
		width: 100%;
		height:36px;
		background:#c9defa;
		border-top: 0px solid silver;
	    border-left: 0px solid silver;
	    border-right: 0px solid silver;
	    border-bottom: 1px solid silver;
		border-color:#000000;
	}
	
	.DispatchControlPane {
        font-size:14px;
	
	}
	
	.DispatchControlPane tr{
		background:expression("#ccffff");
	}
	
	.DispatchControlPane td{
		border-top: 0px solid silver;
	    border-left: 0px solid silver;
	    border-right: 0px solid silver;
	    border-bottom: 1px solid silver;
		border-color:#000000;
	}


  </style>
      <script type="text/javascript">
      //background:expression(this.rowIndex%2==0 ? "#ccffff":"#ffffff");
    </script>
  </head>
  <body style="margin:0px" onload="init()">
    <table class="DispatchControlPane" width="100%"  border="0" cellspacing="0" cellpadding="0" heigth="90%">
		<tr>
    		<td align='left'>
		    	<table cellpadding=0 cellspacing=0 width='100%' align='left' border='0'  bordercolor='#7f99cc' bordercolordark='#ffffff' style='table-layout:fixed;word-wrap:break-word;'><!--StartColorStr=#ffffff EndColorStr=#A7D3C6-->
			    	<tr>
				    	<td align='center' width='100%' bgcolor='#e1f0e3' style='FILTER: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,  StartColorStr=#82D6CA, EndColorStr=#2D8F82)'>&nbsp;
					    	<font  style="font-size:14px" color='white'><b>后台维护</b></font> <!-- 设置父标题 -->
				    	</td>
			    		<td align='right' bgcolor='#e1f0e3' style='FILTER: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#ffffff, EndColorStr=#A7D3C6)'>
			    		</td>
			    	</tr>
			    	<tr>
			    		<td colspan='2' align='middle'>
			    		<table  class="DispatchControlPane"  bordercolor='#7f99cc'  bordercolorlight='#ffffff' cellpadding=0 cellspacing=0 bordercolordark='#A7D3C6' width='100%' align='center' border='1' style='table-layout:fixed;word-wrap:break-word;'>
			    			<tr onmouseover="this.style.background='#ffff99';" onmouseout="this.style.background='#ccffff'"><!-- "this.style.background=this.rowIndex%2==0 ? '#ccffff':'#ffffff';" -->
			  					<td align='center'>
			        				<a style="color=#000000;text-decoration=none;" href="goodsQuery.jsp" target="rightFrame">商品维护</a>
			        			</td>
			  				</tr>			    			
			  				<tr onmouseover="this.style.background='#ffff99';" onmouseout="this.style.background='#ccffff'"><!-- "this.style.background=this.rowIndex%2==0 ? '#ccffff':'#ffffff';" -->
			  					<td align='center'>
			        				<a style="color=#000000;text-decoration=none;" href="goodsQuery.jsp" target="rightFrame">订单维护</a>
			        			</td>
			  				</tr>
			        	</table>
			        	</td>
			        </tr>
		         </table>
	         </td>
	      </tr>
    </table>
  </body>
</html>
