<template>
  <div>
    <div class="post-header">
      <el-button
        @click="updatePost"
        class="el-button-color"
        type="primary"
      >UPDATE A POST</el-button>
      <!-- <span class="eyebrow">@{{ post.time }} on {{ post.date }}</span> -->
      <h1 class="title">{{ post.title }}</h1>
      <h5>authored by {{ post.author }}</h5>
      <h5>Category: {{ post.category }}</h5>
      <p>{{ post.content }}</p>
      <el-button
        @click="deletePost"
        class="post-view"
        type="danger"
      >Remove</el-button>

    </div>

    <!-- <h2>Post details</h2> -->

    <!-- <h2>Attendees
      <span class="badge -fill-gradient">{{ post.attendees ? post.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      > 
        <b>{{ attendee.name }}</b>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PostViewShow",
  props: ["id"],
  created() {
    this.$store.dispatch("fetchPost", this.id);
  },
  computed: mapState(["post"]),
  methods: {
    // updatePost() {
    //   PostService.update(this.id, this.currentPost)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.message = "The tutorial was updated successfully!";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    deletePost() {
      PostService.deletePost(this.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "posts" });
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
  },
};
</script>
<style scoped>
.post-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
}
.post-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.el-button-color {
  background: #333;
}
</style>
