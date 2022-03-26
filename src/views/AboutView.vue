<template>
  <div class="about">
    <h1>{{pageName}}</h1>
    <p v-bold>{{pageDesc}}</p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data: function () {
    return {
      pageName: "About us",
      pageDesc: "This is About us page",
    };
  },
};
</script>
