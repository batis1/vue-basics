<template>
  <div class="post-box">
    <router-link
      class="post-link"
      :to="{ name: 'blogShow', params: { id: post.id } }"
    >
      <!-- <div class="post-card -shadow"> -->
      <h3 class="post-title">{{post.title}}</h3>
      <span class="post-view">10</span>

      <span class="post-date">@{{ post.time }} on {{ post.date }}</span>
      <p class="post-content"> {{ post.content | shorten(30, '...')}}</p>
      <div class="row">
        <div class="col-sm-6">
          <span class="post-author">{{post.author}}</span>
        </div>

        <div class="col-sm-6">
          <span class="post-category">{{post.category | uppercase}}</span>
        </div>
      </div>
      <!-- </div> -->
    </router-link>
  </div>
</template>

<script>
export default {
  //   props: ["views", "title", "date", "content", "author", "category"],
  props: {
    post: Object,
  },
  name: "BlogPostCard",
  //   data: function () {
  //     return {};
  //   },
  //   filters: {
  //     uppercase: function (v) {
  //       return v.toUpperCase;
  //     },
  //   },
};
</script>
<style scoped>
.post-box {
  background-color: rgb(254, 255, 255);
  box-shadow: 0 0 10px #ddd;
  width: 65vh;
  position: relative;
  text-align: left;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.post-view {
  display: flex;
  justify-content: end;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgb(236, 19, 19);
  color: rgb(240, 228, 228);
  border-radius: 4px;
  padding: 1px 5px;
  text-align: center;
  font-weight: bold;
}
.post-view:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.post-title {
  font-weight: bold;
  color: #777;
}
.post-date {
  display: block;
  padding: 0 0 3px;
  color: #888;
  font-size: 14px;
}
.row {
  display: flex;
  justify-content: space-between;
}
.post-content {
  line-height: 1.5rem;
}
.post-author {
  padding: 6px 12px;
  background-color: #333;
  color: #fff;
  border-radius: 6px;
}
.post-category {
  padding: 6px 12px;
  background-color: #333;
  color: #fff;
  border-radius: 6px;
}
.post-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
/* .post-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.post-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.post-card > .title {
  margin: 0;
} */
</style>