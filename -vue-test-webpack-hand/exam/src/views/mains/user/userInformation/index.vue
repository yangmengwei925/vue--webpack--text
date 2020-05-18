<template>
  <div class="UsersShow">  
    <h1>用户展示</h1>
    <div class="show">
      <span v-for="(item,index) in tab" :key="index" :class='{active:defaultIndex===index?true:false}' @click="tabClick(item,index) ">{{item}}</span>
      <div v-if="isShow==='用户数据'?true:false">
        <Show1></Show1>
      </div>
      <div v-if="isShow==='身份数据'?true:false">
        <Show2></Show2>
      </div>
      <div v-if="isShow==='api接口权限'?true:false">
        <Show3></Show3>
      </div>
      <div v-if="isShow==='身份和api接口关系'?true:false">
        <Show4></Show4>
      </div>
      <div v-if="isShow==='视图接口权限'?true:false">
        <Show5></Show5>
      </div>
      <div v-if="isShow==='身份和视图权限关系'?true:false">
        <Show6></Show6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return { 
        tab:['用户数据','身份数据','api接口权限','身份和api接口关系','视图接口权限','身份和视图权限关系'],
        isShow:'用户数据',
        defaultIndex:0
    };
  },
  methods: {
      tabClick(item,index){
          this.isShow=item
          this.defaultIndex=index
      }
  },
  created() { 
      
  }
  
};
</script>

<style>
.UsersShow{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
}
h1 {
  height: 70px;
  line-height: 70px;
  margin-left: 2%;
  font-size: 23px;
  font-weight: 500;
}
.show>span{
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  background: #fff;

}
.show{
  margin-left: 20px;
}
/* .show div{
  width: 100%;
  height: 100%;
} */
.active{
  color: blue;
  border: 1px solid blue !important;
}
</style>