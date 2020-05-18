<template>
  <div id="main">
    <Header>

    </Header>
  
    <SlideBar></SlideBar>
    
    <div id="content">
     <Context></Context>
    </div>
  </div>
</template>

<script>
  // import {getAsData} from '../../router/routerConfig'
  import Header from '../../components/Header';
  import SlideBar from '../../components/SlideBar';
  export default {
    name: "Main-index",
    data(){
      return{
        asideData:[]
      }
    },
    components: {
      Header, SlideBar
    },
    created(){
      // this.asideData=getAsData()
      // console.log(this.$route.params.ruleForm)
      // console.log(this.asideData);
      
    }
    // computed:{
    //   asideData(){
    //     console.log(getAsData());
    //     return getAsData()
    //   }
    // },
  }
</script>

<style scoped>
  #main {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
  #content {
    position: absolute;
    top: 70px;
    left: 200px;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    /*overflow-y: auto;*/
  }
</style>