<template>
  <div class="addText_box">
    <h1>添加考试</h1>
    <div class="addText">
      <div class="from">
        <div>
          <p>试卷名称：</p>
          <p>
            <el-input v-model="title" placeholder="请输入标题名称"></el-input>
          </p>
        </div>
        <div>
          <p>考试类型：</p>
          <p>
            <el-select v-model="exam_text" placeholder="请选择">
              <el-option
                v-for="(item) in examtype"
                :key="item.exam_id"
                :label="item.exam_name"
                :value="item.exam_id"
              ></el-option>
            </el-select>
          </p>
        </div>
        <div>
          <p>选择课程</p>
          <p>
            <el-select v-model="subject_name" placeholder="请选择">
              <el-option
                v-for="(item) in subjects"
                :key="item.subject_id"
                :label="item.subject_text"
                :value="item.subject_id"
              ></el-option>
            </el-select>
          </p>
        </div>
        <div>
          <p>设置题量：</p>
          <p>
            <el-input-number
              v-model="num"
              controls-position="right"
              @change="handleChange"
              :min="3"
              :max="10"
            ></el-input-number>
          </p>
        </div>
        <div>
          <p>考试时间：</p>
          <div class="time_box">
            <p class="block">
              <el-date-picker
                v-model="date1"
                type="datetime"
                placeholder="选择日期时间"
                :picker-options="pickerOptions0"
              ></el-date-picker>
            </p>
            <p>----</p>
            <p class="block">
              <el-date-picker
                v-model="date2"
                type="datetime"
                placeholder="选择日期时间"
                :picker-options="pickerOptions1"
              ></el-date-picker>
            </p>
          </div>
        </div>
        <div>
          <el-button type="primary" @click="createText">创建试卷</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { examType } from "../../../api/index";
// import { subject } from "../../../api/index";
// import { addExam } from "../../../api/index";
import Api from '../../../../api'
export default {
  props: {},
  components: {},
  data() {
    return {
      title: "",
      exam_text: "",
      subject_name: "",
      examtype: "",
      subjects: "",
      num: "",
      pickerOptions0: {
        
      },
      pickerOptions1: {
        disabledDate: time => {
          if (this.date1 !== "") {
            return time.getTime() < this.date1;
          } 
        }
      },
      date1: "",
      date2: ""
    };
  },
  computed: {},
  // 设置题量
  methods: {
    handleChange(value) {
      console.log(value);
    },
    createText() {
      this.$router.push({
        path: "/mains/createText",
        query: {
          subject_id: "1psw2b-cy7o07",//课程类型
          exam_id: this.exam_text,//考试类型
          title: this.title,//标题名称
          number: this.num,//设置题量
          start_time: new Date(this.date1).getTime(),//开始时间
          end_time: new Date(this.date2).getTime()//结束时间
        }
      });
    }
  },
  created() {
    //选择试卷类型
    Api.examType().then(res => {
      // this.examtype = res.data.data;
      this.examtype =res.data
      console.log(res)
      console.log(res.data)
      console.log( this.examtype)
    });
  //   //选择课程
   Api.subject().then(res => {
      // this.subjects = res.data.data;
      this.subjects=res.data;
      console.log(res.data)
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.addText_box {
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
.addText {
  width: 95%;
  margin: 0 auto;
  height: 100%;
  background: #fff;
  border-radius: 15px;
}
.from {
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  div {
    margin: 15px 0;
  }
}
.time_box {
  min-width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>