<template>
    <div class="page-happy page">
        <page-header :pageType="pageType" />
        <div>
           <tab :line-width=2 active-color='#ffba15' v-model="index">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
          </tab>
          <swiper v-model="index" height="2009px" :show-dots="false">
            <swiper-item>
              <div class="tab-swiper">
                <div class="happy-item" v-for="item in items">
                    <div class="happy-item-title">
                         <img :src ="item.img" alt="">
                         <p class="happy-item-name">{{item.content}}</p>
                     </div>
                     <div class="happy-item-content">
                     {{item.con}}
                        <img :src ="item.img1" alt="">
                    </div>
                 </div>.
              </div>
            </swiper-item>
               <swiper-item>
                    <div class="happy-item" v-for="i in item2">
                        <div class="happy-item-title">
                             <img :src="i.images" alt="">
                             <p class="happy-item-name">{{i.title}}</p>
                         </div>
                         <div class="happy-item-content">
                         <p>{{i.contents}}</p>
                        </div>  
                     </div>   
               </swiper-item>
          </swiper>
        </div>
        <go-top/>
    </div>
</template>

<script>
import pageHeader from '../components/Header'
import goTop from '../components/GoTop'
import {PAGE_TYPE} from '../common/constant/constant'
import {HAPPY_TYPE} from '../common/constant/constant'

import {HappyListCache} from '../cache/cache'

import { Tab, TabItem, XButton,Loading, Swiper, SwiperItem } from 'vux'
const list = () => ['趣图', '段子']
export default {
    name: 'happy',
    data () {
        return {
            PAGE_SIZE: 10,
            HAPPY_TYPE: HAPPY_TYPE,
            pageType: PAGE_TYPE.HAPPY_PAGE,
            happyType: HAPPY_TYPE.IMAGE, 
            demo2: '精选',
            page: 1, 
            list:[],
            list2: list(),
            index: 0,
            items:[
                {
                   img:"../../static/images/2.jpg" ,
                   content:"溲銑觛縛",
                   con:"如果将来我离开你，我的名字将倒着念＂，＂我也是！",
                   img1:"../../static/images/3.jpg"
                },{

                   img:"../../static/images/25.jpg" ,
                   content:"花儿在微笑",
                   con:" 无聊哦！",
                   img1:"../../static/images/6.jpg"
                },{
                    
                   img:"../../static/images/4.jpg" ,
                   content:"做个女孩子",
                   con:" 我只想安安静静的",
                   img1:"../../static/images/27.jpg"
                },{
                    
                   img:"../../static/images/16.jpg" ,
                   content:"做个女孩子",
                   con:" 真是傻的可爱",
                   img1:"../../static/images/30.jpg"
                }

            ],
            item2:[
                {
                    images:"../../static/images/16.jpg",
                    title:"花儿在微笑",
                    contents:"有一个人叫真咯嗦，娶了个老婆叫要你管，生了个儿子叫麻烦。有一天麻烦不见了！夫妻俩就去报案"
                },{
                    images:"../../static/images/18.jpg",
                    title:"学会爱自己",
                    contents:"有位非常漂亮的女同事，有天起晚了没有时间化妆便急忙冲到公司。结果那天她被记旷工了……吃惊]"
                },{
                    images:"../../static/images/10.jpg",
                    title:"走走停停",
                    contents:"白羊：记不清人；金牛：悔未上床；双子：他（她）是青蛙（恐龙）；巨蟹：善哉善哉；狮子：一脚蹬开；处女：倒大霉了；天秤：感觉很好；"
                },{
                    images:"../../static/images/14.jpg",
                    title:"牛逼 傻逼",
                    contents:"记者：说真的，你真的会给给孩子换尿布吗？ 姚明：要不你躺下，我给你换一个！实话告诉你，我用一只脚就能给孩子换尿布，喂奶啥的，都行。"
                },{
                    images:"../../static/images/19.jpg",
                    title:"活的糊涂的人，容易幸福",
                    contents:"今天同朋友来到一个地方,是新会、开平、台山三个地方的交界处（经国务院批准的）。因此，实现了2分钟内去新会上个厕所，过开平洗个手，再番来台山吃饭的历史创举。"
                }

            ]
        }
    },
    components:{
        Tab,
        TabItem,
        pageHeader,
        XButton,
        Loading,
        goTop,
        Swiper,
        SwiperItem 
    }
}
</script>

<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-happy {
        padding-top: 44px;
    }
    .happy-item {
        margin-top: 15px;
        background: #fff;
        padding: 18px 16px;
        .happy-item-title {
            padding-bottom: 18px;
            height: 40px;
            overflow: hidden;
            zoom: 1;
            img {
                width: 40px;
                height: 40px;
                border-radius: 40px;
                display: inline-block;
                float: left;
            }
            .happy-item-name {
                display: inline-block;
                width: 100px;
                height: 40px;
                float: left;
                color: #8F8F95;
                font-size: 16px;
                margin-left: 20px;
                line-height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .happy-item-content {
            font-size: 16px;
            color: #464646;
            line-height: 150%;
            padding-bottom: 20px;
            img {
               
                margin-top: 10px;
                width: 100%;
            }
        }

    }
    .tab-swiper {
      background-color: #fff;
    }
    
    
</style>
