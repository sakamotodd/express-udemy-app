<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="greeting">あいさつ</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {},
  methods: {
    greeting: function () {
      this.axios
        .get("/api/hello")
        .then((res) => alert(res.data))
        .catch((e) => alert(e));
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
