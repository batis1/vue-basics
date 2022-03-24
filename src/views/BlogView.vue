<template>
  <div class="Blog">
    <h1>{{pageName}}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <el-form
              ref="form"
              :model="sizeForm"
              label-width="120px"
              size="mini"
            >
              <el-form-item label="post title">
                <el-input v-model="sizeForm.name"></el-input>
              </el-form-item>
              <el-form-item label="post content">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Please input"
                  v-model="sizeForm.name"
                >
                </el-input>
              </el-form-item>
              <el-form-item label="date">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="Pick a date"
                    v-model="sizeForm.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="views">
                <el-input v-model="sizeForm.name"></el-input>
              </el-form-item>
              <el-form-item label="Author">
                <el-input v-model="sizeForm.name"></el-input>
              </el-form-item>
              <el-form-item label="category">
                <el-select
                  v-model="sizeForm.region"
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

              <el-form-item size="large">
                <el-button
                  type="primary"
                  @click="onSubmit"
                >Create</el-button>
                <el-button>Cancel</el-button>
              </el-form-item>
            </el-form>

            <!-- <BlogSidebar /> -->
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/blog_posts.json";

export default {
  name: "BlogView",
  data: function () {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      pageName: "博客",
      pageDesc: "This is a 博客 page",
      posts: JsonPosts,
    };
  },
  components: {
    BlogPosts,
    BlogSidebar,
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.row {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.col-md-4 {
  margin: 20px;
  display: flex;
}
</style>