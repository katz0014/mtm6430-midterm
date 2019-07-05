<template>
  <div class="testimonial">
    <h1>{{ title }}</h1>
    <el-col :span="15">
      <div class="grid-content">
        <div class="test-container">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="test-box"
          >
            <h3>
              Name: {{ testimonial.name }} |
              <br />
              Job Title: {{ testimonial.title }}
            </h3>
            <p>Comment: {{ testimonial.content }}</p>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="15">
      <div class="grid-content"></div>
    </el-col>
    <div>
      <h2>{{ secondtitle }}</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
        class="demo-ruleForm"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Job Title" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="Content" prop="content">
          <el-input v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Submit</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    var count1 = (rule, value, callback) => {
      if (value.split("").length >= 50) {
        callback(new Error("You typed in more than 50 words you knobhead!"));
      } else {
        callback();
      }
    };
    var count2 = (rule, value, callback) => {
      if (value.split("").length >= 120) {
        callback(new Error("You typed more than 20 words dopey!"));
      }
    };
    return {
      testimonials: [],
      ruleForm: {
        name: "",
        title: "",
        content: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "What's your name friend?",
            trigger: "blur"
          },
          {
            max: 30,
            message: "Length cannot be more than 50 characters",
            trigger: "blur"
          }
        ],
        title: [
          {
            required: true,
            message: "Enter your job title now!",
            trigger: "blur"
          },
          {
            min: 3,
            max: 50,
            message:
              "If you don't enter between 3 and 50 characters, this won't work!"
          }
        ],
        content: [
          {
            required: true,
            message: "What's on your mind? You must type a comment",
            trigger: "blur"
          },
          {
            min: 3,
            max: 120,
            message: "Write 3-120 characters you dummy!"
          }
        ]
      },
      title: "User Testimonials",
      secondtitle: "Leave a comment below"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const obj = {
            name: this.ruleForm.name,
            title: this.ruleForm.title,
            content: this.ruleForm.content
          };
          // this.testimonials.push(obj);
          axios
            .post(
              "https://midterm-vue-testimonials.firebaseio.com/data.json",
              obj
            )
            .then(response => {
              axios
                .get(
                  "https://midterm-vue-testimonials.firebaseio.com/data.json"
                )
                .then(response => {
                  if (response.data);
                  this.testimonials = response.data;
                })
                .catch(error => {
                  console.log(
                    "We messed up trying to get your data: " + error.response
                  );
                });
            });
        } else {
          return false;
        }
      });
    }
  },
  created() {
    axios
      .get("https://midterm-vue-testimonials.firebaseio.com/data.json")
      .then(response => {
        if (response.data);
        this.testimonials = response.data;
      })
      .catch(error => {
        console.log("We messed up trying to get your data: " + error.response);
      });
  }
};
</script>
<style>
.testimonial {
  margin: auto;
  display: grid;
}
h1 {
  text-align: left;
  padding-left: 40px;
}
h2 {
  color: rgb(186, 85, 211);
  text-align: left;
  padding-left: 40px;
}
test-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.test-box {
  background-color: lightblue;
  margin: 20px;
  width: 30%;
  padding: 15px;
  border: 1px solid black;
}

.el-col {
  max-width: 800px;
  margin: 0 auto;
}
</style>
