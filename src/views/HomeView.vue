<template>
  <div class="home">
    <div class="table-header-wrapper">
      <span class="table-header-title">全量同步任务日志：mysql-bin.003513位点：3804119</span>
      <div class="button-wrapper">
        <el-button type="primary">刷新</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = true"
        >创建任务</el-button>
      </div>
    </div>
    <div class="table-wrapper">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          fixed
          prop="date"
          label="Date"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="State"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="City"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="Operations"
          width="150"
        >
          <template>
            <el-button
              @click="handleClick"
              type="text"
              size="small"
            >查看日志</el-button>
            <el-button
              type="text"
              size="small"
            >启动</el-button>
            <el-button
              class="delete-button"
              type="text"
              color="red"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog/Dialog.vue";
export default {
  name: "HomeView",
  components: {
    Dialog,
  },
  methods: {
    handleClick() {
      console.log("click");
    },
  },
  data() {
    return {
      dialogFormVisible: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
      ],
    };
  },
};
</script>
<style scoped>
.home {
  flex-wrap: nowrap;
}
.delete-button {
  color: red;
}
.table-wrapper {
  display: flex;
  flex-direction: row;
  margin: 2rem 2rem;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items: stretch;
}
.table-header-wrapper {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin: 1rem 2rem;
  align-items: center;
}
.table-header-title {
  background-color: rgb(250, 250, 250);
  border-left: 5.5px solid rgb(71, 71, 248);
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 0.25rem;
}
</style>
