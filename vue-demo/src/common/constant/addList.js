+$(function(){
           var mscroll= new IScroll(".main")

           var send=$(".send");
           var input=$(".text-content input");
           var tpl='<div class="dlagt"><span class="pot">头像</span><p class="infomate">{{info}}</p><em></em></div>'
           input.on("input propertychange",function(){
            
               //console.log($(this).val()); //获取文本框的值
               var txt=$.trim($(this).val())//去掉文本框的空格
                if(txt.length>0){
                    send.addClass("bg")
                }else{
                    send.removeClass("bg")
                }
          })
           send.on("click",function(){
               if(!$(this).hasClass("bg")) return; //没有这类的时候click不管用
                 var val=input.val();
                tpl=tpl.replace("{{info}}",val)
               $(tpl).appendTo($(".scrollBox"))
               mscroll.refresh();//加上这个方法就可以拖上去
               input.val("");
               $(this).removeClass("bg");
               mscroll.scrollToElement($(".dlagt:last-child")[0])
           })

       })