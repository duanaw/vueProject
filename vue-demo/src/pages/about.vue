<template>
    <div class="page-about page">
        <!-- 全局header -->
        <page-header :pageType="pageType" />
        <div class="one">
           <p><input type="text" placeholder="+86" v-model="user"></p>
           <p><input type="password" name="" id="" placeholder="密码" v-model="pwd"></p>
           <p class="deng"><input type="submit" value="登录" @click="login"></p>
            <a href="javascript:;" class="mima">忘记密码？</a>
        </div>
        <div class="zhuce" style="display:none">
           <p><input type="text" placeholder="手机号"></p>
            <p class="yan"><input type="text" placeholder="验证码"> <a href="javascript:;">获取验证码</a></p>
            <p><input type="password" name="" placeholder="登录密码"></p>
           <p class="deng"><input type="submit" value="注册" @click="zhuce"></p>
            
        </div>
        <h2 class="h2">合作伙伴登录片刻</h2>
        <div class="two">
            <i class="icons iconfont">&#xe607;</i>
            <i class="icons iconfont">&#xe65f;</i>
            <i class="icons iconfont">&#xe640;</i>
            <i class="icons iconfont">&#xe624;</i>
            <i class="icons iconfont">&#xe65f;</i>
        </div>
        <div class="footer">
            <span class="bg">登录</span>
            <span>注册</span>
        </div>
    </div>
</template>
<script>
    import pageHeader from '../components/Header'
    import {PAGE_TYPE} from '../common/constant/constant'
    
    export default {
        name: 'about',
        data (){
            return {
                pageType:  PAGE_TYPE.ABOUT_PAGE
            }
        },
        methods:{
            login(){
                this.$http({
                    url:"/api/stores",
                    method:"GET"
                }).then(function(res){
                  /*console.log(res.body.data.data.user)
                  console.log(res.body.data.data.pwd)*/
                 /* console.log(this.user)
                  console.log(this.pwd)*/
                  if(this.user==res.body.data.data.user && this.pwd==res.body.data.data.pwd){
                    this.$router.push('/happy')
                  }else{
                    alert("您输入的密码有误")
                  }

                })
            },
            zhuce(){

            }
        },
        components: {
            pageHeader
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-about {
        padding-top: 44px;
        overflow: hidden;
    }
    .page-about-title {
        margin-top: 50px;
        font-size: 20px;
    }
   .one{
        width: 300px;
        height: 314px;
       margin:60px auto;
        p{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #ccc;
            b{
                float: left;
            }
            input{
                border: none;
                line-height: 50px;
                background: none;
                padding-left: 10px;
                font-size: 16px;
            }
        }
        .deng{
            margin-top: 20px;
            input{
                text-align: center;
                width: 300px;

                background: #333;
                color: #fff;
            }
        }
       .mima{
        text-align: center;
       line-height: 85px;
       display: inline-block;
        width: 200px;
        color: #04053d;
       }
   }
   .h2{
    line-height: 30px;
    text-align: center;
    color: #ccc;
    font-weight: 400;
    font-size: 16px;
   }
   .two{
        width: 280px;
        height: 35px;
      margin: 20px auto;
      i{
        font-size: 36px;
        color: #666666;
        padding-right: 18px;
      }
   }
   .footer{
    width: 100%;
    height: 50px;
    background: #333;
    margin-top: 54px;
    text-align: center;
    line-height: 54px;
    color: #fff;
    .bg{
        color: #1c8062;
    }
   }
   .zhuce{
        width: 260px;
        height: 314px;
       margin:60px auto;
        p{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #ccc;
            b{
                float: left;
            }
            input{
                border: none;
                line-height: 50px;
                background: none;
                padding-left: 10px;
                font-size: 16px;
            }
        }
        .deng{
            margin-top: 20px;
            input{
                text-align: center;
                width: 260px;
                background: #333;
                color: #fff;
            }
        }
       .mima{
        text-align: center;
       line-height: 85px;
       display: inline-block;
        width: 200px;
        color: #04053d;
       }

       .yan{
        position: relative; 
        a{
            position: absolute;
            right:3px;
            line-height: 50px;
        }
       }
   }
</style>

