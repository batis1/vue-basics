<template>
  <div class="Dialog">

    <el-dialog
      title="Shipping address"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="120px"
      >
        <el-form-item label="Activity name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select
            v-model="form.region"
            placeholder="please select your zone"
          >
            <el-option
              label="Zone one"
              value="shanghai"
            ></el-option>
            <el-option
              label="Zone two"
              value="beijing"
            ></el-option>
          </el-select>
          <el-select
            v-model="form.region"
            placeholder="please select your zone"
          >
            <el-option
              label="Zone one"
              value="shanghai"
            ></el-option>
            <el-option
              label="Zone two"
              value="beijing"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col
            class="line"
            :span="2"
          >-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="Pick a time"
              v-model="form.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor"></el-radio>
            <el-radio label="Venue"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input
            type="textarea"
            v-model="form.desc"
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    dialogFormVisible: Boolean,
  },
  data: function () {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
};
</script>