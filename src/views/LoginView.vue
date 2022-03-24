<template>
  <div class="login-container">
    <h4 class="page-title">{{pageName}}</h4>
    <div class="form-container">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="Name"
          prop="age"
          required
        >
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item
          label="Password"
          prop="pass"
          required
        >
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Confirm"
          prop="checkPass"
          required
        >
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >Submit</el-button>
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the username"));
      }
      setTimeout(() => {
        if (Number.isInteger(value)) {
          callback(new Error("Please input string"));
        } else {
          if (value < "vue") {
            callback(new Error("welcome 💚"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
      pageName: "登录页面",
      pageDesc: "This is a LoginPage",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.login-container {
  margin: 5rem 8rem;
}
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-title {
  font-size: 1.2rem;
}
</style>