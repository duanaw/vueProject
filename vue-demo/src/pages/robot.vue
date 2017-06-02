<template>
    <div class="page-robot page">
        <page-header :pageType="pageType"/>
         <div style="overflow: hidden; height:200px;" v-for="item in list">
        <masker style="border-radius: 2px;height:200px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
         
        </div>
      </masker>
    </div>

    <div class="pic">
        <img src="../assets/images/img6.png" alt="">
    </div>
    <div class="content">
        <span>欢迎来到片刻。</span>
        <p>在阿尔卑斯山一处风景秀美却也极为险峻的山路转玩出，经常发生事故，可即使如此，来往的车辆依旧鸡翅而过，不断更换的警示牌也没有起到任何作用，知道有一天哪里力气一跨刷机大师，写着“慢慢走，向上啊，人们才猛然警觉，原来只”</p>
        <span>人生何尝不是如此？</span>
        <p>有是我们也想屏蔽玄奇，虽然四周车水马龙；有是我们会厌倦满路，尽管路人杏色匆匆。</p>
    </div>
 
    </div>
</template>
<script>
    import pageHeader from '../components/Header'
    import {PAGE_TYPE} from '../common/constant/constant'
    import { Masker } from 'vux'
    export default {
       name: 'robot',
        data (){
            return {
                pageType:  PAGE_TYPE.ROBOT_PAGE,
                  list: [{
                    title: 'pianke',
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1486365084&di=a27a6d0c9e76192ef8caec76654e1df6&src=http://file01.16sucai.com/d/file/2013/1014/c1bf6cf487c920906eb5200189bb87ea.jpg'
                    }]
            }
        },
       
        components: {
            pageHeader,
             Masker
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-robot {
        padding-top: px2rem(88)!important;
    }
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
  height: 200px;
}

.m-title {
  color: #71C2F1;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
}

.pic{
    width: 100%;
    height: 92px;
    background: #fff;
    overflow: hidden;
    img{
        width: 200px;
        height: 33px;
        margin: 30px 90px;
    }
}
.content{
    background: #fff;
    padding: 0 15px;
    span{
        font-size: 18px;
        color: #757575;
    }
    p{
        line-height: 24px;
        padding: 15px 0; 
        color: #757575;
    }
}
</style>

