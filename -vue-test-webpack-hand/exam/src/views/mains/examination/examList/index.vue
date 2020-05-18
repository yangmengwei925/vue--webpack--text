<template>
  <div class="textList">
    <h1>试卷列表</h1>
    <div class="textList_box">
      <div class="search">
        <div>
          <p>考试类型：</p>
          <p>
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in examtype"
                :key="item.exam_exam_id"
                :label="item.exam_name"
                :value="item.exam_exam_id"
              ></el-option>
            </el-select>
          </p>
        </div>
        <div>
          <p>课程:</p>
          <p>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="(item,index) in subjects"
                :key="index"
                :label="item.subject_text"
                :value="index"
              ></el-option>
            </el-select>
          </p>
        </div>
        <el-button type="primary">查询</el-button>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="list">
        <div class="boxL">
          <div class="box">
            <p>试卷列表</p>
            <p>
              <span>全部</span>
              <span>进行中</span>
              <span>已结束</span>
            </p>
          </div>
        </div>
        <div class="shijuan">
          <!-- 试卷信息 -->
          <el-table :data="tableData" style="width: 100%;font-size:13px;color:#666">
            <el-table-column label="试卷信息">
              <template slot-scope="scope" width="200">
                <p style="margin-left: 10px">{{ scope.row.title }}</p>
                <p>
                  考试时间：
                  <span>11</span>
                </p>
              </template>
            </el-table-column>
            <!-- 考试班级 -->
            <el-table-column label="班级">
              <template slot-scope="scope" width="200">
                <p>考试班级</p>
                <p style="margin-left: 10px">22{{ scope.row.grade_name.join(',') }}</p>
              </template>
            </el-table-column>
            <!-- 创建人 -->
            <el-table-column label="创建人">
              <template slot-scope="scope">
                <span style="margin-left: 10px">33{{ scope.row.user_name }}</span>
              </template>
            </el-table-column>
            <!-- 开始时间 -->
            <el-table-column label="开始时间">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                  44{{ new Date(+scope.row.start_time).getFullYear() }}-{{ new Date(+scope.row.start_time).getMonth() }}-{{ new Date(+scope.row.start_time).getDay() }}
                  55{{ new Date(+scope.row.start_time).getHours() }}:{{ new Date(+scope.row.start_time).getMinutes() }}:{{ new Date(+scope.row.start_time).getSeconds() }}
                </span>
              </template>
              <!-- 结束时间 -->
            </el-table-column>
            <el-table-column label="结束时间">
              <template slot-scope="scope">
                <span style="margin-left: 10px">
                  66{{ new Date(+scope.row.end_time).getFullYear() }}-{{ new Date(+scope.row.end_time).getMonth() }}-{{ new Date(+scope.row.end_time).getDay() }}
                  77{{ new Date(+scope.row.end_time).getHours() }}:{{ new Date(+scope.row.end_time).getMinutes() }}:{{ new Date(+scope.row.end_time).getSeconds() }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <!-- 详情页面 -->
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">88详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { examType } from "../../api/index";
// import { subject } from "../../api/index";
// import { examList } from "../../api/index";
import Api from '../../../../api'
export default {
  props: {},
  components: {},
  data() {
    return {
      input: "",
      value1: "",
      value2: "",
      examtype: "",//获取考试类型的数据
      subjects: "",//获取课程的数据
      tableData: []
    };
  },
  computed: {},
  methods: {
    // 详情页
    handleEdit(index,row) {
      this.$router.push({
        path:'/mains/detail',
        query:{
          id:row.exam_exam_id
        }
      })
    }
  },
  created() {
    //获取考试类型的数据
   Api.examType().then(res => {
      // this.examtype = res.data.data;
      this.examtype =res.data
      console.log(res)
      console.log(res.data)
      console.log( this.examtype)
    });
  //   //获取课程的数据
  Api.subject().then(res => {
      // this.subjects = res.data.data;
      this.subjects=res.data;
      console.log(res.data)
    });
  //   // 考试信息
  //   Api.then(res => {
  //     this.tableData = res.data.exam;
  //   });
   Api.examList().then(res=>{
     this.tableData=res.data;
     console.log(res.data)
   })
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.textList {
  width: 100%;
  height: 100%;
}
.textList_box {
  width: 96%;
  height: 100%;
  margin: 0 auto;
}
h1 {
  height: 70px;
  line-height: 70px;
  margin-left: 2%;
  font-size: 23px;
  font-weight: 500;
}
.search {
  width: 100%;
  height: 120px;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.list {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 0;
}
.boxL {
  width: 100%;
}
.box {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p:nth-child(2) {
    span {
      border: 1px solid #ccc;
      padding: 8px;
      color: blue;
    }
  }
}
.shijuan {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 10px;
}
</style>