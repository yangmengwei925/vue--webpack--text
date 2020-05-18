<template>
  <div id="slideBar">
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu :index="(index+1)+''" v-for="(item,index) in asideData" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.type}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="(index+1)+'-'+(ind+1)" v-for="(ite,ind) in item.children" :key="ind"><router-link :to="'/mains/'+ite.path" tag="li">{{ite.title}}</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
  </div>
</template>

<script>
  import {getAsData} from '../router/routerConfig'
  export default {
    name: "SlideBar",
    computed:{
      asideData(){
        return getAsData()
      }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="scss">
   #slideBar {
     width: 100%;
     height: 92.5%;
     background: rgb(84, 92, 100);

   }
</style>