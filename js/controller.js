function PhoneListCtrl($scope) {
	var data = {
        name : getParameter("name"),
        id : getParameter("id"),
        company : getParameter("company"),
        job : getParameter("job"),
        Email : getParameter("Email"),
        Tel : getParameter("Tel"),
        food: getParameter("food")
    }

  $scope.alldata={
	  	"formDataOrders":[{
	  	"InvoiceTitle" : ""
	  }],
	  "formDataMember":[
	  ]
	}
	$scope.alldata.formDataMember[0] = data;
	if(getParameter("name1")!=""){
        data = {
        name : getParameter("name1"),
        id : getParameter("id"),
        company : getParameter("company1"),
        job : getParameter("job1"),
        Email : getParameter("Email1"),
        Tel : getParameter("Tel1"),
        food: getParameter("food1")
       }
       $scope.alldata.formDataMember.push(data);
   }
   console.log($scope.alldata.formDataMember);
   $scope.editAdd={}
    $scope.setFinish = function(){
    	var success = checkForm("personnel");
    	if(success){
            alert(edited)
    		if(edited==-1){
	    		$scope.alldata.formDataMember.push($scope.editAdd);
    		}else{
    			$scope.alldata.formDataMember[edited] = angular.copy($scope.editAdd);
    		}
    		$scope.editAdd = {}
	    	$.fancybox.close();
    	}    	
    }
    $(document).on("click",'.edit',function(){
	    edited = $('.edit').index(this); 
	    $.fancybox.open("#tanchu",{
	        'afterShow' : function(){
                $scope.$apply(function() {
    	            if(edited!=-1){
    	            	$scope.editAdd = angular.copy($scope.alldata.formDataMember[edited]);
    	            	console.log($scope.editAdd)
    	            }
                })
	        },
	        'afterClose' : function(){
	            console.log(1);
	            $scope.editAdd = {};
	            edited=-1;
	        }
	    });
   })
    $(document).on("click",'.delete',function(){
        $scope.$apply(function() {
            var deleted = $('.delete').index(this); 
            $scope.alldata.formDataMember.splice(deleted,1);
        })
    })
    $scope.alldata.formDataOrders[0] = {
        "OrderType":getParameter("id"),//订单类型 1 国内、2国外
        "VideoNum":0,//购买视频数量
        "VideoPrice":0,
        "MemberNum":$("#fromTable2 tr").length,//参会人员数量
        //"MemberPrice":2850.00,
        "DinnerNum":0,//参加晚宴人员数量
        //"DinnerPrice":300.00*DinnerNum,
        //"TotalPrice":3650.00,
        "IsPrintInvoice":1,//是否打印发票 0 否 1是
        // "InvoiceContent":"InvoiceContent",//发票内容
        // "InvoiceTitle":InvoiceTitle,//发票抬头
        // "Address":Address,//发票邮寄地址
        // "PostCode":PostCode,//邮政编码
        // "Marks":Marks//备注
    }
        function postForm(){
            $.ajax({
            type: 'post',
            url: 'http://101.69.248.150:8001/api/Member/MemberOrdersModel',
            dataType: 'json',
            data: { formDataMember: JSON.stringify($scope.alldata.formDataMember), formDataOrders: JSON.stringify($scope.alldata.formDataOrders) },
            success: function (data) {
                console.log(data);
                if(data.Flag){
                    window.location="registeredfor.html?id="+data.Data;
                }else{
                    alert("创建订单失败")
                }
            }
        });
    }
    $("#button").on("click", function () {
        if($("#fromTable2 tr").length<1){
            alert("与会人员不能为空，请添加与会人员")
        }else if($('input:radio[name="contact"]:checked').val()==null){
                alert("请选择一个联系人");
            }else{
                var up = checkForm("invoiceBox");
                if(up){
                postForm()
            }  
        }
        
    })

}