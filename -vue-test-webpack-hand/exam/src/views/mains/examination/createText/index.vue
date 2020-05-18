<template>
  <div class="createText">
    <h1>创建试卷</h1>
    <div class="createBox">
      <p>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">添加新题</el-button>
        <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose"
        >
          <span>我来啦!</span>
        </el-drawer>
      </p>
      <div class="title">
        <h4>{{tableData.title}}</h4>
        <p>考试时间：1小时30分钟 监考人：杨梦伟 开始考试时间：{{tableData.start_time}}阅卷人：杨梦伟</p>
      </div>

      <div class="textBox" v-for="(item,index) in tableData.questions" :key="index">
        <ul>
          <li>
            <span>{{item.title}}</span>
            <span @click="deleteFn">删除</span>
          </li>
        </ul>
        <div>{{item.questions_stem}}</div>
      </div>
      <p class="button">
        <el-button type="primary"><router-link to="/mains/detail">创建试卷</router-link></el-button>
      </p>
    </div>
  </div>
</template>
<script>
// import { addExam } from "../../../api/index";
// import { deletetest } from "../../../api/index";
// import Api from '../../api'
// import { newTextList } from "../../../api/index";
import Api from '../../../../api'
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      addExam:[],
      drawer: false,
      direction: "rtl",
      query: "w5tcy-g2dts"
    };
  },
  computed: {},
  methods: {
    deleteFn(){
    //  Api.then((res)=>{
    //     console.log(res)
    //   })
    Api.deletetest().then((res=>{
      console.log(res)
    }))
    },
    handleClose(done) {
      done();
    }
  },
  created() {
    var query = this.$route.query;
  //  Api(query).then(res => {
  //     console.log(res.data.data)
  //     this.tableData = res.data.data;
  //   });
  Api.addExam(query).then(res=>{
     this.tableData = res.data;
     console.log(res.data.data)
  })
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
* {
  list-style: decimal;
}
.createText {
  width: 100%;
  height: 100%;
}
h1 {
  height: 70px;
  line-height: 70px;
  margin-left: 2%;
  font-size: 23px;
  font-weight: 500;
}
.createBox {
  width: 94%;
  height: 100%;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  padding: 20px;
}
.title {
  width: 100%;
  height: 70px;
  line-height: 35px;
  text-align: center;
  margin-top: 10px;
  p {
    font-size: 13px;
    color: #666;
  }
}
.textBox {
  width: 90%;
  min-height: 500px;
  margin: 10px auto;
  border: 1px solid #ccc;
  ul {
    li {
      width: 90%;
      margin: 0 auto;
      height: 50px;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  div {
    width: 90%;
    margin: 0 auto;
    line-height: 35px;
  }
}
.button {
  width: 100%;
  margin: 10px;
  text-align: center;
}
</style>