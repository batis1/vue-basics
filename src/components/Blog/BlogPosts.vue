<template>
  <div class="post-box">
    <h3 class="post-title"> Blog Post Title</h3>
    <span class="post-view">{{views}}</span>
    <span class="post-date">{{date}}</span>
    <p class="post-content"> {{content}}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{author}}</span>
      </div>
      <div class="col-sm-6">
        <span class="post-category">{{category}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "BlogPost",
  //   data: function () {
  //     return {};
  //   },
};
</script>
<style scoped>
.post-box {
  padding: 10px;
  background-color: rgb(254, 255, 255);
  box-shadow: 0 0 10px #ddd;
  width: 65vh;
  position: relative;
  text-align: left;
  margin-bottom: 1.5rem;
}
.post-view {
  display: flex;
  justify-content: end;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgb(87, 87, 87);
  color: rgb(240, 228, 228);
  border-radius: 4px;
  padding: 1px 5px;
  text-align: center;
  font-weight: bold;
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
  background-color: #85eec4;
  color: #fff;
  border-radius: 6px;
}
.post-category {
  padding: 6px 12px;
  background-color: #f5ba84;
  color: #fff;
  border-radius: 6px;
}
</style>