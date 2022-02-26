<template>
  <div class="nav-wrapper">
    <div class="logo">pawa<span class="bold">Task</span></div>
    <div class="btn">Add a new Task</div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({

  props: {
    msg: String,
  },
})
export default class Header extends Vue {
}
</script>
<style scoped  lang="scss">

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  border-bottom: 2px #000;
 }

 .btn {
    
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
 }

 .logo {
   display: inline-block;
 }

</style>
