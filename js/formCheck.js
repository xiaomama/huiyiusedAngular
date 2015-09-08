// JavaScript Document
//form www.cumt.top
//	//下一步
	 function checkForm(form){
		var success = true;
		$("."+form+" input").each(function(){
			var $that = $(this);
			var dataType = eval($that.attr("dataType"));
			if(dataType!=undefined){
				if($that.val().match(dataType)){
					$that.removeClass("borderRed");
				}else{
					$that.focus();
					$that.addClass("borderRed");
					success = false;
					return false;
				}
			}
		})
		return success;
	}
$(function(){
		//表单输入验证验证
	$(document).on("blur","input",function(){
		var $that = $(this);
		var dataType = eval($that.attr("dataType"));
		if(dataType!=undefined){
			if($that.val().match(dataType)){
				$that.removeClass("borderRed");
			}else{
				$that.addClass("borderRed");
			}
		}
	})
	$(document).on("focus","input",function(){
		$(this).removeClass("borderRed");
	});


		
	//重填
	// $(".refill").on("click",function(){
	// 	$("input").each(function(){
	// 		$(this).val("");
	// 	})
	// 	$("#number").val("1");
	// 	$("#name").focus();
	// })

	//总和
	// $("#number").on("change",sum);
	// $("#price").on("change",sum);
	// function sum(){
	// 	var $number = parseInt($("#number").val());
	// 	var $price = parseInt($("#price").find("option:selected").text());
	// 	$(".showNumber").html($("#number").val());
	// 	$(".money").html($number*$price);
	// }
})

