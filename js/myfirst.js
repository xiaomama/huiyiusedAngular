/**
 * Created with Sublime Text 2.
 * Author: AkiUsagi
 * Date: 2015-6-31
 * Time: 15:20 PM
 */


$(function(){

   
    $(':text').focus(function(){        
        var _text = $(this).val();
        //$(this).val('');
        $(this).addClass('f-cobo').removeClass('b-cobo');
    })
     $(':text').blur(function(){                 
               $(this).val($(this).val()) ;        
               $(this).removeClass('f-cobo').addClass('b-cobo');
        })

 })

$(function(){
	// 下拉菜单
   $('.language_list').click(function(){

        $(this).children('ul').slideDown('fast',function(){
            $('.language_list ul').on('mouseleave',function(){
                $(this).slideUp('fast');
            });
            $('.language_list ul li').click(function(){
                var txt = $(this).text();
                console.log(txt)
                $('.select_language').text(txt);
            })
        });
   })
   
   $('.language_list').on('mouseleave',function(){
        $(this).children("ul").slideUp('fast');
    });
        
     
//上拉菜单
    $('.parther').click(function(){

        $(this).children('ul').slideDown('fast',function(){
            $('.parther ul').on('mouseleave',function(){
                $(this).slideUp('fast');
         });
            $('.parther ul li').click(function(){
            var txt = $(this).text();
            $('.family-parther').text(txt);
        })
        });
   })
        $('.parther').on('mouseleave',function(){
           $(this).children('ul').slideUp('fast');
        });
 })
var dataDomain = "http://172.16.10.50:8004";

function registedTemplate(url){
    $.ajax({
        type:"post",
        url:dataDomain+url,
        dataType:"json",
        success:function(data){
            console.log(data)


        },
        error:function(){}
    })
}

//    解决首页导航条图标
function iconA(){
    $('#01_icon').mouseover(function(){
    $('#001_icon').removeClass("icon-members").addClass("icon-members1");
    });
    $('#02_icon').mouseover(function(){
    $('#002_icon').removeClass("icon-time").addClass("icon-time1");
    });
    $('#03_icon').mouseover(function(){
    $('#003_icon').removeClass("icon-community").addClass("icon-community1");
    });
    $('#04_icon').mouseover(function(){
    $('#004_icon').removeClass("icon-enroll").addClass("icon-enroll1");
    });
    $('#05_icon').mouseover(function(){
    $('#005_icon').removeClass("icon-support").addClass("icon-support1");
    });
    $('#06_icon').mouseover(function(){
    $('#006_icon').removeClass("icon-server").addClass("icon-server1");
    });
    $('#07_icon').mouseover(function(){
    $('#007_icon').removeClass("icon-contact").addClass("icon-contact1");
    });
    $('#01_icon').mouseleave(function(){
    $('#001_icon').removeClass("icon-members1").addClass("icon-members");
    });
    $('#02_icon').mouseleave(function(){
    $('#002_icon').removeClass("icon-time1").addClass("icon-time");
    });
    $('#03_icon').mouseleave(function(){
    $('#003_icon').removeClass("icon-community1").addClass("icon-community");
    });
    $('#04_icon').mouseleave(function(){
    $('#004_icon').removeClass("icon-enroll1").addClass("icon-enroll");
    });
    $('#05_icon').mouseleave(function(){
    $('#005_icon').removeClass("icon-support1").addClass("icon-support");
    });
    $('#06_icon').mouseleave(function(){
    $('#006_icon').removeClass("icon-server1").addClass("icon-server");
    });
    $('#07_icon').mouseleave(function(){
    $('#007_icon').removeClass("icon-contact1").addClass("icon-contact");
    });
};







