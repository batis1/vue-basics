<template>
  <div class="post-create">
    <h4>{{pageName}}</h4>
    <!-- <input
      type="number"
      v-model.number="incrementBy"
    > -->
    <!-- <button @click="incrementCount">Increment</button> -->
    <!-- <p>{{count}}</p> -->
    <div class="container">
      <h1 class="create-form-title">Create an Post</h1>
      <label>Category</label>

      <form @submit.prevent="createPost">

        <select v-model="post.category">
          <option
            v-for="cat in categories"
            :key="cat"
          >{{cat}}</option>
        </select>
        <el-input
          class="input-form"
          placeholder="Please input post title"
          v-model="post.title"
        ></el-input>
        <el-input
          class="input-form"
          placeholder="Please input post content"
          v-model="post.content"
        ></el-input>
        <el-input
          class="input-form"
          placeholder="Please input your name"
          v-model="post.author"
        ></el-input>
        <button
          type="submit"
          value=submit
          class="button"
        >Create</button>
      </form>
    </div>
  </div>
</template>
<script>
// import DatePicker from "vuejs-datepicker";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "PostCreatePost",
  data: function () {
    const times = [];
    for (let i = 0; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      //   sizeForm: {
      //     name: "",
      //     region: "",
      //     date1: "",
      //     delivery: false,
      //     type: [],
      //     resource: "",
      //     desc: "",
      //   },
      pageName: "CREATE POST PAGE",
      pageDesc: "This is a 博客 page",
      incrementBy: 1,
      times,
      categories: this.$store.state.categories,
      post: this.createFreshPostObject(),
      //   count: this.$store.state.count,
    };
  },
  methods: {
    // incrementCount() {
    //   this.$store.dispatch("updateCount", this.incrementBy);
    // },
    createPost() {
      this.$store
        .dispatch("createPost", this.post)
        .then(() => {
          this.$router.push({
            name: "blogShow",
            params: { id: this.post.id },
          });
          this.post = this.createFreshPostObject();
        })
        .catch(() => {
          console.log("There was a problem creating your post");
        });
    },
    createFreshPostObject() {
      const user = this.$store.state.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        user: user,
        category: "",
        author: "",
        title: "",
        content: "",
        date: "",
        time: "",
      };
    },
  },
};
</script>
<style scoped>
.form-center {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 2.3rem; */
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 23rem;
  padding: 2rem;
}
/* .form-content {
} */
.input-form {
  margin-bottom: 1rem;
  margin-top: 1rem;
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
.create-titles {
}
.create-form-title {
  margin-bottom: 2rem;
}
</style>