<template>
  <div class="Blog">
    <h1>{{pageName}}</h1>
    <div class="container">
      <div class="action-container">
        <router-link
          to="/posts/create"
          tag="div"
        >
          <button
            type="primary"
            class="button"
          >Add A Post</button>
        </router-link>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPostCard
              v-for="post in posts"
              :key="post.id"
              :post="post"
            />
            <template v-if="page !=1">
              <router-link
                :to="{name:'posts', query: {page: page-1}}"
                rel="prev"
              > Prev Page</router-link>
            </template>
            <router-link
              :to="{name:'posts', query: {page: page-1}}"
              rel="prev"
            > Prev Page</router-link> |
            <router-link
              :to="{name:'posts', query: {page: page+1}}"
              rel="next"
            > Next Page</router-link> |
          </div>
        </div>
        <div class="
              col-md-4">
          <div class="sidebar">
            <!-- <BlogSidebar /> -->
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import BlogPostCard from "@/components/Blog/BlogPostCard.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import { mapState } from "vuex";
// import JsonPosts from "../json/blog_posts.json";

export default {
  name: "BlogView",
  data: function () {
    return {
      pageName: "博客",
      pageDesc: "This is a 博客 page",
      //   posts: JsonPosts,
    };
  },
  components: {
    BlogPostCard,
    BlogSidebar,
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  created() {
    this.$store.dispatch("fetchPosts", { perPage: 3, page: this.page });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["posts"]),
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
.el-button-color {
  background-color: #333;
  color: #fff;
  margin-right: 1rem;
}
.create-button:hover {
  color: grey;
}
.action-container {
  display: flex;
  justify-content: center;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* .button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} */
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}
.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button + .button {
  margin-left: 1em;
}
.button.-fill-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
}
.button.-fill-gray {
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.button.-size-small {
  height: 32px;
}
.button.-icon-right {
  text-align: left;
  padding: 0 20px;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  text-align: right;
  padding: 0 20px;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}
</style>