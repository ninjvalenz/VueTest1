<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <p>
    Empty content
    </p>
   
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.index {
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
