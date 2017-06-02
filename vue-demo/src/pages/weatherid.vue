<template>
	<div class="page-about page">
		<page-header :pageType="pageType" />
			<div class="pics">
				<img src="../assets/images/35.png" alt="">
               <!--  <img :src ="item.img" alt="" class="pic"></dt> -->
			</div>
	    	<div class="con">
	    		<p>
                   {{$route.params.id}}
	    		</p>
	    	</div>
	</div>
</template>
<script>
	import pageHeader from '../components/Header'
  import {PAGE_TYPE} from '../common/constant/constant'
   
    export default {
    	name: 'weatherid',
    	data (){
            return {
                pageType:  PAGE_TYPE.DATIL
                
            }
        },
         components: {
            pageHeader
        },
          created (){
            //console.log($route.params.content)
          }
     }

     
</script>
<style lang="scss">
@import "../assets/scss/min.scss";
.page-about {
        padding-top: 44px;
        overflow: hidden;
    }
    .pics{
    	img{
    		width: 100%;
    	}
    }	
.con{
	padding: 15px 15px;
	p{
		line-height: 27px;
		text-indent: 2px;
		font-size: 16px;
		color: #464646;
	}
}

</style>