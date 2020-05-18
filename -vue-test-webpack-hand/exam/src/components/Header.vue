<template>
  <div id="header">
             <div class="header-left"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""></div>
             <div class="header-right"><span class="tou"></span>{{getName}}
              <div class="header-show">
                <div @click="jump">个人中心</div>
                <div class="bottoms" @click="jump">我的班级</div>
                <div @click="jump">设置</div>
                <div @click="exit">退出登陆</div>
             </div>
             </div>
             
  </div>

</template>

<script>
  import store from '../store'
  export default {
    name: "Header",
    computed:{
      getName(){
        return store.getters.name
      }
    },
    methods:{
      jump(){
        window.location.href="http://www.baidu.com"
      },
      exit(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="scss">
  #header {
    height: 70px;
    // background-color: #b0a160;
   
    background: #fff;
    text-align: center;
    line-height: 70px;
    font-size: 35px;
    font-family: 楷体;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    .header-left{
        width: 120px;
        img{
          width: 100%;
        }
    }
    
    .header-right{
        width: 160px;
        // padding: 0 20px;
        position: relative;
        height: 100%;
        cursor: pointer;
        .tou{
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ccc;
          margin-right: 10px;
          vertical-align: middle;
        }
        font-size: 16px;
    }
    .header-right:hover{
      background: #e5e5e5;
      color:#fff;
      .header-show{
      line-height: normal;
      z-index: 98;
      width: 120px;
      position: absolute;
      left: 0;
      bottom: -160px;
      background: #fff;
      display: flex;
      flex-direction: column;
      .bottoms{
        border-bottom:1px solid #ccc;
      }
      div{
        width: 100%;
        color:#000;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
         }
      }
    }
  }
</style>