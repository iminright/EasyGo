/*
 *�û�����js��װ
 *@auther chenjiangbo 2013-5-3
 **/
$(function ($){
    var X = {}
    //ҳ����ת;
    X.location = function (url){
        if(!url) return window.location.href;
        window.location.href = url;
    }
    //ͼ��Ĭ��������;
    X.highcharts_config = {
            colors: ["#62BCD2", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
                    "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
            chart: {
                    backgroundColor: {
                            linearGradient: [0, 0, 0, 0],
                            stops: [
                                    [0, 'rgb(255, 255, 255)'],
                                    [1, 'rgb(255, 255, 255)']
                            ]
                    },
                    borderWidth: 0,
                    borderRadius: 30,
                    plotBackgroundColor: null,
                    plotShadow: false,
                    plotBorderWidth: 0,
                    margin:[50,0,24,50]
            },
            title: {
                    text: '',
                    style: {
                            color: '#333',
                            font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                    }
            },
            subtitle: {
                    style: {
                            color: '#333',
                            font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                    }
            },
            xAxis: {
                    gridLineWidth: 0,
                    lineColor: '#999',
                    tickColor: '#999',
                    labels: {
                            style: {
                                    color: '#999'
                            }
                    },
                    title: {
                            style: {
                                    color: '#AAA',
                                    font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                            }
                    }
            },
            yAxis: {
                    alternateGridColor: null,
                    minorTickInterval: null,
                    lineWidth: 0,
                    tickWidth: 0,
                    labels: {
                            style: {
                                    color: '#999'
                            }
                    },
                    title: {
                            text:'',
                            style: {
                                    color: '#AAA',
                                    font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
                            }
                    },
                    gridLineColor: '#eff0f0',
                    minPadding: 0.2,
                    maxPadding: 0.2
            },
            legend: {
                    itemStyle: {
                            color: '#CCC'
                    },
                    itemHoverStyle: {
                            color: '#333'
                    },
                    itemHiddenStyle: {
                            color: '#333'
                    }
            },
            labels: {
                    style: {
                            color: '#CCC'
                    }
            },
            tooltip: {

                    backgroundColor: '#fff',
                    borderWidth: 2,
                    style: {
                            color: '#62BCD2'
                    }
            },


            plotOptions: {
                    line: {
                            dataLabels: {
                                    color: '#CCC'
                            },
                            marker: {
                                    lineColor: '#333'
                            }
                    },
                    spline: {
                            marker: {
                                    lineColor: '#333'
                            }
                    },
                    areaspline:{
                            marker:{
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null // inherit from series
                    }

                            },
                    scatter: {
                            marker: {
                                    lineColor: '#333'
                            }
                    },
                    candlestick: {
                            lineColor: 'white'
                    },
                    series: {			
                        fillColor: {
                            linearGradient: [0, 0, 0, 300],
                            stops: [
                                [0, 'rgb(156, 212, 226)'],
                                [1, 'rgba(255,255,255,0)']
                            ]
                        }

                    },
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
            },

            toolbar: {
                    itemStyle: {
                            color: '#CCC'
                    }
            },

            navigation: {
                    buttonOptions: {
                            backgroundColor: {
                                    linearGradient: [0, 0, 0, 20],
                                    stops: [
                                            [0.4, '#62D4F0'],
                                            [0.6, '#62D4F0']
                                    ]
                            },
                            borderColor: '#62D4F0',
                            symbolStroke: '#62D4F0',
                            hoverSymbolStroke: '#FFFFFF'
                    }
            },

            exporting: {
                    buttons: {
                            exportButton: {
                                    symbolFill: '#FFBB77'
                            },
                            printButton: {
                                    symbolFill: '#AFEA15'
                            }
                    }
            },

            // scroll charts
            rangeSelector: {
                    buttonTheme: {
                            fill: {
                                    linearGradient: [0, 0, 0, 20],
                                    stops: [
                                            [0.4, '#888'],
                                            [0.6, '#555']
                                    ]
                            },
                            stroke: '#000000',
                            style: {
                                    color: '#CCC',
                                    fontWeight: 'bold'
                            },
                            states: {
                                    hover: {
                                            fill: {
                                                    linearGradient: [0, 0, 0, 20],
                                                    stops: [
                                                            [0.4, '#BBB'],
                                                            [0.6, '#888']
                                                    ]
                                            },
                                            stroke: '#000000',
                                            style: {
                                                    color: 'white'
                                            }
                                    },
                                    select: {
                                            fill: {
                                                    linearGradient: [0, 0, 0, 20],
                                                    stops: [
                                                            [0.1, '#000'],
                                                            [0.3, '#333']
                                                    ]
                                            },
                                            stroke: '#000000',
                                            style: {
                                                    color: 'yellow'
                                            }
                                    }
                            }
                    },
                    inputStyle: {
                            backgroundColor: '#333',
                            color: 'silver'
                    },
                    labelStyle: {
                            color: 'silver'
                    }
            },

            navigator: {
                    handles: {
                            backgroundColor: '#666',
                            borderColor: '#AAA'
                    },
                    outlineColor: '#CCC',
                    maskFill: 'rgba(16, 16, 16, 0.5)',
                    series: {
                            color: '#7798BF',
                            lineColor: '#A6C7ED'
                    }
            },

            scrollbar: {
                    barBackgroundColor: {
                                    linearGradient: [0, 0, 0, 20],
                                    stops: [
                                            [0.4, '#888'],
                                            [0.6, '#555']
                                    ]
                            },
                    barBorderColor: '#CCC',
                    buttonArrowColor: '#CCC',
                    buttonBackgroundColor: {
                                    linearGradient: [0, 0, 0, 20],
                                    stops: [
                                            [0.4, '#888'],
                                            [0.6, '#555']
                                    ]
                            },
                    buttonBorderColor: '#CCC',
                    rifleColor: '#FFF',
                    trackBackgroundColor: {
                            linearGradient: [0, 0, 0, 10],
                            stops: [
                                    [0, '#000'],
                                    [1, '#333']
                            ]
                    },
                    trackBorderColor: '#666'
            },
            credits:{
                enabled:false
            },
            legend: {
                enabled: false
            },
            // special colors for some of the demo examples
            legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
            legendBackgroundColorSolid: 'rgb(70, 70, 70)',
            dataLabelsColor: '#444',
            textColor: '#E0E0E0',
            maskColor: 'rgba(255,255,255,0.3)'
    };
    X.highcharts_init = function (){
        /**
        * highchartsͼ����Ƥ����ʼ������;
        * @author chen
        */
        var highchartsOptions = Highcharts.setOptions(X.highcharts_config);
    }
    //��ͼ��;
    X.chart_basic = function (obj,options) {
        //X.highcharts_config = $.extend(X.highcharts_config,options);
        X.highcharts_init();//��ʼ��ͼ����ʽ;
        $(obj).highcharts(options);
    }
    //���໭ͼ;
    X.chartOftype = function (obj,type,options){
        options.chart.type = type;
        X.chart_basic(obj, options);
    }
    //����ͼ;
    $.fn.chart_pie = function (){
        $(this).each(function (i){
            var _name = $(this).attr('_name');
            var _data = eval($(this).attr('_data'));
            var _size = $(this).attr('_size');
            var _innersize = $(this).attr('_innersize');
            var _unit = $(this).attr('_unit');//���ݵ�λ;
            var _width = $(this).attr('_width');
            var _height = $(this).attr('_height');
            var options = {
                chart: {
                    backgroundColor:null,
                    borderRadius:100,
                    width:_width?_width:180,
                    height:_height?_height:180,
                    margin:[0,0,0,0]
                },
                tooltip: {
                        valueSuffix: _unit
                },
                series: [{
                    name:_name,
                    data: _data,//[{name:'��Ч˯��',y:good_rate,color:'#47CCED'},{name:'����˯��',y:bed_rate,color:'#FF3366'}],
                    size: _size,//'100%',
                    innerSize: _innersize,//'90%',
                    dataLabels: {
                        formatter: function() {
                            return null;
                        }
                    }
                }]
            };
            X.chartOftype(this, 'pie', options);
        });
        
    }
    //������ͼ;
    $.fn.chart_areaspline = function (){
        $(this).each(function (i){
            var _name = $(this).attr('_name');
            var _data = eval($(this).attr('_data'));
            var _unit = $(this).attr('_unit');//���ݵ�λ;
            var _width = $(this).width() || $(this).attr('_width');
            var _height = $(this).height() || $(this).attr('_height');
            var _categories = eval($(this).attr('_categories'));
            var options = {
                chart: {
                    defaultSeriesType: 'areaspline',
                    width:_width,
                    height:_height
                },
                xAxis: {
                    categories: _categories
                },
                series: [{
                        name: _name,
                        data: _data     
                    }],
                tooltip: {
                        valueSuffix: _unit
                }
            };
            X.chartOftype(this, 'areaspline', options);
        });
    }
    /*
     *���ϣ�����ͼ������ͼ�Լ�֮���п��ܳ��ֵı�ͼ���и���ʹ��highchart����ķ�װ������ʹ��highchart���;
     *�����3����ͼ����Ϊ������װ;
     **/
    //������������ͼ;
    X.chart_pillar = function (obj,options){
        //Ĭ��options
        var o = {
            chart: {
                type:'default',//Ĭ�ϵ�ͼ����ƽ��ɫ������ͼ;���Ϊimage������������ͼΪͼƬ����;
                background:null,
                width:900,
                height:300
            },
            pillar:{
                image:'#4bd1f3',
                background:null
            }
        };
        //�̳���options
        options = $.extend(o, options);
        
        var width = options.chart.width;
        var height = options.chart.height;
        var suffix = options.toolTip.valueSuffix;
        var categories = options.xAxis.categories;
        var image = options.pillar.image;
        var type = options.chart.type;
        var background = options.chart.background;
        var item_bg = options.pillar.background;
        var callback = options.pillar.callback;
        var tips = options.toolTip.tips;
        var other = options.pillar.other;
        
        //���categories.lengthҲΪ0����˵����ǰ������������г�����ʾ���û������ݵ���ʾ;
        var nodata = false;
        if(categories.length<=0){
            nodata = true;
            categories[0] = 0;
        }
        //���data�е�������㣬��0��ֱ��������������categories��������ͬ;
        var data = options.series[0].data;
        for(var i=0;i<categories.length;i++){
            data[i] = data[i]?data[i]:0;
        }
        
        //js�����鸳ֵΪ���ø�ֵ����˲���ֱ�Ӹ�ֵ�����������ȡ���ֵ����ᵼ���������ø�ֵ�ı������ᱻ��������ֻ�ܴ��±����洢;
        data = eval('['+data.toString()+']');
        
        //�������ݽ׶�;
        var data_list = eval('['+data.toString()+']');
        var temp = 0;
        for(var i=0;i<data_list.length-1;i++){//ð������;
            for(var j=0;j<data_list.length-i-1;j++){
                if(data_list[j]>data_list[j+1]){
                    temp = data_list[j];
                    data_list[j] = data_list[j+1];
                    data_list[j+1] = temp;
                }
            }
        }
        var max = data_list[data_list.length-1] + data_list[data_list.length-1]*0.1;
        //���ݽ׶�;
        var max_x_1 = parseInt((max / 5) * 1);
        var max_x_2 = parseInt((max / 5) * 2);
        var max_x_3 = parseInt((max / 5) * 3);
        var max_x_4 = parseInt((max / 5) * 4);
        var max_x_5 = parseInt((max / 5) * 5);
        
        //ÿһ�����ݽ׶εĸ߶�
        var s_height = height/5-1;
        
        //���ݽ׶���λhtml;
        var stage = '<span style="text-align:left;display:block;width:'+width+'px;height:'+s_height+'px;"></span>'+
                    '<span style="text-align:left;display:block;width:'+width+'px;height:'+s_height+'px;border-top:1px solid #ddd;">'+max_x_4+suffix+'</span>'+
                    '<span style="text-align:left;display:block;width:'+width+'px;height:'+s_height+'px;border-top:1px solid #ddd;">'+max_x_3+suffix+'</span>'+
                    '<span style="text-align:left;display:block;width:'+width+'px;height:'+s_height+'px;border-top:1px solid #ddd;">'+max_x_2+suffix+'</span>'+
                    '<span style="text-align:left;display:block;width:'+width+'px;height:'+s_height+'px;border-top:1px solid #ddd;">'+max_x_1+suffix+'</span>'+
                    '<span style="text-align:left;display:block;width:'+width+'px;height:'+s_height+'px;"><img src="'+background+'" /></span>';
        stage = '<div class="chart-stage" style="position: absolute; top: 0px; left:0px;">'+stage+'</div>';
        
        //������Ŀ�Ⱥ���������;
        var margin_left = 70;
        var w = parseInt((width-margin_left)/categories.length);//-50��ָ�ճ������������߾�;
        w = w>96?96:w;//���������Ŀ�ȴ���87��˵��item�Ѿ����٣�����������ͼƬ����������Ŀ����Ϊ87;
        var margin = w*0.15;//������֮��ļ���Լ���������10%
        var item_w = w - margin;
        var item_top_h = w/3;//�������ͼƬ�͵ײ�ͼƬ�ĸ߶ȴ�Լ�ǿ�ȵ�1/3;
        //������html;
        var items = '';
        for(var k=0;k<categories.length;k++){
            var d = data[k];
            var c = categories[k];
            var tip = tips[k]?tips[k]:'<h1 class="calorie">������</h1>';
            var o = other[k];//��������;
            //������ĸ߶�;
            var item_h = max==0?0:d/(max/(height-item_top_h*2));
            var margin_top = height - item_h;
            if(type == 'image'){
                var html = '<dt class="pillar-item" other="'+o+'" tip=\''+tip+'\' style="cursor:pointer;float:left;height:'+(height/1+15)+'px;width:'+item_w+'px;margin-left:'+margin+'px;">';
                if(d>0){
                    html += '<img class="pillar-img-top" width="'+item_w+'" height="'+item_top_h+'" style="margin-top:'+(margin_top-item_top_h*2)+'px;float: left;" src="'+image[0]+'">'+
                            '<img class="pillar-img-body" width="'+item_w+'" height="'+item_h+'" style="margin: 0px; float: left;" src="'+image[1]+'">'+
                            '<img class="pillar-img-bottom" width="'+item_w+'" height="'+item_top_h+'" style="margin: 0px;float: left;" src="'+image[2]+'">';
                }else{
                    html += '<img class="pillar-img-zero" width="'+item_w+'" height="'+item_top_h+'" style="margin-top:'+(margin_top-item_top_h)+'px;float: left;" src="'+image[3]+'">';
                }
                html += '<div style="position:relative;"><img class="pillar-img-bg" width="'+item_w+'" height="'+item_top_h+'" style="margin: 0px;float: left;" src="'+item_bg+'"><span style="text-align:center;position:absolute;left:0;top:'+(item_top_h/2 + height/1)+'px;width:'+item_w+'px;">'+c+'</span></div></dt>';
            }else{
                html += '<span style="margin: '+margin_top+'px 0px 0px 0px ;display:block;width:'+item_w+'px;height:'+item_h+'px;background:'+image+'"></span>';
                html += '<span>'+c+'</span></dt>';
            }
            items += html;
        }
        var pillars = '<div class="pillar-box" style="position:absolute;left:'+margin_left+'px;top:10px;width:'+(width-margin_left)+'px;height:'+height+'px;"><dl>'+items+'</dl></div>';
        pillars = nodata?"<h3>û�п�����ʾ������</h3>":pillars;
        var html = '<div class="chart-box" style="width:'+width+'px;height:'+(height/1+20)+'px;position:relative;">'+stage+pillars+'</div>';
        
        obj.html(html);
        $('dt.pillar-item img').mouse_over_tips();
        if(callback){
            obj.find('.pillar-item').each(function (){
                callback(this);
            });
        }
    }
    
    //������ͼƬ������ͼ�����ÿ�;
    $.fn.chart_imgpillar = function (callback){//callback�ǵ��ÿ������ͼ�������Ļص�����;
        this.each(function (i){
            var data = eval($(this).attr('_data') || '[]');//json��ʽ������;
            var categories = eval($(this).attr('_categories') || '[]');//json��ʽ����;
            var img = eval($(this).attr('_img') || '[]');//json��ʽ��ͼƬ����;��ͼƬ��3D����ͼ��ʾ���õ�ͼƬ;[top_img,body_img,bottom_img,0_img]
            var width = $(this).width()  || $(this).attr('width');
            var height = $(this).height() || $(this).attr('height');
            var background = $(this).attr('background') || 'zu_s_bg-1.png';
            var itembg = $(this).attr('itembg') || '';
            var name = $(this).attr('_name') || '';
            var unit = $(this).attr('_unit') || '';
            var tips = eval($(this).attr('tips') || '[]');
            var other = eval($(this).attr('_other') || '[]');
            var img_base_url = 'images/';
            //����Ĭ��ͼƬ;
            if(img.length == 0){
                img[0] = 'ar_sp_w_top.png';
                img[1] = 'ar_sp_w_1.png';
                img[2] = 'ar_sp_w_bottom.png';
                img[3] = 'ar_sp_m_bottom.png';
            }
            //ͼƬ����ͼƬ��Ŀ¼;
            for(var i=0;i<img.length;i++){
                img[i] = img_base_url + img[i];
            }
            itembg = img_base_url + itembg;
            background = img_base_url + background;

            //��������;
            var options = {
                chart: {
                    type:'image',
                    background:background,
                    width:width,
                    height:height
                },
                xAxis: {
                    categories: categories
                },
                series: [{
                        name: name,
                        data: data     
                    }],
                toolTip: {
                        valueSuffix: unit,
                        tips:tips
                },
                pillar:{
                    image:img,
                    background:itembg,
                    callback:callback,
                    other:other//��������;
                }
            };
            //��ͼ;
            X.chart_pillar($(this),options);
        });
    }
    //$('pillar-box').chart_imgpillar();
    //������������˯���ʻ���ͼ;
    $('.sleep_rate').chart_pie();
    //˯�ߵ���ͼ;
    $('#sleep_container').chart_areaspline();
    //���ص���ͼ;
    $('#weight_container').chart_areaspline();
    
    //�л�ͳ������;
    $.fn.change_cycle = function (){
        var date = $(this).attr('date');
        var cycle = $(this).attr('cycle');
        var ope = parseFloat($(this).attr('ope'));
        
        var time =date.split(',');//���ݴ���������ִ�ȡ��������;
        var y = time[0];
        var m = time[1]-1;//js�е��·ݴ�0��ʼ��11����������ʱ��Ҫ������������·�-1���ܵõ���ȷ��ʱ��;
        var d = time[2];
        var date=new Date(y,m,d);
        var today = new Date();
        
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var time = date.getTime();
        var _time = today.getTime();
        
        if(time >= _time && ope==1){
            return false;
        }
        
        if(cycle == 'year'){
            date.setFullYear(year + ope);
        }else if(cycle == 'month'){
            date.setMonth(month + ope);
        }else if(cycle == 'week'){
            date.setTime(time + ope*60*60*24*1000);//��ǰ��������һ�죬������һ�����ڵ����һ������¸����ڵĵ�һ��;
        }else if(!isNaN(cycle)){//����Ϊ���ֵ�ʱ��;
            var d = ope==1?ope*cycle:ope;
            date.setDate(day + d);
        }
        
        var month = date.getMonth() + 1;//js�е��·ݴ�0��ʼ��11�����Եõ����·���Ҫ+1���ܵõ�����״���µ��·�;
        var year = date.getFullYear();
        var day = date.getDate();
        var datestr=year+"-"+month+"-"+day;
        var urls = X.location();
        var urls = urls.split('/');
        var host = urls[0]+'//'+urls[2]+'/'+urls[3]+'/'+urls[4];
        var url = host + "/cycle/"+cycle+"/time/"+datestr;
        X.location(url);//��ת;
    }
    //ͼ��ͳ��������ת;
    $('.change_cycle').click(function (){
        $(this).change_cycle();
    });
    
    //�������tips
    $.fn.mouse_over_tips = function (){
        this.each(function(){
            var $x=-85;
            var $y=-110;  
            var html=$(this).parent().attr("tip");
            $(this).mouseover(function(e){
                var dom="<div class='mapDiv'></div>";
                $("body").append(dom);
                $(".mapDiv").html(html);
                $(".mapDiv").css({
                    top: (e.pageY + $y)+"px",
                    left: (e.pageX + $x)+"px"
                }).show("fast");
            }).mouseout(function(){
                $(".mapDiv").remove();
            }).mousemove(function(e){
                $(".mapDiv").css({
                    top: (e.pageY + $y)+"px",
                    left: (e.pageX + $x)+"px"
                })
            });
        });
    }
    //��ת����
    X.redirect = function (url){
        X.location(url);
    }
    $('.pillar-box').chart_imgpillar();
    $('#gps_pillar_box').chart_imgpillar(function (obj){
        $(obj).click(function (){
            var id = $(this).attr('other');
            X.redirect("/gmaps/gd/sport_id/" + id);
        });
    });
	$('#gpser_pillar_box').chart_imgpillar(function (obj){
    $(obj).click(function (){
            var id = $(this).attr('other');
			var username = $('#sporter_pillar_box').attr('_userid');
            X.redirect('/sporter/gmaps/'+username+'/sport_id/' + id);
        });
    });
    $('#sport_pillar_box').chart_imgpillar(function (obj){
        $(obj).click(function (){
            var id = $(this).attr('other');
            customWrite('<iframe src="/home/sport-detail/pid/'+id+'" id="addifr" width="650" height="573"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>',700);
        });
    });
	var username = $('#sporter_pillar_box').attr('_userid');
	$('#sporter_pillar_box').chart_imgpillar(function (obj){
        $(obj).click(function (){
            var id = $(this).attr('other');
			
            customWrite('<iframe src="/sporter/sport-detail/'+username+'/pid/'+id+'" id="addifr" width="650" height="573"  frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>',700);
        });
    });
});

