<template>
    <div class="page-weather page">
        <page-header :pageType="pageType" />
        
         <swiper auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center">
              <swiper-item> <img src="../assets/images/a.jpg" alt="" style="width:100%;height:180px;"></swiper-item>
              <swiper-item> <img src="../assets/images/32.jpg" alt="" style="width:100%;height:180px;"></swiper-item>
              <swiper-item> <img src="../assets/images/33.jpg" alt="" style="width:100%;height:180px;"></swiper-item>
         </swiper>
            <div class="list">
                 <router-link :to="{name:'weatherid',params:{id:item.content}}" v-for="item in items">
                      <dl>
                        <dt><img :src ="item.img" alt="" class="pic"></dt>
                        <dd>{{item.content}}</dd>
                    </dl>
                
                 </router-link>
            </div>
        <Group>
            <!-- <Cell title="test"></Cell> -->
             <Calendar v-model="deom1":title="title" disable-past></Calendar>
              <!-- <inline-calendar v-model="deom1" :title="title" disable-past></inline-calendar> -->
        </Group>

    </div>
</template>

<script>
import {Cell,Group,Calendar,Swiper,SwiperItem } from 'vux'
import pageHeader from '../components/Header';
import {PAGE_TYPE} from '../common/constant/constant';
//import {WeatherCache} from '../cache/cache';

export default {
    name: 'weather',
    data() {
        return {
            pageType: PAGE_TYPE.WEATHER_PAGE,
            show :true,
            value:true,
            title:'日期',
            deom1:'',  //空就是从今天开始吧这个日期不显示出来
            deom2:"TODAY",
            swiperItemIndex:1 ,

            items:[
            {   
                id:0,
                img:"../../static/images/35.png",
                content:"最妙的是下点小雪呀。看吧，山上的矮松越发的青黑，树尖上顶着一髻儿白花"
            },
            {   
                id:1,
                img:"../../static/images/37.jpg",
                content:"苍白天空飘雨丝，妈妈说是春天到．雨丝像是魔术师，表演了个小魔术．"
            },{
                id:2,
                img:"../../static/images/38.jpg",
                content:"我每天就守侯在电视机前，等待着“天气预报”，可是，大雪没下着，却等来了一场雨夹雪。我打开窗户"
            },{ 
                id:3,
                img:"../../static/images/36.jpg",
                content:"开始是雨夹雪，但后来雪花却占了零星星地落下来,像淘气的小精灵,一会钻进我的耳朵里,"
            },{ 
                id:4,
                img:"../../static/images/37.jpg",
                content:"开始是雨夹雪，但后来雪花却占了零星星地落下来,像淘气的小精灵,一会钻进我的耳朵里,"
            }

        ]
        }
        
    },
    methods:{
        datils(){
             this.$router.push('/datil')
        }
    },
    components: {
        pageHeader,
        Swiper,
        SwiperItem,
        Cell,
        Group,
        Calendar
        
    }
}
</script>

<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-weather {
        padding-top: 44px;
    } 
.list{
    width: 100%;
    dl{
        border-bottom: 1px solid #ccc;
        float: left;
        dt{
            float: left;
            .pic{
                width: 100px;
                height: 80px;
                padding: 20px 20px;

            }
        }
        dd{
            line-height: 25px;
            padding: 20px 20px;
            color: #464646;
        }
    }
}
</style>
