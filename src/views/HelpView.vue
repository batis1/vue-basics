<template>
  <div class="Help">
    <h1>{{pageName}}</h1>
    <p>{{pageDesc}}</p>

  </div>
</template>

<script>
export default {
  name: "HelpView",
  data: function () {
    return {
      pageName: "Help",
      pageDesc: "This is Help page",
    };
  },
};
</script>