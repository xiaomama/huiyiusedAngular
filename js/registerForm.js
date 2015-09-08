$(function () {
var invoiceCotent = "<li><lable>发票抬头</lable><input type='text' value='' class='tet'><b class='fx'>*</b></li><li><lable>省市地区</lable><select id='provinces'></select><select id='city'></select><b class='fx'>*</b></li><li><lable>邮寄地址</lable><input type='text' placeholder='填写完整，以便我们邮寄发票' value='' class='tet hui'><b class='fx'>*</b></li><li><lable>邮政编码</lable><input type='text' value=''><b class='fx'>*</b></li><li><lable>备注</lable><input type='text' value=''></li>"
	$('input[name="invoice"]').on("click",function(){
		if($(this).val()==3){
			var parent = $(this).parent();
			parent.nextAll().remove();
		}else{
			if($(".invoiceBox ul li").length==1){
				$(".invoiceBox ul").append(invoiceCotent);
				provinces();
				city();
			}
			
		}
	})
	$(document).on('click',$('input[name="invoice"]'),function(){

	})
	function provinces(){
		var proList;
		for(i=0;i<GP.length;i++){
			proList += "<option value ="+i+">"+GP[i]+"</option>";
		}
		$("#provinces").html(proList);
	}
	function city(){
		$("#provinces").val();
		var cityList;
		for(i=0;i<GT[$("#provinces").val()].length;i++){
			cityList += "<option value ="+i+">"+GT[$("#provinces").val()][i]+"</option>";
		}
		$("#city").html(cityList);
	}
	provinces();
	city();
	$("#provinces").on("change",function(){
		city();
	})
	$("#buyVideo").on("click",function(){
		if(this.checked==true){
			$("#videoNumber").val(1);
		}else{
			$("#videoNumber").val("");
		}
	})
})